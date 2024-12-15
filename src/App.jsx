import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";

import Introduce from "./pages/Introduce";
import AboutUs from "./pages/AboutUs";
import ChatBot from "./pages/ChatBot";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <Router>
      <Login />
      <Routes>
        <Route path="/pages/Introduce" element={<Introduce />} />
        <Route path="/pages/AboutUs" element={<AboutUs />} />
        <Route path="/pages/ChatBot" element={<ChatBot />} />
        <Route path="/pages/Login" element={<Login />} />
        <Route path="/pages/Signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
