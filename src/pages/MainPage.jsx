import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../public/css/MainPage.css";
import "../public/css/Main.css";

const MainPage = () => {
  const navigate = useNavigate();

  const goToMyPage = () => {
    navigate("/pages/MyPage"); // MyPage.jsx가 해당 경로로 렌더링되도록 설정
  };

  /*const goToPromise1 = () => {
    navigate("/pages/Promise1");
  };*/

  const goToChoose = () => {
    navigate("/pages/Choose"); // Choose.jsx가 해당 경로로 렌더링되도록 설정
  };

  return (
    <div className="main-buttons">
      <img src="src\images\promise.png" alt="약속잡기" />
      <img src="src\images\game.png" alt="게임" onClick={goToChoose} />
      <img src="src\images\mypage.png" alt="마이페이지" onClick={goToMyPage} />
    </div>
  );
};

export default MainPage;
