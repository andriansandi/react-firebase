import React from "react"
import {
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    Collapse,
} from 'reactstrap'

export default function Navigation() {
    return(
        <div>
            <Navbar color="dark" expand="md" dark>
                <NavbarBrand href="/">React Firebase</NavbarBrand>
                <NavbarToggler onClick={function noRefCheck(){}} />
                <Collapse navbar>
                    <Nav className="me-auto" navbar>
                        <NavItem>
                            <NavLink href="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/leaderboard">Leaderboard</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/upload">Upload</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
                <Nav className="me-auto" navbar>
                    <NavItem>
                        <NavLink href="/login">Login</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/register">Register</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    )
}