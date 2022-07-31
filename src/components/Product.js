import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import './Product.css';
import { useStateValue } from './StateProvider';
import { UserAuth } from '../context/AuthContext';
import { useHistory } from 'react-router-dom';

function Product(props) {

    const [{ cart }, dispatch] = useStateValue();

    const { user } = UserAuth();
    const history = useHistory();

    const goToLoginPage = () => {
        history.push('/login');
    }
    
    const addToCart = () => {
        dispatch({
            type: 'ADD_TO_CART',
            item: {
                id: props.id,
                title: props.title,
                image: props.img,
                price: props.price,
                rating: props.rating
            }
        });
    };

    function stars() {
            if (props.rating == 1) {
                return <StarIcon id='star-icon' />
            } else if (props.rating == 2) {
                return (
                    <>
                        <StarIcon id='star-icon' />
                        <StarIcon id='star-icon' />
                    </>
                )
            } else if (props.rating == 3) {
                return (
                    <>
                        <StarIcon id='star-icon' />
                        <StarIcon id='star-icon' />
                        <StarIcon id='star-icon' />
                    </>
                )
            } else if (props.rating == 4) {
                return (
                    <>
                        <StarIcon id='star-icon' />
                        <StarIcon id='star-icon' />
                        <StarIcon id='star-icon' />
                        <StarIcon id='star-icon' />
                    </>
                )
            } else if (props.rating == 5) {
                return (
                    <>
                        <StarIcon id='star-icon' />
                        <StarIcon id='star-icon' />
                        <StarIcon id='star-icon' />
                        <StarIcon id='star-icon' />
                        <StarIcon id='star-icon' />
                    </>
                )
            }
        }


  return (
    <div className='product'>
        <div className='product-info'>
            <p>{props.title}</p>
            <strong>$ {props.price}</strong>
            <div id='rating-div'>
                 {stars()}
            </div>
        </div>
        <div className='img-div'>
             <img src={props.img} alt=''  id='product-image'/>
        </div>

        <button id='product-btn' onClick={user ? addToCart : goToLoginPage}>Add to cart</button>
    </div>
  )
}

export default Product