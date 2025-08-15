import { useEffect, useState } from "react";
import "../style/transactions.css";
import { NavLink } from "react-router-dom";
import { getTransactions, getWallet } from "../hooks/auth.hooks.js";
import { config } from "../lib/config.js";

export default function Transactions() {
        const [wallet, setWallet] = useState(null);
        const [transactions, setTransactions] = useState([]);
        const [searchTerm, setSearchTerm] = useState("");
        const [filteredTransactions, setFilteredTransactions] = useState([]);

        useEffect(() => {
                const fetchWallet = async () => {
                        const response = await getWallet();
                        setWallet(response.data);
                };
                const fetchTransactions = async () => {
                        const response = await getTransactions();
                        setTransactions(response.data.transactions || []);
                };
                fetchWallet();
                fetchTransactions();
        }, []);

        useEffect(() => {
                if (transactions.length > 0) {
                        const filtered = transactions.filter((transaction) => {
                                const searchLower = searchTerm.toLowerCase();
                                const description = transaction.description?.toLowerCase() || "";
                                const amount = transaction.amount?.toString() || "";
                                const status = transaction.status?.toLowerCase() || "";

                                return (
                                        description.includes(searchLower) ||
                                        amount.includes(searchLower) ||
                                        status.includes(searchLower)
                                );
                        });
                        setFilteredTransactions(filtered);
                } else {
                        setFilteredTransactions([]);
                }
        }, [transactions, searchTerm]);

        if (!wallet || !Array.isArray(transactions)) {
                return <div>Loading...</div>;
        }

        return (
                <div className="trxn">
                        {/* Tabs */}
                        <div className="trxn__tabs">
                                <NavLink className="trxn__tab" end to="">
                                        Lịch sử giao dịch
                                </NavLink>
                                <NavLink className="trxn__tab" to="topup">
                                        Nạp tiền
                                </NavLink>
                                <NavLink className="trxn__tab" to="withdraw">
                                        Rút tiền
                                </NavLink>
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
                                        <div className="trxn__balance-amt">
                                                {wallet?.balance?.toLocaleString(config.locale, {
                                                        currency: config.currency,
                                                        style: "currency",
                                                })}
                                        </div>
                                        <NavLink className="trxn__balance-add" to="/topup">
                                                Nạp tiền
                                        </NavLink>
                                </aside>
                        </section>

                        {/* Filters */}
                        <div className="trxn__filters">
                                <input
                                        className="trxn__search"
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        placeholder="Nhập tên dịch vụ, số tiền"
                                        value={searchTerm}
                                />
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
                                {filteredTransactions.length > 0 ? (
                                        filteredTransactions.map((transaction) => (
                                                <div className="trxn__item" key={transaction.id}>
                                                        <div className="trxn__cell trxn__title">
                                                                {transaction.description}
                                                        </div>
                                                        <div className="trxn__cell">{transaction.createdAt}</div>
                                                        <div className="trxn__cell trxn__money trxn__money--out">
                                                                {transaction.amount.toLocaleString(config.locale, {
                                                                        currency: config.currency,
                                                                        style: "currency",
                                                                })}
                                                        </div>
                                                        <div className="trxn__cell">
                                                                <span className="trxn__status trxn__status--success">
                                                                        {transaction.status}
                                                                </span>
                                                        </div>
                                                </div>
                                        ))
                                ) : searchTerm ? (
                                        <div className="trxn__no-results">
                                                <p>Không tìm thấy giao dịch nào phù hợp với "{searchTerm}"</p>
                                        </div>
                                ) : (
                                        <div className="trxn__no-results">
                                                <p>Không có giao dịch nào</p>
                                        </div>
                                )}
                        </div>
                </div>
        );
}
