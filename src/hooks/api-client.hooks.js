import axios from "axios";
import { logger } from "../lib/default-logger.js";

/**
 * API Client Hooks
 * @typedef {Object}
 */
const CONFIG = {
        baseURL: process.env.REACT_APP_BACKEND_URL || "http://localhost:8080/api/v1",
        retryAttempts: 3,
        retryDelay: 1000,
        timeout: 10000,
        tokenRefreshThreshold: 5 * 60 * 1000,
};

const apiClient = axios.create({
        baseURL: CONFIG.baseURL,
        headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
        },
        timeout: CONFIG.timeout,
});

const isTokenExpired = (token) => {
        try {
                const payload = JSON.parse(atob(token.split(".")[1]));
                const currentTime = Date.now() / 1000;
                return payload.exp - currentTime < CONFIG.tokenRefreshThreshold / 1000;
        } catch (error) {
                logger.warn("Error parsing token:", error);
                return true;
        }
};

const refreshToken = async () => {
        try {
                const refreshToken = localStorage.getItem("refreshToken");
                if (!refreshToken) {
                        throw new Error("No refresh token available");
                }

                const response = await axios.post(`${CONFIG.baseURL}/auth/refresh`, {
                        refreshToken,
                });

                const { token, refreshToken: newRefreshToken } = response.data;
                localStorage.setItem("token", token);
                localStorage.setItem("refreshToken", newRefreshToken);

                return token;
        } catch (error) {
                logger.error("Token refresh failed:", error);

                localStorage.removeItem("token");
                localStorage.removeItem("refreshToken");
                window.location.href = "/login";
                throw error;
        }
};

const retryRequest = async (error, retryCount = 0) => {
        if (retryCount >= CONFIG.retryAttempts) {
                return Promise.reject(error);
        }

        const delay = CONFIG.retryDelay * Math.pow(2, retryCount);
        await new Promise((resolve) => setTimeout(resolve, delay));

        logger.debug(`Retrying request (${retryCount + 1}/${CONFIG.retryAttempts})`);
        return apiClient.request(error.config);
};

apiClient.interceptors.request.use(
        async (config) => {
                const token = localStorage.getItem("token");

                if (token) {
                        if (isTokenExpired(token)) {
                                try {
                                        const newToken = await refreshToken();
                                        config.headers.Authorization = `Bearer ${newToken}`;
                                } catch (error) {
                                        logger.error("Failed to refresh token:", error);
                                        return Promise.reject(error);
                                }
                        } else {
                                config.headers.Authorization = `Bearer ${token}`;
                        }
                }

                config.metadata = { startTime: new Date() };

                if (process.env.NODE_ENV === "development") {
                        logger.debug(`🚀 API Request: ${config.method?.toUpperCase()} ${config.url}`, {
                                data: config.data,
                                headers: config.headers,
                                params: config.params,
                        });
                }

                return config;
        },
        (error) => {
                logger.error("Request interceptor error:", error);
                return Promise.reject(error);
        }
);

apiClient.interceptors.response.use(
        (response) => {
                const duration = new Date() - response.config.metadata.startTime;

                if (process.env.NODE_ENV === "development") {
                        logger.debug(
                                `✅ API Response: ${response.config.method?.toUpperCase()} ${response.config.url}`,
                                {
                                        data: response.data,
                                        duration: `${duration}ms`,
                                        status: response.status,
                                }
                        );
                }

                return response.data;
        },
        async (error) => {
                const { config, response, message } = error;

                logger.error("❌ API Error:", {
                        data: response?.data,
                        message: message || response?.data?.message || "Unknown error",
                        method: config?.method,
                        status: response?.status,
                        url: config?.url,
                });

                if (response?.status === 401) {
                        try {
                                const newToken = await refreshToken();
                                config.headers.Authorization = `Bearer ${newToken}`;
                                return apiClient.request(config);
                        } catch (refreshError) {
                                logger.error("Token refresh failed in response interceptor:", refreshError);
                                return Promise.reject(error);
                        }
                }

                if (!response && message === "Network Error") {
                        return retryRequest(error);
                }

                if (message === "timeout of 10000ms exceeded") {
                        return retryRequest(error);
                }

                if (response?.status >= 500 && response?.status < 600) {
                        return retryRequest(error);
                }

                return Promise.reject(error);
        }
);

apiClient.setAuthToken = (token, refreshToken) => {
        if (token) {
                localStorage.setItem("token", token);
        }
        if (refreshToken) {
                localStorage.setItem("refreshToken", refreshToken);
        }
};

apiClient.clearAuth = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("refreshToken");
};

apiClient.isAuthenticated = () => {
        const token = localStorage.getItem("token");
        return token && !isTokenExpired(token);
};

export { apiClient as default, CONFIG, isTokenExpired, refreshToken };
