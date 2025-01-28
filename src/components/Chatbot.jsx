import React from "react";
import styles from "../public/css/Chatbot.module.css";

const Chatbot = ({ sender, message }) => {
  return (
    <div
      className={`${styles.chatBot} ${
        sender === "bot" ? styles.bot : styles.user
      }`}
    >
      {message}
    </div>
  );
};

export default Chatbot;
