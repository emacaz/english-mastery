import React from "react";

export function TestimonialCard({ testimonial }) {
    return (
        <div>
            <img src={testimonial.userImg} alt="user-img" />
            <p>{testimonial.description}</p>
            <em>- {testimonial.name}</em>
        </div>
    )
}