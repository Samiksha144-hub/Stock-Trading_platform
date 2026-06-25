import React from 'react';
import { Link } from "react-router-dom";
function Team() {
    return ( 
        <div className='container'>
        <div className='row p-5 mt-5 border-top'>
        <h1 className='text-center'>People</h1>
        </div>

        <div className='row p-5 text-muted'style={{lineHeight:"1.8" , fontSize:"1.1rem"}}>
          <div className='col-6 p-5 text-center'>
            <img src="/assets/nithinKamath.jpg" alt=" " style={{width: " 60%",borderRadius: "100%",}}  className='left-image'/>
            <h4 className='mt-5'>Nithin Kamath</h4>
            <h6>Founder, CEO</h6>
          </div>

          <div className="col-6 p-4">
            <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
            <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
            </p>
            <p>Playing basketball is his zen.</p>
            <p>Connect on Homepage / TradingQnA / Twitter</p>
            <Link style={{textDecoration:"None"}} to=" " >Homepage</Link> / <Link style={{textDecoration:"None"}}  to="" >TradingQnA</Link> / <Link style={{textDecoration:"None"}} to=" " >Twitter</Link>
            
          </div>
      
        </div>
       </div>
     );
}

export default Team;