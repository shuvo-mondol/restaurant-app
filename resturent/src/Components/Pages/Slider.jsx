import React, { useState } from "react";



const testimonials = [
  {
    text: "Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    name: "John Doe",
    position: "Chief Strategy Officer @ Company",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac libero vel est tempor aliquet.",
    name: "Jane Smith",
    position: "CEO @ Startup",
  },
  {
    text: "Ut vulputate libero et velit interdum, ac aliquet odio mattis. Praesent feugiat nisl ut lacus bibendum.",
    name: "Emily Johnson",
    position: "Marketing Head @ Agency",
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      
      <div className="flex flex-col items-center justify-center text-white p-8 rounded-lg lg:mx-48 md:mx-32 lg:px-52 md:gap-10 relative">
      {/* Arrows */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#96ACAF]/25 text-teal-700 w-10 h-10 flex items-center justify-center rounded-full shadow hover:bg-gray-200"
        onClick={prevSlide}
      >
        &#8249;
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#96ACAF]/25 text-teal-700 w-10 h-10 flex items-center justify-center rounded-full shadow hover:bg-gray-200"
        onClick={nextSlide}
      >
        &#8250;
      </button>

      {/* Testimonial */}
      <div className="text-center lg:space-y-8">
        <p className="text-lg italic lg:text-4xl">{testimonials[currentIndex].text}</p>
        <h4 className="text-xl font-semibold mt-4 text-[#0FF1F6]">
          {testimonials[currentIndex].name}
        </h4>
        <p className="text-sm text-white">
          {testimonials[currentIndex].position}
        </p>
      </div>

      {/* Dots */}
      <div className="flex mt-4 space-x-2">
        {testimonials.map((_, index) => (
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
    </>
  );
};

export default TestimonialSlider;
