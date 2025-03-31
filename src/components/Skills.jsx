import React from 'react';
import { motion } from "framer-motion";

const Skills = () => {
    const skills = [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 80 },
        { name: "JavaScript", level: 65 },
        { name: "MERN", level: 60 },
        { name: "Tailwind CSS", level: 70 },
        { name: "C", level: 75 },
        { name: "Python", level: 70 },
        { name: "Git & Github", level: 80 }
    ];

    return (
        <div name='skills' className='bg-gradient-to-b from-black to-gray-800 w-full min-h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-white'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500 uppercase'>Skills</p>
                    <p className='py-6'>These are the technologies I've worked with!</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center py-8 px-4'>
                    {skills.map((skill, index) => (
                        <div key={index} className='shadow-md shadow-gray-600 hover:scale-105 duration-200 py-4 rounded-lg'>
                            <p className='text-xl mb-2'>{skill.name}</p>
                            <div className='w-full bg-gray-700 rounded-full h-4'>
                                <motion.div
                                    className='bg-gray-600 h-4 rounded-full'
                                    initial={{ width: 0 }}
                                    animate={{ width: `${skill.level}%` }}
                                    transition={{ duration: 1 }}
                                />
                            </div>
                            <p className='text-sm mt-1 font-sans'>{skill.level}%</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
