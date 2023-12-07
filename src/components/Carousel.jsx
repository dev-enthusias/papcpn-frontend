// import { useEffect, useState } from 'react';
// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

// export default function Carousel({
//   children: slides,
//   autoSlide = false,
//   autoSlideInterval = 3000,
// }) {
//   const [activeSlide, setActiveSlide] = useState(0);

//   const nextSlide = () => {
//     setActiveSlide(activeSlide =>
//       activeSlide === slides.length - 1 ? 0 : activeSlide + 1
//     );
//   };

//   const prevSlide = () => {
//     setActiveSlide(activeSlide =>
//       activeSlide === 0 ? slides.length - 1 : activeSlide - 1
//     );
//   };

//   useEffect(() => {
//     if (!autoSlide) return;
//     const slideInterval = setInterval(next, autoSlideInterval);
//     return () => clearInterval(slideInterval);
//   }, []);

//   return (
//     <div className='overflow-hidden relative'>
//       <div className='flex items-center'>{slides}</div>
//       <div
//         className='absolute inset-0 flex justify-between items-center transition-transform ease-out duration-500'
//         style={{ transform: `traslateX(-${activeSlide * 100}%)` }}
//       >
//         <button onClick={prevSlide}>
//           <FaChevronLeft
//             size={30}
//             className='p-1 rounded-full bg-white/80 hover:bg-white text-blue-900'
//           />
//         </button>
//         <button onClick={nextSlide}>
//           <FaChevronRight
//             size={30}
//             className='p-1 rounded-full bg-white/80 hover:bg-white text-blue-900'
//           />
//         </button>
//       </div>

//       <div className='absolute bottom-4 right-0 left-0'>
//         <div className='flex items-center justify-center gap-2'>
//           {slides.map((_, i) => (
//             <div
//               className={`
//               transition-all w-3 h-3 bg-green-500 rounded-full
//               ${activeSlide === i ? 'p-2' : 'bg-opacity-50'}
//             `}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

export default function Carousel({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}) {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr(curr => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr(curr => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);
  return (
    <div className='overflow-hidden relative'>
      <div
        className='flex transition-transform ease-out duration-500 w-[22rem] h-[23rem]'
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </div>
      <div className='absolute inset-0 flex items-center justify-between p-4'>
        <button
          onClick={prev}
          className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'
        >
          <FaChevronLeft size={25} className='text-green-800' />
        </button>
        <button
          onClick={next}
          className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'
        >
          <FaChevronRight size={25} className='text-green-800' />
        </button>
      </div>

      <div className='absolute bottom-0 right-0 left-0'>
        <div className='flex items-center justify-center gap-2'>
          {slides.map((_, i) => (
            <div
              key={i}
              className={`
              transition-all w-3 h-3 bg-green-800 rounded-full
              ${curr === i ? 'p-2' : 'bg-opacity-50'}
            `}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
