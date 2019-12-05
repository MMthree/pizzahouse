import React from 'react';
import { Link } from "react-router-dom";
import PaymentMethod from "../components/PaymentMethod";

const checkout = ({history}) => {

    return (
        <div>
            <div className="my-4">
                <Link to="/cart">
                    <p style={{ color: "#2a75d8", fontSize: "14px"}}><i className="fas fa-arrow-left"></i> Back</p>
                </Link>
            </div>

            <h1 style={{ fontSize: "40px" }} className="mt-3 mb-4">Payment</h1>

            <PaymentMethod history={history}/>
        </div>
    )
}

export default checkout;
