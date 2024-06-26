import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import questions from "./Questions";
import Question from "./Question";

const Test = () => {
  const minutes = 20 * 60;
  const navigate = useNavigate();
  const [isTestStarted, setIsTestStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(minutes);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    document.title = "English Test 📄";
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

  const goHome = () => {
    document.title = "English Mastery";
    navigate("/");
  };

  const seeProgram = () => {
    document.title = "English Mastery";
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

  const categorizeResults = () => {
    const resultsByLevel = userAnswers.reduce((acc, answer) => {
      const { level } = questions.find((q) => q.question === answer.question);
      if (!acc[level]) {
        acc[level] = { correct: 0, incorrect: 0 };
      }
      answer.isCorrect ? acc[level].correct++ : acc[level].incorrect++;
      return acc;
    }, {});

    return resultsByLevel;
  };

  const resultsByLevel = categorizeResults();

  return (
    <section>
      {!isTestStarted ? (
        <div className="p-10 text-justify max-w-3xl m-auto">
          <h1 className="text-3xl text-center sm:text-4xl leading-normal m  -2 font-semibold">
            Test de Inglés
          </h1>
          <p className="mb-10 text-base my-8 sm:text-xl">
            Una vez empieces el test no debes recargar o actualizar la página,
            tienes <strong>20 minutos</strong> para completarlo (aparecerá un
            temporizador) y necesitas aprobar el 90% de respuestas por nivel
            para aprobar dicho nivel. Cuando lo empieces{" "}
            <u>no puedes volver atrás hasta terminarlo</u> y una vez el tiempo
            se termine, se cierra el test. Good luck!
          </p>
          <div className="flex flex-col gap-4 py-3 sm:flex-row">
            <button
              className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300 w-full"
              onClick={goHome}
            >
              Volver al Inicio
            </button>
            <button
              className="px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-green-300 w-full"
              onClick={startTest}
            >
              Empezar Test
            </button>
          </div>
        </div>
      ) : showResults ? (
        <div className="max-w-3xl m-auto p-8">
          <h2 className="text-xl sm:text-2xl font-semibold">
            Has terminado el test
          </h2>
          {Object.entries(resultsByLevel).map(
            ([level, { correct, incorrect }], index) => (
              <div
              key={index}
              className="border-x-zinc-300 border-2 rounded-md p-4 m-5"
              >
                <h3 className="text-lg sm:text-xl font-semibold">Nivel {level}</h3>
                <p>Respuestas Correctas: <span className="font-semibold">{correct} ✅</span></p>
                <p>Respuestas Incorrectas: <span className="font-semibold">{incorrect} ❌</span></p>
              </div>
            )
          )}
          <div className="flex flex-col gap-4 py-3 sm:flex-row">
            <button
              className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300 w-full"
              onClick={seeProgram} // It has to be modified
            >
              Ver Planes {/* Ver Cursos (Productos separados) */}
            </button>
            <button
              className="px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-green-300 w-full"
              onClick={seeProgram}
            >
              Empezar desde Cero
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className="p-4">
            <span className="text-rose-500 font-semibold text-xl">
              Tiempo restante: {formatTime(timeLeft)}
            </span>
          </div>
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
 * Ver elementos que se repiten para convertirlos en componentes
 * Timer up or finished:
 * Results + CTA
 * [Empieza desde cero]: Enviarlo a "Que contiene el English Mastery"
 * [Ver cursos]: Mostrar los niveles individuales.
 */
