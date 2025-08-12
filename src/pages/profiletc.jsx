import "../style/profiletc.css";

export default function ProfileTc() {
        return (
                <div className="prtc">
                        {/* Sidebar */}
                        <aside className="prtc__sidebar">
                                <div className="prtc__sidebar-avatar">
                                        <img alt="avatar" src="https://i.pravatar.cc/100?img=65" />
                                </div>
                                <nav className="prtc__sidebar-nav">
                                        <a className="prtc__nav-item prtc__nav-item--active" href="#">
                                                Thông tin cá nhân
                                        </a>
                                        <a className="prtc__nav-item" href="#">
                                                Tài liệu
                                        </a>
                                        <a className="prtc__nav-item" href="#">
                                                Cài đặt
                                        </a>
                                        <a className="prtc__nav-item" href="#">
                                                Ví
                                        </a>
                                </nav>
                        </aside>

                        {/* Main content */}
                        <main className="prtc__content">
                                <div className="prtc__card">
                                        {/* Welcome */}
                                        <header className="prtc__welcome">
                                                <div className="prtc__welcome-avatar">
                                                        <img alt="user" src="https://i.pravatar.cc/100?img=5" />
                                                </div>
                                                <div className="prtc__welcome-text">
                                                        <h3>Welcome LinLin!</h3>
                                                        <p>Hãy tiếp tục hành trình học tập của bạn nào!</p>
                                                </div>
                                        </header>

                                        {/* Section header */}
                                        <div className="prtc__section-heading">
                                                <h4>Thông tin cá nhân</h4>
                                                <button className="prtc__link-btn" type="button">
                                                        Chỉnh sửa
                                                </button>
                                        </div>

                                        {/* Form grid */}
                                        <form className="prtc__grid">
                                                <div className="prtc__field">
                                                        <label>Họ và tên</label>
                                                        <input placeholder="Họ và tên" />
                                                </div>
                                                <div className="prtc__field">
                                                        <label>Giới tính</label>
                                                        <input placeholder="Giới tính" />
                                                </div>
                                                <div className="prtc__field">
                                                        <label>Ngày tháng năm sinh</label>
                                                        <input placeholder="Ngày tháng năm sinh" />
                                                </div>

                                                <div className="prtc__field prtc__field--flag">
                                                        <label>Điện số điện thoại của bạn</label>
                                                        <div className="prtc__input-flag">
                                                                <span className="prtc__flag">+84</span>
                                                                <input placeholder="Điện số điện thoại của bạn" />
                                                        </div>
                                                </div>
                                                <div className="prtc__field">
                                                        <label>Email của bạn</label>
                                                        <input placeholder="Email của bạn" />
                                                </div>
                                                <div className="prtc__field">
                                                        <label>Trình độ học vấn</label>
                                                        <input placeholder="Trình độ học vấn" />
                                                </div>

                                                <div className="prtc__field">
                                                        <label>Chuyên ngành dạy học</label>
                                                        <input placeholder="Chuyên ngành dạy học" />
                                                </div>
                                                <div className="prtc__field">
                                                        <label>Chứng chỉ</label>
                                                        <input placeholder="Chứng chỉ" />
                                                </div>
                                                <div className="prtc__field">
                                                        <label>Kỹ năng</label>
                                                        <input placeholder="Kỹ năng" />
                                                </div>

                                                <div
                                                        className="prtc__field prtc__field--textarea"
                                                        style={{ gridColumn: "1 / -1" }}
                                                >
                                                        <label>Kinh nghiệm làm việc</label>
                                                        <textarea
                                                                placeholder="Kinh nghiệm làm việc"
                                                                rows="4"
                                                        ></textarea>
                                                </div>
                                        </form>

                                        {/* Balance */}
                                        <div className="prtc__balance">
                                                <span className="prtc__balance-label">Số Dư Hiện Tại Trong Ví:</span>
                                                <span className="prtc__balance-value">7.000.000 VND</span>
                                        </div>
                                </div>
                        </main>
                </div>
        );
}
