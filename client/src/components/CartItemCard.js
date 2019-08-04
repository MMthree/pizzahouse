import React, { Fragment, useContext } from 'react';
import { ShoppingCartContext } from "../context/ShoppingCartContext";


const CartItemCard = ({id, name, type, price, amount, total, image}) => {

    const { updateCartAmount, removeFromCart } = useContext(ShoppingCartContext);

    const handleChange = e => {
        updateCartAmount(id, e.target.value)
    };

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
                <h5 className="py-2">${total.toFixed(2)}</h5>
                {id === "deal_coupon" ? null : (
                <select onChange={handleChange} defaultValue={amount} className="cart-item-select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                    <option>15</option>
                    <option>16</option>
                    <option>17</option>
                    <option>18</option>
                    <option>19</option>
                    <option>20</option>
                </select>
                )}
                <p onClick={() => { removeFromCart(id) }} className="remove-cart-item">Remove</p>
            </div>
        </Fragment>
    )
}

export default CartItemCard;
