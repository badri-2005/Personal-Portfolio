import React from 'react'
import image1 from '../assets/Portfolio/image1.jpg';
import {MdOutlineKeyboardArrowRight} from "react-icons/md";
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl mt-20 sm:text-7xl font-bold text-white'>
                    I'm a Web Developer
                </h2>
                <p className=' text-gray-400 max-w-md my-1 mt-5 text-justify'>
                Junior Web Developer | AI Enthusiast | Passionate about building scalable web applications with the MERN stack. Currently honing my skills by working on a AI and ML projects. Always eager to learn and innovate in the tech space!                </p>

                <div className='flex  justify-center sm:justify-start md:justify-start lg:justify-start'>
                    {/* group - used to group elements together for styling purposes */}
                    <Link to="portfolio" smooth duration={500} className='group text-white w-fit px-6 py-3 my-3 flex items-center rounded bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer font-bold '>
                        Portfolio
                        <span className='hidden group-hover:rotate-90 duration-300 ml-1 lg:block sm:block md:block'>
                        <MdOutlineKeyboardArrowRight size={25}/>
                        </span>
                    </Link>
                    {/* <button className='group text-white w-fit px-6 py-3 my-3 flex items-center rounded bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer font-bold '>
                        Resume
                    </button> */}
                </div>
            </div>

            <div>
                <img src={image1} alt="my image" className='rounded-3xl mx-auto w-2/3 md:w-full'/>
            </div>
        </div>
    </div>
  )
}

export default Home;