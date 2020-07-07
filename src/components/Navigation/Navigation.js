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

const hash = '#'
const navLinks = ['About', 'Experience', 'Education', 'Skills', 'Projects', 'Contact']

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
                        {navLinks.map(item => {
                            return (
                                <NavItem key={item}>
                                    <NavLink href={hash.concat(item)} onClick={toggleNavbar} style={{ color: 'white' }} >
                                        {item}
                                    </NavLink>
                                </NavItem>
                            )
                        })}
                    </Nav>
                </Collapse>
            </Navbar>

        </>

    );
}

export default Navigation;