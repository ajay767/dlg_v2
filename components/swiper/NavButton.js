import React from 'react';
import { FcNext } from 'react-icons/fc';
function NavButton({ prevRef, nextRef }) {
  return (
    <div className=" items-center justify-start hidden md:flex">
      <span
        ref={prevRef}
        className="transform active:scale-90  h-10 w-10 cursor-pointer bg-white shadow flex items-center justify-center rounded-full m-2 swiper-prev-btn "
      >
        <FcNext size={22} color="#ff9800" className="transform rotate-180" />
      </span>
      <span
        ref={nextRef}
        className="transform active:scale-90  h-10 w-10 cursor-pointer bg-white shadow flex items-center justify-center rounded-full m-2 swiper-next-btn "
      >
        <FcNext size={22} color="#ff9800" className="text-primary" />
      </span>
    </div>
  );
}

export default NavButton;
