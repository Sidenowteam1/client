import React from "react";

const Signup = () => {
  const handleSignup = () => {};
  return (
    <div>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
};

export default Signup;
