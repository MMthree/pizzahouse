import React from 'react';

const CreditCardForm = () => {
    return (
        <div className="col-12 my-2">
            <form>
                <div className="row card-details mx-auto">
                    <div className="col-12 col-md-6 mb-3">
                        <h6>Name on Card</h6>
                        <input type="text" placeholder="e.g, John Dough" />
                    </div>
                    <div className="col-12 col-md-6 mb-3">
                        <h6>Credit card number</h6>
                        <input type="text" placeholder="xxxx-xxxx-xxxx-xxxx" />
                    </div>
                    <div className="col-12 col-md-6 mb-3">
                        <h6>Expiration date</h6>
                        <input type="text" placeholder="MM/YYYY" />
                    </div>
                    <div className="col-6 col-md-3 mb-3">
                        <h6>CVV</h6>
                        <input type="text" placeholder="CVC" />
                    </div>
                    <div className="col-6 col-md-3 mb-3">
                        <h6>Zip code</h6>
                        <input type="text" placeholder="90210" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CreditCardForm;
