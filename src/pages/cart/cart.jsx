import React, { useContext } from "react";
import {ShopContext} from "../../context/shop-context";
import { PRODUCT } from "../../products";
import { CartItem } from "./cart-item";
 import {useNavigate} from 'react-router-dom';
import './cart.css';



export const Cart = () => {
    const {cartItems, getTotalCartAmount, checkout} = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();
    const navigate = useNavigate();

    return (
        <div className="cart">
            <div>
                <h1>Your cart items</h1>
            </div>
            <div className="cart">
                {PRODUCT.map((product) => {
                    if(cartItems[product.id] !== 0){
                        return <CartItem data = {product} />
                    }
                })}
            </div>
            {totalAmount > 0 ? (
                <div className="checkout">
                    <p>subtotal : $ {totalAmount}</p>
                    <button onClick={() => navigate("/")}>continue shopping</button>
                    <button onClick={() => {checkout ();
                                            navigate("/checkout");  
                                            }}>
                                            {" "}
                                            checkout{" "}</button>
                                            </div>
            ) : (<h1> your shopping cart is empty</h1>)   
           }
        </div>
    );
};
