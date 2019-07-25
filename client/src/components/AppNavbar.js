import React,{ useState, useContext } from 'react';
import { Link } from "react-router-dom";
import SideNav from "./SideNav";
import { ShoppingCartContext } from "../context/ShoppingCartContext";

import {  
    UncontrolledDropdown, 
    DropdownToggle, 
    DropdownMenu, 
    DropdownItem 
} from 'reactstrap';


const AppNavbar = () => {

    const value = useContext(ShoppingCartContext);

    const [sideNavToggle, setSideNavToggle] = useState(false);

    const toggleSideNav = () => {
        setSideNavToggle(!sideNavToggle);
    };

    const burgerActive = !sideNavToggle ? null : "burger-active";
    
    return (
        <nav>
            <div className="nav-links">
                
                    <UncontrolledDropdown setActiveFromChild>
                        <DropdownToggle tag="a" className="" caret>
                           Menu
                        </DropdownToggle>
                        <DropdownMenu>
                            <Link to="/menu/pizza"><DropdownItem>Pizza</DropdownItem></Link>
                            <Link to="/menu/wings"><DropdownItem>Wings</DropdownItem></Link>
                            <Link to="/menu/sides"><DropdownItem>Sides</DropdownItem></Link>
                            <Link to="/menu/desserts"><DropdownItem>Desserts</DropdownItem></Link>
                            <Link to="/menu/drinks"><DropdownItem>Drinks</DropdownItem></Link>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                
                <Link to="/deals"><p className="">Deals</p></Link>
            </div>
            <div className="logo">
                <img src="./images/PH_logo.png" alt="logo" />
                <img src="./images/PH_logo_min.png" alt="logo" />
            </div>
            <div className="your-store">
                <p>Your Store</p>
                <p>10072 Chapman Ave.</p>
            </div>
            <div className="cart">
                <div className="cart-icon">
                    <i className="fas fa-shopping-cart"></i>
                    <div className="cart-icon-count"><span>7</span></div>
                </div>
                
                
                <p>$5.00</p>
            </div>
            <div onClick={toggleSideNav} className={`burger ${burgerActive}`}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
            <SideNav toggle={sideNavToggle} />
        </nav>
    )
}

export default AppNavbar
