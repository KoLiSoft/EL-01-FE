import { useEffect, useMemo, useState } from "react";
import TeacherCard from "./TeacherCard";

function calcPerView(w) {
        if (w < 640) return 1; // mobile
        if (w < 1024) return 2; // tablet
        return 3; // desktop
}

export default function FeaturedTeachers({ items = [] }) {
        const [page, setPage] = useState(0);
        const [perView, setPerView] = useState(typeof window === "undefined" ? 3 : calcPerView(window.innerWidth));

        useEffect(() => {
                const onResize = () => setPerView(calcPerView(window.innerWidth));
                window.addEventListener("resize", onResize);
                return () => window.removeEventListener("resize", onResize);
        }, []);

        // Chia item thành các "slide"
        const slides = useMemo(() => {
                const arr = [];
                for (let i = 0; i < items.length; i += perView) {
                        arr.push(items.slice(i, i + perView));
                }
                return arr.length ? arr : [[]];
        }, [items, perView]);

        const maxPage = slides.length - 1;
        const go = (i) => setPage(Math.min(Math.max(i, 0), maxPage));

        // Nếu perView thay đổi khiến page vượt quá maxPage → kéo về cuối
        useEffect(() => {
                if (page > maxPage) setPage(maxPage);
        }, [maxPage, page]);

        return (
                <section className="featured-teachers-section">
                        <h2>
                                Giáo Viên Nổi Bật Tại <span>EDULINKTUTOR</span>
                        </h2>

                        <div className="ft-carousel">
                                <button className="ft-nav ft-prev" onClick={() => go(page - 1)} aria-label="Trước">
                                        ‹
                                </button>

                                <div className="ft-viewport" aria-roledescription="carousel">
                                        <div className="ft-track" style={{ transform: `translateX(-${page * 100}%)` }}>
                                                {slides.map((group, idx) => (
                                                        <div className="ft-slide" key={idx}>
                                                                {group.map((teacher, i) => (
                                                                        <div
                                                                                className="ft-cardWrap"
                                                                                key={(teacher.name || "t") + i}
                                                                        >
                                                                                <TeacherCard {...teacher} />
                                                                        </div>
                                                                ))}
                                                        </div>
                                                ))}
                                        </div>
                                </div>

                                <button className="ft-nav ft-next" onClick={() => go(page + 1)} aria-label="Sau">
                                        ›
                                </button>
                        </div>

                        <div className="ft-dots">
                                {slides.map((_, i) => (
                                        <button
                                                key={i}
                                                className={`ft-dot ${i === page ? "is-active" : ""}`}
                                                onClick={() => go(i)}
                                                aria-label={`Tới trang ${i + 1}`}
                                        />
                                ))}
                        </div>
                </section>
        );
}
