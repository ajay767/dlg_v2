import { Icon } from '@iconify/react';
import barChartOutline from '@iconify/icons-eva/bar-chart-outline';
import Link from 'next/link';
import Button from '../Button';
import useUser from '@hook/useUser';
const logo = '/assets/images/logo_main.png';
const DP = '/assets/images/user.png';

const Header = ({ sidebarHandler, handleSignout }) => {
  const user = useUser();
  console.log(user);
  return (
    <header className="flex justify-between items-center p-2 border border-gray-200">
      <div>
        <div className="md:hidden cursor-pointer " onClick={sidebarHandler}>
          <Icon
            className="h-7 w-7 text-gray-700"
            icon={barChartOutline}
            rotate="90deg"
          />
        </div>
        <Link href="/admin">
          <img className="hidden md:block h-12 " src={logo} alt="logo" />
        </Link>
      </div>
      <div className="flex items-center">
        <div className="flex mr-2">
          <div className="mr-4 flex flex-col justify-center items-start">
            <h4 className="text-sm font-bold text-gray-700">{user.name}</h4>
            <p className="text-xs text-gray-700">{user.role}</p>
          </div>
          <img
            className="rounded-full h-10 w-10"
            src={DP}
            alt="display profile"
          />
        </div>
        <Button onClick={handleSignout} className=" bg-red-500 text-white">
          Signout
        </Button>
      </div>
    </header>
  );
};
export default Header;
