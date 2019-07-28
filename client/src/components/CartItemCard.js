import React, { Fragment } from 'react';

const CartItemCard = () => {
    return (
        <Fragment>
            <div className="col-9 cart-items-title">
                <img alt="logo" src="/images/sides/sides_fries.png" />
                <h5 className="ml-3 py-2">Pepperoni Pizza</h5>
            </div>
            <div className="col-3 text-center">
                <h5 className="py-2">$14.99</h5>
                <select className="cart-item-select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
                <p>Remove</p>
            </div>
        </Fragment>
    )
}

export default CartItemCard;
