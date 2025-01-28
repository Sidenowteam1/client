import React, { useState, useEffect } from "react";
import styles from "../public/css/NumberGuess.module.css";

function NumberGuess() {
  // 상태 변수 선언
  const [randomNumber, setRandomNumber] = useState(
    Math.floor(Math.random() * 50) + 1 // 1부터 50 사이의 랜덤 숫자 생성
  );
  const [userInput, setUserInput] = useState("");
  const [message, setMessage] = useState("");
  const [attemptsLeft, setAttemptsLeft] = useState(5);
  const [guessedNumbers, setGuessedNumbers] = useState([]);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 추가
  const [modalMessage, setModalMessage] = useState(""); // 모달에 표시될 메시지

  // 유저 입력 처리 함수
  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  // 번호 맞추기 함수
  const handleGuess = () => {
    const currentGuess = Number(userInput);

    // 1과 50 사이의 숫자 입력 확인
    if (currentGuess < 1 || currentGuess > 50) {
      setMessage("입력값이 1과 50 사이여야 합니다.");
      return;
    }

    // 이미 입력한 숫자 확인
    if (guessedNumbers.includes(currentGuess)) {
      setMessage("이미 입력한 숫자입니다.");
      return;
    }

    setGuessedNumbers([...guessedNumbers, currentGuess]);

    if (currentGuess === randomNumber) {
      setMessage("맞췄습니다!");
      setIsButtonDisabled(true);
      setModalMessage("축하합니다! 맞췄습니다.");
      setIsModalOpen(true); // 모달 띄우기
    } else if (currentGuess > randomNumber) {
      setMessage("더 작은 숫자입니다!");
    } else {
      setMessage("더 큰 숫자입니다!");
    }

    // 기회 차감
    setAttemptsLeft((prev) => prev - 1);

    // 입력창 초기화
    setUserInput("");
  };

  // 5번의 기회가 끝났으면 버튼 비활성화
  useEffect(() => {
    if (attemptsLeft === 0 && !isButtonDisabled) {
      setMessage(`기회를 모두 사용하셨습니다. 정답은 ${randomNumber}였습니다.`);
      setIsButtonDisabled(true);
      setModalMessage(`게임 종료! 정답은 ${randomNumber}였습니다.`);
      setIsModalOpen(true);
    }
  }, [attemptsLeft, isButtonDisabled, randomNumber]);

  // 모달 닫기 함수
  const closeModal = () => {
    setIsModalOpen(false);
    // 새로운 게임을 시작할 수 있도록 초기화
    setRandomNumber(Math.floor(Math.random() * 50) + 1);
    setAttemptsLeft(5);
    setGuessedNumbers([]);
    setIsButtonDisabled(false);
    setUserInput("");
    setMessage("");
  };

  return (
    <div className={styles.container}>
      <h1>랜덤 번호 맞추기 게임</h1>
      <p>1부터 50 사이의 번호를 맞춰보세요!</p>
      <div>
        <input
          type="number"
          value={userInput}
          onChange={handleInputChange}
          disabled={isButtonDisabled}
        />
        <button
          onClick={handleGuess}
          disabled={isButtonDisabled || attemptsLeft === 0}
        >
          입력
        </button>
      </div>
      <p>남은 기회: {attemptsLeft}</p>
      <p>{message}</p>

      {/* 모달창 */}
      {isModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2>{modalMessage}</h2>
            <button onClick={closeModal}>종료</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default NumberGuess;
