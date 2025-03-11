// import React, { useEffect, useState, useRef } from 'react';
// import { FaArrowRight, FaArrowLeft } from 'react-icons/fa6';
// import Card from './Card';

// function TopRest() {
//   const [data, setData] = useState([]);
//   const scrollRef = useRef(null);

//   const fetchTopRestaurant = async () => {
//     try {
//       const response = await fetch('http://localhost:3000/resturent');
//       if (!response.ok) {
//         throw new Error('Failed to fetch restaurants');
//       }
//       const result = await response.json();
//       setData(result);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     fetchTopRestaurant();
//   }, []);

//   const handleScrollLeft = () => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
//     }
//   };

//   const handleScrollRight = () => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
//     }
//   };

//   return (
//     <div className='max-w-[1200px] mx-auto w-full'>
//       <div className='flex my-3 items-center justify-between'>
//         <div className='text-[25px] font-bold'>Top Restaurant Chains in Contai</div>
//         <div className='flex'>
//           <button
//             className='flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2'
//             onClick={handleScrollLeft}
//           >
//             <FaArrowLeft />
//           </button>
//           <button
//             className='flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2'
//             onClick={handleScrollRight}
//           >
//             <FaArrowRight />
//           </button>
//         </div>
//       </div>


//       <div ref={scrollRef} className='flex gap-4 overflow-x-auto w-full no-scrollbar'>
//         {data.length > 0 ? (
//           data.map((restaurant) => (
//             <div key={restaurant.id} className='min-w-[273px]'>
//               <Card card={restaurant} />
//             </div>
//           ))
//         ) : (
//           <p className="text-gray-500">Loading restaurants...</p>
//         )}
//       </div>
//       <hr className="my-6 border border-[#e2e2e7]" />
//     </div>
//   );
// }

// export default TopRest;


import React, { useEffect, useState, useRef } from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa6';
import Card from './Card';

function TopRest() {
  const [data, setData] = useState([]);
  const scrollRef = useRef(null);

  const fetchTopRestaurant = async () => {
    try {
      const response = await fetch('http://localhost:3000/resturent');
      if (!response.ok) {
        throw new Error('Failed to fetch restaurants');
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTopRestaurant();
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
        <h2 className='text-[20px] md:text-[25px] font-bold'>Top Restaurant Chains in Contai</h2>
      </div>

      {/* Left Button (Mobile + Desktop) */}
      <button 
        className='absolute top-1/2 left-0 transform -translate-y-1/2 w-[30px] h-[30px] md:w-[35px] md:h-[35px] bg-gray-300 rounded-full flex items-center justify-center hover:bg-gray-400 z-10'
        onClick={handleScrollLeft}
      >
        <FaArrowLeft />
      </button>

      {/* Restaurant List with no scrollbar */}
      <div ref={scrollRef} className='flex gap-4 overflow-x-auto w-full no-scrollbar scroll-smooth'>
        {data.length > 0 ? (
          data.map((restaurant) => (
            <div key={restaurant.id} className='min-w-[200px] md:min-w-[273px]'>
              <Card card={restaurant} />
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center w-full py-4">Loading restaurants...</p>
        )}
      </div>

      {/* Right Button (Mobile + Desktop) */}
      <button 
        className='absolute top-1/2 right-0 transform -translate-y-1/2 w-[30px] h-[30px] md:w-[35px] md:h-[35px] bg-gray-300 rounded-full flex items-center justify-center hover:bg-gray-400 z-10'
        onClick={handleScrollRight}
      >
        <FaArrowRight />
      </button>
    </div>
  );
}

export default TopRest;
