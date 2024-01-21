import React from "react";
import { ContentCard } from "./ContentCard";
import live_lessons from '../../images/practice-room-img.png'
import e_learning from '../../images/e-learning-img.png'
import tests_img from '../../images/tests-img.png'

const contentItem1 = {
    imgSource: live_lessons,
    title: "Charlas en vivo y en Inglés",
    description:
        "Conversa en Inglés desde el primer día sin importar tu nivel.",
};
const contentItem2 = {
    imgSource: e_learning,
    title: "Niveles A, B, C, de acuerdo al MCER (Marco Común Europeo de Referencia)",
    description:
        "El English Mastery contiene los niveles desde el A1 hasta el C2, haciendo de éste el único programa completo de habla hispana para estudiar desde cualquier parte del mundo.",
};
const contentItem3 = {
    imgSource: tests_img,
    title: "Tests de Inglés",
    description:
        "Todos los niveles tienen tests con el fin de poner a prueba lo que vas aprendiendo y así puedas recordarlo fácilmente.",
};

export function Content() {

    return (
        <div className="bg-blue-50 px-8 mt-[7rem] py-12 sm:m-0 sm:py-[4rem]" id="program_content_id">
            <h1 className="text-2xl mb-2 text-center font-bold pb-3 sm:mb-[4rem] sm:text-5xl" >Qué contiene el English Mastery</h1>
            
            <div className="flex flex-wrap justify-center gap-8 sm:gap-14">
                <ContentCard contentItem={contentItem1} />
                <ContentCard contentItem={contentItem2} />
                <ContentCard contentItem={contentItem3} />
            </div>
        </div>
    );
}
