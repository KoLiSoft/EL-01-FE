import { Rating } from "@mui/material";
import "../style/featured.css";
import { useEffect, useMemo, useRef, useState } from "react";

const FEATURED = [
        {
                desc: "Phù hợp cho học sinh lớp 11–12 ôn thi THPT Quốc gia",
                duration: "2–3 buổi/tuần",
                form: "Online/Offline",
                price: "Từ 1,500,000vnđ/tháng",
                stars: 5,
                title: "Gói “Luyện thi Đại học”",
        },
        {
                desc: "Dành cho người mới bắt đầu – đi làm – học sinh muốn cải thiện phản xạ",
                duration: "1–2 buổi/tuần",
                form: "Online",
                price: "Từ 800,000vnđ/tháng",
                stars: 5,
                title: "Gói “Học Tiếng Anh Giao Tiếp”",
        },
        {
                desc: "Phù hợp cho học sinh từ lớp 8 đến lớp 12 cần củng cố & mở rộng kiến thức",
                duration: "2 buổi/tuần",
                form: "Offline tại nhà",
                price: "Từ 1,000,000vnđ/tháng",
                stars: 5,
                title: "Gói “Nâng Cao Toán – Lý – Hóa”",
        },
        // Thêm bao nhiêu item cũng được để có nhiều “trang”
        {
                desc: "Python/C/C++ + tư duy thuật toán + dự án nhỏ",
                duration: "2 buổi/tuần",
                form: "Online",
                price: "Từ 900,000vnđ/tháng",
                stars: 5,
                title: "Gói Lập Trình",
        },
        {
                desc: "Canva, Photoshop cơ bản → nâng cao, bài tập thực chiến",
                duration: "1–2 buổi/tuần",
                form: "Online/Offline",
                price: "Từ 950,000vnđ/tháng",
                stars: 5,
                title: "Gói Thiết Kế Đồ Hoạ",
        },
        {
                desc: "Củng cố nền tảng Toán – Văn – Anh, theo sát chương trình",
                duration: "2 buổi/tuần",
                form: "Online",
                price: "Từ 700,000vnđ/tháng",
                stars: 5,
                title: "Gói Cấp 1 & Cấp 2",
        },
];

export default function FeaturedCourses() {
        const trackRef = useRef(null);
        const [index, setIndex] = useState(0);
        const [cardsPerSlide, setCardsPerSlide] = useState(3); // desktop: 3 card/trang

        // Tính số card mỗi trang theo kích thước màn hình
        useEffect(() => {
                const update = () => {
                        const w = window.innerWidth;
                        setCardsPerSlide(w < 640 ? 1 : w < 1024 ? 2 : 3);
                };
                update();
                window.addEventListener("resize", update);
                return () => window.removeEventListener("resize", update);
        }, []);

        // Chia mảng FEATURED thành các trang
        const slides = useMemo(() => {
                const out = [];
                for (let i = 0; i < FEATURED.length; i += cardsPerSlide) {
                        out.push(FEATURED.slice(i, i + cardsPerSlide));
                }
                // Đảm bảo index không vượt quá số trang khi đổi kích thước
                if (index > out.length - 1) setIndex(out.length - 1);
                return out;
        }, [cardsPerSlide, index]);

        const scrollToSlide = (i) => {
                const el = trackRef.current;
                if (!el) return;
                setIndex(i);
                el.scrollTo({ behavior: "smooth", left: i * el.clientWidth });
        };

        const next = () => scrollToSlide(Math.min(index + 1, slides.length - 1));
        const prev = () => scrollToSlide(Math.max(index - 1, 0));

        const onTrackScroll = () => {
                const el = trackRef.current;
                if (!el) return;
                const i = Math.round(el.scrollLeft / el.clientWidth);
                if (i !== index) setIndex(i);
        };

        return (
                <section className="featured-courses">
                        <div className="fc-container">
                                <h2 className="fc-heading">
                                        <span>Khóa Học Nổi Bật Tại</span>
                                        <span className="fc-brand">EDULINKTUTOR</span>
                                </h2>

                                <div className="fc-slider">
                                        <button
                                                aria-label="Trang trước"
                                                className="fc-arrow fc-arrow--left"
                                                disabled={index === 0}
                                                onClick={prev}
                                        >
                                                ‹
                                        </button>

                                        <div className="fc-track" onScroll={onTrackScroll} ref={trackRef}>
                                                {slides.map((group, si) => (
                                                        <div className="fc-slide" key={si}>
                                                                <div
                                                                        className="fc-slide-grid"
                                                                        style={{ "--cols": cardsPerSlide }}
                                                                >
                                                                        {group.map((item, i) => (
                                                                                <article
                                                                                        className="fc-card"
                                                                                        key={`${si}-${i}`}
                                                                                >
                                                                                        <header className="fc-card__head">
                                                                                                <div className="fc-title">
                                                                                                        <span
                                                                                                                aria-hidden="true"
                                                                                                                className="fc-dot"
                                                                                                        ></span>
                                                                                                        <h3>
                                                                                                                {
                                                                                                                        item.title
                                                                                                                }
                                                                                                        </h3>
                                                                                                </div>

                                                                                                <Rating
                                                                                                        readOnly
                                                                                                        value={
                                                                                                                item.stars
                                                                                                        }
                                                                                                />
                                                                                        </header>

                                                                                        <p className="fc-desc">
                                                                                                {item.desc}
                                                                                        </p>

                                                                                        <ul className="fc-meta">
                                                                                                <li>
                                                                                                        <span
                                                                                                                aria-hidden="true"
                                                                                                                className="fc-ico"
                                                                                                        >
                                                                                                                <svg
                                                                                                                        height="16"
                                                                                                                        viewBox="0 0 24 24"
                                                                                                                        width="16"
                                                                                                                >
                                                                                                                        <path
                                                                                                                                d="M4 5h16a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm7 12h2v2h-2z"
                                                                                                                                fill="currentColor"
                                                                                                                        />
                                                                                                                </svg>
                                                                                                        </span>
                                                                                                        <span className="label">
                                                                                                                Hình
                                                                                                                thức:
                                                                                                        </span>
                                                                                                        <span className="value">
                                                                                                                {
                                                                                                                        item.form
                                                                                                                }
                                                                                                        </span>
                                                                                                </li>
                                                                                                <li>
                                                                                                        <span
                                                                                                                aria-hidden="true"
                                                                                                                className="fc-ico"
                                                                                                        >
                                                                                                                <svg
                                                                                                                        height="16"
                                                                                                                        viewBox="0 0 24 24"
                                                                                                                        width="16"
                                                                                                                >
                                                                                                                        <path
                                                                                                                                d="M12 7v5l3 2M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z"
                                                                                                                                fill="none"
                                                                                                                                stroke="currentColor"
                                                                                                                                strokeLinecap="round"
                                                                                                                                strokeWidth="2"
                                                                                                                        />
                                                                                                                </svg>
                                                                                                        </span>
                                                                                                        <span className="label">
                                                                                                                Thời
                                                                                                                lượng:
                                                                                                        </span>
                                                                                                        <span className="value">
                                                                                                                {
                                                                                                                        item.duration
                                                                                                                }
                                                                                                        </span>
                                                                                                </li>
                                                                                        </ul>

                                                                                        <div className="fc-fee">
                                                                                                <span className="label">
                                                                                                        Học phí:
                                                                                                </span>
                                                                                                <span className="price">
                                                                                                        {item.price}
                                                                                                </span>
                                                                                        </div>

                                                                                        <div className="fc-actions">
                                                                                                <button className="btn btn-dark">
                                                                                                        Xem chi tiết
                                                                                                </button>
                                                                                                <button className="btn btn-orange btn-pill">
                                                                                                        Học thử 1 buổi
                                                                                                </button>
                                                                                        </div>
                                                                                </article>
                                                                        ))}
                                                                </div>
                                                        </div>
                                                ))}
                                        </div>

                                        <button
                                                aria-label="Trang sau"
                                                className="fc-arrow fc-arrow--right"
                                                disabled={index === slides.length - 1}
                                                onClick={next}
                                        >
                                                ›
                                        </button>
                                </div>

                                <div className="fc-dots">
                                        {slides.map((_, i) => (
                                                <button
                                                        aria-label={`Tới trang ${i + 1}`}
                                                        className={`fc-dot ${i === index ? "active" : ""}`}
                                                        key={i}
                                                        onClick={() => scrollToSlide(i)}
                                                />
                                        ))}
                                </div>
                        </div>
                </section>
        );
}
