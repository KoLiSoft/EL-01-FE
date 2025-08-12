import teacher2 from "../assets/img/teacher2.png";
export default function TeacherCard({
	avatar = teacher2,
	name = "Nguyễn Thị Hương",
	online = "Hiện tại đang truy cập",
	gender = "Nữ",
	age = 27,
	district = "Quận 7",
	city = "TPHCM",
	rating = 5,
	fee = "90.000VNĐ/ Giờ",
	maxStudents = "Nhận tối đa 2 học viên/ Lớp",
	subject = "Công nghệ thông tin",
	tags = ["C#", "Java", "Figma", "Postgresql", "+2"],
	degree = "Trình độ - Đại học",
	exp = "Kinh nghiệm - Giáo viên",
}) {
	return (
		<div className="tc-card">
			{/* Header */}
			<div className="tc-header">
				<img src={avatar} alt={name} className="tc-avatar" />
				<div className="tc-headInfo">
					<div className="tc-name">{name}</div>
					<div className="tc-online">{online}</div>
					<div className="tc-meta">
						<span>♀ {gender}</span>
						<span>🗓 {age}</span>
					</div>
				</div>

				<div className="tc-headRight">
					<div className="tc-stars">
						{"★★★★★".slice(0, rating)}
						<span className="tc-starOff">
							{"★★★★★".slice(rating).replace(/./g, "☆")}
						</span>
					</div>
					<div className="tc-loc">
						<span>📍 {district}</span>
						<span>🏙 {city}</span>
					</div>
				</div>
			</div>

			<div className="tc-sep" />

			{/* Rows */}
			<div className="tc-row">
				<div className="tc-icon">💸</div>
				<div className="tc-label">Học phí:</div>
				<div className="tc-value tc-link">{fee}</div>
				<div className="tc-right">{maxStudents}</div>
			</div>

			<div className="tc-row">
				<div className="tc-icon">📚</div>
				<div className="tc-label">Môn lớp:</div>
				<div className="tc-value tc-italic">{subject}</div>
				<div className="tc-right tc-tags">
					{tags.map((t, i) => (
						<span
							key={i}
							className={`tc-tag ${/^\+/.test(t) ? "is-more" : ""}`}
						>
							{t}
						</span>
					))}
				</div>
			</div>

			<div className="tc-row tc-row--2lines">
				<div className="tc-icon">🗂</div>
				<div className="tc-label">Hồ sơ ứng tuyển:</div>
				<div className="tc-rightCol">
					<div>{degree}</div>
					<div>{exp}</div>
				</div>
			</div>
		</div>
	);
}
