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
  const [birth, setBirth] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [phonenum, setPhonenum] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
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

    try {
      // 서버로 회원가입 요청
      const response = await axiosInstance.post("/api/user/signup", {
        name,
        birth,
        username,
        password,
        password2,
        phonenum,
      });

      console.log("회원가입 성공:", response.data);
      alert("회원가입이 완료되었습니다!");
      navigate("/pages/Login"); // 회원가입 성공 시 로그인 페이지로 이동
    } catch (error) {
      console.error("회원가입 실패:", error.response?.data || error.message);
      alert(error.response?.data?.message || "회원가입 중 오류가 발생했습니다.");
    }
  };

  const handleIdCheck = async (e) => {
    e.preventDefault();

    if (!username) {
      alert("아이디를 입력하세요.");
      return;
    }

    try {
      // 아이디 중복 확인을 위해 GET 요청
      const response = await axiosInstance.get("/api/user/check-username", {
        params: { username }, // 쿼리 매개변수로 username 전달
      });

      if (response.data.data?.available) {
        alert("사용 가능한 아이디입니다.");
      } else {
        alert("이미 사용 중인 아이디입니다.");
      }
    } catch (error) {
      console.error("중복 확인 실패:", error.response?.data || error.message);
      alert(error.response?.data?.message || "중복 확인 중 오류가 발생했습니다.");
    }
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
            value={birth}
            onChange={(e) => setBirth(e.target.value)}
          />
        </div>

        <div className={styles.email_input_container}>
          <Input
            label="아이디"
            type="text"
            value={username}
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
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
          />
        </div>

        <div className={styles.form_group}>
          <Input
            label="전화번호"
            type="text"
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


