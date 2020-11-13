import React,{useContext} from 'react'
import Navbar from "./Navbar"
import Footer from './footer'
import Banner from './Banner'
import {CartContext} from '../Global/CartContext'

const Cart = () => {

    const data = useContext(CartContext)
    console.log(data);

    return (
        <div>
            <Navbar />
            <Banner />
            <div className="container">

                <div className="row">
                    <div className="col">
                        <h2>Shopping Cart</h2>
                    </div>
                </div>

            </div>
            <Footer />
        </div>

    )
}

export default Cart