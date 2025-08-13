import "../style/footer.css";

function Footer() {
        return (
                <>
                        <footer className="footer">
                                <div className="footer-container">
                                        <div className="footer-logo">
                                                <img alt="Edulinktutor Logo" src="/logo.svg" />
                                        </div>

                                        <div className="footer-columns">
                                                <div className="footer-column">
                                                        <p>Thông tin Edulinktutor</p>
                                                        <ul>
                                                                <li>
                                                                        <a href="/about">Về chúng tôi</a>
                                                                </li>
                                                                <li>
                                                                        <a href="/partners">Đối tác toàn cầu</a>
                                                                </li>
                                                                <li>
                                                                        <a href="/privacy-policy">Chính sách bảo mật</a>
                                                                </li>
                                                        </ul>
                                                </div>
                                                <div className="footer-column">
                                                        <p>Tìm hiểu thêm</p>
                                                        <ul>
                                                                <li>
                                                                        <a href="/phothong">Phổ thông</a>
                                                                </li>
                                                                <li>
                                                                        <a href="/daihoc">Đại học</a>
                                                                </li>
                                                                <li>
                                                                        <a href="/careers">Tuyển dụng</a>
                                                                </li>
                                                                <li>
                                                                        <a href="/contact">Liên hệ</a>
                                                                </li>
                                                                <li>
                                                                        <a href="/programs">Hình thức đào tạo</a>
                                                                </li>
                                                        </ul>
                                                </div>
                                                <div className="footer-column">
                                                        <p>Giới thiệu</p>
                                                        <ul>
                                                                <li>
                                                                        <a href="/teachers">Tìm giáo viên</a>
                                                                </li>
                                                                <li>
                                                                        <a href="/new-classes">Lớp mới</a>
                                                                </li>
                                                                <li>
                                                                        <a href="/tuition">Học phí tham khảo</a>
                                                                </li>
                                                                <li>
                                                                        <a href="/news">Tin tức</a>
                                                                </li>
                                                                <li>
                                                                        <a href="/resources">Tài liệu</a>
                                                                </li>
                                                                <li>
                                                                        <a href="/contact">Liên hệ</a>
                                                                </li>
                                                        </ul>
                                                </div>
                                        </div>

                                        <div className="footer-contact">
                                                <p>
                                                        <strong>Email:</strong> info@edulinktutor.vn
                                                </p>
                                                <p>
                                                        <strong>Hotline:</strong> +84 123 456-789
                                                </p>
                                                <form className="subscribe-form">
                                                        <label>Đăng ký nhận tin nhắn mới nhất từ EDULINKTUTOR</label>
                                                        <input placeholder="Nhập email của bạn" type="email" />
                                                        <button type="submit">Gửi</button>
                                                </form>
                                        </div>
                                </div>

                                <div className="footer-bottom">
                                        <div className="footer-bottom-left">
                                                ©Copyright 2025 EDULINKTUTOR || All rights reserved by LSF
                                        </div>
                                        <div className="footer-bottom-right social-icons">
                                                <a
                                                        href="https://www.facebook.com/edulinktutor"
                                                        rel="noopener noreferrer"
                                                        target="_blank"
                                                >
                                                        <img alt="Facebook" src="/fb.svg" />
                                                </a>
                                                <a
                                                        href="https://www.linkedin.com/company/edulinktutor"
                                                        rel="noopener noreferrer"
                                                        target="_blank"
                                                >
                                                        <img alt="LinkedIn" src="/linkedin.svg" />
                                                </a>
                                                <a
                                                        href="https://www.tiktok.com/@edulinktutor"
                                                        rel="noopener noreferrer"
                                                        target="_blank"
                                                >
                                                        <img alt="TikTok" src="/tiktok.svg" />
                                                </a>
                                        </div>
                                </div>
                        </footer>
                </>
        );
}

export default Footer;
