import React,{createContext, useState} from "react"
    


import dslr from "../images/dslr.jpg"
import iphone from "../images/iphone.jpg"
import watch1 from "../images/watch1.jpg"
import watch2  from "../images/watch2.jpg"
import cycle from "../images/cycle.jpg"
import car from "../images/car.jpg"
import bike from "../images/bike1.jpg"
import sunglass from "../images/sunglass.jpg"
// import from ""





export const ProductsContext = createContext()

const ProductsContextProvider = (props) =>{
const [products] = useState([
    {id:1,name:'Dslr',price:1,image:dslr,status:'hot'}
    ,{id:2,name:'iphone',price:2,image:iphone,status:'new'},
    {id:2,name:'watch',price:3,image:watch1,status:'hot'},
    {id:2,name:'bike',price:4,image:bike,status:'new'},
    {id:2,name:'car',price:5,image:car,status:'hot'},
    {id:2,name:'watch',price:6,image:watch2,status:'hot'},
    {id:2,name:'cycle',price:7,image:cycle,status:'new'},
    {id:2,name:'sunglass',price:8,image:sunglass,status:'hot'}
    
])

    return(
        
        <ProductsContext.Provider value={{products:[...products]}}>
        {props.children}
        </ProductsContext.Provider>

    )
}

export default ProductsContextProvider;