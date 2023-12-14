import React , {useContext} from 'react';
import {ShopContext} from "/home/san/react-router-shoppingCart-app/shopping-cart/src/context/shop-context.jsx";

 export const Product = (props) => {
    const {id, productName, price, productImage} = props.data;
    
    const {addToCart, cartItems} = useContext(ShopContext);
    const cartItemCount = cartItems[id];
    return (
        <div className='product'>
            <img src={productImage} />
            <div className='description'>
                <p>
                    <b>{productName}</b>
                </p>
                <p>₹ {price}</p>
            </div>
            <button className='addToCartBttn' onClick={() => addToCart(id)}>Add To Cart{cartItemCount > 0 && <>({cartItemCount})</>}</button>
        </div>
    );
};

export default Product;