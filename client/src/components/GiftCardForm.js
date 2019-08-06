import React, { useState } from 'react';
import Cleave from "cleave.js/react";

const GiftCardForm = () => {

    const [notValid, setNotValid] = useState(false);


    const handleGiftCard = e => {
        e.preventDefault();
        setNotValid(true)
    };

    return (
        <div className="col-12">
            <div className="mt-2 gift-card-form">
                <p>Gift card Number</p>
                <Cleave className={!notValid ? "my-2 gift-code" : "my-2 gift-code invalid-input"} placeholder="Card number"
                    options={{creditCard: true, numeralThousandsGroupStyle: 'none'}}
                />
                <br />
                {notValid ? <h6 className="giftcard-not-valid">Please enter valid gift card number.</h6> : null}
                <button onClick={handleGiftCard} className="my-2 btn btn-danger">APPLY GIFT CARD</button> 
            </div>
        </div>
    )
};

export default GiftCardForm;
