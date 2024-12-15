// src/pages/login.jsx
import React, { useState } from "react";
import styles from "../public/css/Login.module.css";
import Input from "../components/Input";
import Button from "../components/Button";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // 간단한 유효성 검사
    if (!email || !password) {
      alert("이메일과 비밀번호를 입력해주세요.");
      return;
    }

    setError("");
    console.log("로그인 시도:", { email, password });
  };

  return (
    <div className={styles.login_container}>
      <form onSubmit={handleSubmit} className={styles.login_form}>
        <h2>로그인</h2>
        {error && <p className={styles.error_message}>{error}</p>}
        <div className={styles.form_group}>
          <p>아이디</p>
          <Input
            label="이메일을 적어주세요."
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.form_group}>
          <p>비밀번호</p>
          <Input
            label="비밀번호 4자리를 적어주세요."
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
