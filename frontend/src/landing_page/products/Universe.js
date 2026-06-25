import React from 'react';
        
function Universe() {
    return ( 
        <div className='container mt-2'>
        <div className='row text-center'>
          <div className="p-5 ">
          <h1 className='mt-3'>The Zerodha Universe</h1>
          <p>Extend your trading and investment experience even further with our partner platforms</p>
        
          </div>

        <div className='col-4 p-3 mb-4'>
            <img src="/assets/smallcaseLogo.png" className='img-fluid w-50 ' alt=""/>
            <p className='text-muted text-small'>Thematic investment platform</p>
          </div>
          <div className='col-4 p-2 mb-4'>
            <img src="/assets/streakLogo.png" className="img-fluid w-50 "alt=""/>
            <p className='text-small text-muted' ></p>Algo & strategy platform

          </div>
          <div className='col-4 p-3'>
            <img src="/assets/sensibullLogo.svg" className="img-fluid w-50" alt=""/>
            <p className='text-muted text-muted'>Options trading platform</p>
          </div>
          <div className='col-4 p-3'>
            <img src="/assets/ZerodhaFundhouse.png" className="img-fluid w-50" alt=""/>
            <p className='text-muted text-muted' >Asset management</p>
          </div>
          <div className='col-4 p-3'>
            <img src="/assets/goldenpiLogo.png" className="img-fluid w-50" alt=""/>
            <p className='text-muted text-muted'>Bonds trading platform</p>
          </div>
          <div className='col-4 p-3'>
            <img src="/assets/dittoLogo.png" className="img-fluid w-50" alt=""/>
            <p className='text-muted text-muted' ></p>
          </div><button className='p-2 btn btn-primary fs-5  mt-3' style={{width:"20%" , margin:"0 auto"}}>Signup now</button>
          <div></div>
       </div>
       </div>
     );
}

export default Universe;
