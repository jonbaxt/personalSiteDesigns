import React from 'react';

import { Nav, Navbar, NavItem } from 'react-bootstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faLinkedin from '@fortawesome/fontawesome-free-brands/faLinkedin'
import faGithubSq from '@fortawesome/fontawesome-free-brands/faGithubSquare'

export default class NavBarBootStrapped extends React.Component {
    render() {
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#/">Jonathan Baxter</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="#about">
                            About</NavItem>
                        <NavItem eventKey={2} href="#skills">
                            Skills</NavItem>
                        <NavItem eventKey={3} href="#portfolio">
                            Portfolio</NavItem>
                        <NavItem eventKey={4} href="#contact">
                            Contact</NavItem>
                        {/* <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>Action</MenuItem>
                            <MenuItem eventKey={3.2}>Another action</MenuItem>
                            <MenuItem eventKey={3.3}>Something else here</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.3}>Separated link</MenuItem>
                        </NavDropdown> */}
                    </Nav>
                    <Nav pullRight>
                        {/* <NavItem eventKey={3} href="#miscstuff">
                            MiscThings}</NavItem> */}
                        <NavItem eventKey={2} href="https://www.linkedin.com/in/jonbaxt/">
                            <FontAwesomeIcon icon={faLinkedin} /></NavItem>
                        <NavItem eventKey={1} href="https://github.com/jonbaxt/">
                            <FontAwesomeIcon icon={faGithubSq} /></NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}