import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { YourStoreContext } from "../context/YourStoreContext";

const CarryOutAddress = () => {

    const { store } = useContext(YourStoreContext);
    
    return (
        <div className="carryOut-from">
            <h6>CARRYOUT FROM: </h6>
            <p>{store.full}</p>
            <Link to="/find-store">
                <p 
                    style={{color: "#266dcc", fontWeight: "500"}}
                >
                    {store.full === "" ? "Find A Store" : "Change"}
                </p>
            </Link>
        </div>
    )
}

export default CarryOutAddress;
