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
                                        style={{ height: 28, width: 140 }}
                                />
                        </div>

                        {/* Ngành học */}
                        <section className="filter-group one-col">
                                <header className="filter-title">Ngành học</header>
                                <div className="check-list">
                                        {["Phổ thông", "Ngoại ngữ", "Âm nhạc", "Luyện thi Đại học"].map((x) => (
                                                <label className="check" key={x}>
                                                        <input defaultChecked={x === "Phổ thông"} type="checkbox" /> {x}
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
                                                                defaultChecked={["Toán", "Lý", "Văn"].includes(x)}
                                                                type="checkbox"
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
                                                                defaultChecked={["Thứ 2", "Thứ 3"].includes(x)}
                                                                type="checkbox"
                                                        />{" "}
                                                        {x}
                                                </label>
                                        ))}
                                </div>
                                <div className="range" style={{ borderTop: "1px dashed var(--line)" }}>
                                        <div style={{ color: "var(--muted)", fontSize: 13 }}>Thời gian</div>
                                        <div style={{ display: "grid", gap: 8, gridTemplateColumns: "1fr 1fr" }}>
                                                <input defaultValue="17:00" type="time" />
                                                <input defaultValue="20:15" type="time" />
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
                                                                        defaultChecked={x === "TH Phổ thông"}
                                                                        type="checkbox"
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
                                                        <input disabled={i > 6} type="checkbox" /> {x}
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
                                                        fontSize: 13,
                                                        justifyContent: "space-between",
                                                }}
                                        >
                                                <span>Độ tuổi:</span>
                                                <b>18-78t</b>
                                        </div>
                                        <input defaultValue={18} max={78} min={18} type="range" />
                                </div>
                        </section>

                        {/* Giới tính */}
                        <section className="filter-group one-col">
                                <div className="range">
                                        <div style={{ fontSize: 13 }}>Giới tính</div>
                                        <label className="check">
                                                <input defaultChecked name="gender" type="radio" /> Nữ
                                        </label>
                                        <label className="check">
                                                <input name="gender" type="radio" /> Nam
                                        </label>
                                </div>
                        </section>

                        {/* Học phí / giờ */}
                        <section className="filter-group one-col">
                                <div className="range">
                                        <div
                                                style={{
                                                        alignItems: "center",
                                                        display: "flex",
                                                        fontSize: 13,
                                                        justifyContent: "space-between",
                                                }}
                                        >
                                                <span>Học phí/giờ:</span>
                                                <span className="muted">80.000 - 800.000đ</span>
                                        </div>
                                        <input defaultValue={100000} max={800000} min={80000} type="range" />
                                </div>
                        </section>

                        <button className="apply">Áp dụng tìm kiếm</button>
                </aside>
        );
}
