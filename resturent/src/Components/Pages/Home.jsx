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

import Bella from './Photo2/bella.png';
import Shucker from './Photo2/shucker.png';
import Ramen from './Photo2/ramen.png';
import Bottega from './Photo2/bottega.png';
import Arabia from './Photo2/arabia.png';
import Lokma from './Photo2/lokma.png';
import Snug from './Photo2/snug.png';
import Starbelly from './Photo2/starbelly.png';
import Iori from './Photo2/iori.png';
import Ngalley from './Photo2/ngalley.png';
import Diagonal from './Photo2/diogonal.png';
import Kitoko from './Photo2/kitoko.png';

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

   const Cards = [
    {
      id: 1,
      image: Bella ,
    },
    {
      id: 2,
      image: Shucker ,
    },
    {
      id: 3,
      image: Ramen ,
    },
    {
      id: 4,
      image: Bottega ,
    },
    {
      id: 5,
      image: Arabia ,
    },
    {
      id: 6,
      image: Lokma ,
    },
    {
      id: 7,
      image: Snug ,
    },
    {
      id: 8,
      image: Starbelly ,
    },
    {
      id: 9,
      image: Iori ,
    },
    {
      id: 10,
      image: Ngalley ,
    },
    {
      id: 11,
      image: Diagonal ,
    },
    {
      id: 12,
      image: Kitoko ,
    }
   ];



  return (
    <>
      <div>
        <div className='flex flex-wrap items-center lg:gap-[115px] lg:px-16 lg:py-8 sm:px-16 px-4 py-4 gap-6'>
            <img src={All} alt="" className='sm:w-12 h-10 w-8 sm:h-20' />
            <img src={Restu} alt="" className='sm:w-20 h-10 w-8 sm:h-24 border-b border-b-[#1677BD] ' />
            <img src={Hotel} alt="" className='sm:w-16 h-10 w-8 sm:h-24' />
            <img src={Homser} alt="" className='sm:w-24 h-10 w-8 sm:h-24' />
            <img src={Shopp} alt="" className='sm:w-20 h-10 w-8 sm:h-24' />
            <img src={Loka} alt="" className='sm:w-20 h-10 w-8 sm:h-24' />
            <img src={Spa} alt="" className='sm:w-20 h-10 w-8 sm:h-24' />
            <img src={Park} alt="" className='sm:w-16 h-10 w-8 sm:h-24' />
            <img src={Musu} alt="" className='sm:w-20 h-10 w-8 sm:h-24' />
            <img src={Cwash} alt="" className='sm:w-20 h-10 w-8 sm:h-24' />
            <img src={Bars} alt="" className='sm:w-16 h-10 w-8 sm:h-24' />
            <img src={Gyms} alt="" className='sm:w-16 h-10 w-8 sm:h-24' />
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


      <div className='lg:mx-16 lg:pt-24 sm:pt-16 sm:mx-8 pt-8 mx-7'>
         <p className='sm:text-[45px] text-xl font-extrabold lg:py-6 sm:py-4 py-4'>The latest trends</p>
        <div className='flex flex-wrap lg:gap-8 sm:gap-4 gap-10'>
          {Cards.map((card) => (
            <div key={card.id}>
              <img src={card.image} alt="" className='lg:w-[538px] sm:w-[215px] w-[360px] transition ease-in-out hover:-translate-y-1 hover:scale-110' />
            </div>

          ))}
        </div>
      </div>


       <div className='flex flex-col items-center pb-20 mx-16'>
        <h2 className=' pt-12 pb-4 text-4xl text-[#1E1E1E]'>Discover more cool restaurants</h2>
        <h2 className='  text-white bg-[#1677BD] px-10 py-4 rounded-full hover:bg-slate-900 '>Show more</h2>
        </div>
      
    </>
  )
}

export default Home