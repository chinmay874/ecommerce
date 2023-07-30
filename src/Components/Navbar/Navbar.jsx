import React from 'react';
import './Navbar.css';
import {Link, useNavigate} from 'react-router-dom'

const Navbar = () => {
  // var navigate =useNavigate();
  
  // const category=()=>{
  //   navigate("/category")
  // }
  return (
    <div className='Navbox'>
      <div className='navlink'>
        <Link className='navigate' to="/">Home</Link>
        <Link className='navigate' to='/about'>About Us</Link>
        <Link className='navigate' to='/category'>Category</Link>
        {/* <h5 onClick={category}>Category</h5> */}
      </div>
    </div>
  )
}

export default Navbar