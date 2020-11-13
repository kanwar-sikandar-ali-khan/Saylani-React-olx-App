import React, { Component } from 'react'

class NewHeader extends Component {
    render() {
        return (
            <nav className="nav red">
                <div className="container yellow">
                    <div className="green row nav-row">


                        <div className="left-nav red ">

                            <ul>
                                <li className="black ul-text">IMPERIAL STORE</li>
                            </ul>

                        </div>



                        <div className="right-nav black ">
                            <ul>
                                <li>

                                    <span className='red cart-icon'><i className="fas fa-cart-plus"></i></span>
                                    <span className="red cart-num">{this.props.newheaderprops}</span>

                                </li>
                            </ul>
                        </div>




                    </div>
                </div>

            </nav >

        )
    }
}


export default NewHeader;