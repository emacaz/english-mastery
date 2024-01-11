import React from "react";

export function TestimonialCard({ testimonial }) {
    return (
        <div>
            <img
                className="rounded-full w-16 mb-4"
                src={testimonial.userImg}
                alt="user-img"
            />
            <h2 className="text-xl text-left font-semibold mb-3">{testimonial.description}</h2>
            <em>- {testimonial.name}</em>
        </div>
    )
}