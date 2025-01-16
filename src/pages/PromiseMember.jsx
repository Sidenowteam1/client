import React, { useEffect, useState } from "react";
import "../public/css/Main.css";
import styles from "../public/css/Box.module.css";
import memberStyles from "../public/css/Member.module.css";
import axios from "axios";
import { useParams } from "react-router-dom";

const Member = () => {
  const { appointmentId } = useParams(); // URL에서 appointmentId 가져오기
  const [meetingInfo, setMeetingInfo] = useState({
    date: "11월 24일 일요일 오전 10시", // 기본 날짜 설정
    location: "OO시장",
    dateStatus: "", // 백엔드에서 제공하는 dateStatus 값 설정
  });
  const [members, setMembers] = useState([]); // 빈 배열로 초기화
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 약속 정보 API 호출
  useEffect(() => {
    const fetchAppointmentInfo = async () => {
      try {
        const response = await axios.get(`/api/appointments/${appointmentId}`);
        const appointmentData = response.data; // 백엔드에서 받은 데이터
        setMeetingInfo({
          date: appointmentData.dateStatus, // dateStatus 사용
          location: appointmentData.location,
          dateStatus: appointmentData.dateStatus, // 예: "D-Day"
        });
        setMembers(appointmentData.members || []); // 멤버 정보 설정
        setLoading(false);
      } catch (err) {
        console.error("API 호출 중 오류 발생:", err);
        setError("약속 정보를 가져오는 데 실패했습니다.");
        setLoading(false);
      }
    };

    fetchAppointmentInfo();
  }, [appointmentId]);

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className={styles.container}>
      <div className={`${styles.box} ${memberStyles.boxWithInfo}`}>
        <div className={memberStyles.meetingInfo}>
          <p>
            📅 날짜{meetingInfo.date} | 장소{meetingInfo.location}에서 약속
            멤버입니다.
          </p>
          <p>{meetingInfo.dateStatus}</p> {/* dateStatus: ex) d-day */}
        </div>
        <div className={memberStyles.memberList}>
          {members.length > 0 ? ( // members가 비어있지 않을 경우에만 map 호출
            members.map((member) => (
              <div className={memberStyles.memberCard} key={member.id}>
                <p>
                  {member.username} 님 전화번호 | {member.phoneNumber}{" "}
                </p>
              </div>
            ))
          ) : (
            <p>등록된 멤버가 없습니다.</p> // members가 비어있을 경우 메시지 표시
          )}
        </div>
      </div>
    </div>
  );
};

export default Member;
