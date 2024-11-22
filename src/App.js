import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import React, { useContext } from "react";
import Home from "./views/Home";
import LoginView from "./views/LoginView";
import Navbar from "./componens/Navbar";
import JoinNowView from "./views/JoinNowView";
/* import { AppRouter } from "./Router"; */
/* import { Context } from "./store/context"; */

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/join" element={<JoinNowView />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
