import React, {createContext, useState} from "react";
import {PRODUCTS} from "../products"

export const ShopContext = createContext(null)
 const getDefaultCart = () =>{
    let cart = {};
    for(let i=0; i<PRODUCTS.length + 1; i++){
        cart[i] = 0
    }
    return cart;
 }

export const ShopContextProvider = (props) =>{
    const [cartItems, setCartItems] = useState(getDefaultCart);

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
          if (cartItems[item] > 0) {
            let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
            totalAmount += cartItems[item] * itemInfo.price;
          }
        }
        return totalAmount;
      };

    const addToCart = (itemid) =>{
        setCartItems((prev) =>({...prev, [itemid] : prev[itemid] + 1}))
    }
    const removeFromCart = (itemid) =>{
        setCartItems((prev) =>({...prev, [itemid] : prev[itemid] - 1}))
    }
    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
      };
    
      const checkout = () => {
        setCartItems(getDefaultCart());
      };
    
      const Values = {
        cartItems,
        addToCart,
        updateCartItemCount,
        removeFromCart,
        getTotalCartAmount,
        checkout,
      }
    return (
        <ShopContext.Provider value={Values}>{props.children}</ShopContext.Provider>
    )
}