import React from 'react';
import { Link } from 'react-router-dom';

function LeftSection({imageURL ,
  productName ,
  productDescription ,
  tryDemo ,
  learnMore ,
  googlePlay ,
  appStore,
  Imagealt,
}) {
    return (
       <div className='container mt-5'>
        <div className='row align-items-center'>
          <div className='col-6 p-2'>
            <img src={imageURL} alt={Imagealt}/>
          </div>
          <div className="col-6 p-5">
            <h1>{productName}</h1>
            <p>{productDescription}</p>
            <Link style={{textDecoration:"None"}} to={tryDemo} >try Demo<i class="fa-solid fa-arrow-right-long"aria-hidden="true"></i></Link>
            <Link to={learnMore} style={{marginLeft:"21%" , textDecoration:"None"}}>Learn More <i className="fa-solid fa-arrow-right-long"aria-hidden="true"></i></Link><br></br>
            <Link className='mt-5' to={googlePlay} ><img src="assets/googlePlayBadge.svg" alt={Imagealt} /></Link>
            <Link to={appStore}><img src="assets/appstoreBadge.svg" alt={Imagealt} style={{marginLeft:"40px"}}/></Link>
          </div>
        </div>
       </div>
      );
}

export default LeftSection;
