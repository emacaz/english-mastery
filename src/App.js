import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Test from "./components/EnglishTest/Test";
import React, { useState, useEffect } from "react";

import { Hero } from "./components/Hero";
import { Content } from "./components/Content/Content";
import { Services } from "./components/Services/Services";
import { Instructor } from "./components/Instructor";
import { Start } from "./components/Start";
import { PracticeRoom } from "./components/PracticeRoom";
import { FAQ } from "./components/FAQ/FAQ";
import { Testimonials } from "./components/Testimonials/Testimonials";
import { Prices } from "./components/Prices/Prices";
import { Contact } from "./components/Contact";
import { WhatsAppButton } from "./components/WhatsappButton";
import ModalWindow from "./components/ModalWindow";

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
