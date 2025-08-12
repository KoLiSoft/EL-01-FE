import { useState } from 'react';
import '../style/navbar.css';
import Registerstd from '../pages/register-std';
import Login from '../pages/login';
import ForgotPassword from '../components/ForgotPassword';

export default function Navbar() {
  const [isOpenStd, setIsOpenStd] = useState(false);
  const [isOpenTeacher, setIsOpenTeacher] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  return (
    <>
      <header className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            <img src="/logo.svg" alt="EdulinkTutor Logo" />
          </div>
          <nav className="navbar-links">
            <a href="/">Trang chủ</a>
            <a href="/about">Giới thiệu</a>
            <a href="/service">Dịch vụ</a>
            <a href="/teacher-team">Đội ngũ giáo viên</a>
            <a href="/course">Gói học</a>
            <a href="#">Blog</a>
            <a href="#">Liên hệ</a>
          </nav>
          <div className="navbar-buttons">
            <button
              onClick={() => setIsOpenStd(true)}
              className="btn-navbar btn-outline"
            >
              Đăng ký làm giáo viên/học sinh
            </button>
            <button
              onClick={() => {
                setIsOpenTeacher(true);
                setIsForgotPassword(false);
              }}
              className="btn-navbar btn-outline"
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
