import React, { useState } from "react";
import "../public/css/Main.css";
import styles from "../public/css/Box.module.css";
import "../public/css/MyPromise.css";

const MyPromise = () => {
  // State로 made와 joined 리스트 관리
  const [made, setMade] = useState([
    { id: 1, info: "○○ 경로당 18시", current: 1, total: 5, check: 0 },
    { id: 2, info: "□□ 경로당 13시", current: 3, total: 3, check: 2 },
    { id: 3, info: "▲▲ 경로당 10시", current: 2, total: 3, check: 1 },
  ]);

  const [joined, setJoined] = useState([
    { id: 1, info: "○○ 경로당 18시", current: 1, total: 4, check: 0 },
    { id: 2, info: "□□ 경로당 13시", current: 3, total: 3, check: 2 },
    { id: 3, info: "▲▲ 경로당 10시", current: 2, total: 3, check: 1 },
  ]);

  // made 리스트 항목 삭제
  const handleDeleteMade = (id) => {
    setMade(made.filter((item) => item.id !== id));
  };

  // joined 리스트 항목 삭제
  const handleDeleteJoined = (id) => {
    setJoined(joined.filter((item) => item.id !== id));
  };

  return (
    <div className={`${styles.container} promise-container`}>
      {/* 내가 만든 약속 */}
      <div className={`${styles.box} made-promise`}>
        <div className="notice">내가 만든 약속</div>
        <div className="made-list">
          {made.map((content) => (
            <div
              className={`promise-item ${
                content.check === 0
                  ? "cancelled"
                  : content.check === 2
                  ? "confirmed"
                  : "deletable"
              }`}
              key={content.id}
            >
              <p
                className={`info-text ${
                  content.check === 0 ? "cancel-line" : ""
                }`}
              >
                {content.info}
              </p>
              <span className="people-count">
                {content.current} / {content.total}
              </span>
              {(content.check === 0 || content.check === 1) && (
                <button
                  className="action-button"
                  onClick={() => handleDeleteMade(content.id)}
                >
                  {content.check === 0 ? "확인" : "삭제"}
                </button>
              )}
              {content.check === 2 && (
                <button className="action-button" disabled>
                  확정
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 내가 참여한 약속 */}
      <div className={`${styles.box} joined-promise`}>
        <div className="notice">내가 참여한 약속</div>
        <div className="made-list">
          {joined.map((content) => (
            <div
              className={`promise-item ${
                content.check === 0
                  ? "cancelled"
                  : content.check === 2
                  ? "confirmed"
                  : "deletable"
              }`}
              key={content.id}
            >
              <p
                className={`info-text ${
                  content.check === 0 ? "cancel-line" : ""
                }`}
              >
                {content.info}
              </p>
              <span className="people-count">
                {content.current} / {content.total}
              </span>
              {content.check === 1 && (
                <button
                  className="action-button"
                  onClick={() => handleDeleteJoined(content.id)}
                >
                  삭제
                </button>
              )}
              {(content.check === 0 || content.check === 2) && (
                <button className="action-button" disabled>
                  {content.check === 0 ? "파투" : "확정"}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyPromise;
