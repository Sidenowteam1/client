import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../public/css/Main.css";
import styles from "../public/css/Box.module.css";
import "../public/css/Promise1.css";

const Promise1 = () => {
  const navigate = useNavigate();

  const [meetings] = useState([
    {
      id: 1,
      dueDate: "D-day",
      date: "11월 24일 일요일 오후 4:00",
      location: "가락시장 3번 출구",
      nowPeople: 2,
      fullPeople: 5,
      isClosed: false,
    },
    {
      id: 2,
      dueDate: "D-1",
      date: "12월 24일 일요일 오전 10:00",
      location: "평화시장 9번 출구",
      nowPeople: 3,
      fullPeople: 3,
      isClosed: true,
    },
  ]);

  const [searchQuery, setSearchQuery] = useState(""); // 검색어 상태
  const [filteredMeetings, setFilteredMeetings] = useState(meetings); // 필터링된 약속 리스트
  const [isSearchPerformed, setIsSearchPerformed] = useState(false); // 검색 실행 여부

  const handleSearch = () => {
    // 입력된 검색어로 필터링
    const results = meetings.filter(
      (meeting) =>
        meeting.date.includes(searchQuery) ||
        meeting.location.includes(searchQuery)
    );
    setFilteredMeetings(results); // 필터링 결과 업데이트
    setIsSearchPerformed(true); // 검색 실행 상태로 설정
  };

  const handleButtonClick = (id, isClosed) => {
    if (isClosed) return; // 마감된 경우 아무 작업도 하지 않음
    navigate("/pages/PromiseSuccess");
  };

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        {isSearchPerformed && filteredMeetings.length === 0 && (
          <div className="no-results">일치하는 결과가 없습니다.</div>
        )}
        {filteredMeetings.map((meeting) => (
          <div className="searched" key={meeting.id}>
            <div className="due-date">{meeting.dueDate}</div>
            <div className="when-to-meet">
              <div className="date">
                <strong>📅날짜 </strong>
                {meeting.date}
              </div>
              <div className="location">
                <strong>📍위치 </strong>
                {meeting.location}
              </div>
            </div>
            <div className="people">
              <div className="now-people">
                현재 인원: <strong>{meeting.nowPeople}</strong>명
              </div>
              <div className="full-people">
                총 인원: <strong>{meeting.fullPeople}</strong>명
              </div>
            </div>
            <button
              className={`register-button ${
                meeting.isClosed ? "closed-button" : ""
              }`}
              onClick={() => handleButtonClick(meeting.id, meeting.isClosed)}
              disabled={meeting.isClosed} // 마감된 경우 버튼 비활성화
            >
              {meeting.isClosed ? "마감" : "신청"}
            </button>
          </div>
        ))}
      </div>
      <div className="searching">
        <div className="typing">
          <input
            type="text"
            placeholder="원하는 시간,장소를 검색하세요."
            value={searchQuery} // 입력값과 상태 동기화
            onChange={(e) => setSearchQuery(e.target.value)} // 검색어 상태 업데이트
          />
          <button className="search-button" onClick={handleSearch}>
            검색
          </button>
        </div>
        <button className="make-button">+ 약속 만들기</button>
      </div>
    </div>
  );
};

export default Promise1;
