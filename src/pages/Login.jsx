import React, { useState } from "react";
import styles from "../public/css/Login.module.css";
import "../public/css/Main.css";
import Input from "../components/Input";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState(""); // email -> username
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // Axios 기본 설정
  const axiosInstance = axios.create({
    baseURL: "http://localhost:8080", // 백엔드 기본 URL
    withCredentials: true, // 쿠키를 포함한 요청 허용
    headers: {
      "Content-Type": "application/json", // JSON 데이터 처리
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert("아이디와 비밀번호를 입력해주세요.");
      return;
    }

    setError(""); // 에러 초기화

    try {
      // 로그인 요청
      const response = await axiosInstance.post("/api/user/login", {
        username,
        password,
      });

      // 서버 응답 출력
      console.log("서버 응답:", response.data); // 서버에서 반환한 토큰 정보 출력

      const accessToken = response.data.data.accessToken; // 서버 응답에서 토큰 추출
      const refreshToken = response.data.data.refreshToken; // 서버 응답에서 토큰 추출

      localStorage.setItem("accessToken", accessToken); // 토큰을 로컬스토리지에 저장
      localStorage.setItem("refreshToken", refreshToken); // 토큰을 로컬스토리지에 저장
      // localStorage.setItem("userId");

      navigate("/pages/MainPage"); // 페이지 이동
    } catch (err) {
      console.error("로그인 실패:", err);

      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError("로그인에 실패했습니다. 다시 시도해주세요.");
      }
    }
  };

  const handleSignupClick = () => {
    navigate("/pages/Signup");
  };

  return (
    <div className={styles.login_container}>
      <form onSubmit={handleSubmit} className={styles.login_form}>
        <img
          src="../src/images/mainlogo.png"
          alt="스마트경로당 로고"
          style={{ width: "200px", marginBottom: "20px" }}
        />
        {error && <p className={styles.error_message}>{error}</p>}
        <div className={styles.form_group}>
          <Input
            label="아이디" // 이메일 -> 아이디
            type="text"
            value={username} // email -> username
            onChange={(e) => setUsername(e.target.value)} // email -> username
          />
        </div>
        <div className={styles.form_group}>
          <Input
            label="비밀번호"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p
            onClick={handleSignupClick}
            style={{
              cursor: "pointer",
              color: "#ff8c42",
              textDecoration: "underline",
            }}
          >
            회원이 아니신가요? 눌러서 회원가입창으로 이동!!
          </p>
          <Button label="로그인" />
        </div>
      </form>
    </div>
  );
};

export default Login;
