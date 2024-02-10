import React from "react";
import { ContentCard } from "../Content/ContentCard";
import live_lessons_img from "../../images/live-lessons-img.png";
import study_any_place_img from "../../images/study-any-place-img.png";
import support_img from '../../images/support-img.png';

export default function Services() {
    const serviceItem1 = {
        imgSource: live_lessons_img,
        title: "Charlas en vivo con personas de todo el mundo 🌍",
        description:
            "Conecta y habla en Inglés con personas reales, haciendo de tu aprendizaje algo entretenido.",
    };
    const serviceItem2 = {
        imgSource: study_any_place_img,
        title: "Estudia desde cualquier lugar del mundo",
        description:
            "No importa tu  nivel, experiencia o el dispositivo que uses. No necesitas gastar un dineral para estudiar aquí.",
    };
    const serviceItem3 = {
        imgSource: support_img,
        title: "Soporte 24/7",
        description:
            "Estamos pendiente de ti, para ayudarte a mejorar y a hablar más rápido el idioma, todos los días del año a cualquier hora del día.",
    };
    return (
        <div className="py-12 bg-blue-50 px-8">
            <h1 className="text-center text-2xl font-semibold pb-3 mb-3 sm:text-5xl">
                Servicios
            </h1>

            <div className="flex flex-wrap justify-center gap-8">
                <ContentCard contentItem={serviceItem1} />
                <ContentCard contentItem={serviceItem2} />
                <ContentCard contentItem={serviceItem3} />
            </div>
        </div>
    );
}
