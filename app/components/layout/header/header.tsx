'use client';

import Image from 'next/image';

const Header = () => {
  return (
    <header className="w-full bg-white flex items-center py-4 px-12">
      <div className="flex items-center space-x-2  justify-center  px-12">
        <Image src="/images/logo.png" alt="Supreme Group Logo" width={148} height={44} />
      
      </div>
    </header>
  );
};

export default Header;
