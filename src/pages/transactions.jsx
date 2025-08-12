import "../style/transactions.css";
import { NavLink } from "react-router-dom";

export default function Transactions() {
  return (
    <div className="trxn">
      {/* Tabs */}
      <div className="trxn__tabs">
        <NavLink end to="" className="trxn__tab">Lịch sử giao dịch</NavLink>
  <NavLink to="topup" className="trxn__tab">Nạp tiền</NavLink>
  <NavLink to="withdraw" className="trxn__tab">Rút tiền</NavLink>
        {/* <button className="trxn__tab">Quá trình học</button> */}
      </div>

      {/* Chart + controls */}
      <section className="trxn__chartwrap">
        <div className="trxn__chart">
          {/* Simple axis placeholder */}
          <div className="trxn__ylabels">
            {Array.from({ length: 6 }).map((_, i) => (
              <span key={i}>0 Đồng</span>
            ))}
          </div>
          <div className="trxn__plot">
            <div className="trxn__xlabels">
              {Array.from({ length: 12 }).map((_, i) => (
                <span key={i}>T{i + 1}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="trxn__legend">
          <span className="trxn__dot trxn__dot--blue"></span> Nạp tiền
          <span className="trxn__dot trxn__dot--orange"></span> Thanh toán
          <span className="trxn__dot trxn__dot--gray"></span> Hoàn tiền
        </div>

        {/* Year selector */}
        <div className="trxn__year">
          <button className="trxn__year-btn">‹</button>
          <span>Năm 2025</span>
          <button className="trxn__year-btn">›</button>
        </div>

        {/* Balance card floating */}
        <aside className="trxn__balance">
          <div className="trxn__balance-amt">7.000.000 VND</div>
          <NavLink to="/topup" className="trxn__balance-add">Nạp tiền</NavLink>
        </aside>
      </section>

      {/* Filters */}
      <div className="trxn__filters">
        <input className="trxn__search" placeholder="Nhập tên dịch vụ, số tiền" />
        <div className="trxn__filter-actions">
          <button className="trxn__filter">Lọc thêm ▾</button>
        </div>
      </div>

      {/* List header (visually subtle) */}
      <div className="trxn__listhead">
        <span>Tên dịch vụ</span>
        <span>Ngày giao dịch</span>
        <span>Số tiền</span>
        <span>Trạng thái</span>
      </div>

      {/* Transactions list */}
      <div className="trxn__list">
        <div className="trxn__item">
          <div className="trxn__cell trxn__title">Yêu cầu rút tiền RT1-ND4567</div>
          <div className="trxn__cell">09:09:45 15-10-2024</div>
          <div className="trxn__cell trxn__money trxn__money--out">-3.000.000 VND</div>
          <div className="trxn__cell"><span className="trxn__status trxn__status--success">Thành công</span></div>
        </div>
        <div className="trxn__item">
          <div className="trxn__cell trxn__title">Yêu cầu nạp tiền NT3-ND4567</div>
          <div className="trxn__cell">07:09:00 03-09-2024</div>
          <div className="trxn__cell trxn__money trxn__money--in">+10.000.000 VND</div>
          <div className="trxn__cell"><span className="trxn__status trxn__status--success">Thành công</span></div>
        </div>
      </div>
    </div>
  );
}
