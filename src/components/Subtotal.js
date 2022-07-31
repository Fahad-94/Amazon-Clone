import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';

function Subtotal() {
    const [{ cart }, dispatch] = useStateValue();

    function totalPrice() {
        let total = 0;
        for (let i = 0; i < cart.length; i++) {
            total = total + cart[i].price
        }

        return `$${total.toFixed(2)}`;
    }


  return (
    <div className='subtotal'>
        <CurrencyFormat renderText={(value) => (
            <>
            <p>
                Subtotal ({cart.length} items) :
                <strong> {totalPrice()}</strong>
            </p>
            <small className='subtotal-gift'>
                <input type='checkbox' />
                This order contains a gift
            </small>
            </>
        )}
        decimalScale={2}
        value={0}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
        />
        <button id='checkout-btn'>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal 