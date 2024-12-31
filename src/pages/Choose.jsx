import "../public/css/Main.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../public/css/Choose.module.css";

const Choose = () => {
  const navigate = useNavigate();

  const goToNumber = () => {
    navigate("/pages/NumberGuessMain"); // NumberGuessMain.jsx가 해당 경로로 렌더링되도록 설정
  };
  const goToReverseRPSMain = () => {
    navigate("/pages/ReverseRPSMain"); // ReverseRPSMain.jsx가 해당 경로로 렌더링되도록 설정
  };

  return (
    <div className={styles.container}>
      <h1>게임을 선택해주세요!</h1>
      <div className="game-choose-button">
        <button className="numebr-guess" onClick={goToNumber}>
          숫자
        </button>
        <button className="rps" onClick={goToReverseRPSMain}>
          가위바위보
        </button>
      </div>
    </div>
  );
};
export default Choose;
