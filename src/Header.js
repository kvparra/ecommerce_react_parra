import React from 'react'
import {Link} from "react-router-dom";
import NavBar from './components/NavBar'

const Header = () => {
  return (
    <header className='header' id="layout-header">
      <Link to="/">
        <h1 className='header__title'> JUANÍ<span>TICA</span></h1>
      </Link>
        <NavBar/>
    </header>
  )
}

export default Header