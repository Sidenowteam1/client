import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../public/css/Promise02.css";
import Header from "../components/Header";

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
    // 데이터베이스로 전송 (추후 구현)
    console.log("Form Data:", formData);

    // Promise03으로 이동
    navigate("/Promise03");
  };

  return (
    <div>
      <Header />
      <div className="promise02-container">
        <div className="form-box">
          {/* 날짜 입력 */}
          <div className="form-item">
            <div className="label">📅 날짜 입력</div>
            <input
              type="text"
              name="date"
              placeholder="11월 24일 일요일"
              value={formData.date}
              onChange={handleInputChange}
              className="input-box"
            />
          </div>

          {/* 시간 입력 */}
          <div className="form-item">
            <div className="label">🕒 시간 입력</div>
            <input
              type="text"
              name="time"
              placeholder="오후 04:00"
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
        </div>

        {/* 약속 만들기 버튼 */}
        <button
          className="submit-btn"
          onClick={() => navigate("/pages/PromiseSuccess")}
        >
          + 약속 만들기
        </button>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Promise02;
