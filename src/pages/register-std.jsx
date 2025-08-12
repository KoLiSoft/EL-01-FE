import { useState, useEffect, useRef } from "react";
import UserIcon from "../assets/img/user.svg";
import googleIcon from "../assets/img/gg.svg";
import EmailIcon from "../assets/img/email.svg";
import LockIcon from "../assets/img/lock.svg";
import PhoneInput from "react-phone-input-2";
import EyeIcon from "../assets/img/eye.svg";
import EyeOffIcon from "../assets/img/eye-off.svg";
import "react-phone-input-2/lib/style.css";
import "../style/register.css";

export default function Registerstd({ onLoginClick }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isGoogleReady, setIsGoogleReady] = useState(false);
  const codeClientRef = useRef(null);

  useEffect(() => {
    const s = document.createElement("script");
    s.src = "https://accounts.google.com/gsi/client";
    s.async = true;
    s.onload = () => {
      codeClientRef.current = window.google.accounts.oauth2.initCodeClient({
        client_id: "762402414334-v8bli07pq1u6287h28691qg3ffbr5ao1.apps.googleusercontent.com",
        scope: "openid email profile",
        ux_mode: "popup",
        callback: ({ code }) => {
          console.log("Google code:", code);
          // fetch("/api/auth/google", { method: "POST", body: JSON.stringify({ code }) })
        },
      });
      setIsGoogleReady(true);
    };
    document.body.appendChild(s);
    return () => document.body.removeChild(s);
  }, []);

  const handleGoogleLogin = () => codeClientRef.current?.requestCode();

  return (
    <div className="register-container">
      {/* Trái */}
      <div className="register-left">
        <p className="hero-slogan">
          <span className="highlight-orange">Trao</span> trọn tri thức<br />
          <span className="second-line">
            <span className="highlight-orange">Dẫn</span> lối tương lai
          </span>
        </p>
        <img src="/img/Group 1.png" alt="Học sinh" />
      </div>

      {/* Phải */}
      <div className="register-right">
        <h3>Đăng Ký Cùng EdulinkTutor</h3>
        <button
      type="button"
      className="google-btn"
      onClick={handleGoogleLogin}
      disabled={!isGoogleReady}
    >
      <img src={googleIcon} alt="Google" />
      Tiếp tục với tài khoản Google
    </button>
        <div className="divider">Hoặc</div>
        <form className="register-form">
          <div className="input-group">
            <img src={UserIcon} alt="" className="input-icon" />
            <input type="text" placeholder="Họ và tên" />
          </div>

          <PhoneInput
            country={"vn"}
            placeholder="Điền số điện thoại của bạn"
            inputClass="phone-input"
            buttonClass="phone-dropdown"
          />

          <div className="input-group">
            <img src={EmailIcon} alt="" className="input-icon" />
            <input type="email" placeholder="Email" />
          </div>

          <div className="input-group">
            <img src={LockIcon} alt="" className="input-icon" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Mật khẩu"
            />
            <img
              src={showPassword ? EyeOffIcon : EyeIcon}
              alt="Toggle password"
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>

          <div className="input-group">
            <img src={LockIcon} alt="" className="input-icon" />
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Xác nhận mật khẩu"
            />
            <img
              src={showConfirmPassword ? EyeOffIcon : EyeIcon}
              alt="Toggle confirm password"
              className="toggle-password"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            />
          </div>

          <div className="otp-row">
            <label className="checkbox-label">
              <input type="radio" name="role" /> Bạn là Giáo Viên
            </label>
            <label className="checkbox-label">
              <input type="radio" name="role" /> Bạn là Học Sinh
            </label>
          </div>

          <label className="checkbox-label">
            <input type="checkbox" /> Đồng ý với <a href="#">Thỏa thuận sử dụng</a>
          </label>

          <button type="submit" className="submit-btn">Đăng ký</button>

          <label>
            Bạn đã có tài khoản?{" "}
            <a
              href="#"
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
