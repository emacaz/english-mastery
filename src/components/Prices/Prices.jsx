import React from "react";
import PriceCard from './PriceCard'

const monthPrice = {
    imgSource: '',
    popular: false,
    type: 'Suscripción mensual',
    value: 25,
    periocity: 'Mes',
    description: 'Descripción de membresía.',
    features: {
        1: 'Feature 1',
        2: 'Feature 2',
        3: 'Feature 3',
    }
}

const yearPrice = {
    imgSource: '',
    popular: true,
    type: 'Suscripción anual',
    value: 200,
    periocity: 'Año',
    description: 'Descripción de membresía.',
    features: {
        1: 'Feature 1',
        2: 'Feature 2',
        3: 'Feature 3',
    }
}

const permanentPrice = {
    imgSource: '',
    popular: false,
    type: 'Un único pago',
    value: 300,
    periocity: 'Acceso permanente',
    description: 'Descripción de membresía.',
    features: {
        1: 'Feature 1',
        2: 'Feature 2',
        3: 'Feature 3',
    }
}

export function Prices() {
    return (
        <div className="mt-[6rem]">
            <h1 className="text-4xl font-bold">Precios</h1>
            <div className="grid grid-cols-3 gap-2">
                <PriceCard priceCard={monthPrice} />
                <PriceCard priceCard={yearPrice} />
                <PriceCard priceCard={permanentPrice} />
            </div>
        </div>
    )
}