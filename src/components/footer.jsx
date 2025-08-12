import "../style/footer.css";

function Footer() {
        return (
                <>
                        <footer className="footer">
                                <div className="footer-container">
                                        <div className="footer-logo">
                                                <img src="/logo.svg" alt="Edulinktutor Logo" />
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
                                                        <input type="email" placeholder="Nhập email của bạn" />
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
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                >
                                                        <img src="/fb.svg" alt="Facebook" />
                                                </a>
                                                <a
                                                        href="https://www.linkedin.com/company/edulinktutor"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                >
                                                        <img src="/linkedin.svg" alt="LinkedIn" />
                                                </a>
                                                <a
                                                        href="https://www.tiktok.com/@edulinktutor"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                >
                                                        <img src="/tiktok.svg" alt="TikTok" />
                                                </a>
                                        </div>
                                </div>
                        </footer>
                </>
        );
}

export default Footer;
