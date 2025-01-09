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

import Sshort1 from './Photo3/sshort1.png';

import Sort from './Photo2/sort.png';
import Filter1 from './Photo3/filter1.png';
import Rating1 from './Photo3/rating1.png';



import Onone from './Photo4/147.png';
import Ontow from './Photo4/148.png';
import Onthree from './Photo4/149.png';
import Onfour from './Photo4/150.png';
import Onfive from './Photo4/151.png';
import Onsix from './Photo4/152.png';
import Onseven from './Photo4/153.png';
import Oneight from './Photo4/154.png';
import Onnine from './Photo4/155.png';


import Ssss from './Photo4/93.png';
import Saaa from './Photo4/94.png';
import Sbbb from './Photo4/95.png';



function Next() {

  const [isOpen, setIsOpen] = useState(false);
  
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };

    const Cards = [
      {
        id:1,
        image: Onone,
      },
      {
        id:2,
        image: Ontow,
      },
      {
        id:3,
        image: Onthree,
      },
      {
        id:4,
        image: Onfour,
      },
      {
        id:5,
        image: Onfive,
      },
      {
        id:6,
        image: Onsix,
      },
      {
        id:7,
        image: Onseven,
      },
      {
        id:8,
        image: Oneight,
      },
      {
        id:9,
        image: Onnine,
      }
    ];


    const Photo = [
      {
        id:1,
        image: Ssss,
      },
      {
        id:2,
        image: Saaa,
      },
      {
        id:3,
        image: Sbbb,
      }
    ];


    const currentYear = new Date().getFullYear();
    
  
   
  
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



     <div className='lg:ms-[200px] lg:pt-16 sm:pt-12 pt-8 '>
      <img src={Sshort1} alt="" className='lg:w-[1950px] w-[412px] sm:w-[960px]' />
     </div>




     <div className='lg:ms-[300px] sm:ms-20 pt-4 ms-10 '>
      <div className='flex gap-4'>
          <div>
          <img src={Filter1} alt="" className='h-10' onClick={toggleDropdown} />
          {isOpen && (
            <div className='border rounded-lg px-4 pb-2'>
              <div className='flex gap-12 py-3'>
                <p>filter by rating</p>
                <p className='bg-slate-400 px-1 h-6 cursor-pointer rounded-full' onClick={toggleDropdown}>X</p>
              </div>
              <img src={Rating1} onClick={toggleDropdown} alt="" className='h-28' />
            </div>
          )}
          </div>
          <div>
          <img src={Sort} alt="" className='h-10' onClick={toggleDropdown} />
          {isOpen && (
            <div className='flex gap-10 border rounded-lg p-3'>
              <div className='flex flex-col gap-1 pt-6 pb-3'>
                <p className='text-[#2146C7] bg-[#B0C2FF21] px-1 rounded-xl cursor-pointer' onClick={toggleDropdown}>All feedbacks</p>
                <p onClick={toggleDropdown} className='cursor-pointer'>Height rated</p>
                <p onClick={toggleDropdown} className='cursor-pointer'>Oldest rated</p>
              </div>
              <p onClick={toggleDropdown} className='bg-slate-300 h-6 px-2 rounded-full cursor-pointer '>X</p>
            </div>
          )}
          </div>
      </div>
     </div>


            <div className='lg:ms-[300px]  flex flex-col lg:gap-2 sm:gap-2 sm:ms-16 ms-10 gap-1'>
              {Cards.map((card) => (
                <div key={card.id} className=''>
                  <img src={card.image} alt="" className='lg:w-[1400px] sm:w-[800px] w-[300px] ' />
                </div>
              ))}
            </div>
            <button className='bg-[#1677BD] px-12 hover:bg-slate-600 text-white lg:mx-[1070px] lg:my-16 sm:mx-[360px] sm:my-12 mx-24 my-4 py-3 rounded-full sm:text-base text-xs'>Show more reviews</button>

      <div className='lg:ps-[300px] sm:ps-16 sm:pb-16 pb-6 ps-8 border-b'>
        <h2 className='font-bold sm:text-4xl pb-3 sm:pb-8'>Also discover...</h2>

        <div className='flex lg:gap-12 sm:gap-7 gap-3'>
              {Photo.map((photos) => (
                <div key={photos.id}>
                  <img src={photos.image} alt="" className='lg:w-[550px] sm:w-[240px] w-[100px] transition ease-in-out  hover:-translate-y-1 hover:scale-110' />
                </div>
              ))}
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
          <select type="text" id="lang" name="lang" autoComplete='given-name' >
            <option value="english">English</option>
            <option value="spanish">Spanish</option>
            <option value="hindi">Hindi</option>
            <option value="bangla">Bangla</option>
          </select>
          </div>

          <div className='flex flex-col'>
          <label htmlFor="country" className='font-bold sm:text-xl text-sm'>Countries</label>
          <select id="country" type="text" name="country" autoComplete='given-name' >
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

export default Next