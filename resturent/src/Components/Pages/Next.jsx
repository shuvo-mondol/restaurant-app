import React, { useState } from 'react'

import Star from './Photo3/star.png';
import llll from './Photo3/llll.png';
import Time from './Photo3/time.png'; 



function Next() {
  return (
    <>
    <div className='z-40 pb-[100px] lg:bg-custom md:bg-customTow bg-customThree ' style={{backgroundImage:"url('/images/logo.png ')", backgroundRepeat:"no-repeat",  }}>
    <div className='py-4 font-bold lg:ps-36 text-xl sm:ps-20 ps-12'>Home / BellaItalia</div>
     <div style={{backgroundImage:"url('/images/banner28.png')", backgroundRepeat:"no-repeat", backgroundSize:"cover", position:"relative", zIndex:"-1" 
        
      }}
      className='lg:ps-16 sm:ps-10 ps-4 lg:pt-24 sm:pt-16 pt-10'
     >
        <img src={Star} alt="" className='lg:w-[690px] sm:w-[500px] w-[300px]' />
        <div className='flex gap-3 lg:text-base items-center lg:pt-16 sm:pt-12 pt-8'>
            <img src={llll} alt="" className='lg:w-5 lg:h-7 sm:h-5 h-3' />
            <h2 className='text-[#FFFFFF] lg:text-[26px] sm:text-[17px] text-[11px]'> Singapour, Bishan-Ang Mo Kio Park </h2>
        </div>
        <img src={Time} alt="" className='lg:w-[240px] lg:pb-28 lg:pt-6 sm:w-[160px] sm:pb-20 sm:pt-5 w-28 pb-14 pt-3 '  />
     </div>
        
     </div>


     <div>
        
     </div>


     
    
    
    </>
  )
}

export default Next