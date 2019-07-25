import React, { useState, createContext } from 'react';

export const ShoppingCartContext = createContext();

export const ShoppingProvider = props => {

    const [amount, setAmount] = useState("$5.00");

    return (
        <ShoppingCartContext.Provider value={"asdf"}>
            {props.children}
        </ShoppingCartContext.Provider>
    )
};
