import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
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
import ReverseRPS from "./pages/ReverseRPS";
import ReverseRPSMain from "./pages/ReverseRPSMain";
import NumberGuess from "./pages/NumberGuess";
import NumberGuessMain from "./pages/NumberGuessMain";
import Choose from "./pages/Choose";

function App() {
  return (
    <div className="app">
      <Router>
        <div className="router-content">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/pages/AboutUs" element={<AboutUs />} />
            <Route path="/pages/ChatBot" element={<ChatBot />} />
            <Route path="/pages/Login" element={<Login />} />
            <Route path="/pages/Signup" element={<Signup />} />
            <Route path="/pages/Mypage" element={<MyPage />} />
            <Route path="/pages/Promise1" element={<Promise1 />} />
            <Route path="/pages/PromiseSuccess" element={<PromiseSuccess />} />
            <Route path="/pages/PromiseMember" element={<Member />} />
            <Route path="/pages/MyPromise" element={<MyPromsie />} />
            <Route path="/pages/ReverseRPS" element={<ReverseRPS />} />
            <Route path="/pages/ReverseRPSMain" element={<ReverseRPSMain />} />
            <Route path="/pages/NumberGuess" element={<NumberGuess />} />
            <Route
              path="/pages/NumberGuessMain"
              element={<NumberGuessMain />}
            />
            <Route path="/pages/Choose" element={<Choose />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
