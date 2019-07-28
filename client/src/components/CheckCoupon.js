import React, { useState, Fragment } from 'react';

const CheckCoupon = () => {

    const [notValid, setNotValid] = useState(null);

    const handleCoupon = () => {
        setNotValid(<p className="coupon-not-valid"><i className="fas fa-exclamation-circle"></i> Sorry, this coupon is not honored at this store but there are still more great deals available.</p>)
    };

    return (
        <Fragment>
            
            {notValid}
        
            <div className="coupon-div">
                <input placeholder="Enter coupon Code" className="coupon-code"></input>
                <button onClick={handleCoupon} className="btn btn-outline-danger">APPLY</button> 
            </div>
        </Fragment>
    )
}

export default CheckCoupon;
