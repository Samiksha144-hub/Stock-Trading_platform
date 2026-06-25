import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './landing_page/home/HomePage';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Signup from './landing_page/signup/Signup';
import Login from './landing_page/login/Login';
import PricingPage from './landing_page/pricing/PricingPage';
import ProductsPage from './landing_page/products/ProductsPage';
import AboutPage from './landing_page/about/AboutPage';
import SupportPage from './landing_page/support/SupportPage';
import Footer from './landing_page/Footer';
import Navbar from './landing_page/Navbar';
import NotFound from './landing_page/NotFound';
import Logout from './landing_page/logout/Logout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
     <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/logout" element={<Logout />} />
      <Route path="/pricing" element={<PricingPage/>}/>
      <Route path="/products" element={<ProductsPage/>}/>
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="*" element={<NotFound />} />
      <Route path='/support' element={<SupportPage/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
);

// <Route path="/" element={<Login />} />   {/* Login page */}
// <Route path="/dashboard" element={<h1>Dashboard</h1>} />
