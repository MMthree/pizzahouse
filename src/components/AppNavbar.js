import React,{ useState, useContext } from 'react';
import { Link } from "react-router-dom";
import SideNav from "./SideNav";
import { YourStoreContext } from "../context/YourStoreContext";
import { ShoppingCartContext } from "../context/ShoppingCartContext";


import {  
    UncontrolledDropdown, 
    DropdownToggle, 
    DropdownMenu, 
    DropdownItem 
} from 'reactstrap';


const AppNavbar = () => {

    const { store } = useContext(YourStoreContext);
    const { cart, cartTotalCost } = useContext(ShoppingCartContext);


    const [sideNavToggle, setSideNavToggle] = useState(false);

    const toggleSideNav = () => {
        setSideNavToggle(!sideNavToggle);
    };

    const burgerActive = !sideNavToggle ? null : "burger-active";

    
    return (
        <nav>
            <div className="nav-links">
                
                <UncontrolledDropdown setActiveFromChild>
                    <DropdownToggle tag="a"caret>
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
                
                <Link to="/deals"><p>Deals</p></Link>
            </div>

            <Link to="/">
                <div className="logo">
                    <img src="/images/PH_logo.png" alt="logo" />
                    <img src="/images/PH_logo_min.png" alt="logo" />
                </div>
            </Link>
            
            <div className="your-store">
                <p>Your Store</p>
                <p>{store.short}</p>
                <Link to="/find-store">
                    <p 
                        style={{textTransform: "none", color: "#266dcc", fontWeight: "500"}}
                    >
                        {store.short === "" ? "Find A Store" : "Change"}
                    </p>
                </Link>
            </div>

            
                <div className="cart">
                    <Link to="/cart">
                    <div className="cart-icon">
                        <i className="fas fa-shopping-cart"></i>
                        <div className="cart-icon-count">
                            <span>{cart.length}</span>
                        </div>
                    </div>
                    <p>${cartTotalCost}</p>
                    </Link>
                </div>
            


            <div onClick={toggleSideNav} className={`burger ${burgerActive}`}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
            <SideNav closeSideNav={toggleSideNav} toggle={sideNavToggle} />
        </nav>
    )
}

export default AppNavbar
