import { useEffect, useState } from "react";
import { getProfile } from "../hooks/auth.hooks.js";
import "../style/profilestd.css";

export default function ProfileStdInfo() {
        const [profile, setProfile] = useState(null);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);

        useEffect(() => {
                const fetchProfile = async () => {
                        try {
                                setLoading(true);
                                const response = await getProfile();
                                setProfile(response.user);
                        } catch (err) {
                                setError(err.message || "Failed to fetch profile");
                        } finally {
                                setLoading(false);
                        }
                };

                fetchProfile();
        }, []);

        if (loading) {
                return (
                        <div className="prstd__card">
                                <div className="prstd__loading">Loading profile...</div>
                        </div>
                );
        }

        if (error) {
                return (
                        <div className="prstd__card">
                                <div className="prstd__error">Error: {error}</div>
                        </div>
                );
        }

        return (
                <div className="prstd__card">
                        <header className="prstd__welcome">
                                <div className="prstd__welcome-avatar">
                                        <img alt="user" src={profile?.avatar || "https://i.pravatar.cc/100?img=5"} />
                                </div>
                                <div className="prstd__welcome-text">
                                        <h3>Welcome {profile?.name || "User"}!</h3>
                                        <p>Hãy tiếp tục hành trình học tập của bạn nào!</p>
                                </div>
                        </header>

                        <div className="prstd__section-heading">
                                <h4>Thông tin cá nhân</h4>
                                <button className="prstd__link-btn" type="button">
                                        Chỉnh sửa
                                </button>
                        </div>

                        <form className="prstd__grid">
                                <div className="prstd__field">
                                        <label>Họ và tên</label>
                                        <input placeholder="Họ và tên" readOnly value={profile?.name || ""} />
                                </div>
                                <div className="prstd__field">
                                        <label>Giới tính</label>
                                        <input placeholder="Giới tính" readOnly value={profile?.gender || ""} />
                                </div>
                                <div className="prstd__field">
                                        <label>Ngày tháng năm sinh</label>
                                        <input
                                                placeholder="Ngày tháng năm sinh"
                                                readOnly
                                                value={profile?.dateOfBirth || ""}
                                        />
                                </div>

                                <div className="prstd__field prstd__field--flag">
                                        <label>Điện số điện thoại của bạn</label>
                                        <div className="prstd__input-flag">
                                                <span className="prstd__flag">+84</span>
                                                <input
                                                        placeholder="Điện số điện thoại của bạn"
                                                        readOnly
                                                        value={profile?.phone || ""}
                                                />
                                        </div>
                                </div>
                                <div className="prstd__field">
                                        <label>Email của bạn</label>
                                        <input placeholder="Email của bạn" readOnly value={profile?.email || ""} />
                                </div>
                                <div className="prstd__field">
                                        <label>Nơi bạn sinh sống</label>
                                        <input
                                                placeholder="Nơi bạn sinh sống"
                                                readOnly
                                                value={profile?.address || ""}
                                        />
                                </div>

                                <div className="prstd__field">
                                        <label>Trình độ học vấn</label>
                                        <input
                                                placeholder="Trình độ học vấn"
                                                readOnly
                                                value={profile?.educationLevel || ""}
                                        />
                                </div>
                                <div className="prstd__field prstd__field--flag">
                                        <label>Điện số điện thoại của phụ huynh</label>
                                        <div className="prstd__input-flag">
                                                <span className="prstd__flag">+84</span>
                                                <input
                                                        placeholder="Điện số điện thoại của phụ huynh"
                                                        readOnly
                                                        value={profile?.parentPhone || ""}
                                                />
                                        </div>
                                </div>
                                <div className="prstd__field">
                                        <label>Email của phụ huynh</label>
                                        <input
                                                placeholder="Email của phụ huynh"
                                                readOnly
                                                value={profile?.parentEmail || ""}
                                        />
                                </div>
                        </form>
                        <div className="prstd__balance">
                                <span className="prstd__balance-label">Số Dư Hiện Tại Trong Ví:</span>
                                <span className="prstd__balance-value">
                                        {profile?.balance ? `${profile.balance.toLocaleString()} VND` : "0 VND"}
                                </span>
                        </div>
                </div>
        );
}
