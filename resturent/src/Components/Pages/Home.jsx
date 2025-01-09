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

import Banner from './Photo2/banner.png';

import Leslie from './Photo2/leslie.png';
import Chris from './Photo2/chris.png';
import Jojo from './Photo2/jojo.png';
import Arrow from './Photo2/arrow3.png'


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


   const Slider = [
    {
      id:1,
      one: Leslie,
      tow: Chris,
      three:Jojo,
    }
        
   ];
   const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };


  const currentYear = new Date().getFullYear();



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


        <div className='flex sm:flex-row flex-col bg-[#F2F2F2] lg:px-[300px] justify-center items-center lg:gap-20 py-14 px-8 gap-12 sm:px-20' >
          <div className='flex flex-col items-center lg:gap-16 gap-6'>
            <h2 className='font-bold lg:text-5xl sm:text-2xl'>MyFeedback for Business has resources to help you plan, start, grow, and advertise your small business</h2>
            <p className='text-[#5E5E5E] lg:text-3xl sm:text-base'>The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.</p>
            <button className='bg-black text-white px-4 py-2 rounded-full hover:bg-slate-700'>Explore MyFeedback business</button>
          </div>
          <img src={Banner} alt="" className='lg:w-[1600px] sm:w-[400px] w-[320px] transition ease-in-out hover:-translate-y-1 hover:scale-110' />
        </div>


        <div className='sm:py-16 lg:px-16 sm:px-[43px] px-5 py-10'>
          <h2 className='font-bold sm:text-4xl sm:py-4'>Recents avtivities</h2>
        <div className='flex items-center'>
          {Slider.map((slide) => (
            <div key={slide.id} className='flex lg:gap-[100px] sm:gap-8 gap-3'>
              <img src={slide.one} alt="" className='lg:w-[700px] sm:w-[250px] w-[100px] transition ease-in-out hover:-translate-y-1 hover:scale-110' />
              <img src={slide.tow} alt="" className='lg:w-[700px] sm:w-[250px] w-[100px] transition ease-in-out hover:-translate-y-1 hover:scale-110' />
              <img src={slide.three} alt="" className='lg:w-[700px] sm:w-[250px] w-[100px] transition ease-in-out hover:-translate-y-1 hover:scale-110' />
            </div>
          ))};
          <img src={Arrow} alt="" className='sm:w-16 sm:h-20 w-10 h-12' />
          
        </div>
        </div>



        <div className='flex justify-between lg:px-[500px] py-14 sm:px-24 px-8 border-t'>
          <div>
            <h2 className='font-bold sm:text-xl text-sm'>About</h2>
            <h3 className='sm:text-base text-[8px] text-[#5E5E5E]'>About MyFeedback</h3>
            <h3 className='sm:text-base text-[8px] text-[#5E5E5E]'>Investor Relations</h3>
          </div>

          <div>
            <h2 className='font-bold sm:text-xl text-sm'>MyFeedback</h2>
            <h3 className='sm:text-base text-[8px] text-[#5E5E5E]'>MyFeedback for business</h3>
            <h3 className='sm:text-base text-[8px] text-[#5E5E5E]'>Collections</h3>
            <h3 className='sm:text-base text-[8px] text-[#5E5E5E]'>Events</h3>
            <h3 className='sm:text-base text-[8px] text-[#5E5E5E]'>MyFeedback blog</h3>
            <h3 className='sm:text-base text-[8px] text-[#5E5E5E]'>Support</h3>
            <h3 className='sm:text-base text-[8px] text-[#5E5E5E]'>Developers</h3>
          </div>

          <div>
          <div className='flex flex-col'>
          <label htmlFor="lang" className='font-bold sm:text-xl text-sm'>Languages</label>
          <select id="lang" name="lang" type="text" autoComplete='given-name'>
            <option value="english">English</option>
            <option value="spanish">Spanish</option>
            <option value="hindi">Hindi</option>
            <option value="bangla">Bangla</option>
          </select>
          </div>

          <div className='flex flex-col'>
          <label htmlFor="country" className='font-bold sm:text-xl text-sm'>Countries</label>
          <select id="country" name="country" type="text" autoComplete='given-name'>
            <option value="singapour">Singapour</option>
            <option value="italy">Italy</option>
            <option value="uae">UAE</option>
            <option value="hongkong">Hongkong</option>
          </select>
          </div>

          </div>

        </div>


        <footer className=" text-black pt-4 pb-12 text-center font-bold">
      <p>Copyright&copy; {currentYear}  myfeedback, designed by scott</p>
    </footer>
      
    </>
  )
}

export default Home