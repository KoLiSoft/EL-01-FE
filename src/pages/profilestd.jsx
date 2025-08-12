import { NavLink, Outlet } from "react-router-dom";
import "../style/profilestd.css";
import img1 from "../assets/img/teacher2.png";
export default function ProfileStd() {
        const cx = ({ isActive }) => `prstd__nav-item ${isActive ? "prstd__nav-item--active" : ""}`;

        return (
                <div className="prstd profile-std">
                        <aside className="prstd__sidebar">
                                <div className="prstd__sidebar-avatar">
                                        <img src={img1} alt="" />
                                </div>
                                <nav className="prstd__sidebar-nav">
                                        <NavLink end to="" className={cx}>
                                                Thông tin cá nhân
                                        </NavLink>
                                        <NavLink to="docs" className={cx}>
                                                Tài liệu
                                        </NavLink>
                                        <NavLink to="settings" className={cx}>
                                                Cài đặt
                                        </NavLink>
                                        <NavLink to="wallet" className={cx}>
                                                Ví
                                        </NavLink>
                                </nav>
                        </aside>

                        <main className="prstd__content">
                                <Outlet />
                        </main>
                </div>
        );
}
