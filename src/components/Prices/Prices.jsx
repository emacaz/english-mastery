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
  description: "Accede al programa English Mastery pagando comodamente de forma mensual.",
  features: ["Acceso al programa EM", "Soporte 24/7", "Acceso a Salas de Práctica"],
};

const yearPrice = {
  imgSource: year_sus_img,
  popular: true,
  type: "Suscripción de pago cada año",
  value: 200,
  periocity: "Suscripción anual",
  description: "Obtén 4 meses gratis accediendo al programa English Mastery pagando 1 año.",
  features: ["Todos los beneficios del pago mensual", "4 meses gratis"],
};

const permanentPrice = {
  imgSource: perma_sus_img,
  popular: false,
  type: "Un único pago",
  value: 300,
  periocity: "Acceso permanente",
  description: "Adquiere el programa English Mastery por un único pago y no pagues nunca más. Haz tú mism@ los números 😉.",
  features: ["Acceso a las actualizaciones", "Accedes a las Salas de Práctica", "Soporte 24/7"],
};

export function Prices() {
  return (
    <div className="px-8 py-10 sm:py-[5rem]" id="price_section_id">
      <h1 className="text-3xl font-semibold text-center sm:text-5xl sm:mb-7">Precios</h1>
      <div className="flex flex-wrap justify-center gap-8">
        <PriceCard priceCard={monthPrice} />
        <PriceCard priceCard={yearPrice} />
        <PriceCard priceCard={permanentPrice} />
      </div>
    </div>
  );
}
