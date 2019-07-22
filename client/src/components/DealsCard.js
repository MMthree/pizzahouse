import React, { useState } from 'react'

import { UncontrolledPopover, PopoverBody } from 'reactstrap';


const DealsCard = props => {

    const [popoverOpen, setPopoverOpen] = useState(false);

    const toggle = () => {
        setPopoverOpen(!popoverOpen);
    };

    const { id, name, price, description, image } = props;
    return (
        <div className="deals_card col-12 col-sm-12 col-md-5 mx-auto">
            
               <UncontrolledPopover trigger="legacy" placement="left-start" target={id}>
                    <PopoverBody placement="left" >
                        <PopoverBody>{description}</PopoverBody>
                    </PopoverBody>
                </UncontrolledPopover> 
                
            <div className="row py-3">
                <div className="col-9">
                    <h4>{name}</h4>
                    <small>{price}</small>
                </div>
                <div className="col-3">
                <h5 onClick={toggle} id={id} style={{ cursor: "pointer", color: "#0090FF"}}><i className="float-right fas fa-info-circle"></i></h5>
                </div> 
            </div>
 
            <div className="row py-3">
                <div className="col-7">
                    <button className="deals_btn btn btn-danger btn-block">Add To Order</button>
                </div>
                <div className="col-5">
                    <img className="deal_image rounded-lg float-right" alt={name} src={image} />
                </div>
            </div>
        </div>
    )
}

export default DealsCard;
