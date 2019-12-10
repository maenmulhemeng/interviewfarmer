import React from 'react';
import {Image,Navbar} from 'react-bootstrap';
import NavbarBrand from './NavbarBrand';
function MyFooter(){
    return (
        <Navbar   bg="dark" variant="dark">
          
          <NavbarBrand src="img/logo-shrunk.png" width={30} height={30} alt="Farmer At Hand Logo" link=""/>        
                 
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
                Developed by <code>Maen Mulhem</code> @2019 - Thanks for <a href="https://globaltalentaccelerator.com/">
                <Image src="img/GTA.png" width="40" alt="Global Talent Accelerator"/>
                </a>
            </Navbar.Text>
            
        </Navbar.Collapse>   
        
        <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
            Source Code in <a href="https://github.com/maenmulhemeng/interviewfarmer.git">GitHub</a>
            </Navbar.Text>
        </Navbar.Collapse>
        </Navbar>
    )
}

// Make it public 
export default MyFooter;