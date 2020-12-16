import { Navbar, Nav } from 'react-bootstrap';
import { Button, Image } from 'react-bootstrap';
import fire from './config/fire.js';
import { NavLink } from 'react-router-dom';
import React from "react";
import './index.css';
import image from './img/golova1.png';



const Main = () => {

    function logout() 
    {
        fire.auth().signOut();
    }

    return (
        <Navbar expand="lg" bg="dark" variant="dark" className="justify-content-between bgNav">
            <Navbar.Brand className="navBrand"><NavLink  className="shriftGl" NavLink to="/" >ThinkAboutCraft</NavLink></Navbar.Brand>
            <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <Nav.Link className="navLink mr-5"><NavLink  NavLink to="/servers" className="mr-5 shrift">Сервера</NavLink></Nav.Link>
                        <Nav.Link className="navLink mr-5"><NavLink  NavLink to="nov" className="mr-5 shrift" >Новости</NavLink></Nav.Link>
                        <Nav.Link className="navLink mr-5"><NavLink  NavLink to="ysl" className="mr-5 shrift">Услуги</NavLink></Nav.Link>
                        <Nav.Link className="navLink mr-5"><NavLink  NavLink to="img" className="mr-5 shrift"><Image src={image} rounded /></NavLink></Nav.Link>
                        <Button variant="outline-success" onClick = {logout}>Logout</Button>
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
        
    )
}


export default Main;