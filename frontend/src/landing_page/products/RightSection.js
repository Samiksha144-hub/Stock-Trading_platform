import React from 'react';
import { Link } from 'react-router-dom';

function RightSection({imageURL, productDescription, productName , learnMore, 
}) {
    return ( 
        <div className='container mt-5'>
        <div className='row align-items-center'>
          <div className="col-6">
            <h1>{productName}</h1>
            <p>{productDescription}</p>
            <Link href={learnMore} style={{marginLeft:"21%"}}>Learn More</Link>
            <br></br>
          </div>

        <div className='col-6 '>
            <img src={imageURL} alt="rightSection"/>
          </div>
       </div>
       </div>
     );
}

export default RightSection;