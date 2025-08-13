import "../style/contact-hero.css";

export default function ContactHero() {
        return (
                <section className="chero">
                        <div className="chero__inner">
                                {/* BÊN TRÁI: tiêu đề + mô tả */}
                                <div className="chero__left">
                                        <h3 className="chero__kicker">EDULINKTUTOR</h3>
                                        <h2 className="chero__title">Tận tâm & đồng hành</h2>
                                        <p className="chero__desc">
                                                Chúng tôi không chỉ dạy kiến thức – chúng tôi đồng hành cùng bạn trên cả
                                                hành trình học tập. Mỗi buổi học là một lần lắng nghe, thấu hiểu và trao
                                                trọn tâm huyết.
                                        </p>
                                </div>

                                {/* BÊN PHẢI: form tư vấn */}
                                <div className="chero__right">
                                        <h4 className="chero__formTitle">
                                                CÙNG BẠN BẮT ĐẦU HÀNH TRÌNH HỌC TẬP HIỆU QUẢ
                                        </h4>
                                        <p className="chero__formSub">
                                                Điền thông tin để được tư vấn MIỄN PHÍ và chọn giáo viên phù hợp.
                                        </p>

                                        <form className="chero__form" onSubmit={(e) => e.preventDefault()}>
                                                <div className="chero__row">
                                                        <input placeholder="Họ tên" required type="text" />
                                                        <input placeholder="Email" type="email" />
                                                </div>
                                                <input placeholder="Số điện thoại" required type="tel" />
                                                <select defaultValue="" name="service" required>
                                                        <option disabled hidden value="">
                                                                Chọn dịch vụ
                                                        </option>
                                                        <option value="math">Toán</option>
                                                        <option value="english">Tiếng Anh</option>
                                                        <option value="science">Khoa học</option>
                                                </select>
                                                <textarea placeholder="Nội dung tin nhắn" rows="4"></textarea>
                                                <button className="chero__btn" type="submit">
                                                        Đăng ký tư vấn
                                                </button>
                                        </form>
                                </div>
                        </div>
                </section>
        );
}
