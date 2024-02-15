import React from "react";
import { useState, useEffect } from "react";
import ModalWindow from "./ModalWindow";

import Hero from "./MainPage/Hero";
import Content from "./MainPage/Content/Content";
import Instructor from "./MainPage/Instructor";
import Services from "./MainPage/Services/Services";
import Start from "./MainPage/Start";
import PracticeRoom from "./MainPage/PracticeRoom";
import FAQ from "./MainPage/FAQ/FAQ";
import Testimonials from "./MainPage/Testimonials/Testimonials";
import Prices from "./MainPage/Prices/Prices";
import Contact from "./MainPage/Contact";
import WhatsAppButton from "./MainPage/WhatsappButton";

const MainPage = () => {
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
    <main className="pt-8 md:p-0">
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
  );
};

export default MainPage;
