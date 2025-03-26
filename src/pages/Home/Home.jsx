import React from 'react';
import NavBar from '../../component/NavBar/index';
import Button from '../../component/Button';
import SocialIcon from '../../component/SocialIcon';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Hero from '../../assets/hero-img.png';
import Project1 from '../../assets/port-pro.png';
import ProjectCard from '../../component/ProjectCard';
import Project2 from '../../assets/netflix-pro.png';
import Footer from '../../component/Footer';

const Home = () => {
    return (
        <div className='flex flex-col gap-[30px]'>
            <NavBar />

            <div className='flex flex-wrap w-full h-auto items-center justify-between px-[85px]'>
                <motion.div
                    className='w-full max-w-[544px] h-auto flex flex-col gap-[40px]'
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                >
                    <div className='flex flex-col gap-[8px]'>
                        <span className='text-[#ffffff] text-hero leading-[90%] tracking-[2px] uppercase font-bebas align-top'>
                            Hi, I'm Sridhar
                        </span>
                        <span className='text-[#c7c7c7] text-normal-text'>
                            Frontend Developer | Passionate about crafting seamless user experiences with React.js and modern web technologies.
                        </span>
                    </div>
                    <div className='flex gap-[16px]'>
                        <Button>CONTACT ME</Button>
                        <SocialIcon
                            url="https://www.linkedin.com/in/sridhar-senthilnathan-ab87032a5"
                            Icon={FaLinkedin}
                            color="#D3E97A"
                        />
                        <SocialIcon
                            url="https://github.com/SridharSenthil"
                            Icon={FaGithub}
                            color="#D3E97A"
                        />
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="w-[500px] h-auto"
                >
                    <motion.img
                        src={Hero}
                        alt="My-Photography"
                        className="rounded-[15px] w-auto h-auto"
                        whileHover={{ scale: 1.05, rotate: 2 }}
                        transition={{ type: "spring", stiffness: 200 }}
                    />
                </motion.div>
            </div>

            <div className='w-full h-[1px] bg-[#c7c7c7] mt-[40px]'></div>

            <motion.div
                className="w-full h-auto px-[85px] py-[30px] flex flex-col gap-[80px]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="w-auto h-auto flex flex-col gap-[8px]">
                    <span className="text-main-title text-primeText font-bebas leading-[100%] tracking-tighter">
                        FEATURED PROJECTS
                    </span>
                    <span className="text-normal-text font-sans text-primeText w-full max-w-[580px] tracking-[0]">
                        Here are some of the selected projects that showcase my passion for front-end development.
                    </span>
                </div>

                <ProjectCard
                    image={Project1}
                    mainHeader="Portfolio Website: Developed by Me"
                    description="Built with React and Tailwind CSS, my portfolio showcases a modern and responsive design. I leveraged Tailwind's configuration for customized styling and consistency. Reusable components enhance maintainability, while a custom hook dynamically handles screen sizes. This project highlights my frontend skills and best coding practices."
                    year="2025"
                    month="March"
                    Link="GITHUB"
                />

                <ProjectCard
                    image={Project2}
                    mainHeader="Netflix Clone: Showcase my API integration"
                    description="Your Netflix Clone is a React-based web application replicating Netflix's look and feel. Built with React, Tailwind CSS, and JavaScript, it features a sleek, responsive UI and integrates with the TMDB API to fetch real-time movie and TV show data. It includes trending lists, categories, and a dynamic banner section. If authentication is added, users can sign in and access personalized content using Firebase Auth. This project showcases your skills in React, API integration, and UI development, making it a strong portfolio addition."
                    Link="GITHUB"
                    year="2024"
                    month="December"
                />
            </motion.div>

            <div className='w-full h-[1px] bg-[#c7c7c7] mt-[40px]'></div>

            <div className='w-full h-auto px-[85px] py-[30px] flex justify-between'>
                <span className='w-full max-w-[600px] text-main-title text-[#ffffff]'>ABOUT ME</span>
                <div className='w-full h-auto flex flex-col gap-[24px]'>
                    <div className='w-auto h-auto flex flex-col gap-[16px]'>
                        <span className='text-card-title text-[#ffffff]'>I am a frontend Developer.<br />Has Electrical Engineering Background.</span>
                        <span className='text-primeText text-justify'>I am Sridhar Senthilnathan, a passionate frontend web developer with a strong foundation in HTML, CSS, JavaScript, and React.js. I enjoy building interactive and user-friendly web applications that enhance user experiences. With a keen interest in modern web technologies, I am continuously learning and improving my skills to stay updated with industry trends. Currently, I am expanding my knowledge in full-stack development to build scalable applications. My goal is to secure a frontend developer role in an MNC, where I can contribute my expertise and grow as a professional.
                        </span>
                    </div>
                    <span className='text-primary flex gap-[8px] items-center cursor-pointer hover:underline'>MORE ABOUT ME</span>
                </div>
            </div>

            <div className='w-full h-[1px] bg-[#c7c7c7] mt-[25px]'></div>

            <Footer />
        </div>
    );
};

export default Home;
