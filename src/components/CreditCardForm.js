import React from 'react';
import Cleave from "cleave.js/react";

const CreditCardForm = () => {

    return (
        <div className="col-12 my-2">
            <form>
                <div className="row mx-auto">
                    <div className="col-12 col-md-6 mb-3">
                        <h6>Name on Card</h6>
                        <input id="card-name" className="card-details" type="text" placeholder="e.g, John Dough" maxLength="30" />
                    </div>
                    <div className="col-12 col-md-6 mb-3">
                        <h6>Credit card number</h6>
                        <Cleave placeholder="Card number"
                            id="card-num"
                            className="card-details"
                            options={{creditCard: true}}
                        />
                    </div>
                    <div className="col-12 col-md-6 mb-3">
                        <h6>Expiration date</h6>
                        <Cleave placeholder="MM/YYYY"
                            id="card-exp"
                            className="card-details"
                            options={{date: true, datePattern: ["m", "Y"]}}
                        />
                    </div>
                    <div className="col-6 col-md-3 mb-3">
                        <h6>CVV</h6>
                        <Cleave placeholder="CVV"
                            id="card-cvv"
                            className="card-details"
                            options={{numeral: true, numeralThousandsGroupStyle: 'none'}}
                            maxLength="4" />
                    </div>
                    <div className="col-6 col-md-3 mb-3">
                        <h6>Zip code</h6>
                        <Cleave placeholder="90210"
                            id="card-zip"
                            className="card-details"
                            options={{numeral: true, numeralThousandsGroupStyle: 'none'}}
                            maxLength="10" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CreditCardForm;
