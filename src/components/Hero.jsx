import React from "react";

export function Hero() {
    return (
        <div className="Hero">
            <div className="px-8 pt-10">
                <h1 className="text-3xl leading-normal mb-2 md:text-6xl font-semibold">
                    Habla Inglés, Conecta <br/> con el mundo! 🌍
                </h1>
                <p className="mb-10 text-base">
                    El único programa con charlas en vivo para conectar y hablar <br/>
                    en Inglés con personas reales de todo el mundo.
                </p>
                <button className="py-3 w-full bg-slate-600 text-white p-2 rounded-lg text-xl hover:bg-slate-800">
                    Conocer el programa
                </button>
            </div>
        </div>
    );
}
