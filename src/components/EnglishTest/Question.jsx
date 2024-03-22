import React from "react";

const Question = ({ questionData, onAnswerSelect }) => {
  return (
    <div>
      <h1>Nivel: {questionData.level}</h1>
      <h2>{questionData.question}</h2>
      {questionData.answers.map((answer, index) => (
        <button key={index} onClick={() => onAnswerSelect(answer)}>
          {answer.text}
        </button>
      ))}
    </div>
  );
};

export default Question;
