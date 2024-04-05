import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import questions from "./Questions";
import Question from "./Question";

const Test = () => {
  const minutes = 1 * 10;
  const navigate = useNavigate();
  const [isTestStarted, setIsTestStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(minutes);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    document.title = "English Test";
  }, []);

  useEffect(() => {
    let timerId;

    if (isTestStarted && timeLeft > 0) {
      timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    } else if (timeLeft === 0) {
      // Time is up, handle end of test here
      console.log("Time is up.");
      setShowResults(true);
    }

    return () => clearTimeout(timerId);
  }, [timeLeft, isTestStarted]);

  const goBack = () => {
    navigate("/");
  };

  const startTest = () => {
    setIsTestStarted(true);
    setTimeLeft(minutes); // Reset timer to 20 min
  };

  const handleAnswer = (selectedAnswer) => {
    const newAnswer = {
      question: questions[currentQuestionIndex].question,
      selectedAnswer: selectedAnswer.text,
      isCorrect: selectedAnswer.correct,
    };

    setUserAnswers((prevAnswers) => [...prevAnswers, newAnswer]);

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      // Handle end of test (e.g., show results)
      console.log("All questions answered...");
      // setIsTestStarted(false);
      // I might want to navigate to a results page or handle results display here
      setShowResults(true);
    }
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  const showResult = () => {
    setShowResults(true);
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
      ) : showResults ? (
        <div>
          <h2>Has terminado el test</h2>
          {userAnswers.map((answer, index) => (
            <p key={index}>
              {answer.question}: {answer.isCorrect ? "✅" : "❌"}
            </p>
          ))}
          <button
            onClick={() => {
              /* logic to navigate to courses */
            }}
          >
            Ver cursos
          </button>
          <button
            onClick={() => {
              /* logic to restart the test */
            }}
          >
            Empezar desde cero
          </button>
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
 * Timer up or finished:
 * Results + CTA
 * [Empieza desde cero]: Enviarlo a "Que contiene el English Mastery"
 * [Ver cursos]: Mostrar los niveles individuales.
 */
