import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MyPage from "./pages/MyPage";
import PromiseSuccess from "./pages/PromiseSuccess";
import Member from "./pages/PromiseMember";
import MyPromsie from "./pages/MyPromise";
import MainPage from "./pages/MainPage";
import ReverseRPS from "./pages/ReverseRPS";
import ReverseRPSMain from "./pages/ReverseRPSMain";
import NumberGuess from "./pages/NumberGuess";
import NumberGuessMain from "./pages/NumberGuessMain";
import Choose from "./pages/Choose";
import Promise01 from "./pages/Promise01";
import Promise02 from "./pages/Promise02";
import Introduce from "./pages/Introduce";
import ChatbotPage from "./pages/ChatbotPage";

const Layout = ({ children }) => {
  const location = useLocation();

  // 헤더와 푸터를 제외할 경로 설정
  const excludeHeaderFooter = ["/", "/pages/Login", "/pages/MainPage"];

  return (
    <>
      {!excludeHeaderFooter.includes(location.pathname) && <Header />}
      <div className="router-content">{children}</div>
      {!excludeHeaderFooter.includes(location.pathname) && <Footer />}
    </>
  );
};

function App() {
  return (
    <div className="app">
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Signup />} />
            <Route path="/pages/AboutUs" element={<AboutUs />} />
            <Route path="/pages/Login" element={<Login />} />
            <Route path="/pages/Mypage" element={<MyPage />} />
            <Route path="/pages/MainPage" element={<MainPage />} />
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
            <Route path="/pages/Promise01" element={<Promise01 />} />
            <Route path="/pages/Promise02" element={<Promise02 />} />
            <Route path="/pages/Introduce" element={<Introduce />} />
            <Route path="/pages/ChatbotPage" element={<ChatbotPage />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
