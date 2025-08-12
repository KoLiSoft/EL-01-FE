import ContactHero from "../components/ContactHero";
import "../style/course.css";
import FeaturedCourses from "../components/FeaturedCourses";

export default function Course() {
        return (
                <>
                        <section className="hero-section-course">
                                <div className="hero-left-course">
                                        <p className="hero-subtitle-course">Tìm hiểu khóa học</p>
                                        <h1 className="hero-title-course">EDULINKTUTOR</h1>
                                        <p className="hero-desc-course">
                                                Tại EdulinkTutor, chúng tôi không chỉ cung cấp các gói học – chúng tôi
                                                xây dựng hành trình học tập cá nhân hóa, tối ưu theo từng nhu cầu. Khám
                                                phá ngay các lựa chọn linh hoạt phù hợp với bạn hoặc con bạn!
                                        </p>

                                        <div className="hero-buttons-course">
                                                <button className="hero-btn-primary">Đăng ký học</button>
                                        </div>
                                </div>

                                <div className="hero-right-course">
                                        <img src="/img/Group 1.png" alt="Học sinh" />
                                </div>
                        </section>
                        <section className="course-card__actions">
                                <div className="courses-container">
                                        <p className="courses-subtitle">Tìm hiểu khóa học</p>
                                        <h2 className="courses-title">TẠI EDULINKTUTOR</h2>

                                        <div className="courses-grid">
                                                <article className="course-card">
                                                        <h3 className="course-card__title">Gói Luyện Thi IELTS</h3>
                                                        <p className="course-card__desc">
                                                                EdulinkTutor chuyên luyện thi IELTS với lộ trình cá nhân
                                                                hoá, phù hợp từ band 4.5 đến 7.5+. Học viên được luyện
                                                                kỹ 4 kỹ năng, sửa bài chi tiết, thi thử định kỳ và hướng
                                                                dẫn chiến lược làm bài hiệu quả.
                                                        </p>
                                                        <div className="course-card__actions">
                                                                <button className="course-btn course-btn--primary">
                                                                        Học thử ngay
                                                                </button>
                                                                <button className="course-btn course-btn--orange">
                                                                        Xem thêm
                                                                </button>
                                                        </div>
                                                </article>

                                                <article className="course-card">
                                                        <h3 className="course-card__title">Gói Luyện Thi Đại Học</h3>
                                                        <p className="course-card__desc">
                                                                Ôn luyện theo đúng cấu trúc đề thi THPT Quốc Gia – tập
                                                                trung từng khối A, B, D… Bài giảng sát đề, luyện đề
                                                                chuyên sâu, hướng dẫn mẹo giải nhanh và quản lý thời
                                                                gian. Có đánh giá đầu vào & theo dõi tiến độ.{" "}
                                                        </p>
                                                        <div className="course-card__actions">
                                                                <button className="course-btn course-btn--primary">
                                                                        Học thử ngay
                                                                </button>
                                                                <button className="course-btn course-btn--orange">
                                                                        Xem thêm
                                                                </button>
                                                        </div>
                                                </article>

                                                <article className="course-card">
                                                        <h3 className="course-card__title">Gói Lập Trình</h3>
                                                        <p className="course-card__desc">
                                                                Khóa học lập trình tại EdulinkTutor giúp học viên xây
                                                                dựng nền tảng tư duy thuật toán vững chắc và thành thạo
                                                                ngôn ngữ lập trình thông dụng như Python, C++, HTML/CSS.
                                                                Học viên được hướng dẫn qua dự án thực tế, phù hợp cho
                                                                học sinh yêu thích công nghệ hoặc định hướng học CNTT
                                                                trong tương lai.
                                                        </p>
                                                        <div className="course-card__actions">
                                                                <button className="course-btn course-btn--primary">
                                                                        Học thử ngay
                                                                </button>
                                                                <button className="course-btn course-btn--orange">
                                                                        Xem thêm
                                                                </button>
                                                        </div>
                                                </article>

                                                <article className="course-card">
                                                        <h3 className="course-card__title">Gói Ngoại Ngữ</h3>
                                                        <p className="course-card__desc">
                                                                EdulinkTutor cung cấp chương trình giáo viên ngoại ngữ
                                                                đa dạng như Tiếng Anh giao tiếp, IELTS, TOEIC, Tiếng
                                                                Nhật, Tiếng Trung… phù hợp cho học sinh, sinh viên và
                                                                người đi làm. Học viên được luyện 4 kỹ năng, rèn phản xạ
                                                                ngôn ngữ, phát âm chuẩn và áp dụng vào tình huống thực
                                                                tế. Lộ trình linh hoạt theo mục tiêu học tập hoặc thi
                                                                cử.
                                                        </p>
                                                        <div className="course-card__actions">
                                                                <button className="course-btn course-btn--primary">
                                                                        Học thử ngay
                                                                </button>
                                                                <button className="course-btn course-btn--orange">
                                                                        Xem thêm
                                                                </button>
                                                        </div>
                                                </article>

                                                <article className="course-card">
                                                        <h3 className="course-card__title">Gói Thiết Kế Đồ Họa</h3>
                                                        <p className="course-card__desc">
                                                                Khóa học đồ họa giúp học viên tiếp cận tư duy thiết kế
                                                                hiện đại và thực hành sử dụng các công cụ như Canva,
                                                                Figma, Photoshop (cơ bản),..... Lộ trình phù hợp với học
                                                                sinh có mong muốn phát triển kỹ năng trình bày, làm
                                                                portfolio cá nhân hoặc thi vào ngành sáng tạo, truyền
                                                                thông.
                                                        </p>
                                                        <div className="course-card__actions">
                                                                <button className="course-btn course-btn--primary">
                                                                        Học thử ngay
                                                                </button>
                                                                <button className="course-btn course-btn--orange">
                                                                        Xem thêm
                                                                </button>
                                                        </div>
                                                </article>

                                                <article className="course-card">
                                                        <h3 className="course-card__title">Gói Cấp 1 & Cấp 2</h3>
                                                        <p className="course-card__desc">
                                                                Khóa học được thiết kế giúp học sinh từ lớp 1 đến lớp 9
                                                                nắm vững kiến thức nền tảng và phát triển kỹ năng tư duy
                                                                toàn diện ở các môn trọng điểm như Toán, Tiếng Việt,
                                                                Tiếng Anh, Ngữ văn, Vật lý…Giáo viên hướng dẫn sát sao,
                                                                bám sát chương trình học trên lớp, giúp học sinh tự tin
                                                                nâng cao điểm số, cải thiện lực học, xây dựng thói quen
                                                                học tập chủ động và hiệu quả ngay từ sớm.
                                                        </p>
                                                        <div className="course-card__actions">
                                                                <button className="course-btn course-btn--primary">
                                                                        Học thử ngay
                                                                </button>
                                                                <button className="course-btn course-btn--orange">
                                                                        Xem thêm
                                                                </button>
                                                        </div>
                                                </article>
                                        </div>
                                </div>
                        </section>
                        <FeaturedCourses />
                        <ContactHero />
                </>
        );
}
