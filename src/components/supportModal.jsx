import { useEffect } from "react";
import "../style/support.css";

const STATUS_TXT = {
        pending: "Đang chờ",
        rejected: "Từ chối",
        success: "Thành công",
};

export default function SupportModal({ open, onClose, items = [], title = "Trợ giúp chưa nhận được tiền rút về" }) {
        // ESC để đóng
        useEffect(() => {
                if (!open) return;
                const onKey = (e) => e.key === "Escape" && onClose?.();
                window.addEventListener("keydown", onKey);
                return () => window.removeEventListener("keydown", onKey);
        }, [open, onClose]);

        if (!open) return null;

        return (
                <div aria-labelledby="helpdlg-title" aria-modal="true" className="helpdlg" role="dialog">
                        <div className="helpdlg__overlay" onClick={onClose} />
                        <div className="helpdlg__panel">
                                <button aria-label="Đóng" className="helpdlg__close" onClick={onClose}>
                                        ×
                                </button>

                                <button className="helpdlg__search" id="helpdlg-title">
                                        {title} <span className="helpdlg__search-plus">＋</span>
                                </button>

                                <ul className="helpdlg__list">
                                        {items.map((it, i) => (
                                                <li className="helpdlg__item" key={i}>
                                                        <div className="helpdlg__row">
                                                                <div className="helpdlg__badge">
                                                                        <div className="helpdlg__badge-top">Mã</div>
                                                                        <div className="helpdlg__badge-code">
                                                                                {it.code}
                                                                        </div>
                                                                </div>

                                                                <div className="helpdlg__body">
                                                                        <div className="helpdlg__title">
                                                                                Gửi trợ giúp lần {it.attempt}
                                                                        </div>
                                                                        <div className="helpdlg__meta">
                                                                                Ngày: {it.date}
                                                                        </div>

                                                                        <button className="helpdlg__btn">
                                                                                Xem lại vấn đề
                                                                        </button>
                                                                </div>

                                                                <div
                                                                        className={`helpdlg__status helpdlg__status--${it.status}`}
                                                                >
                                                                        {STATUS_TXT[it.status] || it.status}
                                                                </div>
                                                        </div>

                                                        {i < items.length - 1 && <div className="helpdlg__divider" />}
                                                </li>
                                        ))}
                                </ul>
                        </div>
                </div>
        );
}
