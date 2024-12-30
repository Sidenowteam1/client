import React, { useState } from "react";
import styles from "../public/css/ReverseRPSMain.module.css";
import { useNavigate } from "react-router-dom";

const ReverseRPSMain = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const gameRules = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleGamePage = () => {
    navigate("/pages/ReverseRPS");
  };

  return (
    <div className={styles.container}>
      <h1>거꾸로 가위바위보</h1>
      <div className={styles.move}>
        <button onClick={gameRules}>게임 방법</button>
        <button onClick={handleGamePage}>게임 시작</button>
      </div>

      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h2>게임 설명</h2>
            <p>
              일반적인 가위바위보 규칙을 반대로 적용하여 먼저 3번 승리하면
              이기는 게임입니다
            </p>
            <ul>
              <li>사용자(가위) vs 컴퓨터(바위) → 컴퓨터 승리</li>
              <li>사용자(바위) vs 컴퓨터(보) → 컴퓨터 승리</li>
              <li>사용자(보) vs 컴퓨터(가위) → 컴퓨터 승리</li>
            </ul>
            <h2>게임 방법</h2>
            <p>1. 가위, 바위, 보 중 하나를 선택하세요.</p>
            <p>2. 상대방보다 먼저 3번 승리하면 이깁니다!</p>
            <button onClick={closeModal} className={styles.closeButton}>
              닫기
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReverseRPSMain;
