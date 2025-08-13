import "../style/home.css";
import { useState } from "react";
import studentImg from "../assets/img/Group 44.png";
import ContactHero from "../components/ContactHero";
import USPSection from "../components/USPSection";
import "../style/teacher-card.css";
import avt1 from "../assets/img/avt1.png";
import teacher1 from "../assets/img/teacher1.png";
import teacher2 from "../assets/img/teacher2.png";
import FeaturedTeachers from "../components/FeaturedTeachers";
import Testimonials from "../components/Testimonials";

export default function Home() {
        const [openIndex, setOpenIndex] = useState(null);

        const toggleAnswer = (index) => {
                setOpenIndex(openIndex === index ? null : index);
        };

        const questions = [
                {
                        answer: "Giáo viên của chúng tôi sẽ đồng hành cùng bạn từ kiến thức nền tảng đến nâng cao.",
                        question: "Bạn đang gặp khó khăn trong việc học trên lớp?",
                },
                {
                        answer: "Lộ trình cá nhân hoá – ôn tập chiến lược – bám sát đề thi.",
                        question: "Bạn muốn bứt phá điểm số trong thời gian ngắn?",
                },
                {
                        answer: "Giáo viên giỏi, luyện thi, cam kết kết quả rõ ràng.",
                        question: "Bạn cần chuẩn bị cho kỳ thi quan trọng (thi 10, thi ĐH)?",
                },
                {
                        answer: "Đội ngũ tư vấn học tập sẽ giúp bạn xây lộ trình phù hợp với mục tiêu của bạn.",
                        question: "Bạn có đam mê nhưng thiếu định hướng trong học tập?",
                },
                {
                        answer: "Phương pháp dạy dễ hiểu, từ từ xây nền vững chắc, lấy lại sự tự tin.",
                        question: "Bạn từng mất gốc – học lại nhiều lần không hiệu quả?",
                },
        ];
        return (
                <>
                        <section className="hero-section">
                                <div className="hero-left">
                                        <p className="hero-subtitle">Câu nói tri thức</p>
                                        <h1 className="hero-title">EDULINKTUTOR</h1>
                                        <p className="hero-desc">
                                                Kết nối giáo viên giỏi – Dạy sát năng lực – Tiến bộ rõ rệt –<br />
                                                Dạy tận tâm – Từ nền tảng vững – Đến ước mơ xa
                                        </p>
                                        <p className="hero-slogan">
                                                <span className="highlight-orange">Trao</span> trọn tri thức
                                                <br />
                                                <span className="second-line">
                                                        <span className="highlight-orange">Dẫn</span> lối tương lai
                                                </span>
                                        </p>

                                        <div className="hero-buttons">
                                                <button className="btn primary">Đăng ký học</button>
                                                <button className="btn primary">Tư vấn miễn phí</button>
                                        </div>
                                </div>

                                <div className="hero-right">
                                        <img alt="Học sinh" src="/img/Group 1.png" />
                                </div>
                        </section>
                        <section className="stats-section">
                                <div className="stat-box">
                                        <h2>10+</h2>
                                        <p>năm kinh nghiệm giảng dạy tư vấn giáo dục</p>
                                </div>
                                <div className="stat-box">
                                        <h2>5000+</h2>
                                        <p>giáo viên trên khắp cả nước</p>
                                </div>
                                <div className="stat-box">
                                        <h2>75000+</h2>
                                        <p>học viên đạt target</p>
                                </div>
                                <div className="stat-box">
                                        <h2>100000+</h2>
                                        <p>buổi học thành công</p>
                                </div>
                        </section>
                        <section className="study-support-section">
                                <div className="support-left">
                                        <img alt="Student" className="support-img" src={studentImg} />
                                </div>

                                <div className="support-right">
                                        <h2 className="support-title">
                                                Bạn đang tìm giáo viên phù hợp cho hành trình học tập?
                                        </h2>
                                        <p className="support-subtitle">
                                                “Từ học sinh mất gốc đến học sinh giỏi, EdulinkTutor đều có lộ trình học
                                                cá nhân hóa dành cho bạn.”
                                        </p>

                                        <ul className="support-list">
                                                {questions.map((item, index) => (
                                                        <li
                                                                className={openIndex === index ? "active" : ""}
                                                                key={index}
                                                                onClick={() => toggleAnswer(index)}
                                                        >
                                                                <span className="number-circle">{index + 1}</span>
                                                                <strong>{item.question}</strong>
                                                                {openIndex === index && (
                                                                        <p className="desc">{item.answer}</p>
                                                                )}
                                                        </li>
                                                ))}
                                        </ul>

                                        <button className="btn primary">Đăng ký ngay</button>
                                </div>
                        </section>
                        <section className="featured-teachers-section">
                                <FeaturedTeachers
                                        items={[
                                                {
                                                        avatar: teacher2,
                                                        city: "TPHCM",
                                                        district: "Quận 7",
                                                        gender: "Nữ",
                                                        name: "Nguyễn Thị Hương",
                                                        subject: "CNTT",
                                                        tags: ["C#", "Java", "Figma", "+2"],
                                                },
                                                {
                                                        avatar: teacher1,
                                                        city: "TPHCM",
                                                        district: "Quận 1",
                                                        gender: "Nam",
                                                        name: "Hà Thanh Hùng",
                                                        subject: "Ngữ pháp / Ngữ âm",
                                                        tags: ["IELTS", "TOEIC", "+3"],
                                                },
                                                {
                                                        avatar: teacher2,
                                                        city: "TPHCM",
                                                        district: "Quận 9",
                                                        gender: "Nữ",
                                                        name: "Lê Anh Thư",
                                                        subject: "Luyện thi Đại học",
                                                        tags: ["Toán", "Hóa", "Sinh", "+1"],
                                                },
                                                {
                                                        avatar: teacher1,
                                                        city: "TPHCM",
                                                        district: "Quận 5",
                                                        gender: "Nam",
                                                        name: "Trần Minh Khoa",
                                                        subject: "Vật lý",
                                                        tags: ["12", "Ôn HSG", "+1"],
                                                },
                                                {
                                                        avatar: teacher2,
                                                        city: "TPHCM",
                                                        district: "Quận 3",
                                                        gender: "Nữ",
                                                        name: "Phạm Hải Yến",
                                                        subject: "Tiếng Anh",
                                                        tags: ["IELTS", "Giao tiếp", "+2"],
                                                },
                                                {
                                                        avatar: teacher1,
                                                        city: "TPHCM",
                                                        district: "Quận 5",
                                                        gender: "Nam",
                                                        name: "Trần Minh Đăng",
                                                        subject: "Vật lý",
                                                        tags: ["12", "Ôn HSG", "+1"],
                                                },
                                        ]}
                                />
                        </section>
                        <USPSection />
                        <Testimonials
                                items={[
                                        {
                                                avatar: avt1,
                                                name: "Lê Văn Long",
                                                role: "Học Viên Edulinktutor",
                                                subtitle: "Khóa IELTS",
                                                text: "Trước khi học, mình gặp nhiều khó khăn với phần Writing và Speaking. Nhờ sự hướng dẫn nhiệt tình từ thầy cô tại Edulinktutor, mình đã cải thiện kỹ năng rõ rệt. Sau 4 tháng luyện thi, mình đã đạt IELTS 7.5 – đúng với mục tiêu ban đầu.",
                                        },
                                        {
                                                avatar: avt1,
                                                name: "Phạm Thị Mai Linh",
                                                role: "Phụ huynh",
                                                text: "Tôi rất ấn tượng với phương pháp giảng dạy của Edulinktutor. Không chỉ giúp con tôi nâng cao trình độ tiếng Anh, mà còn tạo cho cháu sự tự tin và chủ động trong học tập. Chỉ sau 3 tháng, điểm tiếng Anh trên lớp của cháu tăng lên rõ rệt.",
                                        },
                                        {
                                                avatar: avt1,
                                                name: "Võ Quốc Dũng",
                                                role: "Học viên",
                                                subtitle: "Luyện thi ĐH A",
                                                text: "Em theo học lớp luyện thi đại học khối A (Toán – Lý – Hóa) tại Giáo viên Edulinktutor từ đầu năm lớp 12. Các thầy cô giảng dạy cực kỳ chi tiết, sát đề, và luôn hỗ trợ tận tình khi em gặp khó khăn. Nhờ phương pháp học bám sát kiến thức trọng tâm, điểm thi đại học của em đạt 26,8 điểm – đúng như kỳ vọng ban đầu!",
                                        },
                                        {
                                                avatar: avt1,
                                                name: "Võ Quốc Huy",
                                                role: "Học viên",
                                                subtitle: "Luyện thi ĐH A",
                                                text: "Em theo học lớp luyện thi đại học khối A (Toán – Lý – Hóa) tại Giáo viên Edulinktutor từ đầu năm lớp 12. Các thầy cô giảng dạy cực kỳ chi tiết, sát đề, và luôn hỗ trợ tận tình khi em gặp khó khăn. Nhờ phương pháp học bám sát kiến thức trọng tâm, điểm thi đại học của em đạt 26,8 điểm – đúng như kỳ vọng ban đầu!",
                                        },
                                        {
                                                avatar: avt1,
                                                name: "Phạm Thị Mai ",
                                                role: "Phụ huynh",
                                                text: "Tôi rất ấn tượng với phương pháp giảng dạy của Edulinktutor. Không chỉ giúp con tôi nâng cao trình độ tiếng Anh, mà còn tạo cho cháu sự tự tin và chủ động trong học tập. Chỉ sau 3 tháng, điểm tiếng Anh trên lớp của cháu tăng lên rõ rệt.",
                                        },
                                        {
                                                avatar: avt1,
                                                name: "Lê Văn Lý",
                                                role: "Học Viên Edulinktutor",
                                                subtitle: "Khóa Toán 12",
                                                text: "Trước khi học, mình gặp nhiều khó khăn. Nhờ sự hướng dẫn nhiệt tình từ thầy cô tại Edulinktutor, mình đã cải thiện kỹ năng rõ rệt. Sau 4 tháng luyện thi, mình đã đạt 9.5 điểm – đúng với mục tiêu ban đầu.",
                                        },
                                ]}
                        />
                        <ContactHero />
                </>
        );
}
