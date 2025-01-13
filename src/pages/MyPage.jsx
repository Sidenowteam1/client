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
  const [profileImage, setProfileImage] = useState(
    "../src/images/default-profile.png"
  ); // 기본 프로필 이미지 경로

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result); // 이미지 미리보기 설정
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageReset = () => {
    setProfileImage("../src/images/default-profile.png"); // 기본 프로필로 복원
  };

  // 서버로 데이터 전송하는 함수
  const handleSave = async () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("birthdate", birthdate);
    formData.append("userId", userId);
    formData.append("phone", phone);
    formData.append("group", group);
    formData.append("profileImage", profileImage); // 이미지 파일 전송

    try {
      const response = await fetch("/api/submitData", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log("Data submitted successfully!");
        // 전송 성공 시 처리 (예: 사용자에게 알림)
      } else {
        console.error("Error submitting data");
        // 전송 실패 시 처리
      }
    } catch (error) {
      console.error("Error:", error);
      // 네트워크 에러 시 처리
    }
  };

  return (
    <div className="container">
      <div className="edit-profile">
        <h2 className="title">● 프로필 수정</h2>
        <div className="profileBox">
          <div className="profileImage">
            <img src={profileImage} alt="profile" className="profile-image" />
            <div className="buttonGroup">
              <div className="edit-buttons">
                <button
                  className="profile"
                  onClick={() =>
                    document.getElementById("image-upload").click()
                  }
                >
                  사진 수정
                </button>
                <input
                  id="image-upload"
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleImageChange}
                />
                <button className="profile" onClick={handleImageReset}>
                  사진 삭제
                </button>
              </div>
              <button
                className="profile save-button"
                onClick={handleSave} // 저장 버튼 클릭 시 서버로 데이터 전송
              >
                저장
              </button>
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
          <div className="question">
            <img
              src="../src/images/govern.png"
              alt="말풍선"
              className="govern-img"
            />
            <h3>나에게 맞는 정부 혜택은?</h3>
          </div>
          <div className="contents-list">
            <div className="contents">
              1. 지원 내용
              <p>지원내용 구체적으로 작성됨</p>
            </div>
            <div className="contents">
              2. 지원 내용
              <p>텍스트 길이에 따라서 칸 길이가 조정됨</p>
            </div>
            <div className="add">
              <strong>+</strong> 더보기
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
