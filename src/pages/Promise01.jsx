import { useNavigate } from "react-router-dom";

import React from "react";
import Header from "../components/Header";
// import Footer from "../components/Footer";
import Promise02 from "./Promise02";
import "../public/css/Promise01.css";

const Promise01 = () => {
  const navigate = useNavigate();

  // Mock 데이터 (추후 API로 대체)
  const promises = [
    {
      id: 1,
      dDay: "D-Day",
      date: "📅 11월 24일 일요일 오후 4:00",
      location: "📍가락시장 3번 출구",
      totalPeople: 3,
      currentPeople: 3,
    },
    {
      id: 2,
      dDay: "D-01",
      date: "📅 11월 25일 월요일 오후 1:00",
      location: "📍○○시장",
      totalPeople: 5,
      currentPeople: 3,
    },
    {
      id: 3,
      dDay: "D-08",
      date: "📅 12월 02일 월요일 오후 6:00",
      location: "📍××시장",
      totalPeople: 3,
      currentPeople: 1,
    },
  ];

  return (
    <div>
      <Header />
      <div className="rectangle-box">
        <div className="promise-container">
          <div className="promise-content">
            <div className="promise-list">
              {promises.map((promise) => (
                <div className="promise-card" key={promise.id}>
                  <div className="d-day">{promise.dDay}</div>
                  <div className="left-section">
                    <div>{promise.date}</div>
                    <div>{promise.location}</div>
                  </div>
                  <div className="right-section">
                    <div>총 인원: {promise.totalPeople}</div>
                    <div>현재 인원: {promise.currentPeople}</div>
                  </div>
                  <button
                    className={`promise-btn ${
                      promise.totalPeople === promise.currentPeople
                        ? "closed"
                        : "apply"
                    }`}
                  >
                    {promise.totalPeople === promise.currentPeople
                      ? "마감"
                      : "신청"}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="search-and-create">
        <input
          type="text"
          placeholder="원하는 시간, 장소를 검색하세요."
          className="search-input"
        />
        <button className="search-btn">검색</button>
        <button
          className="create-btn"
          onClick={() => navigate("/pages/Promise02")}
        >
          + 약속 만들기
        </button>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Promise01;
