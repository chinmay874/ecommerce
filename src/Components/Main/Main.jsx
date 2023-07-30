import React from 'react'
import Navbar from '../Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from '../About Us/About';
import Home from '../Home/Home';
import Category from '../Category/Category';
import ProductDescription from '../Product Description/Product_description';

const Main = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/category' element={<Category/>}/>
        <Route path='/Product_description/id' element={<ProductDescription/>}/>
      </Routes>
      
      
    </BrowserRouter>
  )
}

export default Main