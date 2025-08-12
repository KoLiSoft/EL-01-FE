import { useState, useEffect } from "react";
import EmailIcon from "../assets/img/email.svg";
import LockIcon from "../assets/img/lock.svg";
import EyeIcon from "../assets/img/eye.svg";
import EyeOffIcon from "../assets/img/eye-off.svg";
import "../style/forgot.css";

export default function ForgotPassword() {
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [method, setMethod] = useState("gmail"); // 'gmail' | 'sms'
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(0); // đếm lùi gửi lại OTP

  useEffect(() => {
    if (!timer) return;
    const id = setInterval(() => setTimer(t => Math.max(0, t - 1)), 1000);
    return () => clearInterval(id);
  }, [timer]);

  const sendOTP = (e) => {
    e.preventDefault();
    if (timer > 0) return;
    // TODO: call API gửi OTP theo `method`
    setTimer(60); // 60s chờ gửi lại
  };

  const submit = (e) => {
    e.preventDefault();
    // TODO: gọi API đổi mật khẩu bằng OTP
  };

  return (
    <div className="login-wrap">
      <div className="login-card">
        {/* LEFT */}
<div className="register-left">
            <p className="hero-slogan">
                <span className="highlight-orange">Trao</span> trọn tri thức<br />
                <span className="second-line">
                    <span className="highlight-orange">Dẫn</span> lối tương lai
                </span>
            </p>
            <img src="/img/Group 1.png" alt="Học sinh" />
        </div>

        {/* RIGHT */}
        <div className="login-right">
          <h3>Quên mật khẩu</h3>

          <form className="login-form" onSubmit={submit}>
            {/* Phone/Email */}
            <label className="input-group">
              <img className="input-icon" src={EmailIcon} alt=""/>
              <input type="text" placeholder="Số điện thoại/Gmail" required />
            </label>

            {/* New password */}
            <label className="input-group">
              <img className="input-icon" src={LockIcon} alt=""/>
              <input
                type={showPass ? "text" : "password"}
                placeholder="Mật khẩu"
                required
              />
              <img
                className="toggle-eye"
                src={showPass ? EyeOffIcon : EyeIcon}
                alt="toggle"
                onClick={() => setShowPass(v => !v)}
              />
            </label>

            {/* Confirm */}
            <label className="input-group">
              <img className="input-icon" src={LockIcon} alt=""/>
              <input
                type={showConfirm ? "text" : "password"}
                placeholder="Xác nhận mật khẩu"
                required
              />
              <img
                className="toggle-eye"
                src={showConfirm ? EyeOffIcon : EyeIcon}
                alt="toggle"
                onClick={() => setShowConfirm(v => !v)}
              />
            </label>

            {/* OTP row */}
            <div className="otp-row">
              <label className="input-group">
                <img className="input-icon" src={LockIcon} alt=""/>
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="Nhập mã OTP"
                  value={otp}
                  onChange={(e)=>setOtp(e.target.value)}
                  required
                />
              </label>

              <div className="otp-controls">
                <label className="radio">
                  <input
                    type="radio"
                    name="method"
                    value="gmail"
                    checked={method==="gmail"}
                    onChange={()=>setMethod("gmail")}
                  /> Gmail
                </label>
                <label className="radio">
                  <input
                    type="radio"
                    name="method"
                    value="sms"
                    checked={method==="sms"}
                    onChange={()=>setMethod("sms")}
                  /> SMS
                </label>

                <button
                  className="otp-btn"
                  onClick={sendOTP}
                  disabled={timer>0}
                  type="button"
                >
                  {timer>0 ? `Gửi lại (${timer}s)` : "GỬI OTP"}
                </button>
              </div>
            </div>

            <button type="submit" className="submit-btn">
              Xác nhận thay đổi mật khẩu
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
