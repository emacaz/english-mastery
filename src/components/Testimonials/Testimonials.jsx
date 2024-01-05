import React from "react";
import { TestimonialCard } from "./TestimonialCard";

const testimonial1 = {
    name: "Brayan",
    userImg: "",
    description:
        "En English Mastery he aprendido a conocer mejor el inglés, como también a mejorar mis habilidades en el idioma, del mismo modo me gusta lo dinámico que es el curso ya que se pueda estudiar en cualquier momento del día, gracias a English Mastery he logrado evolucionar en mi trabajo ya que el 90% es en inglés.",
};

const testimonial2 = {
    name: "José Gudiel",
    userImg: "",
    description:
        "English Mastery me párese super bien por que es un curso muy bueno y muy completo aparte de eso el teacher explica muy bien yo lo recomiendo esta muy bueno ami en lo personal me ha ayudado mucho.",
};

const testimonial3 = {
    name: "Tatiana",
    userImg: "",
    description:
        "Es cool la forma en que implementas la metodología, es bueno ver vocabulario y de paso oraciones donde lo usamos.",
};

export function Testimonials() {
    return (
        <>
            <div>
                <TestimonialCard testimonial={testimonial1} />
                <TestimonialCard testimonial={testimonial2} />
                <TestimonialCard testimonial={testimonial3} />
            </div>
            <div>
                <span>• • •</span>
            </div>
        </>
    );
}
