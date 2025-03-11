import React from 'react';

function Card({ card }) {
  return (
    <div className='w-[273px] shrink-0 grow mb-3'>
      <div className=' group h-[182px] rounded-[15px] overflow-hidden relative'>
        <img className='group-hover:scale-110 object-cover h-full w-full' src={`/images/${card.image}`} alt={card.name} />
        <div className='absolute bottom-0 left-0 w-full h-full image-overlay flex items-end p-2 text-white text-[20px] font-bold tracking-tighter'>
          {card.name} - {card.offer}
        </div>
      </div>

      {/* Title & Rating Section */}
      <div className='mt-3 text-left'>
        <div className='text-xl font-bold'>{card.title}</div>
        <div className='flex items-center gap-1 text-sm font-semibold mt-1'>
          <Star className="w-5 h-5" />
          {card.rating}
          <span className='ml-2'>{card.minTime}-{card.maxTime} min</span>
        </div>
        <div className='text-sate-700'>
        {card.name}
        <br />
        {card.place}
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Card;

const Star = () => {
  return (
    <svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    aria-hidden="true"
    strokecolor="rgba(2, 6, 12, 0.92)"
    fillcolor="rgba(2, 6, 12, 0.92)"
  >
    <circle
      cx={10}
      cy={10}
      r={9}
      fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"
    />
    <path
      d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z"
      fill="white"
    />
    <defs>
      <linearGradient
        id="StoreRating20_svg__paint0_linear_32982_71567"
        x1={10}
        y1={1}
        x2={10}
        y2={19}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#21973B" />
        <stop offset={1} stopColor="#128540" />
      </linearGradient>
    </defs>
  </svg>
  
  );
};

