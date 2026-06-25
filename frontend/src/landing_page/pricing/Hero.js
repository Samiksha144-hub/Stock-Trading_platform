import React from 'react';

function Hero() {
    return ( 
        <div className='container p-3'>
       <div className='row text-center border-bottom'>
         <h1 className='mt-5'>Pricing</h1>
            <p>Free equity investments and flat ₹20 traday and F&O trades</p>
            </div>
            <div className='row'>
                <div className='col-4 text-center'>
                    <img src="./assets/pricing0.svg" alt=""/>
                    <h2 className='fs-3'>Free equity delivery</h2>
                    <p>All equity delivery investments (NSE , BSE), are abouslutey free - ₹0 brokerage.</p>
                </div>
                <div className='col-4 text-center'>
                <img src="./assets/intradayTrades.svg" alt=""/>
                <h2 className='fs-3'>intradayTrades</h2>
                <p>Flat Rs.20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades</p>
                </div>
                <div className='col-4 text-center'>  
                    <img src="./assets/pricingEquity.svg" alt=""/>
                    <h2 className='fs-3'>Free equity delivery</h2>
                    <p>All direct mutual fund investments free -₹ 0 commissions & Di</p>
                </div>
                </div>
                <div> 
                </div>
            </div>
     );
}

export default Hero;