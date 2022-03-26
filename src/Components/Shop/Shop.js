import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handleAddToCart = (product) => {
        const addedProduct = cart.find(cart => cart.id === product.id);
        if (addedProduct) {
            alert('You can not add the same product twice in cart')
        }
        else {
            const newCart = [...cart, product]
            setCart(newCart);
        }

    }

    const emptyCart = () => {
        setCart([]);
    }

    const chooseOneButton = () => {
        const random = Math.floor(Math.random() * cart.length);
        const newCart = [cart[random]]
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
                        cart.map(item => <Cart
                            key={item.id}
                            item={item}
                        ></Cart>)
                    }
                    <button onClick={chooseOneButton} className='cart-btn'>Choose one for me</button>
                    <button onClick={emptyCart} className='cart-btn'>RESET</button>
                </div>
            </div>
        </div>
    );
};

export default Shop;