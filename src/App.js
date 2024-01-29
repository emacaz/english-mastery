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
  // State to control modal's visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Effect to check if the modal should be shown
  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");
    if (!hasVisited) {
      setIsModalOpen(true); // Show the modal if the user hasn't visited before
      localStorage.setItem("hasVisited", "true"); // Set a flag in local storage
    }
  }, []);

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Router>
      <main className='"pt-8 md:p-0'>
        {isModalOpen && <ModalWindow closeModal={closeModal} />}

        <Hero />
        <Content />
        <Instructor />
        <Services />
        <Start />
        <PracticeRoom />
        <FAQ />
        <Testimonials />
        <Prices />
        <Contact />
        <WhatsAppButton />
      </main>

      <Routes>
        <Route path="/english-test" element={<Test />} />
      </Routes>
    </Router>
  );
}

export default App;
