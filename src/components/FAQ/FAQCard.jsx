import React, { useState } from "react";

export function FAQCard({ question }) {
    const [isAnswerVisible, setIsAnswerVisible] = useState(false);

    const toggleAnswer = () => {
      setIsAnswerVisible(!isAnswerVisible);
    };

    return (
        <div className="my-11 relative">
            <span
                className={`absolute right-0 border-solid border-2 px-1 rounded-full cursor-pointer ${isAnswerVisible ? 'rotate-180' : ''}`}
                onClick={toggleAnswer}
            >&#8595;</span>
            <h2 className="text-xl text-center font-semibold mb-3 sm:text-2xl">{question.question}</h2>
            <p className={`text-base text-justify my-5 ${isAnswerVisible ? 'block' : 'hidden'} sm:text-xl`}>{question.answer}</p>
            <hr />
        </div>
    );
}
