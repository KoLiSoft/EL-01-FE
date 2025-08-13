import { EnvelopeIcon, EyeIcon, EyeSlashIcon, PasswordIcon, UserIcon } from "@phosphor-icons/react/dist/ssr";
import { useEffect, useRef, useState } from "react";
import { PhoneInput } from "react-international-phone";
import { z } from "zod";
import googleIcon from "../assets/img/gg.svg";
import "react-international-phone/style.css";

import "../style/register.css";
import { register } from "../hooks/auth.hooks";
import { logger } from "../lib/default-logger";

const registerSchema = z
        .object({
                agreeToTerms: z.boolean().refine((val) => val === true, {
                        message: "Bạn phải đồng ý với thỏa thuận sử dụng",
                }),
                confirmPassword: z.string().min(1, "Xác nhận mật khẩu không được để trống"),
                email: z.string().min(1, "Email không được để trống").email("Email không hợp lệ"),
                name: z
                        .string()
                        .min(1, "Họ và tên không được để trống")
                        .min(2, "Họ và tên phải có ít nhất 2 ký tự")
                        .trim(),
                password: z.string().min(1, "Mật khẩu không được để trống").min(6, "Mật khẩu phải có ít nhất 6 ký tự"),
                phone: z.string().min(1, "Số điện thoại không được để trống").min(10, "Số điện thoại không hợp lệ"),
                typeAccount: z.enum(["STUDENT", "TEACHER"]),
        })
        .refine((data) => data.password === data.confirmPassword, {
                message: "Mật khẩu không khớp",
                path: ["confirmPassword"],
        });

export default function Registerstd({ onLoginClick }) {
        const [formData, setFormData] = useState({
                agreeToTerms: true,
                confirmPassword: "",
                email: "",
                name: "",
                password: "",
                phone: "",
                typeAccount: "STUDENT",
        });

        const [errors, setErrors] = useState({});
        const [showPassword, setShowPassword] = useState(false);
        const [showConfirmPassword, setShowConfirmPassword] = useState(false);
        const [isGoogleReady, setIsGoogleReady] = useState(false);
        const [isSubmitting, setIsSubmitting] = useState(false);
        const [isGoogleLoading, setIsGoogleLoading] = useState(false);
        const codeClientRef = useRef(null);

        const validateForm = () => {
                try {
                        registerSchema.parse(formData);
                        setErrors({});
                        return true;
                } catch (error) {
                        if (error instanceof z.ZodError) {
                                const newErrors = {};
                                error?.errors?.forEach((err) => {
                                        const field = err.path[0];
                                        newErrors[field] = err.message;
                                });
                                setErrors(newErrors);
                        }
                        return false;
                }
        };

        const handleInputChange = (field, value) => {
                setFormData((prev) => ({ ...prev, [field]: value }));

                if (errors[field]) {
                        setErrors((prev) => ({ ...prev, [field]: "" }));
                }
        };

        const handleSubmit = async (e) => {
                e.preventDefault();

                if (!validateForm()) {
                        return;
                }

                setIsSubmitting(true);
                try {
                        const registrationData = {
                                email: formData.email,
                                name: formData.name,
                                password: formData.password,
                                phone: formData.phone,
                                typeAccount: formData.typeAccount,
                        };

                        const response = await register(registrationData);

                        logger.info("Registration successful", { email: formData.email, userId: response.data?.id });

                        setFormData({
                                agreeToTerms: true,
                                confirmPassword: "",
                                email: "",
                                name: "",
                                password: "",
                                phone: "",
                                typeAccount: "STUDENT",
                        });

                        if (onLoginClick) {
                                onLoginClick();
                        }
                } catch (error) {
                        logger.error("Registration failed", {
                                email: formData.email,
                                error: error.message,
                                status: error.response?.status,
                        });

                        if (error.response?.status === 409) {
                                logger.warn("Duplicate registration attempt", {
                                        email: formData.email,
                                        phone: formData.phone,
                                });
                        }
                } finally {
                        setIsSubmitting(false);
                }
        };

        useEffect(() => {
                const s = document.createElement("script");
                s.src = "https://accounts.google.com/gsi/client";
                s.async = true;
                s.onload = () => {
                        codeClientRef.current = window.google.accounts.oauth2.initCodeClient({
                                callback: async ({ code }) => {
                                        setIsGoogleLoading(true);
                                        try {
                                                logger.info("Google OAuth code received", {
                                                        code: code.substring(0, 10) + "...",
                                                });

                                                await new Promise((resolve) => setTimeout(resolve, 1000));

                                                logger.info("Google OAuth registration successful");

                                                if (onLoginClick) {
                                                        onLoginClick();
                                                }
                                        } catch (error) {
                                                logger.error("Google OAuth registration failed", {
                                                        error: error.message,
                                                });
                                        } finally {
                                                setIsGoogleLoading(false);
                                        }
                                },
                                client_id: "762402414334-v8bli07pq1u6287h28691qg3ffbr5ao1.apps.googleusercontent.com",
                                scope: "openid email profile",
                                ux_mode: "popup",
                        });
                        setIsGoogleReady(true);
                };
                document.body.appendChild(s);
                return () => document.body.removeChild(s);
        }, [onLoginClick]);

        const handleGoogleLogin = () => {
                if (codeClientRef.current && !isGoogleLoading) {
                        codeClientRef.current.requestCode();
                }
        };

        return (
                <div className="register-container">
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

                        {/* Right side */}
                        <div className="register-right">
                                <h3>Đăng Ký Cùng EdulinkTutor</h3>

                                <button
                                        className={`google-btn ${isGoogleLoading ? "loading" : ""}`}
                                        disabled={!isGoogleReady || isGoogleLoading}
                                        onClick={handleGoogleLogin}
                                        type="button"
                                >
                                        {isGoogleLoading ? (
                                                <div className="spinner"></div>
                                        ) : (
                                                <img alt="Google" src={googleIcon} />
                                        )}
                                        {isGoogleLoading ? "Đang xử lý..." : "Tiếp tục với tài khoản Google"}
                                </button>

                                <div className="divider">Hoặc</div>

                                <form className="register-form" onSubmit={handleSubmit}>
                                        <div className="input-group">
                                                <UserIcon alt="" className="input-icon" />
                                                <input
                                                        className={errors.name ? "error" : ""}
                                                        onChange={(e) => handleInputChange("name", e.target.value)}
                                                        placeholder="Họ và tên"
                                                        type="text"
                                                        value={formData.name}
                                                />
                                                {errors.name && <span className="error-message">{errors.name}</span>}
                                        </div>

                                        <div className="input-group">
                                                <PhoneInput
                                                        buttonClass="phone-dropdown"
                                                        defaultCountry="vn"
                                                        inputClass={`phone-input ${errors.phone ? "error" : ""}`}
                                                        inputProps={{
                                                                name: "phone",
                                                                required: true,
                                                        }}
                                                        onChange={(phone) => handleInputChange("phone", phone)}
                                                        placeholder="Điền số điện thoại của bạn"
                                                        value={formData.phone}
                                                />
                                                {errors.phone && <span className="error-message">{errors.phone}</span>}
                                        </div>

                                        <div className="input-group">
                                                <EnvelopeIcon alt="" className="input-icon" />
                                                <input
                                                        className={errors.email ? "error" : ""}
                                                        onChange={(e) => handleInputChange("email", e.target.value)}
                                                        placeholder="Email"
                                                        type="email"
                                                        value={formData.email}
                                                />
                                                {errors.email && <span className="error-message">{errors.email}</span>}
                                        </div>

                                        <div className="input-group">
                                                <PasswordIcon alt="" className="input-icon" />
                                                <input
                                                        className={errors.password ? "error" : ""}
                                                        onChange={(e) => handleInputChange("password", e.target.value)}
                                                        placeholder="Mật khẩu"
                                                        type={showPassword ? "text" : "password"}
                                                        value={formData.password}
                                                />
                                                {showPassword ? (
                                                        <EyeIcon
                                                                alt="Toggle password"
                                                                className="toggle-password"
                                                                onClick={() => setShowPassword(!showPassword)}
                                                                size={20}
                                                        />
                                                ) : (
                                                        <EyeSlashIcon
                                                                alt="Toggle password"
                                                                className="toggle-password"
                                                                onClick={() => setShowPassword(!showPassword)}
                                                                size={20}
                                                        />
                                                )}
                                                {errors.password && (
                                                        <span className="error-message">{errors.password}</span>
                                                )}
                                        </div>

                                        <div className="input-group">
                                                <PasswordIcon alt="" className="input-icon" />
                                                <input
                                                        className={errors.confirmPassword ? "error" : ""}
                                                        onChange={(e) =>
                                                                handleInputChange("confirmPassword", e.target.value)
                                                        }
                                                        placeholder="Xác nhận mật khẩu"
                                                        type={showConfirmPassword ? "text" : "password"}
                                                        value={formData.confirmPassword}
                                                />
                                                {showConfirmPassword ? (
                                                        <EyeIcon
                                                                alt="Toggle confirm password"
                                                                className="toggle-password"
                                                                onClick={() =>
                                                                        setShowConfirmPassword(!showConfirmPassword)
                                                                }
                                                                size={20}
                                                        />
                                                ) : (
                                                        <EyeSlashIcon
                                                                alt="Toggle confirm password"
                                                                className="toggle-password"
                                                                onClick={() =>
                                                                        setShowConfirmPassword(!showConfirmPassword)
                                                                }
                                                                size={20}
                                                        />
                                                )}
                                                {errors.confirmPassword && (
                                                        <span className="error-message">{errors.confirmPassword}</span>
                                                )}
                                        </div>

                                        <div className="otp-row">
                                                <label className="checkbox-label">
                                                        <input
                                                                checked={formData.typeAccount === "teacher"}
                                                                name="typeAccount"
                                                                onChange={(e) =>
                                                                        handleInputChange("typeAccount", e.target.value)
                                                                }
                                                                type="radio"
                                                                value="teacher"
                                                        />
                                                        Bạn là Giáo Viên
                                                </label>
                                                <label className="checkbox-label">
                                                        <input
                                                                checked={formData.typeAccount === "STUDENT"}
                                                                name="typeAccount"
                                                                onChange={(e) =>
                                                                        handleInputChange("typeAccount", e.target.value)
                                                                }
                                                                type="radio"
                                                                value="STUDENT"
                                                        />
                                                        Bạn là Học Sinh
                                                </label>
                                        </div>

                                        <label className="checkbox-label">
                                                <input
                                                        checked={formData.agreeToTerms}
                                                        onChange={(e) =>
                                                                handleInputChange("agreeToTerms", e.target.checked)
                                                        }
                                                        type="checkbox"
                                                />
                                                Đồng ý với{" "}
                                                <a href="/terms" rel="noopener noreferrer" target="_blank">
                                                        Thỏa thuận sử dụng
                                                </a>
                                                {errors.agreeToTerms && (
                                                        <span className="error-message">{errors.agreeToTerms}</span>
                                                )}
                                        </label>

                                        <button
                                                className={`submit-btn ${isSubmitting ? "loading" : ""}`}
                                                disabled={isSubmitting}
                                                type="submit"
                                        >
                                                {isSubmitting ? "Đang đăng ký..." : "Đăng ký"}
                                        </button>

                                        <label className="login-link">
                                                Bạn đã có tài khoản?{" "}
                                                <a
                                                        href="/login"
                                                        onClick={(e) => {
                                                                e.preventDefault();
                                                                onLoginClick?.();
                                                        }}
                                                >
                                                        Đăng nhập ngay
                                                </a>
                                        </label>
                                </form>
                        </div>
                </div>
        );
}
