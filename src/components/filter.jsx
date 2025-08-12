import "../style/filter.css";

export default function Filter() {
        return (
                <aside className="sidebar sidebar-page" style={{ width: 280 }}>
                        {/* Top bar tiêu đề + ô tìm kiếm nhỏ giống ảnh */}
                        <div className="topbar" style={{ marginBottom: 8 }}>
                                <div style={{ fontWeight: 700 }}>🧩 Bộ Lọc</div>
                                <input
                                        className="search-input"
                                        placeholder="Tìm kiếm"
                                        style={{ width: 140, height: 28 }}
                                />
                        </div>

                        {/* Ngành học */}
                        <section className="filter-group one-col">
                                <header className="filter-title">Ngành học</header>
                                <div className="check-list">
                                        {["Phổ thông", "Ngoại ngữ", "Âm nhạc", "Luyện thi Đại học"].map((x) => (
                                                <label className="check" key={x}>
                                                        <input type="checkbox" defaultChecked={x === "Phổ thông"} /> {x}
                                                </label>
                                        ))}
                                </div>
                        </section>

                        {/* Môn lớp */}
                        <section className="filter-group">
                                <header className="filter-title">Môn lớp</header>
                                <div className="check-list">
                                        {[
                                                "Toán",
                                                "Lý",
                                                "Hóa",
                                                "Sinh",
                                                "Văn",
                                                "Sử",
                                                "Địa",
                                                "Mỹ Thuật",
                                                "Tin học",
                                                "Toán tư duy",
                                        ].map((x) => (
                                                <label className="check" key={x}>
                                                        <input
                                                                type="checkbox"
                                                                defaultChecked={["Toán", "Lý", "Văn"].includes(x)}
                                                        />{" "}
                                                        {x}
                                                </label>
                                        ))}
                                </div>
                        </section>

                        {/* Cấp bậc */}
                        <section className="filter-group one-col">
                                <header className="filter-title">Cấp bậc</header>
                                <div className="check-list">
                                        {["Bậc tiểu học", "Bậc trung học", "Bậc phổ thông"].map((x) => (
                                                <label className="check" key={x}>
                                                        <input type="checkbox" /> {x}
                                                </label>
                                        ))}
                                </div>
                        </section>

                        {/* Lịch biểu */}
                        <section className="filter-group one-col">
                                <header className="filter-title">Lịch biểu</header>
                                <div className="check-list">
                                        {["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7", "Chủ Nhật"].map((x) => (
                                                <label className="check" key={x}>
                                                        <input
                                                                type="checkbox"
                                                                defaultChecked={["Thứ 2", "Thứ 3"].includes(x)}
                                                        />{" "}
                                                        {x}
                                                </label>
                                        ))}
                                </div>
                                <div className="range" style={{ borderTop: "1px dashed var(--line)" }}>
                                        <div style={{ fontSize: 13, color: "var(--muted)" }}>Thời gian</div>
                                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                                                <input type="time" defaultValue="17:00" />
                                                <input type="time" defaultValue="20:15" />
                                        </div>
                                </div>
                        </section>

                        {/* Trình độ */}
                        <section className="filter-group one-col">
                                <header className="filter-title">Trình độ</header>
                                <div className="check-list">
                                        {["TH Phổ thông", "Trung cấp", "Cao đẳng", "Đại học", "Thạc sĩ", "Tiến sĩ"].map(
                                                (x) => (
                                                        <label className="check" key={x}>
                                                                <input
                                                                        type="checkbox"
                                                                        defaultChecked={x === "TH Phổ thông"}
                                                                />{" "}
                                                                {x}
                                                        </label>
                                                )
                                        )}
                                </div>
                        </section>

                        {/* Kinh nghiệm */}
                        <section className="filter-group one-col tall">
                                <header className="filter-title">Kinh nghiệm</header>
                                <div className="check-list">
                                        {[
                                                "Sinh viên dạy kèm",
                                                "Giáo viên dạy kèm",
                                                "Giảng viên trung tâm",
                                                "Giáo viên tiểu học",
                                                "Giáo viên THCS",
                                                "Giáo viên THPT",
                                                "Cố vấn học tập",
                                                "Gia sư online",
                                                "Giảng viên trường quốc tế",
                                                "Giáo viên người nước ngoài",
                                                "Giảng viên cao đẳng",
                                                "Giảng viên đại học",
                                                "Giảng viên trung học",
                                        ].map((x, i) => (
                                                <label className="check" key={x}>
                                                        <input type="checkbox" disabled={i > 6} /> {x}
                                                </label>
                                        ))}
                                </div>
                        </section>

                        {/* Độ tuổi */}
                        <section className="filter-group one-col">
                                <div className="range">
                                        <div
                                                style={{
                                                        display: "flex",
                                                        justifyContent: "space-between",
                                                        fontSize: 13,
                                                }}
                                        >
                                                <span>Độ tuổi:</span>
                                                <b>18-78t</b>
                                        </div>
                                        <input type="range" min={18} max={78} defaultValue={18} />
                                </div>
                        </section>

                        {/* Giới tính */}
                        <section className="filter-group one-col">
                                <div className="range">
                                        <div style={{ fontSize: 13 }}>Giới tính</div>
                                        <label className="check">
                                                <input type="radio" name="gender" defaultChecked /> Nữ
                                        </label>
                                        <label className="check">
                                                <input type="radio" name="gender" /> Nam
                                        </label>
                                </div>
                        </section>

                        {/* Học phí / giờ */}
                        <section className="filter-group one-col">
                                <div className="range">
                                        <div
                                                style={{
                                                        display: "flex",
                                                        justifyContent: "space-between",
                                                        fontSize: 13,
                                                        alignItems: "center",
                                                }}
                                        >
                                                <span>Học phí/giờ:</span>
                                                <span className="muted">80.000 - 800.000đ</span>
                                        </div>
                                        <input type="range" min={80000} max={800000} defaultValue={100000} />
                                </div>
                        </section>

                        <button className="apply">Áp dụng tìm kiếm</button>
                </aside>
        );
}
