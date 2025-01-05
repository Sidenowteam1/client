import React, { useState } from "react";
import styles from "../public/css/ChatbotPage.module.css";
import Chatbot from "../components/Chatbot";
import Button from "../components/Button";

const ChatbotPage = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      message:
        "아픈 곳에 대해 궁금한 점이 있거나 주변 병원을 알고 싶으면 물어봐주세요!",
    },
    { sender: "user", message: "용산구 근처 정형외과를 알려줘" },
    {
      sender: "bot",
      message:
        "용산구 청파동 근처의 정형외과로는 안아파정형외과, 친절해정형외과가 있습니다.",
    },
    { sender: "user", message: "챗봇에게 물어볼게요~" },
  ]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && message.trim() !== "") {
      const newMessages = [...messages, { sender: "user", message }];
      setMessages(newMessages);
      setMessage("");

      setTimeout(() => {
        const botMessage =
          "알겠습니다! 추가로 궁금한 점이 있으시면 물어봐 주세요.";
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "bot", message: botMessage },
        ]);
      }, 1000);
    }
  };

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      const newMessages = [...messages, { sender: "user", message }];
      setMessages(newMessages);
      setMessage("");

      setTimeout(() => {
        const botMessage =
          "알겠습니다! 추가로 궁금한 점이 있으시면 물어봐 주세요.";
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "bot", message: botMessage },
        ]);
      }, 1000);
    }
  };

  return (
    <div className={styles.container}>
      <h1>AI 챗봇</h1>
      <div className={styles.ChatBotContainer}>
        <div className={styles.messagesContainer}>
          {messages.map((msg, index) => (
            <Chatbot key={index} sender={msg.sender} message={msg.message} />
          ))}
          <div className={styles.inputContainer}>
            <input
              type="text"
              className={styles.input}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="메시지를 입력하세요"
            />
            <Button
              className={styles.sendButton}
              label="전송"
              onClick={handleSendMessage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatbotPage;
