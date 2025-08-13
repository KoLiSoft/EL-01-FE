import { EnvelopeIcon, EyeIcon, EyeSlashIcon, LockIcon } from "@phosphor-icons/react/dist/ssr";
import { useEffect, useRef, useState } from "react";
import googleIcon from "../assets/img/gg.svg";
import { login } from "../hooks/auth.hooks.js";
import "../style/login.css";
import { useNavigate } from "react-router-dom";

export default function Login({ onForgotPassword, onRegisterClick }) {
        const [showPassword, setShowPassword] = useState(false);
        const [isGoogleReady, setIsGoogleReady] = useState(false);
        const [formData, setFormData] = useState({
                email: "",
                password: "",
        });
        const [isLoading, setIsLoading] = useState(false);
        const [error, setError] = useState("");
        const [success, setSuccess] = useState("");
        const codeClientRef = useRef(null);
        const navigate = useNavigate();

        useEffect(() => {
                const script = document.createElement("script");
                script.src = "https://accounts.google.com/gsi/client";
                script.async = true;
                script.onload = () => {
                        if (!window.google) return;

                        codeClientRef.current = window.google.accounts.oauth2.initCodeClient({
                                callback: async () => {
                                        // TODO: Implement Google OAuth login
                                        // await fetch("/api/auth/google", {
                                        //   method: "POST",
                                        //   headers: { "Content-Type": "application/json" },
                                        //   body: JSON.stringify({ code: res.code }),
                                        // });
                                },
                                client_id: "762402414334-v8bli07pq1u6287h28691qg3ffbr5ao1.apps.googleusercontent.com",
                                scope: "openid email profile",
                                ux_mode: "popup",
                        });
                        setIsGoogleReady(true);
                };
                document.body.appendChild(script);
                return () => document.body.removeChild(script);
        }, []);

        const handleInputChange = (e) => {
                const { name, value, type, checked } = e.target;
                setFormData((prev) => ({
                        ...prev,
                        [name]: type === "checkbox" ? checked : value,
                }));
                setError("");
        };

        const handleGoogleLogin = () => {
                if (codeClientRef.current) codeClientRef.current.requestCode();
        };

        const handleSubmit = async (e) => {
                e.preventDefault();

                if (!formData.email || !formData.password) {
                        setError("Vui lòng nhập đầy đủ email và mật khẩu");
                        return;
                }

                setIsLoading(true);
                setError("");
                setSuccess("");

                try {
                        const response = await login(formData.email, formData.password);

                        if (response) {
                                setSuccess("Đăng nhập thành công!");
                                localStorage.setItem("token", response.token);
                                navigate("/profile-std");
                                // hide this page

                                return;
                        }
                } catch (err) {
                        const errorMessage = err.response?.message || "Đăng nhập thất bại. Vui lòng thử lại.";
                        setError(errorMessage);
                } finally {
                        setIsLoading(false);
                }
        };

        return (
                <div className="login-wrap">
                        <div className="login-card">
                                <div className="register-left">
                                        <p className="hero-slogan">
                                                <span className="highlight-orange">Trao</span> trọn tri thức
                                                <br />
                                                <span className="second-line">
                                                        <span className="highlight-orange">Dẫn</span> lối tương lai
                                                </span>
                                        </p>
                                        <img alt="Học sinh" src="/img/Group 1.png" />
                                </div>

                                <div className="login-right">
                                        <h3>Giáo viên đăng nhập</h3>

                                        {error && (
                                                <div
                                                        className="error-message"
                                                        style={{
                                                                color: "red",
                                                                marginBottom: "1rem",
                                                                textAlign: "center",
                                                        }}
                                                >
                                                        {error}
                                                </div>
                                        )}

                                        {success && (
                                                <div
                                                        className="success-message"
                                                        style={{
                                                                color: "green",
                                                                marginBottom: "1rem",
                                                                textAlign: "center",
                                                        }}
                                                >
                                                        {success}
                                                </div>
                                        )}

                                        <button
                                                className="google-btn"
                                                disabled={!isGoogleReady || isLoading}
                                                onClick={handleGoogleLogin}
                                                type="button"
                                        >
                                                <img alt="Google" src={googleIcon} />
                                                Tiếp tục với tài khoản Google
                                        </button>

                                        <div className="divider">
                                                <span>Hoặc</span>
                                        </div>

                                        <form className="login-form" onSubmit={handleSubmit}>
                                                <label className="input-group">
                                                        <EnvelopeIcon alt="" className="input-icon" />
                                                        <input
                                                                disabled={isLoading}
                                                                name="email"
                                                                onChange={handleInputChange}
                                                                placeholder="Email ID"
                                                                type="email"
                                                                value={formData.email}
                                                        />
                                                </label>

                                                <label className="input-group">
                                                        <LockIcon alt="" className="input-icon" />
                                                        <input
                                                                disabled={isLoading}
                                                                name="password"
                                                                onChange={handleInputChange}
                                                                placeholder="Mật khẩu"
                                                                type={showPassword ? "text" : "password"}
                                                                value={formData.password}
                                                        />
                                                        {showPassword ? (
                                                                <EyeIcon
                                                                        alt="toggle"
                                                                        className="toggle-eye"
                                                                        onClick={() => setShowPassword((v) => !v)}
                                                                        size={20}
                                                                        style={{ cursor: "pointer" }}
                                                                />
                                                        ) : (
                                                                <EyeSlashIcon
                                                                        alt="toggle"
                                                                        className="toggle-eye"
                                                                        onClick={() => setShowPassword((v) => !v)}
                                                                        size={20}
                                                                        style={{ cursor: "pointer" }}
                                                                />
                                                        )}
                                                </label>

                                                <button className="submit-btn" disabled={isLoading} type="submit">
                                                        {isLoading ? "Đang đăng nhập..." : "Đăng nhập"}
                                                </button>

                                                <div className="muted">
                                                        <a
                                                                href="/forgot-password"
                                                                onClick={(e) => {
                                                                        e.preventDefault();
                                                                        if (onForgotPassword) onForgotPassword();
                                                                }}
                                                        >
                                                                Quên mật khẩu?
                                                        </a>
                                                </div>

                                                <div className="muted">
                                                        Bạn chưa có tài khoản?{" "}
                                                        <a
                                                                href="register"
                                                                onClick={(e) => {
                                                                        e.preventDefault();
                                                                        if (onRegisterClick) onRegisterClick();
                                                                }}
                                                        >
                                                                Đăng ký ngay
                                                        </a>
                                                </div>
                                        </form>
                                </div>
                        </div>
                </div>
        );
}
