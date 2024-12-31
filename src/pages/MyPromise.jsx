import React from "react";
import "../public/css/Main.css";
import styles from "../public/css/Box.module.css";
import "../public/css/MyPromise.css";

const MyPromise = () => {
  const made = [
    { id: 1, info: "○○ 경로당 18시", current: 1, total: 5, check: 0 }, // check=0: 취소된 약속
    { id: 2, info: "□□ 경로당 13시", current: 3, total: 3, check: 2 }, // check=2: 확정된 약속
    { id: 3, info: "▲▲ 경로당 10시", current: 2, total: 3, check: 1 }, // check=1: 삭제 가능한 약속
  ];

  const joined = [
    { id: 1, info: "○○ 경로당 18시", current: 1, total: 4, check: 0 }, // check=0: 파투된 약속
    { id: 2, info: "□□ 경로당 13시", current: 3, total: 3, check: 2 }, // check=2: 확정된 약속
    { id: 3, info: "▲▲ 경로당 10시", current: 2, total: 3, check: 1 }, // check=1: 취소 가능한 약속
  ];

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
              <button className="action-button">
                {content.check === 0
                  ? "확인"
                  : content.check === 2
                  ? "확정"
                  : "삭제"}
              </button>
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
              <button className="action-button" disabled={content.check === 0}>
                {content.check === 0
                  ? "파투"
                  : content.check === 2
                  ? "확정"
                  : "취소"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyPromise;
