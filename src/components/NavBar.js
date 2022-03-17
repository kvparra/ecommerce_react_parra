import React from 'react'
import CartWidget from "./CartWidget"
import {Link} from "react-router-dom";
import { NavLink } from 'react-bootstrap';

const NavBar = () => {
    return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-light " >

            <Link to="/categoria/vestidos" className='nav__link'> cat 1</Link>
            <Link to="/categoria/pantalones" className='nav__link'> cat 2</Link>
            <Link to="/categoria/camperas" className='nav__link'> cat 3</Link>
            <Link to="carrito">
                <CartWidget/> 
            </Link>
    </nav>
    
    )
  }
  
  export default NavBar

 /*  <div className="navbar-items flex-end">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
        
                <div id="navbarNavDropdown" className="collapse navbar-collapse ">
        
                    <ul className="navbar-nav ">
                        <li className="nav-item active">
                            <Link to="inicio" className="nav-link " aria-current="page"> INICIO</Link>
                        </li>
            
            
                        <li className="nav-item">
                        <Link className="nav-link" to="Productos">Productos</Link>
                        </li>
            
                        <li className="nav-item">
                        <Link className="nav-link" to="Sale">Sale!</Link>
                        </li>

                        <li className="nav-item">
                        <Link className="nav-link" to="JUANÍ">JUANÍ Giftcards</Link>
                        </li>

                        <li className="nav-item">
                        <Link className="nav-link" to="Nosotros">Nosotros</Link>
                        </li>

                        <li className="nav-item">
                        <Link className="nav-link" to="medidas">Tabla de medidas</Link>
                        </li>

                        <li className="nav-item">
                        <Link className="nav-link" to="Política">Política de devolución</Link>
                        </li>
                    </ul>
                </div>
            </div> */