import React  from 'react'
import CartWidget from "./CartWidget"
import {Link} from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark navbar-light " >

                <Link to="/category/Katz" className='nav__link'> cat 1</Link>
                <Link to="/category/Meemm" className='nav__link'> cat 2</Link>
                <Link to="/category/Gabtune" className='nav__link'> cat 3</Link>
                <Link to="cart">
                    <CartWidget/> 
                </Link>
                
                <Link to="/form">
                    Form 
                </Link>
        </nav>
    
    )
  }
  
  export default NavBar
