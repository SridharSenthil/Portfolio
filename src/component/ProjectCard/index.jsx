import React from 'react';
import UpRight from '../../assets/up-right.svg';

const ProjectCard = ({ image, mainHeader, description, year, month, Link }) => {
    return (
        <div className='flex w-full h-auto gap-[48px] items-center justify-between'>

            <div className='w-full max-w-[500px] h-[500px] bg-[#0a0a0a] flex items-center justify-center border border-[#c7c7c7] rounded-[10px]'>
                <div className='w-full max-w-[486px] h-full max-h-[347px] flex items-center justify-center'>
                    <img src={image} alt="project-image" />
                </div>
            </div>

            <div className='w-full h-auto flex flex-col gap-[48px]'>
                <div className='flex flex-col gap-[16px]'>
                    <span className='text-card-title text-[#ffffff]'>{mainHeader}</span>
                    <span className='text-normal-text text-primeText'>{description}</span>
                </div>

                <div className='flex flex-col gap-[16px]'>
                    <span className='text-[16px] text-[#ffffff]'>PROJECT INFO</span>

                    <div className='w-full h-[1px] bg-[#c7c7c780]'></div>

                    <div className='w-full h-auto flex justify-between'>
                        <span className='text-[#ffffff]'>Year</span>
                        <span className='text-primeText'>{year}</span>
                    </div>

                    <div className='w-full h-[1px] bg-[#c7c7c780]'></div>

                    <div className='w-full h-auto flex justify-between'>
                        <span className='text-[#ffffff]'>Month</span>
                        <span className='text-primeText'>{month}</span>
                    </div>

                    <div className='w-full h-[1px] bg-[#c7c7c780]'></div>

                    <div className='w-auto h-auto flex gap-[24px]'>
                        <span className='text-primary flex gap-[8px] items-center cursor-pointer hover:underline'>{Link}<img
                            src={UpRight}
                            alt="arrow"
                            className="w-[12px] h-[12px] brightness-0 invert sepia-[90%] saturate-[500%] hue-rotate-[50deg] fill-primary"
                        />
                        </span>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default ProjectCard;