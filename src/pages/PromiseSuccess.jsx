import React from "react";
import "../public/css/Main.css";
import "../public/css/Success.css";

const PromiseSuccess = () => {
  return (
    <div className="success-box">
      <div className="message">
        <h1 id="check">✔️</h1>
        <p>약속이 성공적으로 만들어졌어요!</p>
      </div>
    </div>
  );
};

export default PromiseSuccess;
