import React, { useState } from 'react';
import classes from './Navigation.module.css'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

const Navigation = (props) => {
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);
    const closeNavbar = () => setCollapsed(true);


    return (
        <>
            <Navbar dark fixed="top" expand="md" className={classes.Navik}>
                <NavbarBrand href="#Intro" className={classes.Brand} onClick={closeNavbar}>@gozmit</NavbarBrand>
                <NavbarToggler className="mr-2" onClick={toggleNavbar} />
                <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar className="ml-auto">
                        <NavItem>
                            <NavLink href="#About" onClick={toggleNavbar}>About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#Experiance" onClick={toggleNavbar}>Experience</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#Education" onClick={toggleNavbar}>Education</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#Skills" onClick={toggleNavbar}>Skills</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#Projects" onClick={toggleNavbar}>Projects</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#Contact" onClick={toggleNavbar}>Contact</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>

        </>

    );
}

export default Navigation;