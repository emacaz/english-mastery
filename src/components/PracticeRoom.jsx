import React from "react";
import practice_room_img from '../images/practice-room-img.jpeg'
import Button from "./Button";

export function PracticeRoom() {
    return (
        <div className="my-16 grid grid-cols-2">
            <div className="px-8">
                <h1 className="text-left text-4xl font-bold mb-4">Salas de Práctica</h1>
                <p className="text-xl">
                Salas interactivas con personas de todo el mundo donde hablas en Inglés desde el primer día. Conoce culturas, domina el idioma al mejor precio del mercado sin endeudarte.
                </p>
                <button className="bg-slate-600 my-5 text-white p-2 rounded-lg w-60 text-lg hover:bg-slate-800">
                    Únete a English Mastery
                </button>
            </div>
            <div>
                <img
                    className="rounded-2xl"
                    src={practice_room_img}
                    alt="practice-room"
                />
            </div>
        </div>
    );
}
