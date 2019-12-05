import React, { Fragment, useState, useContext } from 'react';
import { Link } from "react-router-dom";
import CartItemCard from "../components/CartItemCard";
import CheckCoupon from "../components/CheckCoupon";
import PaymentModals from "../components/PaymentModals";
import { Button, Modal } from 'reactstrap';

import { ShoppingCartContext } from "../context/ShoppingCartContext";
import { YourStoreContext } from "../context/YourStoreContext";

const CartSummary = () => {
    
    const { cart, cartTotalCost } = useContext(ShoppingCartContext);
    const { store } = useContext(YourStoreContext);
    
    const addedTax = cartTotalCost * .0725;
    const combinedTotal = parseFloat(addedTax) + parseFloat(cartTotalCost);

    // Toggle modals
    const [modal, setModal] = useState(false);
    const toggle = () => {
        setModal(!modal);
    };

    return (
        <div className="col-12 cart-summary">
            <div className="row">

                {cart.length === 0 ? (
                    <h4 className="mx-auto">There are no items in your order.</h4>
                ) : (null)}

                {cart.map((cart, i )=> (
                    <Fragment key={i}>
                        <CartItemCard
                            id={cart.id}
                            name={cart.name}
                            type={cart.type}
                            price={cart.price}
                            amount={cart.amount}
                            total={cart.total}
                            image={cart.image}
                        />
                    </Fragment>
                ))}
                

                <div className="col-12">
                    <hr />
                </div>
            </div>

            <div className="row">
                <div className="col-12 col-md-6 ml-auto">
                    <CheckCoupon />
                    <hr />
                    <div className="cart-subtotal">
                        <p>Subtotal: </p>
                        <p>${cartTotalCost}</p>
                    </div>
                    <div className="cart-subtotal">
                        <p>Tax: </p>
                        <p>${addedTax.toFixed(2)}</p>
                    </div>
                    <div className="cart-subtotal">
                        <p>Total: </p>
                        <p>${combinedTotal.toFixed(2)}</p>
                    </div>
                </div>
            </div>


            {cart.length === 0 ? null : (
            <div className="row my-2">
                <div className="col-12 col-md-6 my-1 mx-auto">
                    <Link to="/menu/pizza">
                        <button className="btn btn-outline-danger btn-block">ADD MORE FOOD</button>
                    </Link>
                </div>

                <div className="col-12 col-md-6 my-1 mx-auto">
                    { store.short === "" && store.full === "" ? (
                        <button onClick={toggle} className="btn btn-danger btn-block">CHECK OUT</button>
                    ) : <Link to="/checkout"><button className="btn btn-danger btn-block">CHECK OUT</button></Link>}
                </div>
            </div>
            )}
            
            <Modal className="py-3 px-4" isOpen={modal} modalTransition={{ timeout: 400 }} backdropTransition={{ timeout: 400 }}
                toggle={toggle} >
                <div className="py-4 px-3 text-center">
                    <h5 className="mb-3">Please select a store so we know where to make your food!</h5>
                    <div className="col-6 py-2 mx-auto">
                        <Link to="/find-store"><Button className="btn-block" color="danger" onClick={toggle}>FIND A STORE</Button></Link>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default CartSummary;
