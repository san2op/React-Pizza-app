import { createContext, useEffect, useState } from "react";
import {PRODUCT} from '../products';

export const ShopContext = createContext(null);
const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < PRODUCT.length + 1; i++){
        cart[i] = 0;
    }
    return cart;
};


export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const getTotalCartAmount = () =>{
        let totalAmount = 0;
        for (const item in cartItems){
            if (cartItems[item] > 0) {
                let itemInfo = PRODUCT.find((product) => product.id === Number(item));
                totalAmount += cartItems[item] * itemInfo.price;
            }
        }
        return totalAmount;
    };

    const addToCart = (itemid) => {
        setCartItems ((previous) => ({...previous, [itemid] : previous[itemid] + 1 }));
    };

    const removeFromCart = (itemid) => {
        setCartItems ((previous) => ({...previous, [itemid] : previous[itemid] - 1 }));
    };

    const updateCartItemCount = (newAmount, itemid) => {
        setCartItems ((previous) => ({...previous,[itemid] : newAmount}));
    };

    const Checkout = () => {
        setCartItems (getDefaultCart());
    };

    const contextValue = {
        cartItems,
        addToCart, 
        updateCartItemCount, 
        removeFromCart, 
        getTotalCartAmount, 
        Checkout
    };

    return (
        <ShopContext.Provider value = {contextValue}>
            {props.children}
            </ShopContext.Provider>
    );
};