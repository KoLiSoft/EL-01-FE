import { NavLink, Outlet } from "react-router-dom";
import "../style/profilestd.css";
import img1 from "../assets/img/teacher2.png";
export default function ProfileStd() {
        const cx = ({ isActive }) => `prstd__nav-item ${isActive ? "prstd__nav-item--active" : ""}`;

        return (
                <div className="prstd profile-std">
                        <aside className="prstd__sidebar">
                                <div className="prstd__sidebar-avatar">
                                        <img alt="" src={img1} />
                                </div>
                                <nav className="prstd__sidebar-nav">
                                        <NavLink className={cx} end to="">
                                                Thông tin cá nhân
                                        </NavLink>
                                        <NavLink aria-disabled={true} className={cx} to="docs">
                                                Tài liệu
                                        </NavLink>
                                        <NavLink className={cx} to="settings">
                                                Cài đặt
                                        </NavLink>
                                        <NavLink aria-disabled={true} className={cx} to="wallet">
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
