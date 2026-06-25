import React from 'react';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';
import Hero from './Hero';

function ProductsPage () {
    return ( 
        <>
        <Hero/>
        <LeftSection
           imageURL="/assets/kite.png"
           productName="Kite"
           productDescription="Our ultra-fast flagship trading platform with streaming market data, advance charts, an elegant UI, and more. Enjoy the Kite experience seamiessly on your Android and iOS devices" 
           tryDemo="#"
           learnMore="#"
           googlePlay="#"
           appStore="#"
           Imagealt="#"/>

<RightSection imageURL="/assets/console.png"
         productName="Console" 
         productDescription="Ther central dashboard for your Zerodha account. Gain the insights into trades and investments with in-depth reports and visualization"
        learnMore=""/>

        <LeftSection
           imageURL="/assets/coin.png"
           productName="Coin"
           productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
           tryDemo="#"
           learnMore="#"
           googlePlay="#"
           appStore="#"
           Imagealt="#"/>

        <RightSection imageURL="/assets/kiteconnect.png"
         productName="Kite Connect API" 
         productDescription="Build powerfuul trading platforms and experience with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our classmate"
        learnMore=""/>

         <LeftSection
           imageURL="/assets/varsity.png"
           productName="Varsity mobile"
           productDescription="An easy grasp, collection of stock market lessons with in-depth coverage and illustration. Content is broken down into bite-size cards to help you learn on the go." 
           tryDemo="#"
           learnMore="#"
           googlePlay="#"
           appStore="#" 
           Imagealt="#"/>
            <p className='text-center'>Want to know more about our technology stack? Ckeck put the Zerodha tech blog</p>
        <Universe/>
        </>
    );
}

export default ProductsPage;