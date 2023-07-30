import React from 'react'
import Card from '../Card/Card';
import './Home.css';

const Home = () => {
  return (
    <div className='home_product'>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
    // const Product = () => {
    //   return (
    //     <ScrollMenu
    //       arrowLeft={<div style={{ fontSize: "30px" }}>{" < "}</div>}
    //       arrowRight={<div style={{ fontSize: "30px" }}>{" > "}</div>}
    //       data={numberOfPicture.map((picture, index) => (
    //         <img
    //           style={{ height: "100px" }}
    //           alt="test"
    //           src="https://reactjs.org/logo-og.png"
    //         />
    //       ))}
    //     />
    //   );
    // };
  )
}

export default Home