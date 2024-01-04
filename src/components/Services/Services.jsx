import React from "react";
import {ContentCard} from '../Content/ContentCard'

export function Services() {
    const serviceItem1 = {
        imgSource: "",
        title: "Charlas en vivo con personas de todo el mundo 🌍",
        description:
            "Conecta y habla en Inglés con personas reales, haciendo de tu aprendizaje algo entretenido.",
    };
    const serviceItem2 = {
        imgSource: "",
        title: "Estudia desde cualquier lugar del mundo",
        description:
            "No importa tu  nivel, experiencia o el dispositivo que uses. No necesitas gastar un dineral para estudiar aquí.",
    };
    const serviceItem3 = {
        imgSource: "",
        title: "Soporte 24/7",
        description:
            "Estamos pendiente de ti, para ayudarte a mejorar y a hablar más rápido el idioma, todos los días del año a cualquier hora del día.",
    };
    return (
        <>
            <ContentCard contentItem={serviceItem1}/>
            <ContentCard contentItem={serviceItem2}/>
            <ContentCard contentItem={serviceItem3}/>
        </>
    )
}