import styles from "../public/css/ReverseRPS.module.css";
import React, { useState } from "react";

const ReverseRPS = () => {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState("");
  const [userWins, setUserWins] = useState(0);
  const [computerWins, setComputerWins] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false); // 게임 종료 상태 추가

  const choices = ["가위", "바위", "보"];

  const playGame = (userSelection) => {
    setUserChoice(userSelection);
    const computerSelection = choices[Math.floor(Math.random() * 3)];
    setComputerChoice(computerSelection);

    determineWinner(userSelection, computerSelection);
  };

  const determineWinner = (user, computer) => {
    if (user === computer) {
      setResult("무승부입니다!");
    } else if (
      (user === "보" && computer === "가위") ||
      (user === "가위" && computer === "바위") ||
      (user === "바위" && computer === "보")
    ) {
      setUserWins(userWins + 1);
      setResult("당신이 이겼습니다!");
      if (userWins + 1 >= 3) {
        setIsGameOver(true);
        setResult("당신이 3번 먼저 이겼습니다!");
      }
    } else {
      setComputerWins(computerWins + 1);
      setResult("컴퓨터가 이겼습니다!");
      if (computerWins + 1 >= 3) {
        setIsGameOver(true);
        setResult("컴퓨터가 3번 먼저 이겼습니다!");
      }
    }
  };

  const userGetImage = (choice) => {
    if (choice === "가위") return "/src/public/images/왼쪽찌.png";
    if (choice === "바위") return "/src/public/images/왼쪽묵.png";
    if (choice === "보") return "/src/public/images/왼쪽빠.png";
    return null;
  };

  const computerGetImage = (choice) => {
    if (choice === "가위") return "/src/public/images/오른쪽찌.png";
    if (choice === "바위") return "/src/public/images/오른쪽묵.png";
    if (choice === "보") return "/src/public/images/오른쪽빠.png";
    return null;
  };

  const restartGame = () => {
    setUserWins(0);
    setComputerWins(0);
    setUserChoice(null);
    setComputerChoice(null);
    setResult("");
    setIsGameOver(false); // 게임 종료 상태 초기화
  };

  return (
    <div className={styles.container}>
      <h1>거꾸로 가위바위보 게임</h1>
      <div className={styles.choices}>
        {choices.map((choice) => (
          <button
            key={choice}
            className={styles.button}
            onClick={() => playGame(choice)}
            disabled={isGameOver}
          >
            {choice}
          </button>
        ))}
      </div>
      <div className={styles.results}>
        {userChoice && (
          <div className={styles.choiceDisplay}>
            <p>당신의 선택:</p>
            <img
              src={userGetImage(userChoice)}
              alt={userChoice}
              className={styles.choiceImage}
            />
          </div>
        )}
        {computerChoice && (
          <div className={styles.choiceDisplay}>
            <p>컴퓨터의 선택:</p>
            <img
              src={computerGetImage(computerChoice)}
              alt={computerChoice}
              className={styles.choiceImage}
            />
          </div>
        )}
      </div>
      <div>
        <p>당신의 승리 횟수: {userWins}</p>
        <p>컴퓨터의 승리 횟수: {computerWins}</p>
      </div>
      {result && <h2>{result}</h2>}

      {isGameOver && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h2>{userWins >= 3 ? "🎉 승리!" : "😢 패배!"}</h2>
            <p>{result}</p>
            <button onClick={restartGame} className={styles.restartButton}>
              다시 하기
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReverseRPS;
