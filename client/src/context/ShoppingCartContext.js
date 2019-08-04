import React, { useState, createContext, useEffect } from 'react';

export const ShoppingCartContext = createContext();

export const ShoppingProvider = props => {

    const [cart, setCart] = useState([]);
    const [cartTotalCost, setCartTotalCost] = useState("0.00");

    useEffect(() => {
        console.log(cart);
        if (cart.length >= 1) {
            const add = cart.reduce((a, b) => ({ total: a.total + b.total }));
            setCartTotalCost(add.total.toFixed(2));
        } else {
            setCartTotalCost("0.00")
        }
    }, [cart]);

    // Add items to cart 
    const addToCart = item => {
        const find = cart.find(i => i.id === item.id && i.type === item.type);
        console.log(cart);

        // if item not found in state, then add it
         if (!find) {
             setCart([...cart, item])

        // if item exists with same size (medium, large, ...) just update price and amount 
         } else if (item.id === find.id && item.type === find.type) {
            find.amount = find.amount + item.amount;
            find.total = find.amount * find.price
            setCart([...cart])
         }
    };


    // Remove an item from cart
    const removeFromCart = item => {
        const newCart = cart.filter(i => i.id !== item);
        setCart(newCart)
    };

    return (
        <ShoppingCartContext.Provider value={{
            cart,
            setCart,
            addToCart,
            cartTotalCost,
            removeFromCart: removeFromCart
        }}>
            {props.children}
        </ShoppingCartContext.Provider>
    )
};
