import React from "react";
import { useNavigate } from "react-router-dom";
import "../public/css/MainPage.css";
import "../public/css/Main.css";

// Header 컴포넌트
const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">
          <img src="../src/images/mainlogo.png" alt="mainlogo" />
        </div>
        <div className="navLinks">
          <a href="/pages/Introduce" className="link">
            Introduce
          </a>
          <a href="/pages/PromiseMember" className="link">
            약속 멤버 정보
          </a>
          <a href="/pages/MyPromise" className="link">
            나의 약속
          </a>
          <div class="welcome">
            '<b>육하원칙</b>'님 환영합니다
          </div>
          <a href="/pages/SignUp" className="link">
            로그아웃
          </a>
        </div>
      </nav>
    </header>
  );
};

// Footer 컴포넌트
const Footer = () => {
  return (
    <footer className="footer">
      <img src="../src/images/logo.png" alt="로고" className="logo" />
    </footer>
  );
};

// MainPage 컴포넌트
const MainPage = () => {
  const navigate = useNavigate();

  const goToMyPage = () => {
    navigate("/pages/MyPage");
  };

  const goToPromise01 = () => {
    navigate("/pages/Promise01");
  };

  const goToChoose = () => {
    navigate("/pages/Choose");
  };

  return (
    <div className="main-container">
      <Header /> {/* Header 삽입 */}
      <div className="main-buttons">
        <img
          src="../src/images/promise.png"
          alt="약속잡기"
          onClick={goToPromise01}
        />
        <img src="../src/images/game.png" alt="게임" onClick={goToChoose} />
        <img
          src="../src/images/mypage.png"
          alt="마이페이지"
          onClick={goToMyPage}
        />
      </div>
      <Footer /> {/* Footer 삽입 */}
    </div>
  );
};

export default MainPage;
