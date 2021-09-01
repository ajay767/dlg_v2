import { BiMenu } from 'react-icons/bi';
import Section from '../layout/Section';

function Header() {
  return (
    <header className="sticky top-0 left-0 right-0 bg-white z-20">
      <Section className="mb-4  flex items-center justify-between">
        <img
          className="h-14 md:h-16"
          alt="Logo main"
          src="/assets/images/logo_main.png"
        />
        <div className="hidden md:flex items-center justify-between md:w-6/12 lg:w-8/12 xl:w-6/12">
          <p className="text-gray-600 text-base cursor-pointer">Home</p>
          <p className="text-gray-600 text-base cursor-pointer">Academics</p>
          <p className="text-gray-600 text-base cursor-pointer">Gallery</p>
          <p className="text-gray-600 text-base cursor-pointer">Career</p>
          <p className="hidden lg:block text-gray-600 text-base cursor-pointer">
            Contact us
          </p>
          <p className="hidden lg:block text-gray-600 text-base cursor-pointer">
            About us
          </p>
        </div>
        <div className="block md:hidden">
          <BiMenu size={34} className="text-gray-700 cursor-pointer" />
        </div>
      </Section>
    </header>
  );
}

export default Header;
