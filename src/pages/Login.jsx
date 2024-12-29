// src/pages/login.jsx
import React, { useState } from "react";
import styles from "../public/css/Login.module.css";
import "../public/css/Main.css";
import Input from "../components/Input";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // 간단한 유효성 검사
    if (!email || !password) {
      alert("이메일과 비밀번호를 입력해주세요.");
      return;
    }

    setError("");
    console.log("로그인 시도:", { email, password });

    navigate("/pages/MyPage");
  };

  return (
    <div className={styles.login_container}>
      <form onSubmit={handleSubmit} className={styles.login_form}>
        <img
          src="/src/public/images/스마트경로당로고.png"
          alt="스마트경로당 로고"
          style={{ width: "200px", marginBottom: "20px" }}
        />
        {error && <p className={styles.error_message}>{error}</p>}
        <div className={styles.form_group}>
          <Input
            label="이메일"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.form_group}>
          <Input
            label="비밀번호"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button label="로그인" onClick={handleSubmit} />
        </div>
      </form>
    </div>
  );
};

export default Login;
