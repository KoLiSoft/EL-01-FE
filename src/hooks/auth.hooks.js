import apiClient from "./api-client.hooks.js";

/**
 * Login API
 * @param {String} email
 * @param {String} password
 * @returns {Promise<AxiosResponse>}
 */
export const login = async (email, password) => {
        const response = await apiClient.post("/users/login", { email, password });
        return response;
};

/**
 * Register API
 * @param {Object} params
 * @param {String} params.fullname
 * @param {String} params.phone
 * @param {String} params.email
 * @param {String} params.password
 * @returns {Promise<AxiosResponse>}
 */
export const register = async (params) => {
        const response = await apiClient.post("/users/register", params);
        return response;
};

/**
 * Get my profile API
 * @returns {Promise<AxiosResponse>}
 */
export const getProfile = async () => {
        const response = await apiClient.get("/users/profile");
        return response;
};

/**
 * Get my wallet API
 * @returns {Promise<AxiosResponse>}
 */
export const getWallet = async () => {
        const response = await apiClient.get("/wallets/me");
        return response;
};
