import React from "react";
import PriceCard from "./PriceCard";

import month_sus_img from "../../images/month-sus-img.jpeg";
import year_sus_img from "../../images/year-sus-img.jpeg";
import perma_sus_img from "../../images/perma-sus-img.jpeg";

const monthPrice = {
  imgSource: month_sus_img,
  popular: false,
  type: "Suscripción mensual",
  value: 25,
  periocity: "Mes",
  description: "Descripción de membresía.",
  features: ["Pago recurrente cada mes", "Acceso al programa EM", "Soporte 24/7"],
};

const yearPrice = {
  imgSource: year_sus_img,
  popular: true,
  type: "Suscripción anual",
  value: 200,
  periocity: "Año",
  description: "Descripción de membresía.",
  features: ["Pago recurrente cada año", "4 meses gratis", "Feature 3"],
};

const permanentPrice = {
  imgSource: perma_sus_img,
  popular: false,
  type: "Un único pago",
  value: 300,
  periocity: "Acceso permanente",
  description: "Descripción de membresía.",
  features: ["Feature 1", "Feature 2", "Feature 3"],
};

export function Prices() {
  return (
    <div className="mt-[6rem] px-20">
      <h1 className="text-4xl font-bold text-center mb-10">Precios</h1>
      <div className="flex gap-8">
        <PriceCard priceCard={monthPrice} />
        <PriceCard priceCard={yearPrice} />
        <PriceCard priceCard={permanentPrice} />
      </div>
    </div>
  );
}
