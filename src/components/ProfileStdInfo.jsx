import "../style/profilestd.css";
export default function ProfileStdInfo() {
        return (
                <div className="prstd__card">
                        <header className="prstd__welcome">
                                <div className="prstd__welcome-avatar">
                                        <img src="https://i.pravatar.cc/100?img=5" alt="user" />
                                </div>
                                <div className="prstd__welcome-text">
                                        <h3>Welcome LinLin!</h3>
                                        <p>Hãy tiếp tục hành trình học tập của bạn nào!</p>
                                </div>
                        </header>

                        <div className="prstd__section-heading">
                                <h4>Thông tin cá nhân</h4>
                                <button className="prstd__link-btn" type="button">
                                        Chỉnh sửa
                                </button>
                        </div>

                        {/* nguyên form & balance của bạn */}
                        <form className="prstd__grid">
                                <div className="prstd__field">
                                        <label>Họ và tên</label>
                                        <input placeholder="Họ và tên" />
                                </div>
                                <div className="prstd__field">
                                        <label>Giới tính</label>
                                        <input placeholder="Giới tính" />
                                </div>
                                <div className="prstd__field">
                                        <label>Ngày tháng năm sinh</label>
                                        <input placeholder="Ngày tháng năm sinh" />
                                </div>

                                <div className="prstd__field prstd__field--flag">
                                        <label>Điện số điện thoại của bạn</label>
                                        <div className="prstd__input-flag">
                                                <span className="prstd__flag">+84</span>
                                                <input placeholder="Điện số điện thoại của bạn" />
                                        </div>
                                </div>
                                <div className="prstd__field">
                                        <label>Email của bạn</label>
                                        <input placeholder="Email của bạn" />
                                </div>
                                <div className="prstd__field">
                                        <label>Nơi bạn sinh sống</label>
                                        <input placeholder="Nơi bạn sinh sống" />
                                </div>

                                <div className="prstd__field">
                                        <label>Trình độ học vấn</label>
                                        <input placeholder="Trình độ học vấn" />
                                </div>
                                <div className="prstd__field prstd__field--flag">
                                        <label>Điện số điện thoại của phụ huynh</label>
                                        <div className="prstd__input-flag">
                                                <span className="prstd__flag">+84</span>
                                                <input placeholder="Điện số điện thoại của phụ huynh" />
                                        </div>
                                </div>
                                <div className="prstd__field">
                                        <label>Email của phụ huynh</label>
                                        <input placeholder="Email của phụ huynh" />
                                </div>
                        </form>
                        <div className="prstd__balance">
                                <span className="prstd__balance-label">Số Dư Hiện Tại Trong Ví:</span>
                                <span className="prstd__balance-value">7.000.000 VND</span>
                        </div>
                </div>
        );
}
