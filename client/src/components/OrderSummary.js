import React, { useState, useContext } from 'react';
import OrderSummaryCard from "./OrderSummaryCard";

import { ShoppingCartContext } from "../context/ShoppingCartContext";

const OrderSummary = () => {
    const { cart } = useContext(ShoppingCartContext);
    const [viewSummary, setViewSummary] = useState(false);
    const [caret, setCaret] = useState("down");

    const handleSummary = () => {
        setViewSummary(!viewSummary);
        !viewSummary ? setCaret("up") : setCaret("down");
    };

    return (
        <div>
            <h3 style={{cursor: "pointer"}} onClick={handleSummary}><i className={`mr-3 fas fa-angle-${caret}`}></i>Order summary</h3>

            {!viewSummary ? null : (
                cart.map(items => (
                    <div key={items.id}>
                        <OrderSummaryCard 
                            name={items.name}
                            image={items.image}
                            type={items.type}
                            total={items.total}
                        />
                    </div>
                ))
             )}

        </div>
    )
}

export default OrderSummary;
