import { useEffect, useMemo, useRef, useState } from "react";
import "../style/tutorResults.css";
import img1 from "../assets/img/teacher1.png";
import img2 from "../assets/img/teacher2.png";

const SAMPLE = [
        {
                avatar: img1,
                city: "Thành phố Hồ Chí Minh",
                degree: "Đại học",
                district: "Quận Bình Thạnh",
                exp: "Giáo viên dạy kèm",
                fee: 250000,
                feeUnit: "VND/Giờ",
                id: 1,
                maxStudents: "tối đa 2 học viên/lớp",
                name: "Hà Thanh Hùng",
                rating: 4.9,
                subjectLine: "Toán - Văn",
                tags: ["Bắc tiểu học", "Bậc trung học", "Thi chuyển cấp", "Tốt nghiệp", "+2"],
                updated: "2 giờ trước",
        },
        {
                avatar: img1,
                city: "Thành phố Hồ Chí Minh",
                degree: "Thạc sĩ",
                district: "Quận Bình Thạnh",
                exp: "Giảng viên IT",
                fee: 120000,
                feeUnit: "VND/Giờ",
                id: 2,
                maxStudents: "tối đa 2 học viên/lớp",
                name: "Nguyễn Vĩnh Tân",
                rating: 4.8,
                subjectLine: "Frontend - Database",
                tags: ["HTML/CSS/JavaScript", "MySQL", "MongoDB", "PostgreSQL", "Firebase", "Firestore", "+2"],
                updated: "Trực tuyến trước 8h",
        },
        {
                avatar: img2,
                city: "Thành phố Hồ Chí Minh",
                degree: "Đại học",
                district: "Quận Bình Thạnh",
                exp: "Giáo viên dạy kèm",
                fee: 120000,
                feeUnit: "VND/Giờ",
                id: 3,
                maxStudents: "tối đa 4 học viên/lớp",
                name: "Hồ Thị Yến Vi",
                rating: 4.6,
                subjectLine: "Tiếng Anh",
                tags: ["Flyers", "Giao tiếp", "Starters", "Movers", "KET", "PET"],
                updated: "7 ngày trước",
        },
        {
                avatar: img2,
                city: "Thành phố Hồ Chí Minh",
                degree: "Đại học",
                district: "Quận Bình Thạnh",
                exp: "Manager",
                fee: 200000,
                feeUnit: "VND/Giờ",
                id: 4,
                maxStudents: "tối đa 2 học viên/lớp",
                name: "Tiêu Phan Cẩm Vân",
                rating: 4.9,
                subjectLine: "2D - Graphic",
                tags: [
                        "Character/Expression",
                        "Adobe Photoshop",
                        "Adobe Illustrator",
                        "Logo/Branding",
                        "Game/Animation concept",
                        "Vector Art",
                ],
                updated: "2 ngày trước",
        },
        {
                avatar: img2,
                city: "Thành phố Hồ Chí Minh",
                degree: "Đại học",
                district: "Quận Bình Thạnh",
                exp: "Manager",
                fee: 200000,
                feeUnit: "VND/Giờ",
                id: 5,
                maxStudents: "tối đa 2 học viên/lớp",
                name: "Tiêu Phan Cẩm ",
                rating: 4.9,
                subjectLine: "2D - Graphic",
                tags: [
                        "Character/Expression",
                        "Adobe Photoshop",
                        "Adobe Illustrator",
                        "Logo/Branding",
                        "Game/Animation concept",
                        "Vector Art",
                ],
                updated: "2 ngày trước",
        },
];

const SORTS = [
        { key: "latest", label: "Mới nhất" },
        { key: "rating", label: "Đánh giá cao nhất" },
        { key: "feeAsc", label: "Học phí thấp nhất" },
];

export default function TutorResults({ items, inLayout = false }) {
        const [sortOpen, setSortOpen] = useState(false);
        const [sortKey, setSortKey] = useState("latest");

        const formatVND = (n) => (typeof n === "number" ? n.toLocaleString("vi-VN", { maximumFractionDigits: 0 }) : n);

        const source = items && items.length ? items : SAMPLE;

        const data = useMemo(() => {
                const arr = [...source];
                if (sortKey === "rating") arr.sort((a, b) => b.rating - a.rating);
                if (sortKey === "feeAsc") arr.sort((a, b) => a.fee - b.fee);
                return arr;
        }, [source, sortKey]);

        // ---------- Pagination ----------
        const [page, setPage] = useState(0);
        const pageSize = 3; // chỉnh số card mỗi trang
        const totalPages = Math.ceil(data.length / pageSize);
        const listRef = useRef(null);

        const pageData = useMemo(() => {
                const start = page * pageSize;
                return data.slice(start, start + pageSize);
        }, [data, page]);

        const go = (i) => setPage(Math.min(Math.max(i, 0), totalPages - 1));

        // Khi đổi sort/nguồn dữ liệu → về trang 0
        useEffect(() => {
                setPage(0);
        }, []);

        // Scroll list vào tầm nhìn khi đổi trang (tuỳ chọn)
        useEffect(() => {
                listRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, []);

        // ---------- Nội dung bên phải ----------
        const Content = (
                <main className="tutor-results">
                        <div className="tr-topbar">
                                <div className={`tr-sort ${sortOpen ? "open" : ""}`}>
                                        <button
                                                aria-expanded={sortOpen}
                                                aria-haspopup="menu"
                                                className="tr-sort__btn"
                                                onClick={() => setSortOpen((v) => !v)}
                                                type="button"
                                        >
                                                <span aria-hidden="true" className="tr-sort__icon">
                                                        <svg height="18" viewBox="0 0 24 24" width="18">
                                                                <path
                                                                        d="M4 7h10M4 12h16M4 17h8m6-10v4m-8 5v4"
                                                                        fill="none"
                                                                        stroke="currentColor"
                                                                        strokeLinecap="round"
                                                                        strokeWidth="2"
                                                                />
                                                        </svg>
                                                </span>
                                                Sắp xếp bộ lọc
                                        </button>
                                        <ul className="tr-sort__menu" role="menu">
                                                {SORTS.map((o) => (
                                                        <li key={o.key}>
                                                                <button
                                                                        className={`tr-sort__item ${sortKey === o.key ? "active" : ""}`}
                                                                        onClick={() => {
                                                                                setSortKey(o.key);
                                                                                setSortOpen(false);
                                                                        }}
                                                                        role="menuitem"
                                                                        type="button"
                                                                >
                                                                        {o.label}
                                                                </button>
                                                        </li>
                                                ))}
                                        </ul>
                                </div>
                        </div>

                        <div className="tr-list" ref={listRef}>
                                {pageData.map((t) => (
                                        <article className="tr-card" key={t.id}>
                                                <header className="tr-head">
                                                        <img alt={t.name} className="tr-avatar" src={t.avatar} />
                                                        <div className="tr-head__main">
                                                                <h3 className="tr-name">{t.name}</h3>
                                                                <div className="tr-chips">
                                                                        <span className="tr-chip tr-chip--soft">
                                                                                Hiện là cộng tác viên
                                                                        </span>
                                                                        <span className="tr-chip">Phù hợp</span>
                                                                </div>
                                                        </div>
                                                        <div className="tr-head__meta">
                                                                <div className="tr-rating" title={`${t.rating} sao`}>
                                                                        ★★★★★
                                                                </div>
                                                                <div className="tr-updated">{t.updated}</div>
                                                                <div className="tr-location">
                                                                        <span aria-hidden="true" className="tr-ico">
                                                                                <svg
                                                                                        height="14"
                                                                                        viewBox="0 0 24 24"
                                                                                        width="14"
                                                                                >
                                                                                        <path
                                                                                                d="M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z"
                                                                                                fill="none"
                                                                                                stroke="currentColor"
                                                                                                strokeWidth="2"
                                                                                        />
                                                                                </svg>
                                                                        </span>
                                                                        {t.district}
                                                                </div>
                                                                <div className="tr-location">
                                                                        <span aria-hidden="true" className="tr-ico">
                                                                                <svg
                                                                                        height="14"
                                                                                        viewBox="0 0 24 24"
                                                                                        width="14"
                                                                                >
                                                                                        <path
                                                                                                d="M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z"
                                                                                                fill="none"
                                                                                                stroke="currentColor"
                                                                                                strokeWidth="2"
                                                                                        />
                                                                                </svg>
                                                                        </span>
                                                                        {t.city}
                                                                </div>
                                                        </div>
                                                </header>

                                                <div className="tr-divider" />

                                                <div className="tr-rows">
                                                        <div className="tr-row">
                                                                <div className="tr-label">Học phí:</div>
                                                                <div className="tr-value">
                                                                        <span className="tr-fee">
                                                                                {formatVND(t.fee)}
                                                                                {t.feeUnit
                                                                                        ? `/${t.feeUnit.split("/")[1]}`
                                                                                        : ""}
                                                                        </span>
                                                                </div>
                                                        </div>
                                                        <div className="tr-row">
                                                                <div className="tr-label">Nhận tối đa:</div>
                                                                <div className="tr-value">{t.maxStudents}</div>
                                                        </div>
                                                        <div className="tr-row">
                                                                <div className="tr-label">Hồ sơ ứng tuyển:</div>
                                                                <div className="tr-value">
                                                                        Trình độ – <b>{t.degree}</b> • Kinh nghiệm –{" "}
                                                                        {t.exp}
                                                                </div>
                                                        </div>
                                                        <div className="tr-row">
                                                                <div className="tr-label">Môn lớp:</div>
                                                                <div className="tr-value">
                                                                        <i>{t.subjectLine}</i>
                                                                </div>
                                                        </div>
                                                        <div className="tr-tags">
                                                                {t.tags.map((tag, i) => (
                                                                        <span className="tr-tag" key={i}>
                                                                                {tag}
                                                                        </span>
                                                                ))}
                                                        </div>
                                                </div>

                                                <footer className="tr-actions">
                                                        <button className="tr-btn tr-btn--blue">Xem hồ sơ</button>
                                                        <button className="tr-btn tr-btn--orange">
                                                                Học thử 1 buổi
                                                        </button>
                                                </footer>
                                        </article>
                                ))}
                        </div>

                        {/* Pager */}
                        <div className="tr-pager">
                                {Array.from({ length: totalPages }).map((_, i) => (
                                        <button
                                                aria-label={`Tới trang ${i + 1}`}
                                                className={`tr-dot ${i === page ? "active" : ""}`}
                                                key={i}
                                                onClick={() => go(i)}
                                                type="button"
                                        />
                                ))}
                        </div>
                </main>
        );

        // In layout: chỉ trả về Content
        if (inLayout) return Content;

        return (
                <div className="listing-layout">
                        <aside aria-hidden="true" className="filter-pane-placeholder" />

                        {/* RIGHT: Results */}
                        <main className="tutor-results">
                                <div className="tr-topbar">
                                        <div className={`tr-sort ${sortOpen ? "open" : ""}`}>
                                                <button
                                                        aria-expanded={sortOpen}
                                                        aria-haspopup="menu"
                                                        className="tr-sort__btn"
                                                        onClick={() => setSortOpen((v) => !v)}
                                                >
                                                        <span aria-hidden="true" className="tr-sort__icon">
                                                                {/* icon sliders */}
                                                                <svg height="18" viewBox="0 0 24 24" width="18">
                                                                        <path
                                                                                d="M4 7h10M4 12h16M4 17h8m6-10v4m-8 5v4"
                                                                                fill="none"
                                                                                stroke="currentColor"
                                                                                strokeLinecap="round"
                                                                                strokeWidth="2"
                                                                        />
                                                                </svg>
                                                        </span>
                                                        Sắp xếp bộ lọc
                                                </button>
                                                <ul className="tr-sort__menu" role="menu">
                                                        {SORTS.map((o) => (
                                                                <li key={o.key}>
                                                                        <button
                                                                                className={`tr-sort__item ${sortKey === o.key ? "active" : ""}`}
                                                                                onClick={() => {
                                                                                        setSortKey(o.key);
                                                                                        setSortOpen(false);
                                                                                }}
                                                                                role="menuitem"
                                                                        >
                                                                                {o.label}
                                                                        </button>
                                                                </li>
                                                        ))}
                                                </ul>
                                        </div>
                                </div>

                                <div className="tr-list">
                                        {pageData.map((t) => (
                                                <article className="tr-card" key={t.id}>
                                                        <header className="tr-head">
                                                                <img
                                                                        alt={t.name}
                                                                        className="tr-avatar"
                                                                        src={t.avatar}
                                                                />
                                                                <div className="tr-head__main">
                                                                        <h3 className="tr-name">{t.name}</h3>
                                                                        <div className="tr-chips">
                                                                                <span className="tr-chip tr-chip--soft">
                                                                                        Hiện là cộng tác viên
                                                                                </span>
                                                                                <span className="tr-chip">Phù hợp</span>
                                                                        </div>
                                                                </div>
                                                                <div className="tr-head__meta">
                                                                        <div
                                                                                className="tr-rating"
                                                                                title={`${t.rating} sao`}
                                                                        >
                                                                                ★★★★★
                                                                        </div>
                                                                        <div className="tr-updated">{t.updated}</div>
                                                                        <div className="tr-location">
                                                                                <span
                                                                                        aria-hidden="true"
                                                                                        className="tr-ico"
                                                                                >
                                                                                        <svg
                                                                                                height="14"
                                                                                                viewBox="0 0 24 24"
                                                                                                width="14"
                                                                                        >
                                                                                                <path
                                                                                                        d="M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z"
                                                                                                        fill="none"
                                                                                                        stroke="currentColor"
                                                                                                        strokeWidth="2"
                                                                                                />
                                                                                        </svg>
                                                                                </span>
                                                                                {t.district}
                                                                        </div>
                                                                        <div className="tr-location">
                                                                                <span
                                                                                        aria-hidden="true"
                                                                                        className="tr-ico"
                                                                                >
                                                                                        <svg
                                                                                                height="14"
                                                                                                viewBox="0 0 24 24"
                                                                                                width="14"
                                                                                        >
                                                                                                <path
                                                                                                        d="M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z"
                                                                                                        fill="none"
                                                                                                        stroke="currentColor"
                                                                                                        strokeWidth="2"
                                                                                                />
                                                                                        </svg>
                                                                                </span>
                                                                                {t.city}
                                                                        </div>
                                                                </div>
                                                        </header>

                                                        <div className="tr-divider" />

                                                        <div className="tr-rows">
                                                                <div className="tr-row">
                                                                        <div className="tr-label">Học phí:</div>
                                                                        <div className="tr-value">
                                                                                <span className="tr-fee">
                                                                                        {formatVND(t.fee)}
                                                                                        {t.feeUnit
                                                                                                ? `/${t.feeUnit.split("/")[1]}`
                                                                                                : ""}
                                                                                </span>
                                                                        </div>
                                                                </div>

                                                                <div className="tr-row">
                                                                        <div className="tr-label">Nhận tối đa:</div>
                                                                        <div className="tr-value">{t.maxStudents}</div>
                                                                </div>

                                                                <div className="tr-row">
                                                                        <div className="tr-label">Hồ sơ ứng tuyển:</div>
                                                                        <div className="tr-value">
                                                                                Trình độ – <b>{t.degree}</b> &nbsp; •
                                                                                &nbsp; Kinh nghiệm – {t.exp}
                                                                        </div>
                                                                </div>

                                                                <div className="tr-row">
                                                                        <div className="tr-label">Môn lớp:</div>
                                                                        <div className="tr-value">
                                                                                <i>{t.subjectLine}</i>
                                                                        </div>
                                                                </div>

                                                                <div className="tr-tags">
                                                                        {t.tags.map((tag, i) => (
                                                                                <span className="tr-tag" key={i}>
                                                                                        {tag}
                                                                                </span>
                                                                        ))}
                                                                </div>
                                                        </div>

                                                        <footer className="tr-actions">
                                                                <button className="tr-btn tr-btn--blue">
                                                                        Xem hồ sơ
                                                                </button>
                                                                <button className="tr-btn tr-btn--orange">
                                                                        Học thử 1 buổi
                                                                </button>
                                                        </footer>
                                                </article>
                                        ))}
                                </div>

                                <div className="tr-pager">
                                        {Array.from({ length: totalPages }).map((_, i) => (
                                                <button
                                                        aria-label={`Tới trang ${i + 1}`}
                                                        className={`tr-dot ${i === page ? "active" : ""}`}
                                                        key={i}
                                                        onClick={() => go(i)}
                                                        type="button"
                                                />
                                        ))}
                                </div>
                        </main>
                </div>
        );
}
