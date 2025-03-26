import React, {useRef} from 'react'
import NavBar from '../../component/NavBar';
import Button from '../../component/Button';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import SocialIcon from '../../component/SocialIcon';
import Footer from '../../component/Footer';
import { motion } from 'framer-motion';

const About = () => {

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/SRIDHAR SENTHILNATHAN.pdf";
    link.download = "SRIDHAR SENTHILNATHAN.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const targetRef = useRef();
  
      const handleScroll = () => {
          targetRef.current?.scrollIntoView({ behavior: "smooth" });
      };
  
  return (
    <div>
        <NavBar handleScroll={handleScroll}/>
        <motion.div
                className="w-full h-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
        <div className='w-full h-auto px-[15px] lg:px-[85px] py-[30px] flex flex-col lg:flex-row justify-between'>
                <span className='w-full max-w-[600px] text-sm-main lg:text-main-title font-bold lg:font-[400] text-[#ffffff]'>ABOUT ME</span>
                <div className='w-full h-auto flex flex-col gap-[24px]'>
                    <div className='w-full max-w-[750px] h-auto flex flex-col gap-[16px]'>
                        <span className='text-sm-card lg:text-card-title text-[#ffffff]'>I am a frontend Developer.</span>
                        <span className='text-primeText'>I am Sridhar Senthilnathan, a passionate frontend web developer with a strong foundation in HTML, CSS, JavaScript, and React.js. I enjoy building interactive and user-friendly web applications that enhance user experiences. With a keen interest in modern web technologies, I am continuously learning and improving my skills to stay updated with industry trends. Currently, I am expanding my knowledge in full-stack development to build scalable applications. My goal is to secure a frontend developer role in an MNC, where I can contribute my expertise and grow as a professional.
                        </span>
                    </div>
                    <div className='w-auto flex h-auto gap-[12px]'> 
                      <Button variant='primary' children="Download Resume" onClick={handleDownload}/>
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
                </div>
            </div>

            <div className='w-full h-[1px] bg-[#c7c7c7] mt-[40px]'></div>

            <div className='w-full h-auto flex flex-col lg:flex-row justify-between px-[15px] lg:px-[85px] py-[40px] gap-[15px]'>
              <span className='lg:text-main-title font-bold lg:font-[400] text-sm-main text-primeText font-bebas leading-[100%] tracking-tighter w-full max-w-[600px]'>MY CAPABILITIES</span>
              <div className='w-auto h-auto flex flex-col gap-[32px]'>
                <span className='w-full max-w-[750px] text-sm-normal sm:text-normal-text text-primeText'>I am proficient in React.js, JavaScript, and building dynamic web applications with seamless API integration and efficient state management. I have a strong focus on responsive UI/UX design, ensuring smooth and engaging user experiences. Passionate about continuous learning, I actively explore modern web technologies to enhance my development skills. Always striving to improve, I stay updated with industry trends to build high-performance and scalable applications.</span>

                <div className='w-full max-w-[750px] flex flex-wrap h-auto gap-[12px]'>
                  <Button variant='disable' children="HTML"/>
                  <Button variant='disable' children="CSS"/>
                  <Button variant='disable' children="JavaScript"/>
                  <Button variant='disable' children="React"/>
                  <Button variant='disable' children="Tailwind CSS"/>
                  <Button variant='disable' children="API Integration"/>
                  <Button variant='disable' children="Context API"/>
                  <Button variant='disable' children="State Management"/>
                  <Button variant='disable' children="Git"/>
                  <Button variant='disable' children="GitHub"/>
                  <Button variant='disable' children="Responsive Website"/>
                </div>
              </div>
            </div>

            <div className='w-full h-[1px] bg-[#c7c7c7] mt-[20px]'></div>

            <div className='w-full h-auto px-[15px] flex-col lg:flex-row lg:px-[85px] py-[40px] flex justify-between gap-[15px]'>
              <span className='lg:text-main-title font-bold lg:font-[400] text-sm-main  text-primeText font-bebas leading-[100%] tracking-tighter w-full max-w-[600px]'>MY EXPERIENCE</span>
              <div className='w-full max-w-[750px] h-auto flex flex-col gap-[16px]'>
                <div className='w-full h-auto flex flex-col lg:flex-row justify-between'>
                  <span className='text-normal-text text-[#ffffff]'>React Developer Intern</span>
                  <span className='text-link-text text-primeText'>Dec-2024 to Jan-2025</span>
                </div>
                <span className='text-sm-normal lg:text-normal-text text-primary'>Rayabhari Technologies Pvt Ltd</span>
                <span className='text-sm-normal lg:text-normal-text text-primeText'>
                    During my internship at Rayabhari Technologies, I actively contributed to the development and optimization of responsive web applications using React.js, JavaScript, and Tailwind CSS. I worked on integrating APIs to enhance dynamic content, ensuring seamless functionality and user experience. Collaborating with the team, I implemented various frontend features and UI enhancements, improving the overall design and performance of applications. Additionally, I gained valuable hands-on experience in debugging, performance optimization, and adhering to best coding practices, further strengthening my web development skills.
                </span>
                <div className='w-full flex gap-[2px]'><span className='text-sm-normal lg:text-normal-text text-primeText'>PROJECT - </span><span className='text-sm-normal lg:text-normal-text text-primary uppercase'><a href='https://qa.yuvrus.com/' target='_blank'>Yuvrus Pre-Order</a></span></div>
              </div>
            </div>

            <div className='w-full h-[1px] bg-[#c7c7c7] mt-[20px] mb-[40px]'></div>

            <div ref={targetRef}><Footer/></div>

          </motion.div>
    </div>
  )
}

export default About;