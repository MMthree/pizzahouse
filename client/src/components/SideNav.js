import React, { useState } from 'react';
import { Link } from "react-router-dom";

const SideNav = ({ closeSideNav ,toggle }) => {

    const [menuToggle, setMenuToggle] = useState(false);
    const [menuList] = useState([
        { name: "Pizza", path: "/menu/pizza" },
        { name: "Wings", path: "/menu/wings" },
        { name: "Sides", path: "/menu/sides" },
        { name: "Desserts", path: "/menu/desserts" },
        { name: "Drinks", path: "/menu/drinks" }
    ])

    const [customerToggle, setCustomerToggle] = useState(false);
    const [customerList] = useState([
        { name: "Contact Us", path: "/contact" },
        { name: "FAQs", path: "/faq" }
    ])

    const [policyToggle, setPolicyToggle] = useState(false);
    const [policyList] = useState([
        { name: "Terms Of Use", path: "/terms-of-use" }
    ])

    const toggleActive = !toggle ? null : "sidenav-active";
     
    const expandList = e => {
        const target = e.target.id;

        if (target === "MENU") {
            setMenuToggle(!menuToggle);
        }

        if (target === "CUSTOMER") {
            setCustomerToggle(!customerToggle);
        }

        if (target === "POLICIES") {
            setPolicyToggle(!policyToggle);
        }
    };



    return (
            <div className={`side-nav ${toggleActive}`}>
                <div className="sidenav-links">
                    <div className="sidenav-top">
                        Sign up
                    </div>
                    <Link to="/deals">
                        <p>Deals</p>
                    </Link>
                    <p 
                        onClick={expandList} 
                        id="MENU"
                    >
                        Menu {!menuToggle ? <i className="float-right fas fa-angle-down"></i> : <i className="float-right fas fa-angle-up"></i>}
                    </p>

                        {!menuToggle ? null : 
                            menuList.map((list, i) => (
                                <div onClick={closeSideNav} key={i} className="sidenav-expanded">
                                    <Link to={list.path}><p>{list.name}</p></Link>
                                </div>
                            ))
                        }
                    
                    <p 
                        onClick={expandList} 
                        id="CUSTOMER"
                    >
                        Customer Service {!customerToggle ? <i className="float-right fas fa-angle-down"></i> : <i className="float-right fas fa-angle-up"></i>}
                    </p>

                    {!customerToggle ? null : 
                            customerList.map((list, i) => (
                                <div key={i} className="sidenav-expanded">
                                    <Link to={list.path}><p>{list.name}</p></Link>
                                </div>
                            ))
                        }

                    <p 
                        onClick={expandList} 
                        id="POLICIES"
                    >
                        Policies {!policyToggle ? <i className="float-right fas fa-angle-down"></i> : <i className="float-right fas fa-angle-up"></i>}
                    </p>

                    {!policyToggle ? null : 
                            policyList.map((list, i) => (
                                <div key={i} className="sidenav-expanded">
                                    <Link to={list.path}><p>{list.name}</p></Link>
                                </div>
                            ))
                        }
                </div>
            </div>
    )
}

export default SideNav
