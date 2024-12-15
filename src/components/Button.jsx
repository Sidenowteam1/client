import React from "react";
import styles from "../public/css/Button.module.css";

const Button = ({ label, onClick }) => {
  return (
    <div>
      <button className={styles.button} onClick={onClick}>
        {label}
      </button>
    </div>
  );
};

export default Button;
