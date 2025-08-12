import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/navbar.css";
import ForgotPassword from "../components/ForgotPassword";
import Login from "../pages/login";
import Registerstd from "../pages/register-std";

export default function Navbar() {
        const navigate = useNavigate();
        const [isOpenStd, setIsOpenStd] = useState(false);
        const [isOpenTeacher, setIsOpenTeacher] = useState(false);
        const [isForgotPassword, setIsForgotPassword] = useState(false);
        return (
                <>
                        <header className="navbar">
                                <div className="navbar-container">
                                        <div className="navbar-logo">
                                                <img alt="EdulinkTutor Logo" src="/logo.svg" />
                                        </div>
                                        <nav className="navbar-links">
                                                <span onClick={() => navigate("/")}>Trang chủ</span>
                                                <span onClick={() => navigate("/about")}>Giới thiệu</span>
                                                <span onClick={() => navigate("/service")}>Dịch vụ</span>
                                                <span onClick={() => navigate("/teacher-team")}>Đội ngũ giáo viên</span>
                                                <span onClick={() => navigate("/course")}>Gói học</span>
                                                <span>Blog</span>
                                                <span>Liên hệ</span>
                                        </nav>
                                        <div className="navbar-buttons">
                                                <button
                                                        className="btn-navbar btn-outline"
                                                        onClick={() => setIsOpenStd(true)}
                                                >
                                                        Đăng ký làm giáo viên/học sinh
                                                </button>
                                                <button
                                                        className="btn-navbar btn-outline"
                                                        onClick={() => {
                                                                setIsOpenTeacher(true);
                                                                setIsForgotPassword(false);
                                                        }}
                                                >
                                                        Đăng Nhập
                                                </button>
                                        </div>
                                </div>
                        </header>

                        {/* Popup Đăng ký */}
                        {isOpenStd && (
                                <div className="overlay" onClick={() => setIsOpenStd(false)}>
                                        <div className="popup" onClick={(e) => e.stopPropagation()}>
                                                <Registerstd
                                                        onLoginClick={() => {
                                                                setIsOpenStd(false);
                                                                setIsOpenTeacher(true);
                                                                setIsForgotPassword(false);
                                                        }}
                                                />
                                        </div>
                                </div>
                        )}

                        {/* Popup Đăng nhập / Quên mật khẩu */}
                        {isOpenTeacher && (
                                <div className="overlay" onClick={() => setIsOpenTeacher(false)}>
                                        <div className="popup" onClick={(e) => e.stopPropagation()}>
                                                {isForgotPassword ? (
                                                        <ForgotPassword />
                                                ) : (
                                                        <Login
                                                                onForgotPassword={() => setIsForgotPassword(true)}
                                                                onRegisterClick={() => {
                                                                        setIsOpenTeacher(false);
                                                                        setIsOpenStd(true);
                                                                }}
                                                        />
                                                )}
                                        </div>
                                </div>
                        )}
                </>
        );
}
