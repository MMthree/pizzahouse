import React from 'react';
import { Link } from "react-router-dom";
import CarryOutAddress from "../components/CarryOutAddress";
import NutritionDisclaimer from "../components/NutritionDisclaimer";
import CartSummary from "../components/CartSummary";


const cart = () => {

    return (
        <div className="cart-page">
            <h1 style={{ fontSize: "50px" }} className="mt-3">My Order</h1>

            <CarryOutAddress />

            <div className="row">

                <div className="col-12 col-md-6 my-1 mx-auto">
                    <Link to="/menu/pizza">
                        <button className="btn btn-outline-danger btn-block">ADD MORE FOOD</button>
                    </Link>
                </div>
                <div className="col-12 col-md-6 my-1 mx-auto">
                    <Link to="/checkout">
                        <button className="btn btn-danger btn-block">CHECK OUT</button>
                    </Link>
                </div>

                <CartSummary />
                
            </div>
            <NutritionDisclaimer />
        </div>
    )
}

export default cart;
