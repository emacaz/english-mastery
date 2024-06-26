import React from "react";
import { FAQCard } from "./FAQCard";

const question1 = {
    question: '¿Qué metodología usan?',
    answer: 'Nuestro programa se basa en una metodología integral que combina teoría y práctica. Las clases teóricas se imparten a través de lecciones grabadas, seguidas de evaluaciones para reforzar el aprendizaje. La práctica se realiza en sesiones interactivas en vivo mediante reuniones en Zoom, donde los estudiantes pueden aplicar lo aprendido y superar barreras emocionales al hablar inglés.'
}

const question2 = {
    question: '¿Cómo son las clases?',
    answer: 'Las clases teóricas son accesibles en formato grabado, lo que permite a los estudiantes aprender a su propio ritmo. Cada clase se complementa con evaluaciones para evaluar la comprensión y retención del material. Las sesiones prácticas en vivo se llevan a cabo en grupos a través de Zoom, brindando la oportunidad de practicar el idioma en un entorno colaborativo y gestionar las emociones asociadas con el aprendizaje del inglés.'
}

const question3 = {
    question: '¿Hay más idiomas? ¿Para qué edades?',
    answer: 'Actualmente nos enfocamos en la enseñanza del inglés para hablantes de español. Nuestro programa está diseñado para personas de todas las edades que deseen mejorar sus habilidades en inglés. Adaptamos el enfoque para satisfacer las necesidades específicas de cada grupo de edad, proporcionando un ambiente de aprendizaje efectivo y personalizado.'
}

export default function FAQ() {
    return (
        <div className="my-11 px-8 sm:py-[3rem]">
            <h1 className="text-center text-3xl font-semibold sm:text-5xl">Preguntas frecuentes</h1>
            <FAQCard question={question1} />
            <FAQCard question={question2} />
            <FAQCard question={question3} />
            <h2 className="text-sm text-center sm:text-xl">¿Tienes más preguntas? <a href="#contact-us_section_id" className="text-sky-600 underline">Escríbenos para ayudarte</a></h2>
        </div>
    );
}
