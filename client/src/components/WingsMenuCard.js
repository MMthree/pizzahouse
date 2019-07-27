import React, { useState } from 'react';

import {  
    UncontrolledPopover,
    PopoverBody,
} from 'reactstrap';


const WingsMenuCard = props => {

    const [popoverOpen, setPopoverOpen] = useState(false);

    const toggle = () => {
        setPopoverOpen(!popoverOpen);
    };


    const { id, name, description, image, small_price, large_price, cals } = props;
    const [wingSize, setWingSize] = useState(false);

    const handleChange = e => {
        const val = e.target.value;

        if (val === "small") {
            setWingSize(false)
        }

        if (val === "large") {
            setWingSize(true)
        }
    }
    return (
        <div className="deals_card col-12 col-sm-12 col-md-6 mx-auto">
            
               <UncontrolledPopover trigger="legacy" placement="left-start" target={id}>
                    <PopoverBody placement="left" >
                        <PopoverBody>{description}</PopoverBody>
                    </PopoverBody>
                </UncontrolledPopover> 
                
            <div className="row py-3">
                <div className="col-9">
                    <h4>{name}</h4>
                    <small>${!wingSize ? small_price : large_price }</small>
                </div>
                <div className="col-3">
                <h5 onClick={toggle} id={id} style={{ cursor: "pointer", color: "#0090FF"}}><i className="float-right fas fa-info-circle"></i></h5>
                </div> 
            </div>
 
            <div className="row py-3">
                <div className="col-7 mt-auto">
                    <select onChange={handleChange} id="size" className="menu-size btn-block">
                        <option value="small">6 Piece</option>
                        <option value="large">12 Piece</option>
                    </select>
                    <select id="amount" className="menu-size btn-block">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <button className="deals_btn btn btn-danger btn-block">Add To Order</button>
                </div>
                <div className="col-5 mt-auto cal-info text-center">
                    <img className="deal_image rounded-lg" alt={name} src={image} />
                    <p>{cals}</p>
                </div>
            </div>
        </div>
    )
}

export default WingsMenuCard;
