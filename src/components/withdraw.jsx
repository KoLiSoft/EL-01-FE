import { NavLink } from "react-router-dom";
import "../style/withdraw.css";
import React from "react";

function HelpDrop({ items = [], onClose }) {
        const ref = React.useRef(null);

        // click ra ngoài để đóng
        React.useEffect(() => {
                const onDoc = (e) => {
                        if (ref.current && !ref.current.contains(e.target)) onClose?.();
                };
                document.addEventListener("mousedown", onDoc);
                return () => document.removeEventListener("mousedown", onDoc);
        }, [onClose]);

        return (
                <div aria-label="Trợ giúp nạp tiền" className="helpdrop" ref={ref} role="dialog">
                        <div className="helpdrop__head">
                                <span>Trợ giúp chưa nhận được tiền nạp về</span>
                                <button className="helpdrop__close" onClick={onClose}>
                                        ×
                                </button>
                        </div>

                        <ul className="helpdrop__list">
                                {items.map((it, i) => (
                                        <li className="helpdrop__item" key={i}>
                                                <div className="helpdrop__badge">
                                                        <div className="helpdrop__badge-top">Mã</div>
                                                        <div className="helpdrop__badge-code">{it.code}</div>
                                                </div>

                                                <div className="helpdrop__body">
                                                        <div className="helpdrop__title">
                                                                Gửi trợ giúp lần {it.attempt}
                                                        </div>
                                                        <div className="helpdrop__meta">Ngày: {it.date}</div>
                                                        <button className="helpdrop__btn">Xem lại vấn đề</button>
                                                </div>

                                                <div className={`helpdrop__status helpdrop__status--${it.status}`}>
                                                        {it.status === "pending"
                                                                ? "Đang chờ"
                                                                : it.status === "rejected"
                                                                  ? "Từ chối"
                                                                  : "Thành công"}
                                                </div>
                                        </li>
                                ))}
                        </ul>
                </div>
        );
}
export default function Withdraw() {
        const [openHelp, setOpenHelp] = React.useState(false);
        const helpItems = [
                { attempt: 6, code: "RT5", date: "13/10/2024", status: "pending" },
                { attempt: 6, code: "RT4", date: "11/10/2024", status: "rejected" },
                { attempt: 6, code: "RT3", date: "12/10/2024", status: "success" },
        ];
        const BANKS_VN = [
                {
                        code: "VCB",
                        full: "Ngân hàng TMCP Ngoại thương Việt Nam",
                        name: "Vietcombank",
                },
                {
                        code: "BIDV",
                        full: "Ngân hàng TMCP Đầu tư và Phát triển Việt Nam",
                        name: "BIDV",
                },
                {
                        code: "CTG",
                        full: "Ngân hàng TMCP Công thương Việt Nam",
                        name: "VietinBank",
                },
                { code: "ACB", full: "Ngân hàng TMCP Á Châu", name: "ACB" },
                {
                        code: "TCB",
                        full: "Ngân hàng TMCP Kỹ Thương Việt Nam",
                        name: "Techcombank",
                },
                {
                        code: "STB",
                        full: "Ngân hàng TMCP Sài Gòn Thương Tín",
                        name: "Sacombank",
                },
                { code: "MBB", full: "Ngân hàng TMCP Quân đội", name: "MB Bank" },
                {
                        code: "VPB",
                        full: "Ngân hàng TMCP Việt Nam Thịnh Vượng",
                        name: "VPBank",
                },
                {
                        code: "AGR",
                        full: "Ngân hàng Nông nghiệp và PTNT Việt Nam",
                        name: "Agribank",
                },
                { code: "TPB", full: "Ngân hàng TMCP Tiên Phong", name: "TPBank" },
                { code: "VIB", full: "Ngân hàng TMCP Quốc tế Việt Nam", name: "VIB" },
                { code: "HDB", full: "Ngân hàng TMCP Phát triển TP.HCM", name: "HDBank" },
                { code: "SHB", full: "Ngân hàng TMCP Sài Gòn – Hà Nội", name: "SHB" },
                {
                        code: "EIB",
                        full: "Ngân hàng TMCP Xuất Nhập Khẩu Việt Nam",
                        name: "Eximbank",
                },
                { code: "OCB", full: "Ngân hàng TMCP Phương Đông", name: "OCB" },
                { code: "SCB", full: "Ngân hàng TMCP Sài Gòn", name: "SCB" },
                { code: "SEAB", full: "Ngân hàng TMCP Đông Nam Á", name: "SeABank" },
                { code: "ABB", full: "Ngân hàng TMCP An Bình", name: "ABBank" },
                { code: "BVB", full: "Ngân hàng TMCP Bản Việt", name: "VietCapital Bank" },
                { code: "NAB", full: "Ngân hàng TMCP Nam Á", name: "Nam A Bank" },
                {
                        code: "PVCB",
                        full: "Ngân hàng TMCP Đại Chúng Việt Nam",
                        name: "PVcomBank",
                },
                { code: "BAB", full: "Ngân hàng TMCP Bắc Á", name: "Bac A Bank" },
                { code: "KLB", full: "Ngân hàng TMCP Kiên Long", name: "KienlongBank" },
                {
                        code: "SGB",
                        full: "Ngân hàng TMCP Sài Gòn Công Thương",
                        name: "SaigonBank",
                },
                { code: "MSB", full: "Ngân hàng TMCP Hàng Hải Việt Nam", name: "MSB" },
                { code: "LPB", full: "Ngân hàng TMCP Bưu điện Liên Việt", name: "LPBank" },
                {
                        code: "VBB",
                        full: "Ngân hàng TMCP Việt Nam Thương Tín",
                        name: "VietBank",
                },
                { code: "NCB", full: "Ngân hàng TMCP Quốc Dân", name: "NCB" },
                { code: "PGB", full: "Ngân hàng TMCP Xăng dầu Petrolimex", name: "PGBank" },
                { code: "BVBank", full: "Ngân hàng TMCP Bảo Việt", name: "BaoViet Bank" },
                {
                        code: "Ocean",
                        full: "Ngân hàng TM TNHH MTV Đại Dương",
                        name: "OceanBank",
                },
                {
                        code: "GPB",
                        full: "Ngân hàng TM TNHH MTV Dầu Khí Toàn Cầu",
                        name: "GPBank",
                },
        ];
        return (
                <div className="wd">
                        {/* Tabs */}
                        <div className="wd__tabs">
                                <NavLink className="trxn__tab" end relative="path" to="..">
                                        Lịch sử giao dịch
                                </NavLink>
                                <NavLink className="trxn__tab" relative="path" to="../topup">
                                        Nạp tiền
                                </NavLink>
                                <NavLink className="trxn__tab" relative="path" to="../withdraw">
                                        Rút tiền
                                </NavLink>
                                {/* <button className="wd__tab" disabled>Quá trình học</button> */}
                        </div>

                        {/* Balance + help */}
                        <div className="topup__row topup__row--rel">
                                <div className="topup__balance">
                                        Số dư tài khoản hiện tại: <strong>7.000.000VND</strong>
                                </div>

                                <button className="topup__help" onClick={() => setOpenHelp((v) => !v)}>
                                        ❔ Trợ giúp nạp tiền
                                </button>

                                {openHelp && <HelpDrop items={helpItems} onClose={() => setOpenHelp(false)} />}
                        </div>

                        {/* Form panel */}
                        <section className="wd__panel">
                                <div className="wd__panel-hd">
                                        <h4>Thông tin chuyển khoản:</h4>
                                        <small>Gửi yêu cầu rút tiền trong vòng 24 giờ</small>
                                </div>

                                <div className="wd__form">
                                        <div className="wd__grid">
                                                <label className="wd__field">
                                                        <input placeholder="Tên người dùng" />
                                                </label>
                                                <label className="wd__field">
                                                        <select className="wd__select">
                                                                <option value="">Danh sách ngân hàng hỗ trợ</option>
                                                                {BANKS_VN.map((b) => (
                                                                        <option key={b.code} value={b.code}>
                                                                                {b.name} ({b.code})
                                                                        </option>
                                                                ))}
                                                        </select>
                                                </label>
                                                <label className="wd__field">
                                                        <input placeholder="Nhập số tài khoản của bạn" />
                                                </label>
                                                <label className="wd__field">
                                                        <input placeholder="Nhập số tiền cần rút > 20.000 VND" />
                                                </label>
                                        </div>

                                        <div className="wd__actions">
                                                <div className="wd__actions-left">
                                                        <button className="wd__btn wd__btn--warning">
                                                                Xóa thông tin
                                                        </button>
                                                        <span className="wd__note">
                                                                Theo quy định của Edulinktutor, bạn chỉ được rút tiền
                                                                khi bạn là giáo viên hoặc học viên đã tham gia học lớp
                                                                học đầu tiên
                                                        </span>
                                                </div>
                                                <button className="wd__btn wd__btn--primary">
                                                        Gửi yêu cầu rút tiền
                                                </button>
                                        </div>
                                </div>
                        </section>

                        <div className="wd__list-hd">
                                <span>Danh sách các biên lai nạp tiền</span>
                                <span>Đang có: 0</span>
                        </div>
                </div>
        );
}
