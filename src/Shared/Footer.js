import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div  class="w-full  lg:mx-0 my-full" >
        <footer class="footer footer-center p-10 text-base-content rounded my-5 ">
  <div class="grid grid-flow-col gap-4">
    <Link  to='/about' class="link link-hover">About</Link> 
    <Link to='/package' class="link link-hover">Package</Link> 
  
    {/* <a class="link link-hover">Press kit</a> */}
  </div> 
  <div className='flex'>
    <div class="grid grid-flow-col gap-4 ">
    
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
 </svg><span>Email: beriyepori.bd@gmail.com</span>
 <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
</svg><span>Phone: +880 1521-226926</span>
    </div>
  </div> 
  <div>
    <p>Copyright © 2022 - All right reserved by Beriye Pori</p>
  </div>
</footer>
        </div>
    );
};

export default Footer;