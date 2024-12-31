import React from "react";
import { Link } from "react-router-dom";
import Login from "../components/Button.jsx";
import styles from "../public/css/Header.module.css";

<img src="/images/mainlogo.png" alt="mainlogo" />;

const Header = () => {
  return (
    <header className={styles.header}>
      {/* 네비게이션 바 */}
      <nav className={styles.nav}>
        {/* 로고 */}
        <Link to="/" className={styles.logo}>
          <img src="../src/images/mainlogo.png" alt="mainlogo" />
        </Link>

        {/* 네비게이션 링크 */}
        <div className={styles.navLinks}>
          <Link to="/introduce" className={styles.link}>
            Introduce
          </Link>
          <Link to="/promise_member_information" className={styles.link}>
            약속 멤버 정보
          </Link>
          <Link to="/my_promise" className={styles.link}>
            나의 약속
          </Link>
          <Link to="/Login.jsx" className={styles.link}>
            로그인
          </Link>
          {/* <Login /> */}
          <Link to="/join" className={styles.link}>
            회원가입
          </Link>
        </div>
      </nav>

      {/* 버튼 섹션 */}
      <div className={styles.buttonContainer}>
        {/* Link를 사용하는 버튼 */}
        <Link to="../pages/Promise01" className={styles.button}>
          <img src="../src/images/promiseIcon.png" alt="약속잡기" />
        </Link>

        <Link to="/game" className={styles.button}>
          <img src="../src/images/gameIcon.png" alt="게임" />
        </Link>

        <Link to="/mypage" className={styles.button}>
          <img src="../src/images/homeIcon.png" alt="마이페이지" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
