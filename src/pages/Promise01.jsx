import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios"; // axios 임포트
import "../public/css/Promise01.css";

const Promise01 = () => {
  const navigate = useNavigate();

  // 상태 설정
  const [searchInput, setSearchInput] = useState("");
  const [promises, setPromises] = useState([]);
  const [filteredPromises, setFilteredPromises] = useState([]);
  const [user, setUser] = useState("user2");

  // 컴포넌트가 처음 마운트될 때 API 호출
  useEffect(() => {
    const fetchPromises = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");
        const response = await axios.get(
          "http://localhost:8080/api/appointments/",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`, // JWT 토큰을 헤더에 추가
            },
          }
        );

        console.log(response.data);

        setFilteredPromises(response.data);
      } catch (error) {
        console.error("약속 목록을 가져오는 데 실패했습니다:", error);
      }
    };
    fetchPromises();
  }, []);

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

  // "신청" 버튼 클릭 시 API POST 요청을 보내는 함수s
  const handleApply = (appointmentId) => {
    axios
      .post(
        `http://localhost:8080/api/appointments/${appointmentId}/join?username=${user}`
      )
      .then((response) => {
        alert("신청 완료!");
        setPromises((prevPromises) =>
          prevPromises.map((promise) =>
            promise.id === appointmentId
              ? {
                  ...promise,
                  currentParticipants: promise.currentParticipants + 1,
                }
              : promise
          )
        );
        setFilteredPromises((prevPromises) =>
          prevPromises.map((promise) =>
            promise.id === appointmentId
              ? {
                  ...promise,
                  currentParticipants: promise.currentParticipants + 1,
                }
              : promise
          )
        );
      })
      .catch((error) => {
        console.error("신청 실패:", error);
        alert("신청에 실패했습니다.");
      });
  };

  return (
    <div>
      <div className="rectangle-box">
        <div className="promise-container">
          <div className="promise-content">
            {/* <div className="promise-list">
              {filteredPromises.map((promise) => (
                <div className="promise-card" key={promise.id}>
                  <div className="d-day">{promise.dateStatus}</div>
                  <div className="left-section">
                    <div>{promise.date}</div>
                    <div>{promise.location}</div>
                  </div>
                  <div className="right-section">
                    <div>총 인원: {promise.maxParticipants}</div>
                    <div>현재 인원: {promise.currentParticipants}</div>
                  </div>
                  <button
                    className={`promise-btn ${
                      promise.maxParticipants === promise.currentParticipants
                        ? "closed"
                        : "apply"
                    }`}
                    onClick={
                      promise.maxParticipants !== promise.currentParticipants
                        ? () => handleApply(promise.id)
                        : undefined
                    }
                  >
                    {promise.maxParticipants === promise.currentParticipants
                      ? "마감"
                      : "신청"}
                  </button>
                </div>
              ))}
              {filteredPromises.length === 0 && <p>검색 결과가 없습니다.</p>}
            </div> */}
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
