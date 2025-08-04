import React from 'react';

const Skills = () => {
    // Array of skill objects with a name, image source, and styling
    const skills = [
        { name: "HTML", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", style: "shadow-blue-500" },
        { name: "CSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", style: "shadow-blue-500" },
        // { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", style: "shadow-yellow-500" },
        { name: "Tailwind CSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", style: "shadow-blue-500" },
        { name: "React JS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", style: "shadow-blue-500" },
        { name: "Java", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", style: "shadow-blue-500" },
        { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", style: "shadow-blue-500" },
        { name: "C", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", style: "shadow-blue-500" },
        { name: "Git & Github", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", style: "shadow-blue-500" },
        { name: "MySQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", style: "shadow-blue-500" },
        { name: "Postman", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg", style: "shadow-blue-500" },
        { name: "Docker", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", style: "shadow-blue-500" },
        { name: "Figma", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", style: "shadow-blue-500" },
        // { name: "Canva", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg", style: "shadow-blue-500" },
    ];

    return (
        <div name='skills' className='bg-gradient-to-b from-black to-gray-800 w-full min-h-screen'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500 uppercase'>Skills</p>
                    <p className='py-6'>These are the technologies I've worked with!</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8 text-center py-8'>
                    {skills.map(({ name, src, style }, index) => (
                        <div
                            key={index}
                            className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                        >
                            <img src={src} alt={name} className="w-20 mx-auto" />
                            <p className='mt-4'>{name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;