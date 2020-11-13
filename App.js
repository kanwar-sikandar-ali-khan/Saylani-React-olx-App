import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"


import Notfound from './components/Notfound'


import ProductsContextProvider from "../src/Global/ProductContext"
import Products from "./components/products"
import Cart from './components/cart'
import CartContextProvider from './Global/CartContext'

import CartNum from './components/cartNum'
import CartEx from './components/exampleCart'
import NewProduct from './components/newProduct'








function App() {

  return (
    <div>




      {/* <ProductsContextProvider>
        <CartContextProvider>
          <Router>







            <Switch>
              <Route path="/" exact component={Products} />
              <Route path="/cart" exact component={Cart} />
              <Route component={Notfound} />
            </Switch>

          </Router>
        </CartContextProvider>
      </ProductsContextProvider> */}
      {/* <CartNum/>
      <CartEx/> */}



      <NewProduct />

    </div>
  );
}

export default App;
