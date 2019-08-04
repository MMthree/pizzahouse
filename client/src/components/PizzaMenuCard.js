import React, { useState, useContext } from 'react';
import { UncontrolledPopover, PopoverBody } from 'reactstrap';
import { ShoppingCartContext } from "../context/ShoppingCartContext";


const PizzaMenuCard = props => {
    const { addToCart } = useContext(ShoppingCartContext);

    const [popoverOpen, setPopoverOpen] = useState(false);

    const toggle = () => {
        setPopoverOpen(!popoverOpen);
    };


    const { id, name, description, image, med_cals, med_price, lar_price, lar_cals } = props;
    const [pizzaSize, setPizzaSize] = useState(false);

    const handleChange = e => {
        const val = e.target.value;

        if (val === "medium") {
            setPizzaSize(false)
        }

        if (val === "large") {
            setPizzaSize(true)
        }
    };

    const handleSubmit = e => {
        e.preventDefault();

        const whatSize = !pizzaSize ? med_price : lar_price;

        const order = {
            id: id + e.target.size.value,
            name,
            image,
            price: whatSize,
            type: e.target.size.value,
            amount: parseInt(e.target.amount.value),
            total: whatSize * e.target.amount.value
        }
        addToCart(order);
    };

    return (
        <div className="deals_card_main col-12 col-sm-12 col-md-6">
            <div className="deals_card">
                <UncontrolledPopover trigger="legacy" placement="left-start" target={id}>
                    <PopoverBody placement="left" >
                        <PopoverBody>{description}</PopoverBody>
                    </PopoverBody>
                </UncontrolledPopover>

                <div className="row py-3">
                    <div className="col-9">
                        <h4>{name}</h4>
                        <small>${!pizzaSize ? med_price : lar_price}</small>
                    </div>
                    <div className="col-3">
                        <h5 onClick={toggle} id={id} style={{ cursor: "pointer", color: "#0090FF" }}><i className="float-right fas fa-info-circle"></i></h5>
                    </div>
                </div>

                <div className="row py-3">
                    <div className="col-7 mt-auto">
                        <form onSubmit={handleSubmit}>
                            <select onChange={handleChange} name="size" className="menu-size btn-block">
                                <option value="medium">Medium</option>
                                <option value="large">Large</option>
                            </select>
                            <select name="amount" className="menu-size btn-block">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            <button className="deals_btn btn btn-danger btn-block" type="submit">Add To Order</button> 
                        </form>
                    </div>
                    <div className="col-5 mt-auto cal-info text-center">
                        <img className="deal_image rounded-lg" alt={name} src={image} />
                        <p>{!pizzaSize ? med_cals : lar_cals},</p>
                        <p>per slice</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PizzaMenuCard;
