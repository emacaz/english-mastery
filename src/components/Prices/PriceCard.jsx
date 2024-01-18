import React from "react";
import Button from "../Button";

function PriceCard({ priceCard }) {
  return (
    <div className="border-solid border-2 border-gray-500 rounded-3xl p-3">
      <img
        className="m-auto rounded-3xl object-cover h-80 mb-5 w-full"
        src={priceCard.imgSource}
        alt="suscription-img"
      />
      <span
        className={`${
          priceCard.popular &&
          "bg-black text-white mb-3 py-1 px-2 rounded-xl text-sm"
        }`}
      >
        {priceCard.popular ? "Popular" : ""}
      </span>
      <h3 className="mt-2">{priceCard.type}</h3>
      <p className="text-4xl font-bold">${priceCard.value}</p>
      <p>{priceCard.periocity}</p>
      <Button button_text={"Seleccionar"}></Button>
      <p>{priceCard.description}</p>
      <ul>
        {priceCard.features.map((feature, index) => (
          <li key={index}>&#10003; {feature}</li>
        ))}
      </ul>
    </div>
  );
}

export default PriceCard;
