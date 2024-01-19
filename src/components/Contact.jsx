import React from "react";

export function Contact() {
    return (
        <div className="relative h-64 text-center p-8">
            <div className="absolute inset-0 bg-contact-us bg-cover bg-center opacity-20"></div>

            <div className="relative z-10">
                <h1 className="text-3xl font-semibold">Contáctanos</h1>
                <p className="p-6">Contáctanos vía WhatsApp para ayudarte si tienes alguna duda.</p>
                <a href="https://api.whatsapp.com/send?phone=573224504439&text=Hello!%20%F0%9F%91%8B%20Quiero%20tomar%20el%20programa%20English%20Mastery." className="block text-xl border-solid border-2 border-gray-500 rounded-lg p-3" target="_blank">WhatsApp</a>
            </div>
        </div>
    );
}
