import React from "react";

export function FAQCard({ question }) {
    return (
        <div>
            <h2>{question.question}</h2>
            <p>{question.answer}</p>
        </div>
    );
}
