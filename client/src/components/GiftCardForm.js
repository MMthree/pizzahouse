import React, { useState } from 'react';

const GiftCardForm = () => {

    const [notValid, setNotValid] = useState(null);


    const handleGiftCard = e => {
        e.preventDefault();
        setNotValid(<h6 className="giftcard-not-valid">Please enter valid gift card number.</h6>)
    };

    return (
        <div className="col-12">
            <div className="mt-2 gift-card-form">
                <p>Gift card Number</p>
                <input placeholder="Enter card number" type="text" className="my-2 gift-code" />
                <br />
                {notValid}
                <button onClick={handleGiftCard} className="my-2 btn btn-danger">APPLY GIFT CARD</button> 
            </div>
        </div>
    )
};

export default GiftCardForm;
