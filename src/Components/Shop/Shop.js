import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    console.log(cart);

    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handleAddToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart);
    }

    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className='cart-container'>
                <div className='cart-info'>
                    <h1>CART <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon></h1>
                    <hr />
                    {
                        cart.map(item => <h1>{item.name}</h1>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Shop;