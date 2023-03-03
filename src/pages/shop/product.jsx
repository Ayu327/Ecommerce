import React, { useContext } from "react"
import { ShopContext } from "../../context/shop-context";
import productImage from "../../products";

export const Product = (props) =>{
    const { id, productName, price, productIamge} = props.data;
    const { addToCart, cartItems } = useContext(ShopContext);
    const cartItemAmount = cartItems[id]
    return (
        <div className="product">
            <img src={productIamge} alt="game"/>
            <div className="discription">
                <p>
                    <b>{productName}</b>
                </p>
                <p> Rs{price}</p>
            </div>
            <button className="addtocart" onClick={() => addToCart(id)}>
                Add to Cart{cartItemAmount > 0 && <>({cartItemAmount})</>}</button>
        </div>
    )
}
