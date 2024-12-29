import React from "react";
import styles from "../public/css/Button.module.css";

const Button = ({ label, onClick, className }) => {
  return (
    <button
      className={`${styles.button} ${className || ""}`}
      onClick={onClick}
      disabled={className?.includes(styles.id_check)} // id_check일 경우 비활성화
    >
      {label}
    </button>
  );
};

export default Button;
