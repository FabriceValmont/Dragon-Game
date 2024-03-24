import React from 'react';
import Image from 'next/image';


const Header = () => {
  return (
    <header className='flex bg-black h-[50px] items-center shadow-xl gap-2'>
      <Image src={"/image/Dragon_Game_Logo.png"} alt='' width={50} height={50}/>
      <p className='text-white'>Dragon Game</p>
    </header>
  );
};

export default Header;
