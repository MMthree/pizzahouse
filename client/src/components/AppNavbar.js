import React,{ useState } from 'react';
import SideNav from "./SideNav";

import {  
    UncontrolledDropdown, 
    DropdownToggle, 
    DropdownMenu, 
    DropdownItem 
} from 'reactstrap';


const AppNavbar = () => {
    const [sideNavToggle, setSideNavToggle] = useState(false);

    const toggleSideNav = () => {
        setSideNavToggle(!sideNavToggle);
    };

    const burgerActive = !sideNavToggle ? null : "burger-active";
    
    return (
        <nav>
            <ul className="nav-links">
                <li>
                    <UncontrolledDropdown setActiveFromChild>
                        <DropdownToggle tag="a" className="nav-link" caret>
                            Menu
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem tag="a" href="/menu/pizza">Pizza</DropdownItem>
                            <DropdownItem tag="a" href="/menu/pizza">Pizza</DropdownItem>
                            <DropdownItem tag="a" href="/menu/pizza">Pizza</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </li>
                <li>Deals</li>
            </ul>
            <div className="logo">
                <h4>Logo</h4>
            </div>
            <div className="your-store">
                <ul>
                    <li>YOUR STORE</li>
                    <li>10072 Chapman Ave.</li>
                </ul>
            </div>
            <div className="cart">
                <ul>
                    <li>Icon</li>
                    <li>$5.00</li>
                </ul>
            </div>
            <div onClick={toggleSideNav} className={`burger ${burgerActive}`}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
            <SideNav toggle={sideNavToggle} />
        </nav>

        
        // <Navbar>
        //     <Nav className="mr-auto" navbar>
        //         <UncontrolledDropdown setActiveFromChild>
        //             <DropdownToggle tag="a" className="nav-link" caret>
        //                 Menu
        //             </DropdownToggle>
        //             <DropdownMenu>
        //                 <DropdownItem tag="a" href="/deals">Deals</DropdownItem>
        //             </DropdownMenu>
        //         </UncontrolledDropdown>
        //         <NavItem className="d-inline">
        //             <NavLink href="/deals">Deals</NavLink>
        //         </NavItem>
        //     </Nav>
        // </Navbar>
    )
}

export default AppNavbar
