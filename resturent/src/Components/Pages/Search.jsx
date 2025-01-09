import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sort from './Photo2/sort.png';
import Fours from './Photo3/fours.png';
import Fives from './Photo3/fives.png';
import Sixs from './Photo3/sixs.png';
import Sevens from './Photo3/sevens.png';
import Eights from './Photo3/eights.png';
import Nines from './Photo3/nines.png';
import Tens from './Photo3/tens.png';
import Map from './Photo3/map.png'



function DropdownButton() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    console.log("Selected:", option);
    setIsOpen(false); // Close dropdown after selection
  };

  const Card = [
    {
        id:1,
        image: Fours,
    },
    {
        id:2,
        image: Fives,
    },
    {
        id:3,
        image: Sixs,
    },
    {
        id:4,
        image: Sevens,
    },
    {
        id:5,
        image: Eights,
    },
    {
        id:6,
        image: Nines,
    },
    {
        id:7,
        image: Tens,
    },
  ]

  return (
    <>
    <div className="grid grid-cols-2 ">

     <div className="lg:ps-16 sm:ps-10 ps-5">

        <div>
            <h3 className="sm:text-2xl text-xs pt-6">Home / All restaurants</h3>
            <div className="flex items-center sm:gap-8 sm:py-8 sm:pe-2 pe-1">
                <h2 className="lg:text-6xl sm:text-2xl font-bold text-sm">best restaurants in singapore</h2>
            <div style={{ position: "relative", display: "inline-block" }} className="lg:pt-7 ">
           <button onClick={toggleDropdown}><img src={Sort} alt="" /></button>
          {isOpen && (
         <ul
          style={{
            position: "absolute",
            listStyle: "none",
            padding: "10px",
            margin: 0,
            backgroundColor: "#0000000F",
            border: "1px solid #ccc",
            borderRadius: "4px",
            zIndex: 1,
          }}
          className="lg:w-[150px]"
         >
          {["All feedbacks", "Highest rated", "oldest rated"].map((option, index) => (
            <li
              key={index}
              style={{
                padding: "8px",
                cursor: "pointer",
                
              }}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
          </ul>
         )}
         </div>
            </div>
         </div>


         <div className="flex flex-col ">
           {Card.map((cards) => (
            <div key={cards.id} className="border-b lg:py-14 sm:py-4 py-3 transition ease-in-out hover:-translate-y-1 hover:scale-110">
                <Link to='/next'>
                <img src={cards.image} alt="" className="lg:w-[900px] sm:w-[400px] w-[150px]" />
                </Link>
            </div>
           ))}
          </div>
        </div>

        <img src={Map} alt="" className="lg:w-[1190px]" />
    </div>
     <button className="lg:ms-16 ms-4 mt-4 sm:ms-8 sm:text-base text-xs sm:mt-4 sm:mb-20 bg-[#1677BD] py-4 px-10 rounded-full hover:bg-slate-700">Show More</button>
    
    </>
  );
}

export default DropdownButton;