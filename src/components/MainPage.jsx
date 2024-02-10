import React from "react";

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
