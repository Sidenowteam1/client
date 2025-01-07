import React from "react";
import { Link } from "react-router-dom";
// import "../public/css/HeaderMember.css";
import styles from "../public/css/HeaderMember.module.css";

<img src="/images/mainlogo.png" alt="mainlogo" />;

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to="../pages/MainPage" className={styles.logo}>
          <img src="../src/images/mainlogo.png" alt="mainlogo" />
        </Link>

        <div className={styles.navLinks}>
          <Link to="../pages/Introduce" className={styles.link}>
            Introduce
          </Link>
          <Link to="../pages/PromiseMember" className={styles.link}>
            약속 멤버 정보
          </Link>
          <Link to="../pages/MyPromise" className={styles.link}>
            나의 약속
          </Link>
          <Link to="../pages/MainPage" className={styles.link}>
            <button>로그아웃</button>
          </Link>
        </div>
      </nav>
      <div className={styles.buttonContainer}>
        <Link to="../pages/Promise01" className={styles.button}>
          <img src="../src/images/promiseIcon.png" alt="약속잡기" />
        </Link>

        <Link to="../pages/Choose" className={styles.button}>
          <img src="../src/images/gameIcon.png" alt="게임" />
        </Link>

        <Link to="../pages/MyPage" className={styles.button}>
          <img src="../src/images/homeIcon.png" alt="마이페이지" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
