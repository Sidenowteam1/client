import React from "react";
import "../public/css/Main.css";
import styles from "../public/css/Box.module.css";
import memberStyles from "../public/css/Member.module.css";

const Member = () => {
  const meetingInfo = {
    date: "11월 24일 일요일 오전 10시",
    location: "OO시장",
  };

  const members = [
    { id: 1, name: "○○○", phone: "010-xxxx-xxxx" },
    { id: 2, name: "□□□", phone: "010-xxxx-xxxx" },
    { id: 3, name: "▲▲▲", phone: "010-xxxx-xxxx" },
  ];

  return (
    <div className={styles.container}>
      <div className={`${styles.box} ${memberStyles.boxWithInfo}`}>
        <div className={memberStyles.meetingInfo}>
          <p>
            📅 {meetingInfo.date} | {meetingInfo.location} 약속 멤버입니다.
          </p>
        </div>
        <div className={memberStyles.memberList}>
          {members.map((member) => (
            <div className={memberStyles.memberCard} key={member.id}>
              <p>
                {member.name} 님 전화번호 | {member.phone}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Member;
