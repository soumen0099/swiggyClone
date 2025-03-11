// import React, { useState } from 'react'
// import { RxCaretDown } from "react-icons/rx";
// import { IoIosSearch } from "react-icons/io";
// import { RiDiscountPercentLine } from "react-icons/ri";
// import { LiaHandsHelpingSolid } from "react-icons/lia";
// import { IoIosContact } from "react-icons/io";
// import { FaOpencart } from "react-icons/fa";

// function Header() {
//   const[toggle,setToggle]=useState(false)
//   const links =[
//     {
//       icon:<IoIosSearch/>,
//       name:"Search"
//     },
//     {
//       icon:<RiDiscountPercentLine/>,
//       name:"Offers",
//       sup:"New"
//     },
//     {
//       icon:<LiaHandsHelpingSolid/>,
//       name:"Help"
//     },
//     {
//       icon:<IoIosContact />,
//       name:"Sign In"
//     },
//     {
//       icon:<FaOpencart />,
//       name:"Cart"
//     },
// ]
//   const showSideMenu = ()=>{
//     setToggle(true)
//   }
//    const hideSideMenu = () => {
//     setToggle(false)
//    }



//   return (
//     <>
//         <div className='black-overlay w-full h-full fixed duration-500'onClick={hideSideMenu} style={{
//           opacity: toggle ? 1: 0,
//           visibility:toggle ? "visible" : "hidden"
//         }}>
//           <div onClick={(e)=>{
//             e.stopPropagation()
//           }} className='w-[500px] bg-white h-full absolute  duration-[400ms]' 
//           style={{
//             left: toggle ? '0%':"-100%"
//           }}
//           ></div>
//         </div>
//       <header className='p-[15px] shadow-xl text-[#686b78] sticky top-0 bg-white z-[9999]'>
//         <div className='max-w-[1200px] mx-auto flex items-center'>
//           <div className='w-[100px] '>
//             <img src="./src/assets/swiggy-logo.png" className='w-full' alt="" />
//           </div>
//           <div className=''>
//             <span className='font-bold border-b-[3px]'> Serpur </span> Contai,West Bengal,India
//             <RxCaretDown onClick={showSideMenu} fontSize={25} className='font-bold inline text-[1.5rem] text-[#fc8019]'/>
//           </div>
//             <nav className="flex list-none gap-7 py-2 ml-auto font-semibold text-[18px]">
//             {
//               links.map(
//                 (link,index)=>{
//                  return <li key={index} className='flex items-center gap-2 hover:text-[#fc8019]'>
//                     {link.icon}
//                     {link.name}
//                     <sup>{link.sup}</sup>
//                   </li>
//                 }
//               )
//             }
//             </nav>
//         </div>
//       </header>
//     </>
//   )
// }
// export default Header


import React, { useState } from 'react';
import { RxCaretDown } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { RiDiscountPercentLine } from "react-icons/ri";
import { LiaHandsHelpingSolid } from "react-icons/lia";
import { IoIosContact } from "react-icons/io";
import { FaOpencart } from "react-icons/fa";

function Header() {
  const [toggle, setToggle] = useState(false);

  const links = [
    {
      icon: <IoIosSearch />,
      name: "Search",
    },
    {
      icon: <RiDiscountPercentLine />,
      name: "Offers",
      sup: "New",
    },
    {
      icon: <LiaHandsHelpingSolid />,
      name: "Help",
    },
    {
      icon: <IoIosContact />,
      name: "Sign In",
    },
    {
      icon: <FaOpencart />,
      name: "Cart",
    },
  ];

  const showSideMenu = () => {
    setToggle(true);
  };

  const hideSideMenu = () => {
    setToggle(false);
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-500 ${
          toggle ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={hideSideMenu}
        style={{ zIndex: toggle ? 50 : -1 }}
      >
        {/* Sidebar */}
        <div
          onClick={(e) => e.stopPropagation()}
          className="w-[300px] sm:w-[400px] md:w-[500px] bg-white h-full absolute left-0 transition-transform duration-500"
          style={{
            transform: toggle ? "translateX(0)" : "translateX(-100%)",
          }}
        ></div>
      </div>

      {/* Header */}
      <header className="p-[15px] shadow-xl text-[#686b78] sticky top-0 bg-white z-[9999]">
        <div className="max-w-[1200px] mx-auto flex items-center">
          {/* Logo */}
          <div className="w-[100px]">
            <img src="./src/assets/swiggy-logo.png" className="w-full" alt="Logo" />
          </div>

          {/* Location */}
          <div>
            <span className="font-bold border-b-[3px]"> Serpur </span> Contai, West Bengal, India
            <RxCaretDown
              onClick={showSideMenu}
              fontSize={25}
              className="font-bold inline text-[1.5rem] text-[#fc8019] cursor-pointer"
            />
          </div>

          {/* Navigation */}
          <nav className="flex list-none gap-7 py-2 ml-auto font-semibold text-[18px]">
            {links.map((link, index) => (
              <li key={index} className="flex items-center gap-2 hover:text-[#fc8019] cursor-pointer">
                {link.icon}
                {link.name}
                {link.sup && <sup className="text-red-500">{link.sup}</sup>}
              </li>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
