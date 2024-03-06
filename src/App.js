import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage";
import Test from "./components/EnglishTest/Test";
import React, { useState, useEffect } from "react";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/test" element={<Test/>} />
      </Routes>
    </Router>
  );
}

export default App;
