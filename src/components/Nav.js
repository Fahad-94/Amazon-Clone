import React from 'react';
import './Nav.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link, useHistory } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { UserAuth } from '../context/AuthContext';


function Nav() {

    const [{ cart }, dispatch] = useStateValue();

    const logo = 'https://www.mabaya.com/wp-content/uploads/2019/10/amazon_PNG25.png';

    const {user, logout} = UserAuth();

    const history = useHistory();

    const handleLogout = async () => {
        
            await logout();
            history.push('/');
        
    }

    function userState() {
        if (user) {
                        return (
                            
                            <span className='lower-text' onClick={handleLogout}>Sign Out</span>
                            
                        )
                    } else {
                        return (
                            
                            <span className='lower-text' onClick={toSignInPage}>Sign In</span>
                            
                        )
                    }
    }

    function toSignInPage() {
        history.push('/login');
    }


  return (
    <nav>
        <Link to='/'>
        <img src={logo} alt='Amazon Logo' id='logo' />
        </Link>
        <div className='search-div'>
            <input type='text' />
            <SearchIcon id="search-icon" />
        </div>

        <div id='nav-links-div'>
            <div className='nav-links'>
                <span className='upper-text'>{user? 'Welcome' : 'Hello Guest'}</span>
                {userState()}
            </div>
            <div className='nav-links'>
                <span className='upper-text'>Returns</span>
                <span className='lower-text'>& Orders</span>
            </div>
            <div className='nav-links'>
                <span className='upper-text'>Your</span>
                <span className='lower-text'>Prime</span>
            </div>
        </div>

        <div id='basket-div'>
            
            
            <ShoppingCartIcon id='cart-icon' onClick={user? ()=>{history.push('/checkout')} : ()=> {history.push('/login')}}/>
            
            <span>{cart?.length}</span>
        </div>
    </nav>
  )
}

export default Nav