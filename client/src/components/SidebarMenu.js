import React, { Fragment, useState } from 'react';
import { reveal as Menu } from 'react-burger-menu';


const SidebarMenu = () => {
    
    return (
        <Menu isOpen={true} right>
            <a id="home" className="menu-item" href="/">Home</a>
            <a id="about" className="menu-item" href="/about">About</a>
            <a id="contact" className="menu-item" href="/contact">Contact</a>
      </Menu>
    )
};


export default SidebarMenu;
