import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../public/css/Promise02.css";

const Promise02 = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    location: "",
    maximum: 3, // 기본값 3명
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
          {/* 약속 제목 입력 */}
          <div className="form-item">
            <div className="label">📝 약속 제목</div>
            <input
              type="text"
              name="title"
              placeholder="망원 시장"
              value={formData.title}
              onChange={handleInputChange}
              className="input-box"
            />
          </div>

          {/* 약속 설명 입력 */}
          <div className="form-item">
            <div className="label">📝 약속 설명</div>
            <input
              type="text"
              name="description"
              placeholder="망원 시장에서 같이 호떡 먹어요~!"
              value={formData.description}
              onChange={handleInputChange}
              className="input-box"
            />
          </div>

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
              placeholder="망원역 1번 출구"
              value={formData.location}
              onChange={handleInputChange}
              className="input-box"
            />
          </div>

          {/* 최대 참여 인원 선택 */}
          <div className="form-item">
            <div className="label">👥 최대 참여 인원</div>
            <select
              name="maximum"
              value={formData.maximum}
              onChange={handleInputChange}
              className="selectbox"
            >
              {[...Array(10).keys()].map((i) => (
                <option key={i} value={i + 3}>
                  {i + 3}
                </option>
              ))}
            </select>
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
