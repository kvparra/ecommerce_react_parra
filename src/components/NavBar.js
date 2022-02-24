import React from 'react'

/* const NavBar = () => {
  return (
    <header>
        <h1>
            Juanítica
        </h1>
        <nav>
            <a href="#">Inicio</a> 
            <a href="#">Productos</a>
            <a href="#">Sale!</a>
            <a href="#">Juani Giftcards</a>
            <a href="#">Nosotros</a>
            <a href="#">Tabla de medidas</a>
            <a href="#">Política de cambios</a>
        </nav>
    </header>
  )
}

export default NavBar */


const NavBar = () => {
    return (
      <header class="header">

        <nav class="navbar navbar-expand-lg navbar-dark navbar-light">

        <div class="header__logoytitulo d-flex">   
            <div class="header__titulo">
                JUANÍ<span>TICA</span>
            </div>
        </div>

            <div class="navbar-items flex-end">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
        
                <div id="navbarNavDropdown" class="collapse navbar-collapse">
        
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link " aria-current="page" href="#">Inicio</a>
                        </li>
            
            
                        <li class="nav-item">
                        <a class="nav-link" href="#">Productos</a>
                        </li>
            
                        <li class="nav-item">
                        <a class="nav-link" href="#">Sale!</a>
                        </li>

                        <li class="nav-item">
                        <a class="nav-link" href="#">JUANÍ Giftcards</a>
                        </li>

                        <li class="nav-item">
                        <a class="nav-link" href="#">Nosotros</a>
                        </li>

                        <li class="nav-item">
                        <a class="nav-link" href="#">Tabla de medidas</a>
                        </li>

                        <li class="nav-item">
                        <a class="nav-link" href="#">Política de devolución</a>
                        </li>
                    </ul>
                </div>
            </div>
    
        </nav>
      </header>
    )
  }
  
  export default NavBar