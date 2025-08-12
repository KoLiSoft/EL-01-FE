import { NavLink } from "react-router-dom";
import "../style/withdraw.css";
import React from "react";
function HelpDrop({ items = [], onClose }) {
  const ref = React.useRef(null);

  // click ra ngoài để đóng
  React.useEffect(() => {
    const onDoc = (e) => { if (ref.current && !ref.current.contains(e.target)) onClose?.(); };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [onClose]);

  return (
    <div ref={ref} className="helpdrop" role="dialog" aria-label="Trợ giúp nạp tiền">
      <div className="helpdrop__head">
        <span>Trợ giúp chưa nhận được tiền nạp về</span>
        <button className="helpdrop__close" onClick={onClose}>×</button>
      </div>

      <ul className="helpdrop__list">
        {items.map((it, i) => (
          <li key={i} className="helpdrop__item">
            <div className="helpdrop__badge">
              <div className="helpdrop__badge-top">Mã</div>
              <div className="helpdrop__badge-code">{it.code}</div>
            </div>

            <div className="helpdrop__body">
              <div className="helpdrop__title">Gửi trợ giúp lần {it.attempt}</div>
              <div className="helpdrop__meta">Ngày: {it.date}</div>
              <button className="helpdrop__btn">Xem lại vấn đề</button>
            </div>

            <div className={`helpdrop__status helpdrop__status--${it.status}`}>
              {it.status === "pending" ? "Đang chờ" : it.status === "rejected" ? "Từ chối" : "Thành công"}
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
    { code: "RT5", attempt: 6, date: "13/10/2024", status: "pending" },
    { code: "RT4", attempt: 6, date: "11/10/2024", status: "rejected" },
    { code: "RT3", attempt: 6, date: "12/10/2024", status: "success" },
  ];
    const BANKS_VN = [
  { code: "VCB", name: "Vietcombank", full: "Ngân hàng TMCP Ngoại thương Việt Nam" },
  { code: "BIDV", name: "BIDV", full: "Ngân hàng TMCP Đầu tư và Phát triển Việt Nam" },
  { code: "CTG", name: "VietinBank", full: "Ngân hàng TMCP Công thương Việt Nam" },
  { code: "ACB", name: "ACB", full: "Ngân hàng TMCP Á Châu" },
  { code: "TCB", name: "Techcombank", full: "Ngân hàng TMCP Kỹ Thương Việt Nam" },
  { code: "STB", name: "Sacombank", full: "Ngân hàng TMCP Sài Gòn Thương Tín" },
  { code: "MBB", name: "MB Bank", full: "Ngân hàng TMCP Quân đội" },
  { code: "VPB", name: "VPBank", full: "Ngân hàng TMCP Việt Nam Thịnh Vượng" },
  { code: "AGR", name: "Agribank", full: "Ngân hàng Nông nghiệp và PTNT Việt Nam" },
  { code: "TPB", name: "TPBank", full: "Ngân hàng TMCP Tiên Phong" },
  { code: "VIB", name: "VIB", full: "Ngân hàng TMCP Quốc tế Việt Nam" },
  { code: "HDB", name: "HDBank", full: "Ngân hàng TMCP Phát triển TP.HCM" },
  { code: "SHB", name: "SHB", full: "Ngân hàng TMCP Sài Gòn – Hà Nội" },
  { code: "EIB", name: "Eximbank", full: "Ngân hàng TMCP Xuất Nhập Khẩu Việt Nam" },
  { code: "OCB", name: "OCB", full: "Ngân hàng TMCP Phương Đông" },
  { code: "SCB", name: "SCB", full: "Ngân hàng TMCP Sài Gòn" },
  { code: "SEAB", name: "SeABank", full: "Ngân hàng TMCP Đông Nam Á" },
  { code: "ABB", name: "ABBank", full: "Ngân hàng TMCP An Bình" },
  { code: "BVB", name: "VietCapital Bank", full: "Ngân hàng TMCP Bản Việt" },
  { code: "NAB", name: "Nam A Bank", full: "Ngân hàng TMCP Nam Á" },
  { code: "PVCB", name: "PVcomBank", full: "Ngân hàng TMCP Đại Chúng Việt Nam" },
  { code: "BAB", name: "Bac A Bank", full: "Ngân hàng TMCP Bắc Á" },
  { code: "KLB", name: "KienlongBank", full: "Ngân hàng TMCP Kiên Long" },
  { code: "SGB", name: "SaigonBank", full: "Ngân hàng TMCP Sài Gòn Công Thương" },
  { code: "MSB", name: "MSB", full: "Ngân hàng TMCP Hàng Hải Việt Nam" },
  { code: "LPB", name: "LPBank", full: "Ngân hàng TMCP Bưu điện Liên Việt" },
  { code: "VBB", name: "VietBank", full: "Ngân hàng TMCP Việt Nam Thương Tín" },
  { code: "NCB", name: "NCB", full: "Ngân hàng TMCP Quốc Dân" },
  { code: "PGB", name: "PGBank", full: "Ngân hàng TMCP Xăng dầu Petrolimex" },
  { code: "BVBank", name: "BaoViet Bank", full: "Ngân hàng TMCP Bảo Việt" },
  { code: "Ocean", name: "OceanBank", full: "Ngân hàng TM TNHH MTV Đại Dương" },
  { code: "GPB", name: "GPBank", full: "Ngân hàng TM TNHH MTV Dầu Khí Toàn Cầu" }
];
  return (
    <div className="wd">
      {/* Tabs */}
      <div className="wd__tabs">
        <NavLink to=".." end relative="path" className="trxn__tab">Lịch sử giao dịch</NavLink>
        <NavLink to="../topup" relative="path" className="trxn__tab">Nạp tiền</NavLink>
        <NavLink to="../withdraw" relative="path" className="trxn__tab">Rút tiền</NavLink>
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

        {openHelp && (
          <HelpDrop items={helpItems} onClose={() => setOpenHelp(false)} />
        )}
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
    {BANKS_VN.map(b => (
      <option key={b.code} value={b.code}>{b.name} ({b.code})</option>
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
              <button className="wd__btn wd__btn--warning">Xóa thông tin</button>
              <span className="wd__note">Theo quy định của Edulinktutor, bạn chỉ được rút tiền khi bạn là giáo viên hoặc học viên đã tham gia học lớp học đầu tiên</span>
            </div>
            <button className="wd__btn wd__btn--primary">Gửi yêu cầu rút tiền</button>
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
