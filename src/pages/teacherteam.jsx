import "../style/teacherteam.css";
import teacherImage from "../assets/img/img4.png";
import img1 from "../assets/img/1.svg";
import img2 from "../assets/img/2.svg";
import img3 from "../assets/img/3.svg";
import img4 from "../assets/img/4.svg";
import img5 from "../assets/img/5.svg";
import img6 from "../assets/img/6.svg";
import supportImage from "../assets/img/img7.png";
import ContactHero from "../components/ContactHero";
import RegisterStd from "./register-std";
import { useState } from "react";

export default function TeacherTeam()  {
 const [showRegisterModal, setShowRegisterModal] = useState(false);

  const openRegisterModal = (e) => {
    e.preventDefault();
    setShowRegisterModal(true);
  };

  const closeRegisterModal = () => {
    setShowRegisterModal(false);
  };
  return (
    <>

    <div className="teacher-section">
      <div className="teacher-text">
        <h2>
          ĐỘI NGŨ Giáo viên <br />
          <span className="highlight">TẠI EDULINKTUTOR</span>
        </h2>
        <p>
          EdulinkTutor tự hào quy tụ đội ngũ giáo viên giỏi, tận tâm và được tuyển chọn kỹ lưỡng.
          Mỗi giáo viên không chỉ có chuyên môn vững vàng mà còn luôn đồng hành, truyền cảm hứng
          và giúp học viên tiến bộ rõ rệt qua từng buổi học.
        </p>
        <button className="register-btn">Đăng ký học</button>
      </div>

      {/* Bên phải: ảnh */}
      <div className="teacher-image-wrapper">
        <img src={teacherImage} alt="Teacher team" className="teacher-image" />
      </div>
    </div>
    <section className="reasons">
        <p className="reasons-eyebrow">5 lý do nên học</p>
        <h3 className="reasons-title">
          Cùng Giáo viên Tại <span>EdulinkTutor</span>
        </h3>

        <div className="reasons-columns">
          {/* Cột trái: 1-3 */}
          <div className="reasons-col">
            <Reason
              number="1"
              title="Lộ trình học rõ ràng, đúng năng lực"
              text="Mỗi học viên được xây dựng kế hoạch học tập riêng, bám sát trình độ hiện tại và mục tiêu cá nhân."
            />
            <Reason
              number="2"
              title="Giờ học linh hoạt – phù hợp lịch cá nhân"
              text="Dễ dàng chọn thời gian học phù hợp, kể cả buổi tối hoặc cuối tuần; vẫn duy trì đều đặn."
            />
            <Reason
              number="3"
              title="Tập trung tối đa, học mà không bị nhiễu"
              text="Lớp học riêng cùng giáo viên giúp học viên tránh xao nhãng, tăng hiệu quả ngay trong buổi học."
            />
          </div>

          {/* Cột phải: 4-5 */}
          <div className="reasons-col">
            <Reason
              number="4"
              title="Theo dõi tiến độ – đồng hành sát sao"
              text="Phụ huynh được cập nhật định kỳ tiến trình học, kết quả kiểm tra và mốc tiến bộ theo từng giai đoạn."
            />
            <Reason
              number="5"
              title="Cam kết chất lượng – đồng hành đến kết quả"
              text="EdulinkTutor không chỉ dạy, mà theo sát đến khi học viên đạt được kết quả mong muốn."
            />
          </div>
        </div>
      </section>
      <section className="process">
  <div className="process-head">
    <h3 className="process-title">Quy Trình Chọn Giáo Viên<br/>Tại Edulinktutor</h3>
    <p className="process-desc">
      EdulinkTutor cam kết mang đến quy trình chọn giáo viên rõ ràng, minh bạch và hiệu quả. Chúng tôi luôn đồng hành cùng phụ huynh và học viên trong suốt quá trình học tập để đảm bảo chất lượng và sự tiến bộ rõ rệt.
    </p>
  </div>

  <div className="process-grid">
    <div className="process-card">
      <div className="process-icon"><img src={img1} alt=""/></div>
      <div className="process-content">
        <h4><span>Bước 1:</span> Gửi yêu cầu học</h4>
        <p> - Phụ huynh hoặc học viên điền thông tin môn học, thời gian, mục tiêu qua web, hotline hoặc Zalo. </p>
      </div>
    </div>
    <div className="process-card">
    <div className="process-icon"><img src={img2} alt=""/></div>
      <div className="process-content">
        <h4><span>Bước 2:</span> Tư vấn & gợi ý giáo viên phù hợp</h4>
        <p>- Tư vấn viên sẽ liên hệ trong vòng 24h.<br></br>- Gợi ý 2–3 giáo viên phù hợp nhất dựa trên:<br></br>Trình độ - Kinh nghiệm - Thời gian rảnh - Mức phí phù hợp</p>
      </div>
      </div>
      <div className="process-card">
      <div className="process-icon"><img src={img3} alt=""/></div>
      <div className="process-content">
        <h4><span>Bước 3:</span> Xem hồ sơ giáo viên chi tiết</h4>
        <p>- Phụ huynh được xem: Thông tin cá nhân, bằng cấp môn dạy, lớp dạy, review từ học viên trước, video giới thiệu (nếu có)</p>
      </div>
      </div>
        <div className="process-card">
      <div className="process-icon"><img src={img4} alt=""/></div>
      <div className="process-content">
        <h4><span>Bước 4:</span> Học thử miễn phí buổi đầu</h4>
        <p>- Giáo viên sẽ dạy buổi đầu không tính phí.<br></br>- Nếu phù hợp thì tiếp tục, không thì EdulinkTutor hỗ trợ đổi giáo viên miễn phí.</p>
      </div>
        </div>
        <div className="process-card">
      <div className="process-icon"><img src={img5} alt=""/></div>
      <div className="process-content">
        <h4><span>Bước 5:</span> Chính thức bắt đầu khóa học</h4>
        <p>- Đăng ký học chính thức (online )<br></br>- Edulinktutor hỗ trợ theo sát trong suốt quá trình học.</p>
      </div>
        </div>
        <div className="process-card">
      <div className="process-icon"><img src={img6} alt=""/></div>
      <div className="process-content">
        <h4><span>Bước 6:</span> Đánh giá và phản hồi sau khóa học</h4>
        <p>- Kết thúc khóa học, phụ huynh/học viên được đánh giá giáo viên.<br></br>- EdulinkTutor thu thập ý kiến để cải thiện chất lượng dịch vụ.</p>
      </div>
        </div>
  </div>

  <div className="process-cta">
        <button className="help-btn" onClick={openRegisterModal}>
            Đăng ký học
          </button>
          {showRegisterModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close" onClick={closeRegisterModal}>
              ✖
            </button>
            <RegisterStd />
          </div>
        </div>
      )}
    </div>
</section>
<section className="help-section">

  <div className="help-inner">
     <div>
      <img src={supportImage} alt="Support" className="help-image" />
    </div>
    <div className="help-content">
      <h3 className="help-title">Bạn đang cần hỗ trợ?</h3>
      <ul className="help-list">
        <li>Muốn biết có những hình thức dạy kèm nào phù hợp?</li>
        <li>Cần tìm giáo viên cho môn học cụ thể?</li>
        <li>Đang cân nhắc chi phí học giáo viên hợp lý?</li>
        <li>Muốn trải nghiệm buổi học thử hoàn toàn miễn phí?</li>
        <li>Chúng tôi sẵn sàng hỗ trợ bạn ngay hôm nay!</li>
      </ul>
      <div className="help-actions">
        <button className="help-btn">Tư vấn miễn phí</button>
      </div>
    </div>

  </div>
</section>
<ContactHero />

      </>
  );
}
function Reason({ number, title, text }) {
  return (
    <div className="reason">
      <div className="reason-badge">{number}</div>
      <div className="reason-card">
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
}
