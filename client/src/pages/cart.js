import React from 'react';
import CarryOutAddress from "../components/CarryOutAddress";
import NutritionDisclaimer from "../components/NutritionDisclaimer";
import CartSummary from "../components/CartSummary";


const cart = () => {

    return (
        <div className="cart-page">
            <h1 style={{ fontSize: "50px" }} className="mt-3">My Order</h1>

            <CarryOutAddress />

            <div className="row">
                <CartSummary />
            </div>
            <NutritionDisclaimer />
        </div>
    )
}

export default cart;
