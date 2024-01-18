import React from "react";
import instructor_img from '../images/instructor2-img.png'

export function Instructor() {
    return (
        <div className="my-[6rem] grid grid-cols-2 px-20">
            <div className="px-[3rem]">
                <h1 className="text-left text-4xl font-bold mb-[3rem]">Sobre el Instructor</h1>
                <p className="mb-10 text-xl">
                    Emanuel Castillo (EmanuelCastillo.com)
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
            <div className="px-[3rem]">
                <img className="w-full max-w-[400px] m-auto" src={instructor_img} alt="instructor" />
            </div>
        </div>
    );
}
