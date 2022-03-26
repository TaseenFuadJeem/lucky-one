import React from 'react';
import './Cart.css';

const Cart = ({ item }) => {

    const { img, name, price } = item;

    return (
        <div className='cart-management'>
            <img src={img} alt="" />
            <div>
                <p><strong>{name}</strong></p>
                <p>Price : {price} BDT</p>
            </div>
        </div>
    );
};

export default Cart;