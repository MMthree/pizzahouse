import React from 'react';
import { 
    Navbar, 
    Nav, 
    NavItem, 
    NavLink, 
    UncontrolledDropdown, 
    DropdownToggle, 
    DropdownMenu, 
    DropdownItem 
} from 'reactstrap';


const AppNavbar = () => {
    return (
        <Navbar>
            <Nav className="mr-auto" navbar>
                <UncontrolledDropdown setActiveFromChild>
                    <DropdownToggle tag="a" className="nav-link" caret>
                        Menu
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem tag="a" href="/deals">Deals</DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem className="d-inline">
                    <NavLink href="/deals">Deals</NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    )
}

export default AppNavbar
