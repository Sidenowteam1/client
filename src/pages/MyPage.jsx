import React, { useState } from "react";
import "../public/css/MyPage.css";
import "../public/css/Main.css";

const MyPage = () => {
  const [name] = useState("ooo");
  const [birthdate] = useState("1900.00.00");
  const [userId] = useState("abcd");
  const [password, setPassword] = useState("1234");
  const [phone, setPhone] = useState("010-0000-0000");
  const [group, setGroup] = useState("신난다 경로당");

  return (
    <div className="container">
      <div className="edit-profile">
        <h2 className="title">● 프로필 수정</h2>
        <div className="profileBox">
          <div className="profileImage">
            <img
              src="src\images\default-profile.png"
              alt="profile"
              className="profile-image"
            />
            <div className="buttonGroup">
              <button className="profile">사진 수정</button>
              <button className="profile">사진 삭제</button>
            </div>
          </div>

          <div className="info">
            <div className="field">
              <span className="text">이름 | {name}</span>
            </div>
            <div className="field">
              <span className="text">생년월일 | {birthdate}</span>
            </div>
            <div className="field">
              <span className="text">아이디 | {userId}</span>
            </div>
            <div className="field">
              <span className="text">비밀번호 | {password}</span>
              <button className="changeButton">변경</button>
            </div>
            <div className="field">
              <span className="text">전화번호 | {phone}</span>
              <button className="changeButton">변경</button>
            </div>
            <div className="field">
              <span className="text">나의 경로당 | {group}</span>
              <button className="changeButton">변경</button>
            </div>
          </div>
        </div>
      </div>

      <div className="government">
        <h2 className="title">● 나의 혜택</h2>
        <div className="governBox">
          <div className="notice">
            <img
              src="src\images\govern.png"
              alt="말풍선"
              className="govern-img"
            />
            <h3>내 나이에 맞는 정부 혜택은?</h3>
          </div>
          <div className="contents">1. 지원 내용</div>
          <div className="contents">2. 지원 내용</div>
          <div className="add">
            <strong>+</strong> 더보기
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
