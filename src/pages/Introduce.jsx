import React from "react";
import { useNavigate } from "react-router-dom";
import "../public/css/Introduce.css";

const Introduce = () => {
  const navigate = useNavigate();
  return (
    <div className="introduce-container">
      <img
        src="../src/images/introduce01.png"
        alt="introduce01"
        className="introduce-image"
      />
      <img
        src="../src/images/introduce02.png"
        alt="introduce02"
        className="introduce-image"
      />
      <img
        src="../src/images/introduce03.png"
        alt="introduce03"
        className="introduce-image"
      />
      <img
        src="../src/images/introduce04.png"
        alt="introduce04"
        className="introduce-image"
      />
    </div>
  );
};

export default Introduce;
