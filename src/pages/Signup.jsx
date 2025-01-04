import React, { useState } from "react";
import styles from "../public/css/Signup.module.css";
import "../public/css/Main.css";
import Input from "../components/Input";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRe, setPasswordRe] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !birthDate || !email || !password || !passwordRe) {
      alert("모든 항목을 입력해주세요.");
      return;
    }
    if (password !== passwordRe) {
      alert("비밀번호와 비밀번호 재확인이 일치하지 않습니다.");
      return;
    }

    setError("");
    console.log("회원가입 시도:", { name, birthDate, email, password });

    navigate("/pages/Login");
  };

  const handleIdCheck = (e) => {
    e.preventDefault();
    if (!email) {
      alert("이메일을 입력하세요.");
      return;
    }
    console.log("중복 확인 요청:", email);
  };

  return (
    <div className={styles.signup_container}>
      <form onSubmit={handleSubmit} className={styles.signup_form}>
        <img
          src="../src/images/mainlogo.png"
          alt="스마트경로당 로고"
          className={styles.logo}
        />
        <div className={styles.form_group}>
          <Input
            label="이름"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className={styles.form_group}>
          <Input
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
          />
        </div>

        <div className={styles.email_input_container}>
          <Input
            label="이메일"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.email_input}
          />
          <Button
            label="중복확인"
            className={styles.id_check}
            onClick={handleIdCheck}
          />
        </div>

        <div className={styles.form_group}>
          <Input
            label="비밀번호"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className={styles.form_group}>
          <Input
            label="비밀번호 재확인"
            type="password"
            value={passwordRe}
            onChange={(e) => setPasswordRe(e.target.value)}
          />
        </div>

        <Button label="회원가입" onClick={handleSubmit} />
      </form>
    </div>
  );
};

export default Signup;
