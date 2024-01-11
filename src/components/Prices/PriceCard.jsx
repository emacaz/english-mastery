import React from "react";
import Button from "../Button";

function PriceCard({ priceCard }) {
    return (
        <div>
            <img src={priceCard.imgSource} alt="suscription-img" />
            <span>{priceCard.popular ? "Popular" : ""}</span>
            <h3>{priceCard.type}</h3>
            <p className="text-4xl font-bold">${priceCard.value}</p>
            <p>{priceCard.periocity}</p>
            <Button button_text={"Seleccionar"}></Button>
            <p>{priceCard.description}</p>
            <ul>
                <li>Item</li>
                <li>Item</li>
                <li>Item</li>
            </ul>
        </div>
    )
}

export default PriceCard