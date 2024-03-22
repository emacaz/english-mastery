import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import questions from "./Questions";
import Question from "./Question";

const Test = () => {
  const navigate = useNavigate();
  const [isTestStarted, setIsTestStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(20 * 60);

  useEffect(() => {
    document.title = "English Test";
  }, []);

  useEffect(() => {
    let timerId;

    if (isTestStarted && timeLeft > 0) {
      timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    } else if (timeLeft === 0) {
      // Time is up, handle end of test here
    }

    return () => clearTimeout(timerId);
  }, [timeLeft, isTestStarted]);

  const goBack = () => {
    navigate("/");
  };

  const startTest = () => {
    setIsTestStarted(true);
    setTimeLeft(20 * 60); // Reset timer to 20 min
  };

  const handleAnswer = (selectedAnswer) => {
    // Update userAnswers and navigate to the next question
    // Additional logic for handling answer selection
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return (
    <section>
      {!isTestStarted ? (
        <div>
          <h1>Test de Inglés</h1>
          <p>
            Una vez empieces el test no debes recargar o actualizar la página,
            tienes 20 minutos para completarlo (aparecerá un temporizador) y
            necesitas aprobar el 90% de respuestas por nivel para aprobar dicho
            nivel. Cuando lo empieces no puedes volver atrás hasta terminarlo y
            una vez el tiempo se termine, se cierra el test. Good luck!
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
        </div>
      ) : (
        <div>
          <div>Time left: {formatTime(timeLeft)}</div>
          <Question
            questionData={questions[currentQuestionIndex]}
            onAnswerSelect={handleAnswer}
          />
        </div>
      )}
    </section>
  );
};

export default Test;

/**
 * press "Empezar Test"***:
 * Desaparece todo lo anterior y aparece:
 * [Timer, Nivel, Pregunta, Opciones de respuestas] - Componente para (nivel, pregunta, opciones de respuestas)
 *
 * Al presionar una opción de respuesta...***:
 * Guardar la respuesta y hacer su respectiva lógica,
 * y a la siguiente... hasta terminar ó hasta que el timer se acabe
 *
 * (En medio...): si el timer acaba o si han terminado las preguntas...***:
 * MOSTRAR:
 * Has terminado el test + puntuación
 * Porcentaje de respuestas correctas por nivel:
 * MOSTRAR respuestas por nivel***
 * Nivel de Inglés: A,B,C...
 * Botones: Ir a la página de Inicio - Tomar test nuevamente...
 *
 * Botón: Tomar test nuevamente -> Dirige a *press "Empezar Test"***:
 */
