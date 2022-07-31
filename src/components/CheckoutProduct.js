import React from 'react'
import './CheckoutProduct.css';
import StarIcon from '@mui/icons-material/Star';
import { useStateValue } from './StateProvider';



function CheckoutProduct({id, title, image, rating, price}) {
    const [{ cart }, dispatch] = useStateValue();
    
    function removeFromCart() {
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id
        })
    }

    
  return (
    <div className='checkout-product'>
        <div className='image-div'>
            <img src={image} alt='' id='product-image' />
        </div>

        <div className='info-div'>
            <p>{title}</p>
            <strong id='price'>$ {price}</strong>
            <div className='rating'>
                {Array(rating).fill().map(() => <StarIcon id='rating-star' />)}
            </div>
            <button id='remove-btn' onClick={removeFromCart}>Remove from Cart</button>
        </div>
    </div>
  )
}

export default CheckoutProduct