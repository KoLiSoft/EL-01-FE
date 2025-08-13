import { useEffect, useMemo, useState } from "react";
import "../style/testimonials.css";

function calcPerView(w) {
        if (w < 640) return 1;
        if (w < 1024) return 2;
        return 3;
}

function Card({ avatar, name, role, subtitle, text }) {
        return (
                <article className="ts-card">
                        <header className="ts-header">
                                <img alt={name} className="ts-avatar" src={avatar} />
                                <div className="ts-headInfo">
                                        <div className="ts-name">{name}</div>
                                        <div className="ts-role">{role}</div>
                                        {subtitle && <div className="ts-sub">{subtitle}</div>}
                                </div>
                        </header>
                        <div className="ts-sep" />
                        <div className="ts-quoteMark">❝</div>
                        <p className="ts-text">{text}</p>
                        <div className="ts-footNote">( Phản hồi từ Edulinktutor )</div>
                </article>
        );
}

export default function Testimonials({ items = [] }) {
        const [page, setPage] = useState(0);
        const [perView, setPerView] = useState(typeof window === "undefined" ? 3 : calcPerView(window.innerWidth));

        useEffect(() => {
                const onResize = () => setPerView(calcPerView(window.innerWidth));
                window.addEventListener("resize", onResize);
                return () => window.removeEventListener("resize", onResize);
        }, []);

        const slides = useMemo(() => {
                const out = [];
                for (let i = 0; i < items.length; i += perView) {
                        out.push(items.slice(i, i + perView));
                }
                return out.length ? out : [[]];
        }, [items, perView]);

        const maxPage = slides.length - 1;
        useEffect(() => {
                if (page > maxPage) setPage(maxPage);
        }, [maxPage, page]);
        const go = (i) => setPage(Math.min(Math.max(i, 0), maxPage));

        return (
                <section className="testimonials-section">
                        <h2 className="ts-title">
                                <span>Đánh giá về giáo viên của</span>
                                <br />
                                PHỤ HUYNH VÀ HỌC SINH
                        </h2>

                        <div className="ts-carousel">
                                <button className="ts-nav ts-prev" onClick={() => go(page - 1)}>
                                        ‹
                                </button>
                                <div className="ts-viewport">
                                        <div className="ts-track" style={{ transform: `translateX(-${page * 100}%)` }}>
                                                {slides.map((group, gi) => (
                                                        <div className="ts-slide" key={gi}>
                                                                {group.map((t, i) => (
                                                                        <div
                                                                                className="ts-cardWrap"
                                                                                key={(t.name || "c") + i}
                                                                        >
                                                                                <Card {...t} />
                                                                        </div>
                                                                ))}
                                                        </div>
                                                ))}
                                        </div>
                                </div>
                                <button className="ts-nav ts-next" onClick={() => go(page + 1)}>
                                        ›
                                </button>
                        </div>

                        <div className="ts-dots">
                                {slides.map((_, i) => (
                                        <button
                                                className={`ts-dot ${i === page ? "is-active" : ""}`}
                                                key={i}
                                                onClick={() => go(i)}
                                        />
                                ))}
                        </div>
                </section>
        );
}
