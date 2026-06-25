import React from 'react';


 function Hero(){
    return (
        <div className='container p-5'>
          <div className='row text-center'>
            <img src="/assets/homeHero.png" alt="Hero" className='mb-5'/>
            <h1 className='mt-5'>Invest in Everything</h1>
            <p>Online platform that invest in stocks, mutual funds, and more</p>
            <button className='p-3 btn btn-primary fs-5 mb-5' style={{width:"20%" , margin:"0 auto"}}>Signup now</button>

            </div>
        </div>
    )
};

export default Hero;