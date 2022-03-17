
import React from 'react'
import ReactDOM from 'react-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter} from "react-router-dom";

import Header from "./Header"
import Body from "./Body"
import Main from './Main'
import Footer from "./Footer"



const App = () => {

    return (
        <BrowserRouter>
            <Header/> 
            <Body/>
            <Main>
                <h2>Hello world</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, error? Inventore, at deleniti, tempore culpa quis atque, expedita sequi consequuntur sint nam modi. Iste illum eius consequatur sapiente, autem velit?
                  
                </p>
            </Main>
            <ToastContainer/>
            <Footer/>
        </BrowserRouter>
    )
  }

export default App