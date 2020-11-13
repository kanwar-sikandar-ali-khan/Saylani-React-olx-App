import React, { Component } from 'react'

class CartNum extends Component{
    constructor(){
        super()
        this.state = {
            num: 0
        }
    }
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col">
                        {this.state.num}
                    </div>
                    
                    <div className="col">
                         {/* <button onClick={()=>{this.setState({num:this.state.num + 1})>add to cart</button> */}
                         <button on onClick={()=>{this.setState({num:this.state.num +1})}}>add to cart</button>
                    </div>

                </div>

            </div>
                
        
        )
    }
    
}
export default CartNum;