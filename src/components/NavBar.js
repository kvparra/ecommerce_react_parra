import React from 'react'

import CartWidget from "./CartWidget"

const NavBar = () => {
    return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-light " >

            <div className="navbar-items flex-end">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
        
                <div id="navbarNavDropdown" className="collapse navbar-collapse ">
        
                    <ul className="navbar-nav ">
                        <li className="nav-item active">
                            <a className="nav-link " aria-current="page" href="#">Inicio</a>
                        </li>
            
            
                        <li className="nav-item">
                        <a className="nav-link" href="#">Productos</a>
                        </li>
            
                        <li className="nav-item">
                        <a className="nav-link" href="#">Sale!</a>
                        </li>

                        <li className="nav-item">
                        <a className="nav-link" href="#">JUANÍ Giftcards</a>
                        </li>

                        <li className="nav-item">
                        <a className="nav-link" href="#">Nosotros</a>
                        </li>

                        <li className="nav-item">
                        <a className="nav-link" href="#">Tabla de medidas</a>
                        </li>

                        <li className="nav-item">
                        <a className="nav-link" href="#">Política de devolución</a>
                        </li>
                    </ul>
                </div>
            </div>
            <CartWidget/> 
    
    </nav>
    
    )
  }
  
  export default NavBar