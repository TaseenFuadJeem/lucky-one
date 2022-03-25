import React from 'react';
import './Product.css';

const Product = ({ product }) => {

    const { img, name, price, seller } = product;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h4>Price : {price} BDT</h4>
            <p>Manufacturer : {seller}</p>
        </div>
    );
};

export default Product;