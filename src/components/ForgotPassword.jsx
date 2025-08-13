import { useEffect, useState } from "react";
import EmailIcon from "../assets/img/email.svg";
import EyeIcon from "../assets/img/eye.svg";
import EyeOffIcon from "../assets/img/eye-off.svg";
import LockIcon from "../assets/img/lock.svg";
import "../style/forgot.css";

export default function ForgotPassword() {
        const [showPass, setShowPass] = useState(false);
        const [showConfirm, setShowConfirm] = useState(false);
        const [method, setMethod] = useState("gmail"); // 'gmail' | 'sms'
        const [otp, setOtp] = useState("");
        const [timer, setTimer] = useState(0); // đếm lùi gửi lại OTP

        useEffect(() => {
                if (!timer) return;
                const id = setInterval(() => setTimer((t) => Math.max(0, t - 1)), 1000);
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
                                                <span className="highlight-orange">Trao</span> trọn tri thức
                                                <br />
                                                <span className="second-line">
                                                        <span className="highlight-orange">Dẫn</span> lối tương lai
                                                </span>
                                        </p>
                                        <img alt="Học sinh" src="/img/Group 1.png" />
                                </div>

                                {/* RIGHT */}
                                <div className="login-right">
                                        <h3>Quên mật khẩu</h3>

                                        <form className="login-form" onSubmit={submit}>
                                                {/* Phone/Email */}
                                                <label className="input-group">
                                                        <img alt="" className="input-icon" src={EmailIcon} />
                                                        <input placeholder="Số điện thoại/Gmail" required type="text" />
                                                </label>

                                                {/* New password */}
                                                <label className="input-group">
                                                        <img alt="" className="input-icon" src={LockIcon} />
                                                        <input
                                                                placeholder="Mật khẩu"
                                                                required
                                                                type={showPass ? "text" : "password"}
                                                        />
                                                        <img
                                                                alt="toggle"
                                                                className="toggle-eye"
                                                                onClick={() => setShowPass((v) => !v)}
                                                                src={showPass ? EyeOffIcon : EyeIcon}
                                                        />
                                                </label>

                                                {/* Confirm */}
                                                <label className="input-group">
                                                        <img alt="" className="input-icon" src={LockIcon} />
                                                        <input
                                                                placeholder="Xác nhận mật khẩu"
                                                                required
                                                                type={showConfirm ? "text" : "password"}
                                                        />
                                                        <img
                                                                alt="toggle"
                                                                className="toggle-eye"
                                                                onClick={() => setShowConfirm((v) => !v)}
                                                                src={showConfirm ? EyeOffIcon : EyeIcon}
                                                        />
                                                </label>

                                                {/* OTP row */}
                                                <div className="otp-row">
                                                        <label className="input-group">
                                                                <img alt="" className="input-icon" src={LockIcon} />
                                                                <input
                                                                        inputMode="numeric"
                                                                        onChange={(e) => setOtp(e.target.value)}
                                                                        placeholder="Nhập mã OTP"
                                                                        required
                                                                        type="text"
                                                                        value={otp}
                                                                />
                                                        </label>

                                                        <div className="otp-controls">
                                                                <label className="radio">
                                                                        <input
                                                                                checked={method === "gmail"}
                                                                                name="method"
                                                                                onChange={() => setMethod("gmail")}
                                                                                type="radio"
                                                                                value="gmail"
                                                                        />{" "}
                                                                        Gmail
                                                                </label>
                                                                <label className="radio">
                                                                        <input
                                                                                checked={method === "sms"}
                                                                                name="method"
                                                                                onChange={() => setMethod("sms")}
                                                                                type="radio"
                                                                                value="sms"
                                                                        />{" "}
                                                                        SMS
                                                                </label>

                                                                <button
                                                                        className="otp-btn"
                                                                        disabled={timer > 0}
                                                                        onClick={sendOTP}
                                                                        type="button"
                                                                >
                                                                        {timer > 0 ? `Gửi lại (${timer}s)` : "GỬI OTP"}
                                                                </button>
                                                        </div>
                                                </div>

                                                <button className="submit-btn" type="submit">
                                                        Xác nhận thay đổi mật khẩu
                                                </button>
                                        </form>
                                </div>
                        </div>
                </div>
        );
}
