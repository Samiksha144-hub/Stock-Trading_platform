import React from 'react';
import { Link } from "react-router-dom";
function Education() {
    return ( 
        <div className='Container mt-5 '> 
        <div className='row '>
            <div className='col-6'>
                <img src="/assets/education.svg" alt="education"/>
            </div>
        
            <div className='col-6'>
            <h1 className='mt-5 fs-2'>Free and open market education</h1>
            <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading</p>
            <a href="www.google.com" style={{textDecoration:"none"}}>Versity&nbsp;<i class="fa-solid fa-arrow-right-long"aria-hidden="true"></i></a>

            <p>Trading Q&A, the most active trading and investment community in India for all related queries</p>
            <Link to="/trading-qa" style={{ textDecoration: "none" }}>
               TradingQ&A&nbsp;
                <i className="fa-solid fa-arrow-right-long" aria-hidden="true"></i>
            </Link>
          </div>
          
           </div>
           </div>
     );
}
export default Education;