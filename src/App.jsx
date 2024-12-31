import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Introduce from "./pages/Introduce";
import AboutUs from "./pages/AboutUs";
import ChatBot from "./pages/ChatBot";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MyPage from "./pages/MyPage";
import Promise1 from "./pages/Promise1";
import PromiseSuccess from "./pages/PromiseSuccess";
import Member from "./pages/PromiseMember";
import MyPromsie from "./pages/MyPromise";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} /> {/* 기본 경로로 설정 */}
        {/* <Route path="/pages/MainPage" element={<MainPage />} /> */}
        <Route path="/pages/Introduce" element={<Introduce />} />
        <Route path="/pages/AboutUs" element={<AboutUs />} />
        <Route path="/pages/ChatBot" element={<ChatBot />} />
        <Route path="/pages/Login" element={<Login />} />
        <Route path="/pages/Signup" element={<Signup />} />
        <Route path="/pages/Mypage" element={<MyPage />} />
        <Route path="/pages/Promise1" element={<Promise1 />} />
        <Route path="/pages/PromiseSuccess" element={<PromiseSuccess />} />
        <Route path="/pages/PromiseMember" element={<Member />} />
        <Route path="/pages/MyPromise" element={<MyPromsie />} />
      </Routes>
    </Router>
  );
}

export default App;
