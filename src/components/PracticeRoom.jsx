import React from "react";
import practice_room_img from '../images/practice-room-img.jpeg'
import Button from "./Button";

export function PracticeRoom() {
    return (
        <div className="flex flex-wrap justify-center gap-8 bg-blue-50 p-8">
            <div className="">
                <h1 className="text-left text-3xl font-semibold mt-10 mb-4">Salas de Práctica</h1>
                <p className="text-base">
                Salas interactivas con personas de todo el mundo donde hablas en Inglés desde el primer día. Conoce culturas y dominas el idioma al mejor precio del mercado sin endeudarte.
                </p>
                <button className="bg-[#545e67] text-white p-2 my-5 w-full rounded-lg text-lg hover:bg-slate-800">
                    Únete a English Mastery
                </button>
            </div>
            <div>
                <img
                    className="rounded-2xl mb-10"
                    src={practice_room_img}
                    alt="practice-room"
                />
            </div>
        </div>
    );
}
