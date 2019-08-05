import React, { useState, useContext } from 'react';
import CreditCardForm from "./CreditCardForm";
import GiftCardForm from "./GiftCardForm";
import OrderSummary from "./OrderSummary";

import { ShoppingCartContext } from "../context/ShoppingCartContext";

const PaymentMethod = () => {
    const { cart, cartTotalCost } = useContext(ShoppingCartContext);

    
    const addedTax = cartTotalCost * .0725;
    const combinedTotal = parseFloat(addedTax) + parseFloat(cartTotalCost);

    const [paymentType, setPaymentType] = useState("credit");

    const PaymentType = e => {
        setPaymentType(e.target.id)
    }
    return (
        <div className="col-12">

            <div className="payment-methods">
                    <h5 className="my-3">Pay online</h5>
                    <div className="credit-card">
                        <input onChange={PaymentType} defaultChecked className="payment-radio" id="credit" type="radio" name="payment" value="credit" />
                        <label htmlFor="credit"><i className="far fa-credit-card"></i> Credit Card</label>
                        {paymentType === "credit" ? <CreditCardForm /> : null}
                    </div>
                    <div className="gift-card">
                        <input onChange={PaymentType}  className="payment-radio" id="gift" type="radio" name="payment" value="gift" />
                        <label htmlFor="gift"><i className="fas fa-gift"></i> Gift Card</label>
                        {paymentType === "gift" ? <GiftCardForm /> : null}
                    </div>

                    <h5 className="mt-5 mb-3">Pay in store</h5>
                    <div className="pay-in-store">
                        <input onChange={PaymentType} className="payment-radio" id="store" type="radio" name="payment" value="store" />
                        <label htmlFor="store"><i className="fas fa-home"></i> Pay in store using cash, credit or gift card</label>
                    </div>
            </div>

            <div className="my-4">
                <hr />
                <OrderSummary />
                <hr />
            </div>

            <div className="row">
                <div className="col-12 col-md-6 mr-auto">
                    <h3>Cost summary</h3>
                    <div className="mt-3 cart-subtotal">
                        <p>Subtotal: </p>
                        <p>${cartTotalCost}</p>
                    </div>
                    <div className="cart-subtotal">
                        <p>Tax: </p>
                        <p>${addedTax.toFixed(2)}</p>
                    </div>
                    <div className="cart-subtotal">
                        <h4>Total: </h4>
                        <h4>${combinedTotal.toFixed(2)}</h4>
                    </div>
                </div>
            </div>

            <div className="my-2">
                <input className="mx-3" type="checkbox" id="agree"/>
                <label htmlFor="agree">I agree to the Terms of Use</label>
            </div>

            <div className="col-12 col-md-6">
                <button className="btn btn-danger btn-block">PLACE YOUR ORDER</button>
            </div>    
            
        </div>
    )
}

export default PaymentMethod;
