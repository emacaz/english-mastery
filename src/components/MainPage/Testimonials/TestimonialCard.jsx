import React from "react";

export function TestimonialCard({ testimonial }) {
  return (
    <div className="py-5 max-w-[400px]">
      <div>
        <img
          className="rounded-full w-16 mb-4"
          src={testimonial.userImg}
          alt="user-img"
        />
        <p className="text-sm sm:text-xl text-left font-light mb-3">
          {testimonial.description}
        </p>
      </div>
      <div>
        <em>- {testimonial.name}</em>
      </div>
    </div>
  );
}
