import React, { useState, Fragment } from 'react';
import Cleave from "cleave.js/react";

const CheckCoupon = () => {

    const [notValid, setNotValid] = useState(null);

    const handleCoupon = () => {
        setNotValid(<p className="coupon-not-valid"><i className="fas fa-exclamation-circle"></i> Sorry, this coupon is not honored at this store but there are still more great deals available.</p>)
    };

    return (
        <Fragment>
            
            {notValid}
        
            <div className="coupon-div">
            <Cleave className="coupon-code"  placeholder="Enter coupon Code"
                    options={{creditCard: true, numeralThousandsGroupStyle: 'none'}}
                     />
                <button onClick={handleCoupon} className="btn btn-outline-danger">APPLY</button> 
            </div>
        </Fragment>
    )
}

export default CheckCoupon;
