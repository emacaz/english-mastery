import React from "react";
import practice_room_img from '../images/practice-room-img.png'

export default function PracticeRoom() {
    return (
        <div className="flex flex-wrap justify-center gap-6 bg-blue-50 p-8 sm:py-[8rem] lg:m-auto md:grid md:grid-cols-4" style={{gridTemplateColumns: "10% 40% 40% 10%" }}>
            <div className="md:col-start-2 md:col-span-1 flex flex-col h-full justify-center">
                <h1 className="text-left text-3xl font-semibold mb-4 sm:text-5xl">Salas de Práctica</h1>
                <p className="text-base sm:text-xl">
                Salas interactivas con personas de todo el mundo donde hablas en Inglés desde el primer día. Conoce culturas y dominas el idioma al mejor precio del mercado sin endeudarte.
                </p>
                <a href="#price_section_id" className="block text-center bg-[#545e67] text-white p-2 my-5 w-full rounded-lg text-lg hover:bg-slate-800 sm:text-xl">
                    Únete a English Mastery
                </a>
            </div>
            <div className="sm:relative sm:h-full m-auto">
                <img
                    className="object-cover sm:w-auto rounded-2xl mb-10 sm:m-auto"
                    src={practice_room_img}
                    alt="practice-room"
                />
            </div>
        </div>
    );
}


