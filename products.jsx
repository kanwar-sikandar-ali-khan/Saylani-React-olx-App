import React, { useContext } from 'react'
import { ProductsContext } from "../Global/ProductContext"
import Banner from "./Banner"
import Navbar from "./Navbar"
import Footer from './footer'

import { CartContext } from '../Global/CartContext'


const Products = () => {
    const { products } = useContext(ProductsContext);

    const { dispatch } = useContext(CartContext);



    return (

        // <h1>Products</h1>




        <div>
            <Navbar />
            <Banner />

            <div className="products red">

                <div className="container black">



                    <div className="row blue">
                        {products.map((product, index) => (

                            <div className="col-md-3 green" key={index}>





                                <div className="product blue" key={product.id}>
                                    <div className="product-image">

                                        <img className="productimg" src={product.image} alt="not found" />
                                    </div>
                                    <div className="product-details black">
                                        <div className="product-name">
                                            {product.name}


                                        </div>
                                        <div className="product-price yellow">
                                            ${product.price}.00

                                        </div>
                                        <div className="add-to-cart" onClick={() => dispatch({ type: 'Add-to-cart', id: product.id, product })
                                        }>  <a href="">ADD TO CART  </a>
                                        </div>
                                        <br />
                                        {product.status === "hot" ? <div className="hot">HOT</div> : ''}
                                        {product.status === "new" ? <div className="new">NEW</div> : ''}
                                    </div>

                                </div>


                            </div>

                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>


    )




}

export default Products;