import React from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter} from "react-router-dom";
import NavBar from './components/NavBar'
import Body from "./Body"
import Main from './Main'
import Footer from "./Footer"
import CartContext from './components/CartContext';


const App = () => {

    return (
        <CartContext>
            <BrowserRouter>
                <header className="header"  id="layout-header">
                    <NavBar/>
                </header>
                <Body/>
                <Main/>
                <ToastContainer/>
                <Footer/>
            </BrowserRouter>
        </CartContext>
    )
  }

export default App