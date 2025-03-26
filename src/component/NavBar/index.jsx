import React from 'react';
import Button from '../Button';

const NavBar = () => {
  return (
    <div className='w-full h-[96px] px-[60px] py-[24px] flex justify-between items-center'>
        <div>
            <span className='text-[#c7c7c7] text-[32px] font-bebas'>SRIDHAR S</span>
        </div>
        <div className='w-auto flex gap-[32px] text-[#c7c7c7] text-[18px]'>
            <Button variant='secondary' children="Home"/>
            <Button variant='secondary' children="About" />
            <Button variant='secondary' children="Contact"/>
        </div>
    </div>
  )
}

export default NavBar;