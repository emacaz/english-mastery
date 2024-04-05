import React from "react";

const Question = ({ questionData, onAnswerSelect }) => {
  return (
    <div className="max-w-3xl m-auto p-8">
      <h1 className="text-3xl leading-normal mb-2 sm:text-4xl font-semibold">
        Nivel: {questionData.level}
      </h1>
      <h2 className="text-xl sm:text-2xl">{questionData.question}</h2>
      <div className="flex flex-col gap-6 p-5 sm:p-5 sm:flex-row">
        {questionData.answers.map((answer, index) => (
          <button
            className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300 w-full"
            key={index}
            onClick={() => onAnswerSelect(answer)}
          >
            {answer.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
