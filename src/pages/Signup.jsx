import React, { useState } from "react";
import styles from "../public/css/Signup.module.css";
import "../public/css/Main.css";
import Input from "../components/Input";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Axios 기본 설정
  const axiosInstance = axios.create({
    baseURL: "http://localhost:8080", // 백엔드 기본 URL
    withCredentials: true, // 쿠키를 포함한 요청 허용
    headers: {
      "Content-Type": "application/json", // JSON 데이터 처리
    },
  });

const Signup = () => {
  const [name, setName] = useState("");
  const [birth, setBirth] = useState(""); // birthDate -> birth
  const [username, setUsername] = useState(""); // email -> username
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState(""); // passwordRe -> password2
  const [phonenum, setPhonenum] = useState(""); // phonenum 추가
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // 모든 항목을 입력했는지 확인
    if (!name || !birth || !username || !password || !password2 || !phonenum) {
      alert("모든 항목을 입력해주세요.");
      return;
    }

    // 비밀번호와 비밀번호 재확인이 일치하는지 확인
    if (password !== password2) {
      alert("비밀번호와 비밀번호 재확인이 일치하지 않습니다.");
      return;
    }

    setError("");
    console.log("회원가입 시도:", { name, birth, username, password, phonenum });

    // 회원가입 성공 시 로그인 페이지로 이동
    navigate("/pages/Login");
  };

  const handleIdCheck = (e) => {
    e.preventDefault();
    if (!username) { // email -> username
      alert("아이디를 입력하세요.");
      return;
    }
    console.log("중복 확인 요청:", username); // email -> username
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
            value={birth} // birthDate -> birth
            onChange={(e) => setBirth(e.target.value)}
          />
        </div>

        <div className={styles.email_input_container}>
          <Input
            label="아이디"
            type="text" // email -> text
            value={username} // email -> username
            onChange={(e) => setUsername(e.target.value)}
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
            value={password2} // passwordRe -> password2
            onChange={(e) => setPassword2(e.target.value)}
          />
        </div>

        <div className={styles.form_group}>
          <Input
            label="전화번호"
            type="text" // phonenum 변수 추가
            value={phonenum}
            onChange={(e) => setPhonenum(e.target.value)}
          />
        </div>

        <Button label="회원가입" onClick={handleSubmit} />
      </form>
    </div>
  );
};

export default Signup;

