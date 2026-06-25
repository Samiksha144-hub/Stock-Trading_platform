import { Link } from "react-router-dom";
import React from 'react';
function Footer() {
    return ( 
        <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
             <div className='container border-top mt-5'>
            <div className='row mt-5'>
                <div className='col'>
                    <img src="/assets/logo.png" alt ="footer" style={{width:"50%"}}/>
                    <p>
                        &copy; 2010 - 2024, Not Zerodha Broking Ltd, All rights reserved.
                    </p>
                    <div className='text-muted'><i class="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-square-facebook"></i>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-linkedin"></i>
                    <i className="fa-brands fa-telegram"></i>
                    </div>
                </div>
                <div className='col' style={{ fontSize: "14px"}} >
                    <p>Company</p>
                    <Link to="/about" style={{ textDecoration: "none" }} className="text-muted d-block mt-3">About</Link>
<Link to="/products" style={{ textDecoration: "none" }} className="text-muted d-block mt-2">Products</Link>
<Link to="/pricing" style={{ textDecoration: "none" }} className="text-muted d-block mt-2">Pricing</Link>
<Link to="/referral" style={{ textDecoration: "none" }} className="text-muted d-block mt-2">Referral programme</Link>
<Link to="/careers" style={{ textDecoration: "none" }} className="text-muted d-block mt-2">Careers</Link>
<Link to="/zerodha-tech" style={{ textDecoration: "none" }} className="text-muted d-block mt-2">Zerodha.tech</Link>
<Link to="/press" style={{ textDecoration: "none" }} className="text-muted d-block mt-2">Press & media</Link>
<Link to="/csr" style={{ textDecoration: "none" }} className="text-muted d-block mt-2">Zerodha cares (CSR)</Link>
                </div>
                
                <div className='col' style={{ fontSize: "14px"}}>
                    <p>Support</p>
                    <Link to="/contact" style={{ textDecoration: "none" }} className="text-muted d-block mt-3">
  Contact
</Link>
<Link to="/support" style={{ textDecoration: "none" }} className="text-muted d-block mt-2">Support portal</Link>
<Link to="/blog" style={{ textDecoration: "none" }} className="text-muted d-block mt-2">
  Z-Connect blog
</Link>
<Link to="/charges" style={{ textDecoration: "none" }} className="text-muted d-block mt-2">
  List of charges
</Link>
<Link to="/downloads" style={{ textDecoration: "none" }} className="text-muted d-block mt-2">
  Downloads & resources
</Link>
                </div>
                <div className='col' >
                    <p>Account</p>
                    <Link to="/signup" style={{ textDecoration: "none" }} className="text-muted d-block mt-3">Open an Account</Link>
                    <Link to="/fund-transfer" style={{ textDecoration: "none" }} className="text-muted d-block mt-3">Fund transfer</Link>
<Link to="/challenge" style={{ textDecoration: "none" }} className="text-muted d-block mt-3">
  60 day challenge
</Link>
                       </div>
            </div>
            <div>
            <p className='mt-5 text-muted' style={{ fontSize: "14px"}} >
            Zerodha Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.:
            INZ000031633 CDSL: Depository services through Zerodha Securities
            Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading
            through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration
            no.: INZ000038238 Registered Address: Zerodha Broking Ltd.,
            #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
            J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any
            complaints pertaining to securities broking please write to
           <Link style={{textDecoration:"None"}} to=" " >complaints@zerodha.com</Link>, for DP related to <Link style={{textDecoration:"None"}} to=" " >dp@zerodha.com</Link>. Please
            ensure you carefully read the Risk Disclosure Document as prescribed
            by SEBI | ICF
          </p>

          <p className='text-muted' style={{ fontSize: "14px"}} >
            Procedure to file a complaint on <Link style={{textDecoration:"None"}} to=" " >SEBI SCORES:</Link> Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>

          <p className='text-muted' style={{ fontSize: "14px"}} >
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p className='text-muted' style={{ fontSize: "14px"}} >
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            create a ticket here.
          </p>
            </div>
          </div>
        </footer>
     );
}

export default Footer;