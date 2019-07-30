import React from 'react';
import { Link } from "react-router-dom";
import CarryOutAddress from "../components/CarryOutAddress";
import NutritionDisclaimer from "../components/NutritionDisclaimer";
import CartItemCard from "../components/CartItemCard";
import CheckCoupon from "../components/CheckCoupon";


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

                <div className="col-12 cart-summary">
                    <div className="row">
                        <CartItemCard />

                        <div className="col-12">
                            <hr />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 col-md-6 ml-auto">
                            <CheckCoupon />
                            <hr />
                            <div className="cart-subtotal">
                                <p>Subtotal: </p>
                                <p>$24.99</p>
                            </div>
                            <div className="cart-subtotal">
                                <p>Tax: </p>
                                <p>$1.38</p>
                            </div>
                            <div className="cart-subtotal">
                                <p>Total: </p>
                                <p>$24.99</p>
                            </div>
                        </div>  
                    </div>

                    <div className="row my-2">
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
                    </div>

                </div>
            </div>
            <NutritionDisclaimer />
        </div>
    )
}

export default cart;
