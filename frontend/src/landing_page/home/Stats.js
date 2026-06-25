import React from 'react';
import { Link } from "react-router-dom";

function Stats() {
    return ( 
        <div className='container p-3'>
        <div className='row p-5'>
            <div className='col-6 p-5 '>
                <h1 className='mb-5 fs-2'>Trust with confidence</h1>

                    <h3 className='fs-4'>Customer-first always</h3>
                    <p className='text-muted'>That's why 13+ core Customes trust Zerodha with ₹3.5+ lakh cores worth of equity investments</p>

                    <h3 className='fs-4'>No spam or gimmicks</h3>
                    <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like</p>
                
                    <h3 className='fs-4'>The Zerodha universe</h3>
                    <p className='text-muted'>Not just an app, but a whole ecosystem. our investments in 30+fintech startups offer you tailored sesrvices specific to your needs</p>
              
                    <h3 className='fs-4'>Do better with money</h3>
                    <p className='text-muted'>with intiatives like Nudge and kill Switch, we Don't just facilitate transactions, but actively help you do better with your money</p>
                
            </div>
            <div className='col-6 p-5 '>
                <img src="/assets/ecosystem.png" alt="stats" style={{ width:"110%"}}/>
                <div className='text-center mt-4'>
               <Link to="www.google.com" className='mx-5' style={{textDecoration:"none"}}>Explore our products<i class="fa-solid fa-arrow-right-long" aria-hidden="true"></i></Link>
                <Link to="www.google.com" style={{textDecoration:"none"}}>Try Kite demo<i class="fa-solid fa-arrow-right-long"aria-hidden="true"></i></Link>
            </div>
            </div>
            </div>
            
        </div>
        
     );
}

export default Stats;