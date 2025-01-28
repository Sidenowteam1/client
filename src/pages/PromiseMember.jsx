import React, { useEffect, useState } from "react";
import "../public/css/Main.css";
import styles from "../public/css/Box.module.css";
import memberStyles from "../public/css/Member.module.css";
import axios from "axios";
import { useParams } from "react-router-dom";

const Member = () => {
  const { appointmentId } = useParams(); // URL에서 appointmentId 가져오기
  const [meetingInfo, setMeetingInfo] = useState({
    title: "", // 약속 제목
    description: "", // 약속 설명
    location: "", // 약속 장소
    dateStatus: "", // D-Day, D-N 등
    currentParticipants: 0, // 현재 참여자 수
    maxParticipants: 0, // 최대 참여자 수
    statusMessage: "", // 상태 메시지
    isCreator: false, // 생성자인지 여부
    createdBy: "", // 생성자 이름
    phoneNumber: "", // 생성자 연락처
    members: [], // 약속 멤버 리스트
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 약속 정보 API 호출
  useEffect(() => {
    const fetchAppointmentInfo = async () => {
      try {
        const response = await axios.get(`/api/appointments/${appointmentId}`);
        const appointmentData = response.data; // 백엔드에서 받은 데이터
        setMeetingInfo({
          title: appointmentData.title,
          description: appointmentData.description,
          location: appointmentData.location,
          dateStatus: appointmentData.dateStatus,
          currentParticipants: appointmentData.currentParticipants,
          maxParticipants: appointmentData.maxParticipants,
          statusMessage: appointmentData.statusMessage,
          isCreator: appointmentData.isCreator,
          createdBy: appointmentData.createdBy,
          phoneNumber: appointmentData.phoneNumber,
          members: appointmentData.members || [], // 약속 멤버 정보 설정
        });
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
            📅 날짜 {meetingInfo.dateStatus} | 장소 {meetingInfo.location}에서
            약속 멤버입니다.
          </p>
        </div>
        <div className={memberStyles.memberList}>
          {meetingInfo.members.length > 0 ? ( // members가 비어있지 않을 경우에만 map 호출
            meetingInfo.members.map((member) => (
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
