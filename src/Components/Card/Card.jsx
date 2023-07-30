import React from 'react';
// import Product_description from '../Product Description/Product_description';
import './Card.css';


const Card = () => {
    const Product_description=()=>{
            alert("hello")
        };
  return (
    <div className='card_container' onClick={Product_description}>
        <div className='card_img'>
            <img className='product_img' src='/img6.jpg' alt='mobile'/>
        
        <div className='product_description'>
            <h3 className='product_name'>Cycle</h3>
            <h4 className='product_rate'>Rs 1000</h4>
        </div>
        </div>
    </div>
  )
}

export default Card