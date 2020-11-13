import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {

    return (
        <nav className="nav red">
            <div className="container yellow">
                <div className="green row nav-row">


                    <div className="left-nav red">

                        <ul>
                            <li className="black ul-text"><Link to="/">IMPERIAL STORE</Link></li>
                        </ul>

                    </div>



                    <div className="right-nav red">
                        <ul>
                            <li>
                            <Link to="cart">
                                <span className='red cart-icon'><i className="fas fa-cart-plus"></i></span>
                                <span className="red cart-num">0</span>
                                </Link>
                            </li>
                        </ul>
                    </div>




                </div>
            </div>

        </nav >
    )

}

export default Navbar;