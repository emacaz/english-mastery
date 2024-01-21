import React from "react";
import { TestimonialCard } from "./TestimonialCard";
import testimonial1_img from "../../images/testimonial1-img.png"
import testimonial2_img from "../../images/testimonial2-img.png"
import testimonial3_img from "../../images/testimonial3-img.png"

const testimonial1 = {
    name: "Brayan",
    userImg: testimonial1_img,
    description:
        "En English Mastery he aprendido a conocer mejor el inglés, como también a mejorar mis habilidades en el idioma, del mismo modo me gusta lo dinámico que es el curso ya que se pueda estudiar en cualquier momento del día, gracias a English Mastery he logrado evolucionar en mi trabajo ya que el 90% es en inglés.",
};

const testimonial2 = {
    name: "José Gudiel",
    userImg: testimonial2_img,
    description:
        "English Mastery me parese super bien por que es un curso muy bueno y muy completo aparte de eso el teacher explica muy bien yo lo recomiendo esta muy bueno ami en lo personal me ha ayudado mucho.",
};

const testimonial3 = {
    name: "Tatiana",
    userImg: testimonial3_img,
    description:
        "Es cool la forma en que implementas la metodología, es bueno ver vocabulario y de paso oraciones donde lo usamos.",
};

export function Testimonials() {
    return (
        <div className="bg-blue-50 px-8 py-10 sm:py-[6rem]">
            <h1 className="text-center text-3xl font-semibold mb-5 sm:text-5xl sm:mb-9">Qué dicen nuestros Estudiantes</h1>
            <div className="flex flex-wrap justify-center gap-8">
                <TestimonialCard testimonial={testimonial1} />
                <TestimonialCard testimonial={testimonial2} />
                <TestimonialCard testimonial={testimonial3} />
            </div>
            <div>
                <span>• • •</span>
            </div>
        </div>
    );
}
