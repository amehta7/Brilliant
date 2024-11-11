import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Courses from "./components/Courses";
import DefaultPage from "./components/DefaultPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

const App: React.FC = () => {
  const [user, setUser] = useState<any>(null);

  return (
    <BrowserRouter>
      {/* Header */}
      <Header user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<DefaultPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route
          path="/login"
          element={<Login onSubmit={undefined} setUser={setUser} />}
        />
        <Route
          path="/signup"
          element={<SignUp onSubmit={undefined} setUser={setUser} />}
        />
      </Routes>
      {/* Footer */}
      <Footer />
    </BrowserRouter>
  );
};

export default App;
