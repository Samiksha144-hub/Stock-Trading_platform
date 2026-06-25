import React from 'react';
import { Link } from "react-router-dom";

function Hero() {
    return ( 
        <div className='container border-bottom my-5'>
        <div className='row text-center '>
          <h1 className='mt-4'>Technology</h1>
          <h4 className='fs-5 mt-3'>Steek, modern and intitutive trading platforms</h4>
          <p className='mt-3'>Check out our&nbsp;<Link to="/">investment offering<i class="fa-solid fa-arrow-right-long"aria-hidden="true"></i></Link></p> 
          </div>
      </div>
     );
}

export default Hero;