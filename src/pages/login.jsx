import { useState, useEffect, useRef } from "react";
import googleIcon from "../assets/img/gg.svg";
import EmailIcon from "../assets/img/email.svg";
import LockIcon from "../assets/img/lock.svg";
import EyeIcon from "../assets/img/eye.svg";
import EyeOffIcon from "../assets/img/eye-off.svg";
import "../style/login.css";

export default function Login({ onForgotPassword, onRegisterClick }) {
        const [showPassword, setShowPassword] = useState(false);
        const [isGoogleReady, setIsGoogleReady] = useState(false);
        const codeClientRef = useRef(null);

        useEffect(() => {
                const script = document.createElement("script");
                script.src = "https://accounts.google.com/gsi/client";
                script.async = true;
                script.onload = () => {
                        if (!window.google) return;

                        // KHÔNG render button của Google; dùng Code Client để giữ CSS nút của bạn
                        codeClientRef.current = window.google.accounts.oauth2.initCodeClient({
                                client_id: "762402414334-v8bli07pq1u6287h28691qg3ffbr5ao1.apps.googleusercontent.com",
                                scope: "openid email profile",
                                ux_mode: "popup",
                                callback: async (res) => {
                                        // Nhận authorization code -> gửi server để exchange token
                                        console.log("Google auth code:", res.code);
                                        // await fetch("/api/auth/google", {
                                        //   method: "POST",
                                        //   headers: { "Content-Type": "application/json" },
                                        //   body: JSON.stringify({ code: res.code }),
                                        // });
                                },
                        });
                        setIsGoogleReady(true);
                };
                document.body.appendChild(script);
                return () => document.body.removeChild(script);
        }, []);

        const handleGoogleLogin = () => {
                if (codeClientRef.current) codeClientRef.current.requestCode();
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
                                        <img src="/img/Group 1.png" alt="Học sinh" />
                                </div>
                                {/* RIGHT */}
                                <div className="login-right">
                                        <h3>Giáo viên đăng nhập</h3>

                                        <button
                                                type="button"
                                                className="google-btn"
                                                onClick={handleGoogleLogin}
                                                disabled={!isGoogleReady}
                                        >
                                                <img src={googleIcon} alt="Google" />
                                                Tiếp tục với tài khoản Google
                                        </button>

                                        <div className="divider">
                                                <span>Hoặc</span>
                                        </div>

                                        <form className="login-form">
                                                <label className="input-group">
                                                        <img className="input-icon" src={EmailIcon} alt="" />
                                                        <input type="email" placeholder="Email ID" />
                                                </label>

                                                <label className="input-group">
                                                        <img className="input-icon" src={LockIcon} alt="" />
                                                        <input
                                                                type={showPassword ? "text" : "password"}
                                                                placeholder="Mật khẩu"
                                                        />
                                                        <img
                                                                className="toggle-eye"
                                                                src={showPassword ? EyeOffIcon : EyeIcon}
                                                                alt="toggle"
                                                                onClick={() => setShowPassword((v) => !v)}
                                                        />
                                                </label>

                                                <label className="agree">
                                                        <input type="checkbox" />
                                                        Đồng ý <a href="#">Thỏa thuận sử dụng</a> bởi Edulinktutor
                                                </label>

                                                <button type="submit" className="submit-btn">
                                                        Đăng nhập
                                                </button>

                                                <div className="muted">
                                                        <a
                                                                href="#"
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
                                                                href="#"
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
