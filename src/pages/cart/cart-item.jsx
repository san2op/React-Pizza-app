import React from "react";
import { useContext } from "react";
import {ShopContext} from "../../context/shop-context";


export const CartItem = (props) => {
    const {id, productName, price, productImage} = props.data;
    const {cartItems, addToCart, removeFromCart, updateCartItemCart} = useContext(ShopContext);

    return(
        <div className="CartItem">
            <img src = {productImage} />
            <div className="description">
                <p><b>{productName}</b></p>
                <p>Price : ${price}</p>
                <div className="countHandler">
                    <button onClick={() => removeFromCart (id)}>-</button>
                    <input value={cartItems[id]} onChange={(e) =>updateCartItemCart(Number (e.target.value), id)} />
                    <button onClick={() => addToCart(id)} >+</button>
                </div>
            </div>
        </div>
    );
};