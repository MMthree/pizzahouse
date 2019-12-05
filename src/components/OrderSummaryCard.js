import React, { Fragment } from 'react';

const OrderSummaryCard = ({name, image, type, total}) => {

    return (
        <Fragment>
            <div className="col-12 cart-items-title">
                <div>
                    <img style={{height: "70px", borderRadius:"10px"}} alt="logo" src={image} />
                </div>
                <div className="ml-3 py-2">
                    <h6>{name}</h6>
                    <p style={{fontSize: "14px", color: "#555", textTransform: "capitalize"}}>{type}</p>
                </div>
                <h6 className="py-2 ml-auto">${total.toFixed(2)}</h6>
            </div>

        </Fragment>
    )
}

export default OrderSummaryCard;
