import React from 'react';
import {Navbar} from 'react-bootstrap';

function NavbarBrand(props){
    return (
        <div>            
            <Navbar.Brand href={props.link}>
            <img
                src={props.src}
                width={props.width}
                height= {props.height}         
                alt={props.alt}
            />
            </Navbar.Brand>        
            <Navbar.Brand href={props.link}>Farmers & Files</Navbar.Brand>
        </div>
    )
}


export default NavbarBrand;