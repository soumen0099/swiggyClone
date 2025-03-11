import React, { useEffect, useRef, useState } from 'react'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa6';
import Card from './Card';

function OnlineDelivery() {
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

  return (
    <div className='max-w-[1200px] mx-auto w-full'>
      <div className='flex my-3 items-center justify-between'>
        <div className='text-[25px] font-bold'>Restaurant with online food Delivery in Contai</div>
        <div className='flex'>
        </div>
      </div>


      <div ref={scrollRef} className='flex gap-3 grid grid-cols-4 '>
        {data.length > 0 ? (
          data.map((restaurant) => (
            <div key={restaurant.id} className='min-w-[273px]'>
              <Card card={restaurant} />
            </div>
          ))
        ) : (
          <p className="text-gray-500">Loading restaurants...</p>
        )}
      </div>
    </div>
  );
}
export default OnlineDelivery

