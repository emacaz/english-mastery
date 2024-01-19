import React from "react";

export function Hero() {
    return (
        <div className="Hero sm:relative h-[800px] py-[6rem] grid grid-cols-4" style={{gridTemplateColumns: "10% 35% 35% 15%" }}>
            {/* <div className="absolute inset-0 bg-cover bg-center opacity-20 bg-gradient-to-r from-cyan-100 to-sky-500 md:h-full"></div> */}

            <div className="px-8 pt-10 sm:p-0 col-start-2 col-span-2 my-auto">
                <h1 className="text-3xl leading-normal mb-2 sm:text-6xl font-semibold">
                    Habla Inglés, Conecta <br/> con el mundo! 🌍
                </h1>
                <p className="mb-10 text-base sm:my-8">
                    El único programa con charlas en vivo para conectar y hablar <br/>
                    en Inglés con personas reales de todo el mundo.
                </p>
                <button className="py-3 w-full bg-[#545e67] text-white p-2 rounded-lg text-xl hover:bg-slate-800 sm:w-[300px]">
                    Conocer el programa
                </button>
            </div>
        </div>
    );
}
