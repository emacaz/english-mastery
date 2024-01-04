import React from "react";
import { ContentCard } from "./ContentCard";

export function Content() {
    const contentItem1 = {
        imgSource: "",
        title: "Charlas en vivo y en Inglés",
        description:
            "Conversa en Inglés desde el primer día sin importar tu nivel.",
    };
    const contentItem2 = {
        imgSource: "",
        title: "Niveles A, B, C.",
        description:
            "El English Mastery contiene los niveles desde el A1 hasta el C2, haciendo de éste el único programa completo de habla hispana para estudiar desde cualquier parte del mundo.",
    };
    const contentItem3 = {
        imgSource: "",
        title: "Tests de Inglés",
        description:
            "Todos los niveles tienen tests con el fin de poner a prueba lo que vas aprendiendo y así puedas recordarlo fácilmente.",
    };

    return (
        <>
            <h1>Qué contiene el English Mastery</h1>
            <div>
                <ContentCard contentItem={contentItem1} />
                <ContentCard contentItem={contentItem2} />
                <ContentCard contentItem={contentItem3} />
            </div>
        </>
    );
}
