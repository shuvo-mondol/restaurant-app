import React, { useState } from 'react'

import Star from './Photo3/star.png';
import llll from './Photo3/llll.png';
import Time from './Photo3/time.png'; 

import Button from './Photo3/button.png';
import Sone from './Photo3/sone.png';
import Stow from './Photo3/stow.png';
import Sthree from './Photo3/sthree.png';
import Sfour from './Photo3/sfour.png';
import Big from './Photo3/big.png';
import Screen from './Photo3/screen.png';
import Menu from './Photo3/menu.png';



function Next() {

  const [isOpen, setIsOpen] = useState(false);
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
   
  
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


     <div className='lg:ms-[250px] lg:pt-10 sm:ms-20 ms-10'>
        <h2 className='font-bold lg:text-5xl sm:text-2xl text-base'>Discover our magnificent place in photos</h2>
        <p className='text-[#5E5E5E] lg:text-xl sm:pt-6 sm:text-sm text-[10px] pt-3'>The lorem ipsum is, in printing, a series of meaningless words used temporarily to </p>
        <p className='text-[#5E5E5E] lg:text-xl sm:pb-10 pb-6 sm:text-sm text-[10px]'>calibrate a layout.The lorem ipsum is, in printing.</p>
     </div>
     <div className=''>
       <div className='flex lg:ms-[250px] ms-10 lg:gap-12 static gap-2 sm:gap-4 sm:ms-20'>
       <img src={Big} alt="" className='lg:w-[900px] sm:w-[400px] w-[170px]' />
       <div className='flex flex-col lg:gap-12 sm:gap-4 gap-2'>
       <img src={Sone} alt="" className='lg:w-[450px] sm:w-[180px] w-[75px]'/>
       <img src={Stow} alt="" className='lg:w-[450px] sm:w-[180px] w-[75px]'/>
       </div>
       <div className='flex flex-col lg:gap-12 sm:gap-4 gap-2'>
       <img src={Sthree} alt="" className='lg:w-[450px] sm:w-[180px] w-[75px]' />
       <img src={Sfour} alt="" className='lg:w-[450px] sm:w-[180px] w-[75px]' />
       </div>

        <div className='absolute lg:bottom-[-840px] lg:left-[300px] sm:bottom-[-160px] sm:left-[100px] bottom-[160px] left-[50px]'>
          <button onClick={toggleDropdown}>
          <img src={Button} alt="" className='lg:w-[300px] sm:w-[150px] w-[90px]' />
          </button>

          {isOpen && (
            <div className='lg:bottom-[100px] relative lg:left-[400px] bg-white sm:p-6 p-1.5 left-10 sm:bottom-[40px] sm:left-[170px]'
             style={{
              
              zIndex: 1,
             }}>

              
             <div className='flex gap-1'>


             <div>
             <img src={Screen} alt=""  className='lg:w-[1000px] sm:w-[300px] w-[200px]' />
              
             </div>
             <button onClick={toggleDropdown} className='sm:text-2xl font-bold bg-slate-600 top-0 sm:h-10 text-sm sm:px-3 px-1 h-5 rounded-full'>x</button>
             </div>
              

            </div>
          )}
        </div>


       </div>
     </div>
     <p>Shuvo</p>



     
    
    
    </>
  )
}

export default Next