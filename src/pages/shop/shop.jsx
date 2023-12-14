import React from "react";
import { PRODUCT } from "../../products";
import { Product } from "/home/san/react-router-shoppingCart-app/shopping-cart/src/pages/shop/product.jsx";
import "./shop.css";

export const Shop = () => {
    return (
        <div className="shop">
        <div className="shopTitle">
            <h1>San's Pizza</h1>
        </div>

        <div className="products">
            {PRODUCT.map((product) => (
                <Product data = {product} />
            ))}
        </div>
    </div>
    );
};

  
       
          
            
