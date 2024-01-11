import React from "react";
import { ContentCard } from "./ContentCard";
import live_lessons from '../../images/practice-room-img.jpeg'
import e_learning from '../../images/e-learning-img.jpeg'
import tests_img from '../../images/tests-img.jpeg'

export function Content() {
    const contentItem1 = {
        imgSource: live_lessons,
        title: "Charlas en vivo y en Inglés",
        description:
            "Conversa en Inglés desde el primer día sin importar tu nivel.",
    };
    const contentItem2 = {
        imgSource: e_learning,
        title: "Niveles A, B, C.",
        description:
            "El English Mastery contiene los niveles desde el A1 hasta el C2, haciendo de éste el único programa completo de habla hispana para estudiar desde cualquier parte del mundo.",
    };
    const contentItem3 = {
        imgSource: tests_img,
        title: "Tests de Inglés",
        description:
            "Todos los niveles tienen tests con el fin de poner a prueba lo que vas aprendiendo y así puedas recordarlo fácilmente.",
    };

    return (
        <div className="mt-48 py-12">
            <h1 className="text-center text-4xl font-bold pb-3 mb-8" >Qué contiene el English Mastery</h1>
            
            <div className="grid grid-cols-3 gap-10">
                <ContentCard contentItem={contentItem1} />
                <ContentCard contentItem={contentItem2} />
                <ContentCard contentItem={contentItem3} />
            </div>
        </div>
    );
}
