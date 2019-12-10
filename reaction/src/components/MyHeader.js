import React from 'react';
import {Navbar} from 'react-bootstrap';
import NavbarBrand from './NavbarBrand';
function MyHeader(){
    return (
        <Navbar  bg="dark" variant="dark">
            <NavbarBrand src="img/logo-shrunk.png" width={30} height={30} alt="Farmer At Hand Logo" link=""/>                                  
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                Source Code in <a href="https://github.com/maenmulhemeng/interviewfarmer.git">GitHub</a>
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    )
}

// Make it public 
export default MyHeader;