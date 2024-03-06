import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import questions from "./Questions"

const Test = () => {
  const navigate = useNavigate();
  const[ isTestStarted, setIsTestStarted ] = useState(false);
  const [ currentQuestionIndex, setCurrentQuestionIndex ] = useState(0);
  const[ userAnswers, setUserAnswers ] = useState([]); 

  useEffect(() => {
    document.title = "English Test";
  }, []);

  const goBack = () => {
    navigate('/');
  }

  const startTest = () => {
    console.log("Starting Test");
    setIsTestStarted(true);
  }

  const handleAnswer = (selectedAnswer) => {
    // Update userAnswers and navigate to the next question
    // Additional logic for handling answer selection
  }

  return (
    <section>
      <h1>Bienvenido al Test de Inglés</h1>
      <p>
        Una vez empieces el test no debes recargar o actualizar la página,
        tienes 20 minutos para completarlo y necesitas aprobar el 90% de
        respuestas por nivel para aprobar dicho nivel. Cuando lo empieces no
        puedes volver atrás hasta terminarlo y una vez el tiempo se termine, se
        cierra el test. Good luck!
      </p>
      <div className="">
        <button
          className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
          onClick={goBack}
        >
          Volver al Inicio
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-green-300"
          onClick={startTest}
        >
          Empezar Test
        </button>
      </div>
    </section>
  );
};

export default Test;
