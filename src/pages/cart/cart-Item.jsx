import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
  const { id, productName, price, productIamge } = props.data;
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);

  return (
    <div className="cartItem">
      <img src={productIamge} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> Price: Rs{price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input value={cartItems[id]}/>
          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
};