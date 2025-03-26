import React, { useEffect, useRef, useState } from 'react';
import Button from '../Button';
import { useNavigate } from 'react-router-dom';
import useScreenSize from '../../utils/ScreenSizes/useScreenSize';
import Hamburger from '../../Icons/Hamburger';
import CloseIcon from '../../Icons/CloseIcon';

const NavBar = ({handleScroll}) => {

  const [ isClickHam, setIsClickHam ] = useState(false);
  const navigation = useNavigate();
  const hamRef = useRef();

  const screenType = useScreenSize();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if(hamRef.current && !hamRef.current.contains(event.target)){
        setIsClickHam(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);

  }, []);


  return (
    <div className='w-full h-[96px] px-[15px] py-[0px] lg:px-[60px] lg:py-[24px] flex justify-between items-center'>
        <div>
            <span className='text-[#c7c7c7] text-[28px] lg:text-[32px] font-bebas'>SRIDHAR S</span>
        </div>
        { screenType === "laptop" || screenType === "desktop"  ? (<div className='w-auto flex gap-[32px] text-[#c7c7c7] text-[18px]'>
            <Button variant='secondary' children="Home" onClick={() => navigation("/")}/>
            <Button variant='secondary' children="About"  onClick={() => navigation("/about")}/>
            <Button variant='secondary' children="Contact" onClick={handleScroll}/>
        </div>) : (
          <div>
            <div className='w-full h-auto relative top-[0px] flex flex-col text-[#c7c7c7] text-[18px]'>{ !isClickHam ? (
                <div onClick={() => setIsClickHam(true)}>
                  <Hamburger/>
                </div> ) :  (
                <div onClick={() => setIsClickHam(false)}>
                  <CloseIcon/>
                </div> 
              )}
             </div>
            { isClickHam && <div className='w-full max-w-[180px] h-auto absolute top-[65px] right-[10px] flex flex-col gap-[12px] text-[#c7c7c7] text-[18px] bg-gray-100 rounded-[8px]' ref={hamRef}>
              <Button variant='ham' children="Home" onClick={() => { navigation("/"); setIsClickHam(false);}}/>
              <Button variant='ham' children="About"  onClick={() => { navigation("/about"); setIsClickHam(false);}}/>
              <Button variant='ham' children="Contact" onClick={() => {handleScroll(); setIsClickHam(false);}}/>
            </div> } 
        </div>
      )}
   </div>
  )
}

export default NavBar;