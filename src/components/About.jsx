import React from 'react'
import { FaGithub, FaLinkedin,FaPhoneSquare } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill, BsPhone } from 'react-icons/bs'
import download from '../assets/Badri-Resume.pdf'

const About = () => {
  return (
    <div name='about' className='h-screen w-full bg-gradient-to-b from-gray-800  to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center  w-full h-screen'>
            <div className='flex pb-8 w-full  mt-10 sm:mt-0 md:mt-0 lg:mt-0'>
                <p className='text-4xl font-bold inline border-b-4 border-b-gray-500 mt-12  uppercase '>About Me</p>
            </div>
            <p className='text-lg mt-10  text-justify sm:text-xl md:text-xl lg:text-xl'>
            I am <span className='font-bold'>Badri Narayanan B R</span> from Kondalampatti, Salem. I completed my schooling at Mahendra International School Senior Secondary, Kalipatti, achieving (82%) in my 12th grade and (88%) in my 10th grade. Throughout my academic journey, I have consistently excelled in mathematics and logical reasoning, which strengthened my problem-solving abilities. Additionally, I actively participated in various extracurricular activities, enhancing my leadership and teamwork skills.
            </p>
            <br />
            <p className='text-xl text-justify hidden md:block lg:block sm:block '>
            My passion for technology and problem-solving led me to pursue a career in Computer Science and Engineering. I am a tech-savvy and skillful individual with a strong interest in Development and AI. Additionally, I am always eager to learn new technologies and stay updated with industry trends, ensuring continuous growth in my field.
            </p>

            <div className='flex flex-row justify-between items-center mt-10 m-4  lg:hidden'>
                <a href="https://www.linkedin.com/in/badri-narayanan-6b1b5b1b6/" target='_blank' rel='noreferrer'>
                <FaGithub size={30} />
                </a>
                <a href="https://github.com/badri-2005" target='_blank'>
                <FaLinkedin size={30} />
                </a>
                <a href="tel:+918838271155" target='_blank'>
                <FaPhoneSquare size={30} />
                </a>
                <a href="../public/Badri-Resume.pdf" download={download}>
                <BsFillPersonLinesFill size={30} />
                </a>
            </div>

            
        
        </div>
    </div>
  )
}

export default About