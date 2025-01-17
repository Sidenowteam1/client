import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../public/css/Promise02.css";
import axios from "axios";
import base64 from "base-64";
const Promise02 = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    location: "",
    maximum: 3, // 기본값 3명
    createdBy: "", // 예시로 넣은 생성자 이름
    phoneNumber: "", // 예시로 넣은 생성자 연락처
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    const {
      date,
      time,
      location,
      title,
      description,
      maximum,
      createdBy,
      phoneNumber,
    } = formData;

    // 입력 데이터 검증
    if (!date || !time || !location || !title || !description) {
      alert("모든 칸을 채워주세요!");
      return;
    }

    const startTime = `${date}T${time}:00`; // startTime은 날짜와 시간이 합쳐진 ISO 8601 형식이어야 함
    const endTime = `${date}T${parseInt(time.split(":")[0]) + 1}:${
      time.split(":")[1]
    }:00`; // 1시간 후로 설정

    // API 호출
    try {
      const accessToken = localStorage.getItem("accessToken");
      let payload = accessToken.substring(
        accessToken.indexOf(".") + 1,
        accessToken.lastIndexOf(".")
      );
      let dec = JSON.parse(base64.decode(payload));

      const response = await axios.post(
        `http://localhost:8080/api/appointments/create/${dec.sub}`,
        {
          title,
          description,
          startTime,
          endTime,
          maxParticipants: maximum,
          createdBy,
          phoneNumber,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`, // JWT 토큰을 헤더에 추가
          },
        }
      );
      if (response.data.isSuccess) {
        // 약속 생성 성공 시 PromiseSuccess 페이지로 이동
        navigate("/pages/PromiseSuccess");
      } else {
        alert("약속 생성 실패");
      }
    } catch (error) {
      console.error("Error creating appointment", error);
      alert("약속 생성 중 오류가 발생했습니다.");
    }

    // 데이터베이스로 전송 (추후 구현)
    console.log("Form Data:", formData);

    // PromiseSuccess으로 이동
    // navigate("/pages/PromiseSuccess"); // 중복된 navigate 호출 제거
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
