// EWallet.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../style/topup.css";
import walletQR from "../assets/img/ewallet-qr.png";
// nút copy tái dùng
function CopyInput({ label, value = "", editable = false }) {
  const [val, setVal] = React.useState(value);
  const [copied, setCopied] = React.useState(false);
  const doCopy = async () => {
    try { await navigator.clipboard.writeText(val || ""); setCopied(true); setTimeout(() => setCopied(false), 1200);} catch {}
  };
  return (
    <label>
      <span>{label}</span>
      <div className="topup__copywrap">
        <input value={val} onChange={e => editable ? setVal(e.target.value) : null} readOnly={!editable} />
        <button type="button" className={"topup__copybtn" + (copied ? " is-copied" : "")} onClick={doCopy}>
          {copied ? "Đã copy" : "Copy"}
        </button>
      </div>
    </label>
  );
}

const WALLET_DEFAULT = {
  provider: "MoMo",
  walletId: "0937979799",
  holder: "EDULINKTUTOR",
  content: "EDULINKTUTOR - 123456789 - Nguyen Van A",
};

export default function EWallet({ qrImage, walletInfo }) {
  const info = { ...WALLET_DEFAULT, ...(walletInfo || {}) };
  const qrSrc = qrImage || walletQR;

  return (
    <div className="topup">{/* dùng cùng wrapper */}
      {/* Tabs trên cùng */}
      <div className="topup__tabs">
        <Link to="/transactions" className="topup__tab">Lịch sử giao dịch</Link>
        <Link to="/topup" className="trxn__tab">Nạp tiền</Link>
        <Link to="/withdraw" className="trxn__tab">Rút tiền</Link>
        {/* <button className="topup__tab" disabled>Quá trình học</button> */}
      </div>
<div className="topup__row">
        <div className="topup__balance">Số dư tài khoản hiện tại: <strong>7.000.000VND</strong></div>
        <button className="topup__help">❔ Trợ giúp nạp tiền</button>
      </div>
      {/* Phương thức nạp: link chuyển trang */}
      <div className="topup__methods">
        <div className="topup__method-type">
          <span>Chọn phương thức nạp</span>
          <Link to="/topup" className="topup__radio">Ngân hàng</Link>
          <span className="topup__radio topup__radio--active">Ví điện tử</span>
        </div>
      </div>

      {/* Panel 2 cột: Trái thông tin – Phải QR ví */}
      <section className="topup__panel">
        <div className="topup__panel-hd">
          <h4>Thông tin ví điện tử:</h4>
          <div className="topup__panel-right">Mã QR</div>
        </div>

        <div className="topup__form-grid">
          {/* Trái: form copy */}
          <div className="topup__form">
            <CopyInput label="Ví điện tử:" value={info.provider} />
            <CopyInput label="Số điện thoại / ID ví:" value={info.walletId} />
            <CopyInput label="Tên chủ ví:" value={info.holder} />
            <CopyInput label="Nội dung chuyển tiền:" value={info.content} editable />

            <div className="topup__actions">
              <button className="topup__btn topup__btn--ghost">Hủy bỏ nạp tiền</button>
              <div className="topup__actions-right">
                <button className="topup__btn topup__btn--primary">Đã Thanh Toán</button>
              </div>
            </div>
          </div>

          {/* Phải: QR ví */}
          <aside className="topup__qr-mini">
            <img src={qrSrc} alt="QR ví điện tử" />
            <div className="topup__qr-mini-meta">
              <div><strong>Ví:</strong> {info.provider}</div>
              <div><strong>ID/SĐT:</strong> {info.walletId}</div>
              <div><strong>Chủ ví:</strong> {info.holder}</div>
            </div>
          </aside>
        </div>
      </section>

      <div className="topup__list-hd">
        <span>Danh sách các biên lai nạp tiền</span>
        <span>Đang có: 0</span>
      </div>
    </div>
  );
}
