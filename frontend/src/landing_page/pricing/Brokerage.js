import React from 'react';

function Brokerage() {
    return ( 
        <div className='container'>
            <div className='row'>`
                <div className='border-bottom'></div>
            <div className='col-9'>
            <a href=" " style={{textDecoration:"none"}}>
                <h2 style={{color:"blue"}}>Brokerage calculator</h2>
                </a>
                <ul style={{lineHeight:"1.8rem"}} className='fs-6'>
                    <li>Call & trade and RMS auto-squareoff; Additional charges of ₹50 + GST per order.</li>
                    <li>Digital contract notes will be sent via e-mail.</li>
                    <li>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</li>
                    <li>For NRI account(non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
                    <li>For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                    <li>If the account is in debit balance , any order placed will be charged ₹40 per executed order insted of ₹20 per exeecuted order.</li>
                </ul>
            </div>
            <div className='col-3'>
            <a href=" " style={{textDecoration:"none"}}>
                <h2 style={{color:"blue"}}>List of charges</h2>
            </a>
            </div>
        </div>
        </div>
     );
}

export default Brokerage;