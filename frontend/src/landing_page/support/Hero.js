import React from 'react';
import { Link } from "react-router-dom";

function Hero() {
    return ( 
       <section className='Container-fluid' id="supportHero"> 
       <div className='row p-5 mx-3' id="supportwrapper">
        <h3>Support Portal</h3>
        <Link style={{color:"white"}} >Track Tickets</Link>
       </div>
       <div className='row p-5 m-3'>
        <div className='col-6 p-3'>
            <h1 className='fs-3'>Search for an answer or browse help topics to create a ticket</h1>
            <input placeholder='Eg. how do I activate F&O '/><br/>
            <Link to=" ">Track Account Opening</Link>
            <Link to=" ">Track Segment Activation</Link>
            <Link to=" ">Intraday margins</Link>
            <Link to=" ">Kite user manual</Link>
            
       </div>
       <div className='col-6 p-3'>
        <h1 className='fs-3'>Featured</h1>
        <ol type="1" >
        <li >
       <Link to=" "style={{color:"white"}} >Current Takeovers and delisting - January 2024</Link><br/>
       </li>
       <li>
       <Link to=" "style={{color:"white"}}>Latest Intraday - MIS & CO</Link>
       </li>
       </ol>
       </div>

       </div>
       </section>
     );
}

export default Hero;