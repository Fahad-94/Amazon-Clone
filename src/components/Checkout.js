import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';

function Checkout() {    
    const [{ cart }, dispatch] = useStateValue();
    console.log(cart)

  return (
    <div className='checkout'>
        <div id='left-div'>
            <img src='' alt='' id='ad-image' />
            <h2>Your Shopping cart</h2>
            {cart.map( product => {
               return (
                <CheckoutProduct 
                id = {product.id}
                title = {product.title}
                image = {product.image}
                rating = {product.rating}
                price = {product.price}
                />)
            })}
        </div>

        <div id='right-div'>
            <Subtotal />
        </div>
    </div>
  )
}

export default Checkout