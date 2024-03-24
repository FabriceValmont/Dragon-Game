import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <header className='flex bg-black h-[50px] items-center shadow-xl'>
      <Image src={""} alt='' />
      <p className='text-white'>Dragon Game</p>
      </header>
  )
}

export default Header