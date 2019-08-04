import React, { Fragment, useContext } from 'react';
import { ShoppingCartContext } from "../context/ShoppingCartContext";


const CartItemCard = ({id, name, type, price, amount, total, image}) => {

    const { cart, removeFromCart } = useContext(ShoppingCartContext);

    return (
        <Fragment>
            <div className="col-9 cart-items-title">
                <div>
                    <img alt="logo" src={image} />
                </div>
                <div className="ml-3 py-2">
                    <h5 >{name}</h5>
                    <p style={{fontSize: "14px", color: "#555", textTransform: "capitalize"}}>{type}</p>
                </div>
            </div>
            <div className="col-3 text-center">
                <h5 className="py-2">${total}</h5>
                <select defaultValue={amount} className="cart-item-select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
                <p onClick={() => { removeFromCart(id) }} className="remove-cart-item">Remove</p>
            </div>
        </Fragment>
    )
}

export default CartItemCard;
