import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Feed from './Photos/feedback.png';
import Search from './Photos/search2.png';
import World from './Photos/world.png';


function Navbar() {
  return (
    <>
     <div className='flex items-center justify-between lg:px-16 lg:py-4 border-b sm:px-10 sm:py-3 px-4 py-4'>
        <img src={Feed} alt="" className='lg:w-44 sm:w-32 w-16' />
        <div className='flex items-center border ps-2 rounded-full sm:gap-12 gap-4 lg:gap-24'>
            <input type="text" id='#' placeholder='restaurant, hotel, service....' className='sm:text-base text-[6px]' />
            <Link to="/search">
              <img src={Search} alt="" className='lg:w-10 sm:w-8 w-4' />
            </Link>
        </div>

         <div className='flex items-center lg:gap-8 sm:gap-4 gap-1'>
            <img src={World} alt="" className='lg:w-8 sm:w-4 w-3' />
            <button className='text-[#FFFFFF] bg-[#1E1E1E] text-[6px] px-2 py-0.5 sm:text-[12px] hover:text-yellow-100 sm:px-4 sm:py-1 lg:text-[15.5px] rounded-full lg:px-6 hover:bg-slate-700 lg:py-2'>MyFeedback for business</button>
         </div>

     </div>
    
    </>
  )
}

export default Navbar