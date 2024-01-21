import React from "react";
import instructor_img from '../images/instructor2-img.png'

export function Instructor() {
    return (
        <div className="px-8 pt-[2rem] pb-[6rem] flex flex-wrap justify-center sm:grid sm:grid-cols-2 sm:place-items-center sm:max-w-[1800px] sm:m-auto sm:px-[4rem] lg:h-[700px]">
            <div className="sm:max-w-[650px]">
                <h1 className="text-2xl leading-normal my-7 font-semibold sm:text-5xl">Sobre el Instructor</h1>
                <p className="mb-10 text-base sm:text-xl">
                    Emanuel Castillo (<a className="text-sky-600 underline" href="https://EmanuelCastillo.com" target="_blank">EmanuelCastillo.com</a>)
                    lleva más de 10 años en la enseñanza del idioma a
                    hispanohablantes de Latinoamérica, ha ayudado a miles de
                    personas a dominar la fluidez y es el único que conoce por
                    qué tantas personas no aprenden Inglés por más que estudien
                    en línea, escuelas o programas. Con el English Mastery
                    descubrirás la filosofía que ha hecho que miles de latinos
                    aprendan Inglés de manera efectiva y que logren usar el
                    Inglés como segundo idioma. De la misma manera que usas el
                    Español.
                </p>
            </div>
            <div className="px-[3rem] sm:p-0">
                <img className="w-full max-w-[400px] m-auto lg:w-full" src={instructor_img} alt="instructor" />
            </div>
        </div>
    );
}
