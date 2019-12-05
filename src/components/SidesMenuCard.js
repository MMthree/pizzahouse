import React, { useState, useContext } from 'react';
import { ShoppingCartContext } from "../context/ShoppingCartContext";

import {
    UncontrolledPopover,
    PopoverBody,
} from 'reactstrap';


const SidesMenuCard = props => {
    const { addToCart } = useContext(ShoppingCartContext);

    const [popoverOpen, setPopoverOpen] = useState(false);
    const [btnName, setBtnName] = useState("Add To Order");

    const toggle = () => {
        setPopoverOpen(!popoverOpen);
    };


    const { id, name, description, image, price, cals } = props;


    const handleSubmit = e => {
        e.preventDefault();

        const order = {
            id,
            name,
            image,
            price,
            amount: parseInt(e.target.amount.value),
            total: price * e.target.amount.value
        }
        addToCart(order);

        setBtnName(<i style={{marin: "0", padding: '0' , fontSize: "25px"}} className="far fa-check-circle"></i>);
        setTimeout(() => {
            setBtnName("Add To Order")
        }, 2000)
    };
    return (
        <div className="deals_card_main col-12 col-sm-12 col-md-6 float-left">
            <div className="deals_card">
                <UncontrolledPopover trigger="legacy" placement="left-start" target={id}>
                    <PopoverBody placement="left" >
                        <PopoverBody>{description}</PopoverBody>
                    </PopoverBody>
                </UncontrolledPopover>

                <div className="row py-3">
                    <div className="col-9">
                        <h4>{name}</h4>
                        <small>${price}</small>
                    </div>
                    <div className="col-3">
                        <h5 onClick={toggle} id={id} style={{ cursor: "pointer", color: "#0090FF" }}><i className="float-right fas fa-info-circle"></i></h5>
                    </div>
                </div>

                <div className="row py-3">
                    <div className="col-7 mt-auto">
                        <form onSubmit={handleSubmit}>
                            <select id="size" className="menu-size btn-block">
                                <option value="small">Order</option>
                            </select>
                            <select name="amount" className="menu-size btn-block">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            <button className="deals_btn btn btn-danger btn-block">{btnName}</button>
                        </form>
                    </div>
                    <div className="col-5 mt-auto cal-info text-center">
                        <img className="deal_image rounded-lg" alt={name} src={image} />
                        <p>{cals}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SidesMenuCard;
