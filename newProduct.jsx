import React, { Component } from 'react'
import NewHeader from './newHeader'
import NewBanner from './newBanner'
import Footer from './footer'

import dslr from "../images/dslr.jpg"
import iphone from "../images/iphone.jpg"
import watch1 from "../images/watch1.jpg"
import watch2 from "../images/watch2.jpg"
import cycle from "../images/cycle.jpg"
import car from "../images/car.jpg"
import bike from "../images/bike1.jpg"
import sunglass from "../images/sunglass.jpg"

class NewProduct extends Component {
    constructor() {
        super()
        this.state = {


            products: [{ id: 1, name: 'Dslr', price: 1, image: dslr, status: 'hot' }
                , { id: 2, name: 'iphone', price: 2, image: iphone, status: 'new' },
            { id: 2, name: 'watch', price: 3, image: watch1, status: 'hot' },
            { id: 2, name: 'bike', price: 4, image: bike, status: 'new' },
            { id: 2, name: 'car', price: 5, image: car, status: 'hot' },
            { id: 2, name: 'watch', price: 6, image: watch2, status: 'hot' },
            { id: 2, name: 'cycle', price: 7, image: cycle, status: 'new' },
            { id: 2, name: 'sunglass', price: 8, image: sunglass, status: 'hot' }],

            addtocart: 0




        }



    }

    addtocartincreaser = () => {



        this.setState({ addtocart: this.state.addtocart + 1 });
        console.log("addtocart", this.state.addtocart);
        // console.log("addtocartinc"); 

        console.log("ADD TO CART DETAILS", this.state.products)
    }


    render() {


        return (

            <div className="red">
                <NewHeader newheaderprops={this.state.addtocart} />
                <NewBanner />
                <div className="container red productsdiv">
                    <div className="row black">

                        {this.state.products.map((product, index) => {
                            return (
                                <div key={index} className="black">

                                    <div className="col-md-3 offset-3  yellow" key={index} >

                                        <img className="productimg" src={product.image} alt="" />

                                    </div>
                                    <div className="blue offset-5">
                                        <div className="product-name blue">
                                            {product.name}


                                        </div>

                                        <div className="product-price yellow">
                                            ${product.price}.00

                                        </div>
                                        <div className="add-to-cart blue">
                                            <button className="buttonaddtocart" onClick={this.addtocartincreaser}>ADD TO CART</button>

                                        </div>
                                        <br />
                                        {/* {product.status === "hot" ? <div className="hot black">HOT</div> : ''}
                                    {product.status === "new" ? <div className="new black">NEW</div> : ''} */}
                                    </div>
                                </div>



                            )
                        })}










                    </div>
                </div>
                <Footer />

            </div>




        )
    }
}


export default NewProduct;