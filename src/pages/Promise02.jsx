import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../public/css/Promise02.css";

const Promise02 = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    location: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    const { date, time, location } = formData;

    // 입력 데이터 검증
    if (!date || !time || !location) {
      alert("모든 칸을 채워주세요!");
      return;
    }

    // 데이터베이스로 전송 (추후 구현)
    console.log("Form Data:", formData);

    // PromiseSuccess으로 이동
    navigate("/pages/PromiseSuccess");
  };

  return (
    <div>
      <div className="promise02-container">
        <div className="form-box">
          {/* 날짜 입력 */}
          <div className="form-item">
            <div className="label">📅 날짜 선택</div>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              className="input-box"
            />
          </div>

          {/* 시간 입력 */}
          <div className="form-item">
            <div className="label">🕒 시간 선택</div>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleInputChange}
              className="input-box"
            />
          </div>

          {/* 장소 입력 */}
          <div className="form-item">
            <div className="label">📍 장소 입력</div>
            <input
              type="text"
              name="location"
              placeholder="가락시장역"
              value={formData.location}
              onChange={handleInputChange}
              className="input-box"
            />
          </div>

          {/*인원 설정 입력 */}
          <div className="form-item">
            <div className="label">👥 인원 수 입력</div>
            <input
              type="text"
              name="location"
              placeholder="5"
              value={formData.location}
              onChange={handleInputChange}
              className="input-box"
            />
          </div>
        </div>

        {/* 약속 만들기 버튼 */}
        <button className="submit-btn" onClick={handleSubmit}>
          + 약속 만들기
        </button>
      </div>
    </div>
  );
};

export default Promise02;
