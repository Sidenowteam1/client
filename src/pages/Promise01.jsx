import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
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

  const [searchInput, setSearchInput] = useState("");
  const [filteredPromises, setFilteredPromises] = useState(promises);

  // 검색 실행
  const handleSearch = () => {
    const searchText = searchInput.toLowerCase();
    const results = promises.filter((promise) => {
      return (
        promise.date.toLowerCase().includes(searchText) ||
        promise.location.toLowerCase().includes(searchText)
      );
    });
    setFilteredPromises(results);
  };

  // "신청" 버튼 클릭 시 alert 표시
  const handleApply = () => {
    alert("신청 완료!"); // "신청 완료!" 메시지 표시
  };

  return (
    <div>
      <div className="rectangle-box">
        <div className="promise-container">
          <div className="promise-content">
            <div className="promise-list">
              {filteredPromises.map((promise) => (
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
                    onClick={
                      promise.totalPeople !== promise.currentPeople
                        ? handleApply
                        : undefined // "신청" 버튼 클릭 시 동작
                    }
                  >
                    {promise.totalPeople === promise.currentPeople
                      ? "마감"
                      : "신청"}
                  </button>
                </div>
              ))}
              {filteredPromises.length === 0 && <p>검색 결과가 없습니다.</p>}
            </div>
          </div>
        </div>
      </div>

      <div className="search-and-create">
        <input
          type="text"
          placeholder="원하는 시간이나 장소를 입력해주세요"
          className="search-input"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button className="search-btn" onClick={handleSearch}>
          검색
        </button>
        <button
          className="create-btn"
          onClick={() => navigate("/pages/Promise02")}
        >
          + 약속 만들기
        </button>
      </div>
    </div>
  );
};

export default Promise01;
