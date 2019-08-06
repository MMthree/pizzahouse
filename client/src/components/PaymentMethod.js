import React, { useState, useContext } from 'react';
import CreditCardForm from "./CreditCardForm";
import GiftCardForm from "./GiftCardForm";
import OrderSummary from "./OrderSummary";
import PaymentModals from "./PaymentModals";

import { ShoppingCartContext } from "../context/ShoppingCartContext";

const PaymentMethod = () => {
    const { cartTotalCost, } = useContext(ShoppingCartContext);
    const [paymentType, setPaymentType] = useState("credit");
    const [agreeTerms, setAgreeTerms] = useState(null);
    
    const addedTax = cartTotalCost * .0725;
    const combinedTotal = parseFloat(addedTax) + parseFloat(cartTotalCost);
    

    // Toggle modals
    const [modal, setModal] = useState(false);
    const toggle = () => {
        setModal(!modal);
    };

    // Validate credit card form
    let creditPass = false;
    const validateCredit = () => {

        const name =  document.getElementById("card-name");
        const num = document.getElementById("card-num");
        const exp = document.getElementById("card-exp");
        const cvv = document.getElementById("card-cvv");
        const zip = document.getElementById("card-zip");

        name.classList.remove("invalid-input");
        num.classList.remove("invalid-input");
        exp.classList.remove("invalid-input");
        cvv.classList.remove("invalid-input");
        zip.classList.remove("invalid-input");

        creditPass = true;

        if (name.value === "") {
            name.classList.add("invalid-input");
            creditPass = false;
        }
        if (num.value === "" || num.value.length < 17) {
            num.classList.add("invalid-input");
            creditPass = false;
        }
        if (exp.value === "" || exp.value.length < 7) {
            exp.classList.add("invalid-input");
            creditPass = false;
        }
        if (cvv.value === "" || cvv.value.length < 3) {
            cvv.classList.add("invalid-input");
            creditPass = false;
        }
        if (zip.value === "" || zip.value.length < 5) {
            zip.classList.add("invalid-input");
            creditPass = false;
        }
    };


    const PaymentType = e => {
        setPaymentType(e.target.id)
    };

    // place order after validating payment type
    
    const placeOrder = e => {
        e.preventDefault();
        setAgreeTerms(null);

        if (!document.getElementById('agree').checked) {
            setAgreeTerms(<small className="text-danger"><i className="fas fa-exclamation-circle"></i> Please agree to Terms and Conditions to continue</small>)
        } else {
            if (paymentType === "credit") {
                validateCredit();
                if(creditPass) {
                    toggle();
                }
            }
            if (paymentType === "gift") {
                toggle();
            }
            if (paymentType === "store") {
                toggle();
            }
        }
    };

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
                    <input onChange={PaymentType} className="payment-radio" id="gift" type="radio" name="payment" value="gift" />
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
                <input className="mx-3" name="agree" type="checkbox" id="agree" />
                <label className="mb-0" htmlFor="agree">I agree to the Terms and Conditions</label>
                <div className="ml-3">
                    {agreeTerms}
                </div>
                
            </div>

            <div className="col-12 col-md-6">
                <button onClick={placeOrder} className="btn btn-danger btn-block">PLACE YOUR ORDER</button>;
            </div>

            {/* MODALS */}
            <PaymentModals toggle={toggle} modal={modal} paymentType={paymentType} />
        </div>
    )
}

export default PaymentMethod;
