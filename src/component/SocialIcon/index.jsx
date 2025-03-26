import React from 'react';

const SocialIcon = ({ url, Icon, color}) => {
  return (
   <div className='px-[12px] py-[8px] rounded-[50%] border border-white flex items-center cursor-pointer'>
    <a href={url} target='_blank' rel="noopener noreferrer">
        <Icon size={20} style = {{ color }}/>
    </a>
   </div>
  )
}

export default SocialIcon;