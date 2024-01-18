import React from "react";

export function Hero() {
    return (
        <div className="Hero">
            <div className="ml-20 mt-36 px-20 md: mt-7">
                <h1 className="text-6xl font-semibold mb-10 leading-normal">
                    Habla Inglés, Conecta <br/> con el mundo! 🌍
                </h1>
                <p className="mb-10 text-xl">
                    El único programa con charlas en vivo para conectar y hablar <br/>
                    en Inglés con personas reales de todo el mundo.
                </p>
                <button className="bg-slate-600 text-white p-2 rounded-lg w-60 text-lg hover:bg-slate-800">
                    Conocer el programa
                </button>
            </div>
        </div>
    );
}
