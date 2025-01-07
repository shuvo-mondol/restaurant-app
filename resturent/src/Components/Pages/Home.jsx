import React, { useState } from 'react'
import All from './Photo1/all.png';
import Restu from './Photo1/restu.png';
import Hotel from './Photo1/hotel.png';
import Homser from './Photo1/homser.png';
import Shopp from './Photo1/shopp.png';
import Loka from './Photo1/locka.png';
import Spa from './Photo1/spa.png';
import Park from './Photo1/park.png';
import Musu from './Photo1/musu.png';
import Cwash from './Photo1/cwash.png';
import Bars from './Photo1/Bars.png';
import Gyms from './Photo1/gyms.png';

import One from './Photo1/one2.png';
import Tow from './Photo1/tow2.png';
import Three from './Photo1/three2.png';
import Four from './Photo1/four2.png';

function Home() {

  const images = [
    {
      imOne: One,
      imTow: Tow,
      imThree: Three,
      imFour: Four,
    },
    {
      imOne: Three,
      imTow: Four,
      imThree: One,
      imFour: Tow,
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    };
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    };
  return (
    <>
      <div>
        <div className='flex flex-wrap items-center lg:gap-[115px] lg:px-16 lg:py-8 sm:px-16 px-4 py-4 gap-6'>
            <img src={All} alt="" className='sm:w-20 h-10 w-8 sm:h-20' />
            <img src={Restu} alt="" className='sm:w-20 h-10 w-8 sm:h-24 ' />
            <img src={Hotel} alt="" className='sm:w-20 h-10 w-8 sm:h-24' />
            <img src={Homser} alt="" className='sm:w-20 h-10 w-8 sm:h-24' />
            <img src={Shopp} alt="" className='sm:w-20 h-10 w-8 sm:h-24' />
            <img src={Loka} alt="" className='sm:w-20 h-10 w-8 sm:h-24' />
            <img src={Spa} alt="" className='sm:w-20 h-10 w-8 sm:h-24' />
            <img src={Park} alt="" className='sm:w-20 h-10 w-8 sm:h-24' />
            <img src={Musu} alt="" className='sm:w-20 h-10 w-8 sm:h-24' />
            <img src={Cwash} alt="" className='sm:w-20 h-10 w-8 sm:h-24' />
            <img src={Bars} alt="" className='sm:w-20 h-10 w-8 sm:h-24' />
            <img src={Gyms} alt="" className='sm:w-20 h-10 w-8 sm:h-24' />
        </div>

        <div className='bg-[#1677BD] lg:mx-16 rounded-md sm:mt-12 sm:mx-10 mx-4 mt-2'>
          <p className='text-[#FFFFFF] lg:text-[32px] lg:ps-[70px] lg:py-6 sm:text-xl sm:ps-20 sm:py-4 text-xs ps-10 py-2'>Find the best restaurant ratings below</p>
        <div className="flex  items-center justify-center  relative ">
      {/* Arrows */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#96ACAF] text-teal-700 w-10 h-10 flex items-center justify-center rounded-full shadow hover:bg-gray-200 font-extrabold"
        onClick={prevSlide}
      >
        &#8249;
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#96ACAF] text-teal-700 w-10 h-10 flex items-center justify-center rounded-full shadow hover:bg-gray-200 font-extrabold"
        onClick={nextSlide}
      >
        &#8250;
      </button>

      {/* Testimonial */}
      <div className="flex  lg:gap-10 sm:gap-4 gap-1">
        <img src={images[currentIndex].imOne} alt="" className='lg:w-[500px] lg:h-[600px] sm:w-[200px] sm:h-[250px] h-[90px] w-[70px] transition ease-in-out hover:-translate-y-1 hover:scale-110'  />
        <img src={images[currentIndex].imTow} alt="" className='lg:w-[500px] lg:h-[600px] sm:w-[200px] sm:h-[250px] h-[90px] w-[70px] transition ease-in-out hover:-translate-y-1 hover:scale-110'/>
        <img src={images[currentIndex].imThree} alt="" className='lg:w-[500px] lg:h-[600px] sm:w-[200px] sm:h-[250px] h-[90px] w-[70px] transition ease-in-out hover:-translate-y-1 hover:scale-110'/>
        <img src={images[currentIndex].imFour} alt="" className='lg:w-[500px] lg:h-[600px] sm:w-[200px] sm:h-[250px] h-[90px] w-[70px] transition ease-in-out hover:-translate-y-1 hover:scale-110'/>
        
      </div>

      
    </div>

    {/* Dots */}
    <div className="flex  space-x-2 lg:mx-[1100px] sm:py-12 sm:mx-[480px] mx-[175px] py-4">
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === currentIndex ? "bg-teal-300" : "bg-white opacity-50"
            }`}
          ></span>
        ))}
      </div>
    </div>
        
      </div>
    </>
  )
}

export default Home