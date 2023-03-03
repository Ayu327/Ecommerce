import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
//import "./shop.css"

const Shop = ({Items}) =>{
    return(
        <div>
            <div>
            Shop
            </div>
            <div className="products">{PRODUCTS.map((product)=>
            (<Product data={product}/>))}</div>
        </div>
    )
}

export default Shop