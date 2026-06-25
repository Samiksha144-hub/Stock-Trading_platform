import React from 'react';
import { Link } from "react-router-dom";

function Hero() {
    return ( 
        <div className='container '>
            <div className='row p-5 border-bottom'>
                <h1 className='fs-2 text-center'>
                We pioneered the discount broking model in India.
                <br/>
                Now, we are breaking ground with our technology.
                </h1>
            </div>

            <div className='row p-5 mt-5 text-muted' style={{lineHeight:"1.8" , fontSize:"1.1rem"}}>
               
                    <div className='col-6'>
                        <p>We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.</p><br/>
                        <p>Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.</p><br/>
                        <p>Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.</p>
                    </div>
                    <div className='col-6'>
                        <p>In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.</p><br/>
                        <p><Link style={{textDecoration:"None"}} to=" " >Rainmatter</Link>, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets</p><br/>
                        <p>And yet, we are always up to something new every day. Catch up on the latest updates on our <Link style={{textDecoration:"None"}} to=" " >blog</Link> or see what the media is <Link style={{textDecoration:"None"}} to=" " > saying about us </Link> or learn more about our business and product <Link style={{textDecoration:"None"}} to=" " >philosophies</Link>.</p>
                    </div>
            </div>

            </div>
        
     );
}

export default Hero;