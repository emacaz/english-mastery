import React from "react";

function PriceCard({ priceCard }) {
    return (
        <div>
            <img src={priceCard.imgSource} alt="suscription-img" />
            <span>{priceCard.popular ? "Popular" : ""}</span>
            <h3>{priceCard.type}</h3>
            <p>${priceCard.value}</p>
            <p>{priceCard.periocity}</p>
            <button>Seleccionar</button>
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