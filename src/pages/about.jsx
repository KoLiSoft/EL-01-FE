import "../style/about.css";
import img1 from "../assets/img/Group151.png";
import img2 from "../assets/img/img2.png";
import ContactHero from "../components/ContactHero";
export default function About() {
        return (
                <>
                        <section className="about-section">
                                <div className="about-content">
                                        <h1 className="title">
                                                <span className="highlight-about">Edulinktutor</span>
                                        </h1>
                                        <h2 className="subtitle">Cầu Nối Tri Thức, Mở Lối Thành Công</h2>
                                        <p className="description">
                                                <strong>EdulinkTutor</strong> là nền tảng học tập trực tuyến chuyên kết
                                                nối học viên với đội ngũ giáo viên chất lượng cao trong các lĩnh vực học
                                                phổ thông, luyện thi đầu ra ngoại ngữ (IELTS, TOEFL...) Chúng tôi mang
                                                đến lộ trình học cá nhân hóa, phương pháp dạy hiệu quả và môi trường học
                                                linh hoạt, giúp học viên tiến bộ rõ rệt chỉ sau vài tuần. Với đội ngũ
                                                giáo viên giàu kinh nghiệm, nền tảng học online hiện đại và dịch vụ hỗ
                                                trợ tận tâm, EdulinkTutor cam kết đồng hành cùng bạn trên hành trình
                                                chinh phục mục tiêu học tập.
                                        </p>
                                        <div className="buttons">
                                                <button className="btn register">Đăng ký học</button>
                                                <button className="btn register">Tư vấn miễn phí</button>
                                        </div>
                                </div>

                                <div className="about-images">
                                        <img src={img1} alt="Student 1" />
                                </div>
                        </section>
                        <div className="about-bg">
                                <section className="about-values">
                                        <div className="about-values__left">
                                                <h2 className="about-values__heading">
                                                        Giá Trị Khác Biệt Tại <span>EDULINKTUTOR</span>
                                                </h2>
                                                <p className="about-values__lead">
                                                        EdulinkTutor luôn đặt chất lượng giảng dạy và sự tiến bộ của học
                                                        viên lên hàng đầu. Chúng tôi mang đến lộ trình học cá nhân hóa,
                                                        công nghệ linh hoạt và đội ngũ giáo viên tận tâm – tạo nên sự
                                                        khác biệt thực sự.
                                                </p>
                                        </div>

                                        <div className="about-values__grid">
                                                <div className="values-card r-normal">
                                                        <div className="card-head">
                                                                <span className="card-index">01</span>
                                                                <h4 className="card-title">SỨ MỆNH</h4>
                                                        </div>
                                                        <p className="card-desc">
                                                                “Sứ mệnh của chúng tôi là tạo ra môi trường học tập cá
                                                                nhân hóa, linh hoạt và hiệu quả, giúp học viên đạt được
                                                                mục tiêu học tập và phát triển toàn diện kỹ năng.
                                                                EdulinkTutor cam kết đồng hành cùng người học bằng chất
                                                                lượng giảng dạy và sự tận tâm trong từng buổi học.”
                                                        </p>
                                                </div>

                                                <div className="values-card r-tr">
                                                        <div className="card-head">
                                                                <span className="card-index">02</span>
                                                                <h4 className="card-title">TẦM NHÌN</h4>
                                                        </div>
                                                        <p className="card-desc">
                                                                “EdulinkTutor hướng tới việc trở thành nền tảng giáo
                                                                viên học trực tuyến hàng đầu tại Việt Nam – nơi học viên
                                                                ở mọi cấp độ đều có thể tiếp cận giáo viên chất lượng
                                                                cao và lộ trình học tập phù hợp nhất để vươn xa trên con
                                                                đường học vấn.”
                                                        </p>
                                                </div>

                                                <div className="values-card r-tl">
                                                        <div className="card-head">
                                                                <span className="card-index">03</span>
                                                                <h4 className="card-title">GIÁ TRỊ CỐT LÕI</h4>
                                                        </div>
                                                        <p className="card-desc">
                                                                “Chúng tôi đặt chất lượng – hiệu quả – sự tận tâm làm
                                                                trung tâm trong mọi dịch vụ. Từ việc tuyển chọn giáo
                                                                viên đến thiết kế nội dung học, mọi yếu tố đều được xây
                                                                dựng với mục tiêu mang lại giá trị thực tế, tiến bộ rõ
                                                                rệt và trải nghiệm học tích cực cho từng học viên.”
                                                        </p>
                                                </div>

                                                <div className="values-card r-normal">
                                                        <div className="card-head">
                                                                <span className="card-index">04</span>
                                                                <h4 className="card-title">KHÁCH HÀNG</h4>
                                                        </div>
                                                        <p className="card-desc">
                                                                “EdulinkTutor luôn xem học viên và phụ huynh là đối tác
                                                                đồng hành. Chúng tôi lắng nghe nhu cầu, tư vấn đúng lộ
                                                                trình và luôn cam kết kết quả đầu ra. Sự hài lòng của
                                                                học viên chính là thước đo lớn nhất cho chất lượng dịch
                                                                vụ của chúng tôi.”
                                                        </p>
                                                </div>
                                        </div>
                                </section>
                                <section className="about-team">
                                        <div className="about-team__grid">
                                                <div className="team-card team-r-tl">
                                                        <div className="team-head">
                                                                <span className="team-index">01</span>
                                                                <h4 className="team-title">Tuyển chọn khắt khe</h4>
                                                        </div>
                                                        <p className="team-desc">
                                                                Giáo viên/sinh viên giỏi chuyên môn, tốt nghiệp từ các
                                                                trường hàng đầu; phỏng vấn và demo kỹ lưỡng.
                                                        </p>
                                                </div>

                                                <div className="team-card">
                                                        <div className="team-head">
                                                                <span className="team-index">02</span>
                                                                <h4 className="team-title">Chuyên môn vững vàng</h4>
                                                        </div>
                                                        <p className="team-desc">
                                                                Nắm chắc kiến thức trọng tâm, cập nhật phương pháp và
                                                                tài liệu theo chuẩn mới.
                                                        </p>
                                                </div>

                                                <div className="team-card">
                                                        <div className="team-head">
                                                                <span className="team-index">03</span>
                                                                <h4 className="team-title">Kỹ năng sư phạm tốt</h4>
                                                        </div>
                                                        <p className="team-desc">
                                                                Truyền đạt mạch lạc, cá nhân hoá lộ trình, tạo động lực
                                                                cho học viên.
                                                        </p>
                                                </div>

                                                <div className="team-card team-r-br">
                                                        <div className="team-head">
                                                                <span className="team-index">04</span>
                                                                <h4 className="team-title">Gắn bó lâu dài</h4>
                                                        </div>
                                                        <p className="team-desc">
                                                                Cam kết đồng hành, hỗ trợ ngoài giờ; đánh giá định kỳ để
                                                                tối ưu hiệu quả.
                                                        </p>
                                                </div>
                                        </div>

                                        <div className="about-team__right">
                                                <h2 className="about-team__heading">
                                                        Đội Ngũ Giáo Viên <span>EDULINKTUTOR</span>
                                                </h2>
                                                <p className="about-team__lead">
                                                        Tại EdulinkTutor, đội ngũ giáo viên là yếu tố cốt lõi tạo nên
                                                        chất lượng giảng dạy. Chúng tôi tuyển chọn những giáo viên, sinh
                                                        viên giỏi chuyên môn, tốt nghiệp từ các trường đại học top đầu
                                                        như Ngoại thương, Sư phạm, Bách khoa, Kinh tế... Tất cả đều được
                                                        đào tạo kỹ năng sư phạm và cam kết đồng hành cùng học viên bằng
                                                        sự tận tâm và trách nhiệm.
                                                </p>
                                                <button className="team-btn">Xem dịch vụ</button>
                                        </div>
                                </section>
                        </div>
                        <section className="about-stats">
                                <div className="stats-inner">
                                        <h2 className="stats-heading">
                                                Thành Tựu &<br />
                                                Kết Quả Nổi Bật
                                        </h2>

                                        <ul className="stats-grid">
                                                <li className="stat">
                                                        <div className="stat-number">&gt;93%</div>
                                                        <p className="stat-note">
                                                                học viên IELTS đạt hoặc vượt mục tiêu đầu ra đăng ký ban
                                                                đầu
                                                        </p>
                                                </li>

                                                <li className="stat">
                                                        <div className="stat-number">&gt;84%</div>
                                                        <p className="stat-note">
                                                                học viên mất gốc lấy lại căn bản chỉ sau 6 tuần
                                                        </p>
                                                </li>

                                                <li className="stat">
                                                        <div className="stat-number">12000+</div>
                                                        <p className="stat-note">
                                                                buổi học trực tuyến 1:1 trong năm qua
                                                        </p>
                                                </li>

                                                <li className="stat">
                                                        <div className="stat-number">5000+</div>
                                                        <p className="stat-note">học viên trên khắp cả nước</p>
                                                </li>
                                        </ul>
                                </div>
                        </section>
                        <section className="about-moments">
                                <div className="moments-inner">
                                        <h2 className="moments-heading">
                                                Những Khoảnh Khắc
                                                <br />
                                                Học Tập Cùng <span>Edulinktutor</span>
                                        </h2>
                                        <p className="moments-sub">
                                                Hãy cùng nhìn lại những hình ảnh đáng nhớ tại lớp học online, các buổi
                                                luyện đề, workshop kỹ năng và hoạt động tương tác giữa giáo viên và học
                                                viên.
                                        </p>
                                        <div className="moments-gallery">
                                                <img src={img2} alt="Những khoảnh khắc học tập" />
                                        </div>

                                        <div className="moments-btn">
                                                <button className="btn-viewmore">Xem thêm</button>
                                        </div>
                                </div>
                        </section>
                        <ContactHero />
                </>
        );
}
