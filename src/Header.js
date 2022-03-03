import React from 'react'

import NavBar from './components/NavBar'

const Header = () => {
  return (
    <header className='header' id="layout-header">
        <h1 className='header__title'> JUANÍ<span>TICA</span></h1>

        <NavBar/>
    </header>
  )
}

export default Header