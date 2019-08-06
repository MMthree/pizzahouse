import React, { useState, createContext, useEffect } from 'react';

export const ShoppingCartContext = createContext();

export const ShoppingProvider = props => {

    const [cart, setCart] = useState([]);
    const [cartTotalCost, setCartTotalCost] = useState("0.00");
    const [dealActive, setDealActive] = useState(false);
    
    useEffect(() => {
        if (localStorage.getItem("myCart")) {
            setCart([...JSON.parse(localStorage.getItem("myCart"))]);   
        }
        if (localStorage.getItem("dealActive")) {
            setDealActive(JSON.parse(localStorage.getItem("dealActive")));   
        }
    }, [])
    
    // Shopping cart effect
    useEffect(() => {
        if (cart.length >= 1) {
            const add = cart.reduce((a, b) => ({ total: a.total + b.total }));
            setCartTotalCost(add.total.toFixed(2));
        } else {
            setCartTotalCost("0.00")
        }
        localStorage.setItem("myCart", JSON.stringify([...cart]));
    }, [cart]);

    // deal active effect 
    useEffect(() => {
        localStorage.setItem("dealActive", JSON.stringify(dealActive));
    }, [dealActive])

    // Add items to cart 
    const addToCart = item => {
        const find = cart.find(i => i.id === item.id && i.type === item.type);



        // if item not found in state, then add it
        if (!find) {
            setCart([...cart, item]);

        // if item exists with same size (medium, large, ...) just update price and amount 
        } else if (item.id === find.id && item.type === find.type) {
            find.amount = find.amount + item.amount;
            find.total = find.amount * find.price
            setCart([...cart]);
        }
    };

    // update item amount in the cart summary
    const updateCartAmount = (id, qty) => {
        const find = cart.find(i => i.id === id);
        find.amount = qty;
        find.total = find.amount * find.price
        setCart([...cart]);
    }

    // Add a coupon deal to cart 
    const addDeal = item => {
        setCart([...cart, item]);
        setDealActive(true);
    };

    // Remove an item from cart
    const removeFromCart = item => {
        if (item === "deal_coupon") {
            setDealActive(false);
        }

        const newCart = cart.filter(i => i.id !== item);
        setCart(newCart)
    };

    return (
        <ShoppingCartContext.Provider value={{
            cart,
            setCart,
            addToCart,
            addDeal,
            updateCartAmount,
            dealActive,
            setDealActive,
            cartTotalCost,
            removeFromCart
        }}>
            {props.children}
        </ShoppingCartContext.Provider>
    )
};
