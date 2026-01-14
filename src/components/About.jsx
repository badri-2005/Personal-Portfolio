import React from 'react';
import { FaUniversity, FaSchool, FaGraduationCap } from 'react-icons/fa';
import { FaGithub, FaLinkedin, FaPhoneSquare } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const About = () => {
  return (
    /* 1. Added 'relative' so z-index takes effect.
       2. Added 'z-0' so it stays behind any element with a higher z-index (like your navbar).
    */
    <div 
      name="about" 
      className="relative z-0 w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white py-10 sm:py-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        
        {/* --- ABOUT SECTION --- */}
        <div className="pb-4 sm:pb-8">
          <p className="text-3xl sm:text-4xl font-bold inline border-b-4 border-gray-500 uppercase">
            About Me
          </p>
        </div>

        <div className="space-y-4 sm:space-y-6 mt-6 sm:mt-10">
          <p className="text-sm sm:text-lg text-justify leading-relaxed text-gray-300">
            I am <span className="font-bold text-white">Badri Narayanan B R</span> from Kondalampatti, Salem. 
            I completed my schooling at Mahendra International School, consistently excelling in mathematics and logical reasoning. 
            I am currently pursuing my Bachelor's degree in Computer Science and Engineering at Knowledge Institute of Technology, 
            where I maintain a strong academic record and a passion for technology.
          </p>

          <p className="text-sm sm:text-lg text-justify leading-relaxed text-gray-300">
            My interest lies at the intersection of Development and AI. I am a tech-savvy individual, 
            always eager to learn new technologies and stay updated with industry trends. Beyond technical skills, 
            I have enhanced my leadership and teamwork abilities through various extracurricular activities.
          </p>
        </div>

        {/* --- EDUCATION SECTION --- */}
        <div className="mt-12 sm:mt-20">
          <div className="flex items-center gap-3 mb-8 sm:mb-12">
            <FaGraduationCap size={20} className="text-cyan-500 sm:size-20" />
            <p className="text-2xl sm:text-3xl font-bold uppercase tracking-widest border-b-2 border-gray-600">
              Education
            </p>
          </div>

          <div className="border-l-2 border-gray-700 ml-2 sm:ml-6">
            
            <div className="mb-8 sm:mb-10 ml-6 sm:ml-10 relative">
              <span className="absolute -left-[33px] sm:-left-[45px] top-1 bg-cyan-500 w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center ring-4 ring-black">
                <FaUniversity className="text-black" size={10} />
              </span>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">Knowledge Institute of Technology</h3>
                  <p className="text-cyan-400 text-xs sm:text-sm font-medium mt-1">B.E. Computer Science and Engineering</p>
                  <p className="text-gray-400 mt-1 text-xs italic">CGPA: 8.56 (Up to 4th Semester)</p>
                </div>
                <div className="text-[10px] sm:text-xs font-mono text-cyan-300 bg-gray-900/50 px-3 py-1 rounded-full border border-gray-700 w-fit">
                  2023 — 2027
                </div>
              </div>
            </div>

            <div className="mb-8 sm:mb-10 ml-6 sm:ml-10 relative">
              <span className="absolute -left-[33px] sm:-left-[45px] top-1 bg-gray-600 w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center ring-4 ring-black">
                <FaSchool className="text-black" size={10} />
              </span>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-300 leading-tight">Mahendra International School (HSC)</h3>
                  <p className="text-gray-400 text-xs sm:text-sm mt-1">Served as the <span className="text-white font-semibold">School Discipline Leader</span></p>
                  <p className="text-gray-400 text-xs sm:text-sm">Score: <span className="text-white font-semibold">82%</span></p>
                </div>
                <div className="text-[10px] sm:text-xs font-mono text-gray-500 bg-gray-900/50 px-3 py-1 rounded-full border border-gray-700 w-fit">
                  Completed 2023
                </div>
              </div>
            </div>

            <div className="mb-4 ml-6 sm:ml-10 relative">
              <span className="absolute -left-[33px] sm:-left-[45px] top-1 bg-gray-600 w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center ring-4 ring-black">
                <FaSchool className="text-black" size={10} />
              </span>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-300 leading-tight">Mahendra International School (SSLC)</h3>
                  <p className="text-gray-400 text-xs sm:text-sm mt-1">Score: <span className="text-white font-semibold">88%</span></p>
                </div>
                <div className="text-[10px] sm:text-xs font-mono text-gray-500 bg-gray-900/50 px-3 py-1 rounded-full border border-gray-700 w-fit">
                  Completed 2021
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;