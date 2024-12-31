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
import ReverseRPS from "./pages/ReverseRPS";
import ReverseRPSMain from "./pages/ReverseRPSMain";
import Header from "./components/Header";
import Promise01 from "./pages/Promise01";
import Promise02 from "./pages/Promise02";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Promise02 />} /> {/* 기본 경로로 설정 */}
        <Route path="/pages/Introduce" element={<Introduce />} />
        <Route path="/pages/AboutUs" element={<AboutUs />} />
        <Route path="/pages/ChatBot" element={<ChatBot />} />
        <Route path="/pages/Login" element={<Login />} />
        <Route path="/pages/Signup" element={<Signup />} />
        <Route path="/pages/Mypage" element={<MyPage />} />
        <Route path="/pages/PromiseSuccess" element={<PromiseSuccess />} />
        <Route path="/pages/ReverseRPS" element={<ReverseRPS />} />
        <Route path="/pages/ReverseRPSMain" element={<ReverseRPSMain />} />
        <Route path="/components/Header" element={<Header />} />
        <Route path="/pages/Promise01" element={<Promise01 />} />
        <Route path="/pages/Promise02" element={<Promise02 />} />
      </Routes>
    </Router>
  );
}

export default App;
