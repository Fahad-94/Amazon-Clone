import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className='home'>

       <div className='home-image'>
          <img src='https://m.media-amazon.com/images/I/61q5Pg3hO8L._SX3000_.jpg' alt='' />
       </div>


       <div id='products'>
            <div className='home-row'>
                <Product 
                id={1}
                title = "Science Encyclopedia: Atom Smashing, Food Chemistry, Animals, Space, and More!"
                img = 'https://images-na.ssl-images-amazon.com/images/I/51iAGP8383L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg'
                rating = {5}
                price = {19.99}
                />
                <Product
                id={2} 
                title = "Smart Watch, 1.69'' Touch Screen Fitness Tracker with Heart Rate Monitor, Sleep Monitor, Activity Tracker, Pedometer & Fitness Watch"
                img = 'https://m.media-amazon.com/images/I/61AqicHmZhL._AC_SX522_.jpg'
                rating = {4}
                price = {35.99}
                />
            </div>

            <div className='home-row'>
                <Product 
                id={3}
                title = "Gaming Headset for PS4, Xbox One Headset with Microphone, 7.1 Stereo Surround Sound, Noise Cancelling Mic & LED Light"
                img = 'https://m.media-amazon.com/images/I/71LJMvO+dZL._AC_SX522_.jpg'
                rating = {5}
                price = {16.99}
                />
                <Product 
                id={4}
                title = 'DualShock 4 Wireless Controller for PlayStation 4 - Jet Black'
                img = 'https://m.media-amazon.com/images/I/61IG46p-yHL._SX522_.jpg'
                rating = {5}
                price = {26.99}
                />
                <Product 
                id={5}
                title = "Membrane Gaming Keyboard, YoChic Rainbow LED Backlit Quiet USB Wired 104 Silent Keys"
                img = 'https://m.media-amazon.com/images/I/71b-7QJEgbL._AC_SX679_.jpg'
                rating = {4}
                price = {26.99}
                />
            </div>

            <div className='home-row'>
                <Product 
                id={6}
                title = "SAMSUNG 75-inch Class QLED Q80T Series - 4K UHD Direct Full Array 12X Quantum HDR 12X Smart TV with Alexa Built-in"
                img = 'https://m.media-amazon.com/images/I/61UxxNFRsRL._AC_SX466_.jpg'
                rating = {5}
                price = {379.95}
                />
            </div>
       </div>


    </div>
  )
}

export default Home