import React from "react";

export default function Contact() {
    return (
        <div className="flex justify-center relative h-64 text-center p-8 sm:h-[400px]" id="contact-us_section_id">
            <div className="absolute inset-0 bg-contact-us bg-cover bg-center opacity-20"></div>

            <div className="relative z-10 m-auto">
                <h1 className="text-3xl font-semibold sm:text-5xl">Contáctanos</h1>
                <p className="p-6 sm:text-xl">Contáctanos vía WhatsApp para ayudarte de forma personal si tienes alguna duda. Y toma una decisión responsable.</p>
                <a href="https://api.whatsapp.com/send?phone=573224504439&text=Hello!%20%F0%9F%91%8B%20Quiero%20tomar%20el%20programa%20English%20Mastery." className="block sm:text-xl border-solid border-2 border-gray-500 rounded-lg p-3 sm:max-w-[500px] sm:m-auto" target="_blank">WhatsApp</a>
            </div>
        </div>
    );
}
