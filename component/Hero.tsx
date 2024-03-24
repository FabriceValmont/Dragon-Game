import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <div className='text-center relative'>
        <Image src={"/image/Dragon_White_Banner.png"} alt='' width={1000} height={1000} className='w-full'/>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold">
          <h1 className='text-6xl'>Des jeux originaux</h1>
          <p className='text-2xl'>que vous ne verrez nulle part ailleurs </p>
        </div>
    </div>
  );
};

export default Hero;
