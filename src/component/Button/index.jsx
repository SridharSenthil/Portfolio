import React from 'react';

const Button = ({ children, onClick, variant = "primary", className = "" }) => {

    const variants = {
        primary : "bg-[#D3E97A] px-[20px] py-[12px] rounded-[100px] text-[16px]",
        secondary : "px-[18px] py-[8px] rounded-[100px] bg-transparent hover:bg-[#D3E97A] hover:text-[#000000]",
        disable : "px-[20px] py-[12px] rounded-[100px] bg-transparent border border-[#c7c7c7]"
    }

  return (
    <button className={` ${variants[variant]} ${className} flex items-center gap-[8px]`}
            onClick={onClick}> 
        <span>{children}</span>
    </button>
  );
};

export default Button;