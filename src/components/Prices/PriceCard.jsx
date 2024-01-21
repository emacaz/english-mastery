import React, { useEffect } from "react";
import HotmartButton from "../Hotmart/HotmartButton";


function PriceCard({ priceCard }) {
  return (
    <div className="mt-7 border-solid border-2 border-gray-500 rounded-3xl p-3 max-w-[400px]">
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
      <h3 className="mt-2 sm:text-lg">{priceCard.type}</h3>
      <p className="text-4xl font-bold text-green-500">${priceCard.value}</p>
      <p>{priceCard.periocity}</p>

      <HotmartButton link={priceCard.aHref} />

      <p className="text-base font-semibold mb-6 sm:text-lg">
        {priceCard.description}
      </p>
      <ul>
        {priceCard.features.map((feature, index) => (
          <li key={index} className="sm:text-lg">
            &#10003; {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PriceCard;
