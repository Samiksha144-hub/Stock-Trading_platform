import React from 'react';
function Awards() {
    return ( 
        <div className='Container mt-5 '> 
        <div className='row '>
            <div className='col-6'>
                <img src="/assets/largestBroker.svg" alt="Awards"/>
            </div>
        
            <div className='col-6 p-5'>
                <h2>Largest stock broker in India</h2>
                <p>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                <div className='row mt-5'>
                    <div className='col-6 '>
                        <ul>
                            <li>
                                <p>Future and Options</p>
                            </li>
                            <li>
                                <p>Commidity Derivatives</p>
                            </li>
                            <li>
                                <p>Currency Derivatives</p>
                            </li>
                        </ul>
                    </div>
                    <div className='col-6'>
                       <ul>
                            <li>
                                <p>Stocks and IPOs</p>
                            </li>
                            <li>
                                <p>Direct mutual funds</p>
                            </li>
                            <li>
                                <p>Bonds and Govt. Securities</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <img src="/assets/pressLogos.png" alt="awards" style={{width:"80%"}}/>
            </div>
        </div>
        </div>
     );
}

export default Awards;