import { useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import Section from '../layout/Section';
import Link from 'next/link';
import MobileSidebar from './MobileSidebar';

const navLinks = [
  { title: 'Home', path: '/' },
  { title: 'Academics', path: '/' },
  { title: 'Gallery', path: '/' },
  { title: 'Career', path: '/blog/sdhs' },
  { title: 'Contact us', path: '/' },
  { title: 'About us', path: '/' },
];

function Header() {
  const [sidebarState, setSidebarState] = useState(false);

  const toggleSidebar = () => {
    setSidebarState(!sidebarState);
  };

  return (
    <header className="sticky top-0 left-0 right-0 bg-white z-20 border-b border-gray-100 ">
      <MobileSidebar toggleSidebar={toggleSidebar} active={sidebarState} />
      <Section className="py-2 flex items-center justify-between">
        <img
          className="h-12 md:h-16"
          alt="Logo main"
          src="/assets/images/logo_main.png"
        />
        <div className="hidden md:flex items-center justify-between md:w-6/12 lg:w-8/12 xl:w-6/12">
          <Link href="/">
            <a className="text-gray-600 text-base cursor-pointer">Home</a>
          </Link>
          <Link href="/">
            <a className="text-gray-600 text-base cursor-pointer">Academics</a>
          </Link>
          <Link href="/">
            <a className="text-gray-600 text-base cursor-pointer">Gallery</a>
          </Link>
          <Link href="/blog/23gbbdsj">
            <a className="text-gray-600 text-base cursor-pointer">Career</a>
          </Link>
          <Link href="/">
            <a className="hidden lg:block text-gray-600 text-base cursor-pointer">
              Contact us
            </a>
          </Link>
          <Link href="/">
            <a className="hidden lg:block text-gray-600 text-base cursor-pointer">
              About us
            </a>
          </Link>
        </div>
        <div className="block md:hidden">
          <BiMenu
            size={34}
            className="text-gray-700 cursor-pointer"
            onClick={toggleSidebar}
          />
        </div>
      </Section>
    </header>
  );
}

export default Header;
