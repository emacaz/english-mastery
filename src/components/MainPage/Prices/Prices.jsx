import PriceCard from "./PriceCard";

import month_sus_img from "../../../images/month-sus-img.png";
import year_sus_img from "../../../images/year-sus-img.png";
import perma_sus_img from "../../../images/perma-sus-img.png";

const monthPrice = {
  imgSource: month_sus_img,
  popular: false,
  type: "Suscripción de pago cada mes",
  value: 25,
  periocity: "Suscripción mensual",
  description: "Accede al programa English Mastery pagando comodamente de forma mensual.",
  features: ["Acceso al programa EM", "Soporte 24/7", "Acceso a Salas de Práctica"],
  aHref: "https://pay.hotmart.com/X85475251K?checkoutMode=2&off=wnxdlhrd",
};

const yearPrice = {
  imgSource: year_sus_img,
  popular: true,
  type: "Suscripción de pago cada año",
  value: 200,
  periocity: "Suscripción anual",
  description: "Obtén 4 meses gratis accediendo al programa English Mastery pagando 1 año.",
  features: ["Todos los beneficios del pago mensual", "4 meses gratis"],
  aHref: "https://pay.hotmart.com/X85475251K?checkoutMode=2&off=19jv80zj",
};

const permanentPrice = {
  imgSource: perma_sus_img,
  popular: false,
  type: "Un único pago",
  value: 300,
  periocity: "Acceso permanente",
  description: "Adquiere el programa English Mastery por un único pago y no pagues nunca más. Haz tú mism@ los números 😉.",
  features: ["Acceso a las actualizaciones", "Accedes a las Salas de Práctica", "Soporte 24/7"],
  aHref: "https://pay.hotmart.com/K84696597G?checkoutMode=2",
};

export default function Prices() {

  return (
    <div className="px-8 py-10 sm:py-[5rem]" id="price_section_id">
      <h1 className="text-3xl font-semibold text-center sm:text-5xl ">Precios</h1>
      <em className="block text-xs text-center mt-2 sm:mb-7">El precio base es dólares americanos y puede variar según tu ubicación</em>
      <div className="flex flex-wrap justify-center gap-8">
        <PriceCard priceCard={monthPrice} />
        <PriceCard priceCard={yearPrice} />
        <PriceCard priceCard={permanentPrice} />
      </div>
    </div>
  );
}
