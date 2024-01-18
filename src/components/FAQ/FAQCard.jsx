import React from "react";

export function FAQCard({ question }) {
    return (
        <div className="my-11">
            <h2 className="text-2xl text-center font-semibold mb-3">{question.question}</h2>
            <p className="text-xl py-4">{question.answer}</p>
            <hr />
        </div>
    );
}
