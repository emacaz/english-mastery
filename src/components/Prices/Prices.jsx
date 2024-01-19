import React from "react";
import PriceCard from "./PriceCard";

import month_sus_img from "../../images/month-sus-img.jpeg";
import year_sus_img from "../../images/year-sus-img.jpeg";
import perma_sus_img from "../../images/perma-sus-img.jpeg";

const monthPrice = {
  imgSource: month_sus_img,
  popular: false,
  type: "Suscripción de pago cada mes",
  value: 25,
  periocity: "Suscripción mensual",
  description: "Descripción de membresía.",
  features: ["Acceso al programa EM", "Soporte 24/7", "Acceso a Salas de Práctica"],
};

const yearPrice = {
  imgSource: year_sus_img,
  popular: true,
  type: "Suscripción de pago cada año",
  value: 200,
  periocity: "Suscripción anual",
  description: "Descripción de membresía.",
  features: ["Todos los beneficios del pago mensual", "4 meses gratis"],
};

const permanentPrice = {
  imgSource: perma_sus_img,
  popular: false,
  type: "Un único pago",
  value: 300,
  periocity: "Acceso permanente",
  description: "Descripción de membresía.",
  features: ["Acceso a las actualizaciones", "Accedes a las Salas de Práctica", "Soporte 24/7"],
};

export function Prices() {
  return (
    <div className="mt-[6rem] px-20">
      <h1 className="text-4xl font-bold text-center mb-10">Precios</h1>
      <div className="flex flex-wrap justify-center gap-8">
        <PriceCard priceCard={monthPrice} />
        <PriceCard priceCard={yearPrice} />
        <PriceCard priceCard={permanentPrice} />
      </div>
    </div>
  );
}
