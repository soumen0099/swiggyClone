// import React, { useEffect, useState } from 'react'
// import { FaArrowRight,FaArrowLeft } from "react-icons/fa6";

// function Category() {
//   const [categories,setCategories] = useState([])
//   const [slide,setSlide] = useState(0)
//   const fetchCategory = async () =>{
//     const response = await fetch('http://localhost:3000/category');
//     if (!response.ok) {
//       throw new Error("Failed to fetch categories");
//     }
//     const data = await response.json()
//     setCategories(data)
//     // console.log(data);
//   }
//   useEffect(
//     ()=>{
//       fetchCategory();
//   },[]
// )
//   const handleLeft = (()=>{
//     if(slide == 0) return false;
//     setSlide(slide - 3)
//   })
//   const handleRight = (()=>{
//     if(categories.length - 8 == slide) return false ;
//     setSlide(slide + 3)
//   })

//   return (
//     <div className='max-w-[1200px] mx-auto'>
//       <div className='flex my-3 items-center justify-between'>
//         <div className='text-[25px] font-bold'>
//           What's on your mind ?
//         </div>
//           <div className='flex'>
//           <div className='flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full flex ml-auto mx-2' onClick={handleLeft}><FaArrowLeft/></div>
//           <div className='flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full flex ml-auto mx-2' onClick={handleRight}><FaArrowRight/></div>
//           </div>
//       </div>
//       <div className='flex overflow-hidden'>
//         {
//           categories.map(
//             (cat)=>{
//               return(
//                 <div style={{
//                   transform: `translateX(-${slide*100}%)`
//                 }} key={cat.path} className='shrink-0 w-[150px] duration-500'>
//                   <img src={`/images/${cat.image}`} alt={cat.path} />
//                 </div>
                
//               )
//             })
//         }
//       </div>
//       <hr className="my-6 border border-[#e2e2e7]" />

//     </div>
//   )
// }
// export default Category

import React, { useEffect, useState, useRef } from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa6';

function Category() {
  const [categories, setCategories] = useState([]);
  const scrollRef = useRef(null);

  const fetchCategory = async () => {
    try {
      const response = await fetch('http://localhost:3000/category');
      if (!response.ok) {
        throw new Error('Failed to fetch categories');
      }
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  const handleScrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const handleScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className='relative max-w-[1200px] mx-auto px-4'>
      <div className='flex items-center justify-between my-4'>
        <h2 className='text-[20px] md:text-[25px] font-bold'>What's on your mind?</h2>
      </div>

      {/* Left Button */}
      <button
        className='absolute top-1/2 left-0 transform -translate-y-1/2 w-[30px] h-[30px] md:w-[35px] md:h-[35px] bg-gray-300 rounded-full flex items-center justify-center hover:bg-gray-400 z-10'
        onClick={handleScrollLeft}
      >
        <FaArrowLeft />
      </button>

      {/* Category List with No Scrollbar */}
      <div ref={scrollRef} className='flex gap-4 overflow-x-auto w-full no-scrollbar scroll-smooth'>
        {categories.map((cat) => (
          <div key={cat.path} className='min-w-[120px] md:min-w-[150px]'>
            <img src={`/images/${cat.image}`} alt={cat.path} className='w-full rounded-lg' />
          </div>
        ))}
      </div>

      {/* Right Button */}
      <button
        className='absolute top-1/2 right-0 transform -translate-y-1/2 w-[30px] h-[30px] md:w-[35px] md:h-[35px] bg-gray-300 rounded-full flex items-center justify-center hover:bg-gray-400 z-10'
        onClick={handleScrollRight}
      >
        <FaArrowRight />
      </button>
    </div>
  );
}

export default Category;
