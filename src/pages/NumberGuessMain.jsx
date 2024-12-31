import React, { useState } from "react";
import styles from "../public/css/ReverseRPSMain.module.css";
import { useNavigate } from "react-router-dom";

const NumberGuessMain = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const gameRules = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleGamePage = () => {
    navigate("/pages/NumberGuess");
  };

  return (
    <div className={styles.container}>
      <h1>숫자 맞추기 게임</h1>
      <div className={styles.move}>
        <button onClick={gameRules}>게임 방법</button>
        <button onClick={handleGamePage}>게임 시작</button>
      </div>

      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h2>게임 설명</h2>
            <p>게임은 1부터 50 사이의 랜덤한 숫자가 선택되어 시작됩니다.</p>
            <h2>게임 방법</h2>
            <p>1. 1부터 50사이의 수를 입력합니다다.</p>
            <p>2. 입력한 숫자가 시스템의 랜덤 숫자와 비교하여 알려줍니다.</p>
            <p>3. 틀렸을 경우,다시 예상 숫자를 입력합니다.</p>
            <p>
              4. 사용자가 숫자를 맞추거나, 5번 내에 맞추지 못하면 게임
              종료됩니다.
            </p>
            <button onClick={closeModal} className={styles.closeButton}>
              닫기
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NumberGuessMain;
