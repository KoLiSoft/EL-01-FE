import "../style/usp.css";
export default function USPSection() {
        const items = [
                {
                        id: 1,
                        title: "Tuyển chọn giáo viên kỹ lưỡng",
                        desc: "Đội ngũ giáo viên tại EdulinkTutor đều trải qua quy trình tuyển chọn nghiêm ngặt, được kiểm tra chuyên môn và kỹ năng sư phạm. Nhiều giáo viên là sinh viên, giáo viên đến từ các trường top đầu. Phụ huynh hoàn toàn yên tâm về chất lượng giảng dạy.",
                },
                {
                        id: 2,
                        title: "Lộ trình học cá nhân hóa",
                        desc: "Mỗi học sinh có năng lực và mục tiêu khác nhau. Chúng tôi xây dựng lộ trình riêng phù hợp với trình độ hiện tại và định hướng học tập, giúp con tiến bộ rõ rệt – từ nền tảng đến nâng cao.",
                },
                {
                        id: 3,
                        title: "Dạy tận tâm – đồng hành",
                        desc: "Với chúng tôi, mỗi buổi học là một hành trình truyền cảm hứng. Giáo viên không chỉ giảng bài dễ hiểu mà còn là người khơi gợi động lực, giúp học sinh yêu thích việc học, trở nên tự tin và chủ động hơn.",
                },
                {
                        id: 4,
                        title: "Theo dõi tiến độ học rõ ràng",
                        desc: "Sau mỗi buổi học, phụ huynh sẽ nhận được báo cáo đánh giá ngắn gọn từ giáo viên. Bên cạnh đó, trung tâm còn theo dõi tiến độ tổng thể để đảm bảo con đang đi đúng hướng và cải thiện đều đặn.",
                },
                {
                        id: 5,
                        title: "Học thử miễn phí ",
                        desc: "Phụ huynh và học sinh có thể đăng ký học thử miễn phí 1 buổi. Nếu chưa phù hợp, trung tâm sẵn sàng hỗ trợ đổi giáo viên khác đến khi tìm được người phù hợp nhất với con bạn.",
                },
                {
                        id: 6,
                        title: "Hỗ trợ phụ huynh 24/7",
                        desc: "Chúng tôi luôn đồng hành cùng phụ huynh, sẵn sàng tư vấn lộ trình, chọn lớp và hỗ trợ mọi vấn đề học tập của học sinh. Phụ huynh có thể liên hệ bất cứ khi nào cần – nhanh chóng và chuyên nghiệp.",
                },
        ];

        const left = items.slice(0, 3); // 1,3,5
        const right = items.slice(3); // 2,4,6

        const Card = ({ no, title, desc }) => (
                <div className="usp-card">
                        <div className="usp-no">{no}</div>
                        <h3>{title}</h3>
                        <p>{desc}</p>
                </div>
        );

        // helper để nhân đôi content tạo cuộn vô hạn
        const Column = ({ dir = "up", data = [] }) => (
                <div className={`usp-col ${dir}`}>
                        <div className="usp-marquee">
                                {[...data, ...data].map((it, idx) => (
                                        <Card key={idx} no={it.id} title={it.title} desc={it.desc} />
                                ))}
                        </div>
                </div>
        );

        return (
                <section className="usp-wrap">
                        <div className="usp-left-copy">
                                <h2>
                                        Lý do vì sao nên chọn <span>EdulinkTutor</span>?
                                        <br />
                                        <small>(Giá trị khác biệt – Unique Selling Point)</small>
                                </h2>
                                <p>EdulinkTutor mang đến hành trình học hiệu quả, minh bạch và đồng hành sát sao.</p>
                                <button className="usp-cta">Bắt đầu hành trình ngay</button>
                        </div>

                        <div className="usp-right-cols">
                                <Column dir="up" data={left} />
                                <Column dir="down" data={right} />
                        </div>
                </section>
        );
}
