import React from "react";
import styles from "../public/css/Input.module.css";
const Input = ({ label, type, value, onChange }) => {
  return (
    <input
      type={type}
      id={label}
      className={styles.input}
      value={value}
      onChange={onChange}
      placeholder={label}
    />
  );
};

export default Input;
