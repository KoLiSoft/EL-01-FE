import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../style/topup.css";
import vietqr from "../assets/img/vietqr-edulinktutor.png";

function CopyInput({ label, value = "", editable = false }) {
        const [val, setVal] = React.useState(value);
        const [copied, setCopied] = React.useState(false);

        const doCopy = async () => {
                try {
                        await navigator.clipboard.writeText(val || "");
                        setCopied(true);
                        setTimeout(() => setCopied(false), 1200);
                } catch (_) {}
        };

        return (
                <label>
                        <span>{label}</span>
                        <div className="topup__copywrap">
                                <input
                                        onChange={(e) => (editable ? setVal(e.target.value) : null)}
                                        readOnly={!editable}
                                        value={val}
                                />
                                <button className="topup__copybtn" onClick={doCopy} type="button">
                                        {copied ? "Đã copy" : "Copy"}
                                </button>
                        </div>
                </label>
        );
}
const BANK_INFO = {
        account: "79797979",
        accountMasked: "797***979",
        bank: "ACB - Ngân hàng TMCP Á Châu",
        holder: "EDULINKTUTOR",
};
const userId = "123456789",
        username = "Nguyen Van A";
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
export default function TopUp({ qrImage, bankInfo }) {
        const [openHelp, setOpenHelp] = React.useState(false);
        const helpItems = [
                { attempt: 6, code: "RT5", date: "13/10/2024", status: "pending" },
                { attempt: 6, code: "RT4", date: "11/10/2024", status: "rejected" },
                { attempt: 6, code: "RT3", date: "12/10/2024", status: "success" },
        ];

        const { pathname } = useLocation();
        const isEW = pathname.startsWith("/topup/ew");
        const bank = { ...BANK_INFO, ...(bankInfo || {}) };
        const qrSrc = qrImage || vietqr;

        return (
                <div className="topup">
                        {/* Tabs (simple) */}
                        <div className="topup__tabs">
                                <NavLink className="trxn__tab" end relative="path" to="..">
                                        Lịch sử giao dịch
                                </NavLink>
                                <NavLink className="trxn__tab" relative="path" to="../topup">
                                        Nạp tiền
                                </NavLink>
                                <NavLink className="trxn__tab" relative="path" to="../withdraw">
                                        Rút tiền
                                </NavLink>
                                {/* <button className="topup__tab" disabled>Quá trình học</button> */}
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

                        {/* Payment methods */}
                        <div className="topup__methods">
                                <div className="topup__method-type">
                                        <span>Chọn phương thức nạp</span>
                                        <NavLink
                                                className={`topup__radio ${!isEW ? "topup__radio--active" : ""}`}
                                                to="."
                                        >
                                                Ngân hàng
                                        </NavLink>
                                        <NavLink
                                                className={`topup__radio ${isEW ? "topup__radio--active" : ""}`}
                                                to="../ewallet"
                                        >
                                                Ví điện tử
                                        </NavLink>
                                </div>
                                {/* <div className="topup__banks">
          <button className="topup__bank">Sacombank</button>
          <button className="topup__bank">BIDV</button>
          <button className="topup__bank">VietinBank</button>
          <button className="topup__bank">ACB</button>
        </div> */}
                        </div>

                        {/* Main two-column area matching mock */}
                        <section className="topup__panel">
                                <div className="topup__panel-hd">
                                        <h4>Thông tin chuyển khoản:</h4>
                                        <div className="topup__panel-right">Mã QR</div>
                                </div>

                                <div className="topup__form-grid">
                                        {/* Left form */}
                                        <div className="topup__form">
                                                <CopyInput label="Ngân hàng:" value={bank.bank} />
                                                <CopyInput label="Số tài khoản:" value={bank.account} />
                                                <CopyInput label="Chủ tài khoản:" value={bank.holder} />
                                                <CopyInput
                                                        editable
                                                        label="Nội dung chuyển tiền:"
                                                        value={`${bank.holder} - ${userId} - ${username}`}
                                                />

                                                <div className="topup__actions">
                                                        <button className="topup__btn topup__btn--ghost">
                                                                Hủy bỏ nạp tiền
                                                        </button>
                                                        <div className="topup__actions-right">
                                                                <button className="topup__btn topup__btn--primary">
                                                                        Đã Thanh Toán
                                                                </button>
                                                        </div>
                                                </div>
                                        </div>

                                        {/* Right QR mini card */}
                                        <aside className="topup__qr-mini">
                                                <img alt="VietQR" src={qrSrc} />
                                                <div className="topup__qr-mini-meta">
                                                        <div>
                                                                <strong>Ngân hàng thụ hưởng</strong>
                                                                <br />
                                                                {bank.bank}
                                                        </div>
                                                        <div>
                                                                <strong>Số TK</strong>
                                                                <br />
                                                                {bank.accountMasked || bank.account}
                                                        </div>
                                                        <div>
                                                                <strong>Tên chủ tài khoản</strong>
                                                                <br />
                                                                {bank.holder}
                                                        </div>
                                                </div>
                                        </aside>
                                </div>
                        </section>

                        {/* Footer list */}
                        <div className="topup__list-hd">
                                <span>Danh sách các biên lai nạp tiền</span>
                                <span>Đang có: 0</span>
                        </div>
                </div>
        );
}
