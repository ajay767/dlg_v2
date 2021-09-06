import React from "react";
import { CgClose } from "react-icons/cg";
import Link from "next/link";
import { Animated } from "react-animated-css";

const navLinks = [
  { title: "Home", path: "/" },
  { title: "Academics", path: "/" },
  { title: "Gallery", path: "/" },
  { title: "Career", path: "/blog/sdhs" },
  { title: "Contact us", path: "/contact" },
  { title: "About us", path: "/about" },
];

function MobileSidebar({ toggleSidebar, active = false }) {
  return (
    <Animated
      animationIn="bounceInRight"
      animationOut="fadeOut"
      isVisible={active}
    >
      <div
        className={`block p-5  bg-blue-500 h-screen w-full transition-all ${
          !active ? "transform translate-x-full" : ""
        }`}
      >
        <div
          className="h-12 w-12 cursor-pointer rounded-full bg-white flex items-center justify-center"
          onClick={toggleSidebar}
        >
          <CgClose size={24} />
        </div>
        <div className="flex flex-col items-center justify-center">
          {navLinks.map((item, index) => {
            return (
              <Link href={item.path} key={index}>
                <a
                  onClick={toggleSidebar}
                  className="text-white text-base cursor-pointer block w-full text-center my-5 py-5"
                >
                  {item.title}
                </a>
              </Link>
            );
          })}
        </div>
      </div>
    </Animated>
  );
}

export default MobileSidebar;
