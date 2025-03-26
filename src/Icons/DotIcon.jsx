import React from "react";

const DotIcon = ({ size = 15, color = "currentColor" }) => {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="6" />
      </svg>
    );
  };
  
  export default DotIcon;