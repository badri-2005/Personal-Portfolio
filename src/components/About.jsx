import React from 'react';
import { FaUniversity, FaSchool, FaGraduationCap } from 'react-icons/fa';

const About = () => {
  return (
    <div
      name="about"
      className="relative z-0 w-full min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-950 text-white pt-28 pb-32"
    >
      <div className="max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-4 sm:pb-8">
          <p
            className="text-3xl sm:text-4xl font-bold inline border-b-4 border-gray-500 uppercase"
            style={{ fontFamily: "'Comic Sans MS', cursive, sans-serif" }}
          >
            About Me
          </p>
        </div>

        <div className="space-y-4 sm:space-y-6 mt-6 sm:mt-10">
          <p className="text-sm sm:text-lg text-justify leading-relaxed text-gray-300">
            I am <span className="font-bold text-white">Badri Narayanan B R</span> from Kondalampatti, Salem.
            I completed my schooling at Mahendra International School, consistently excelling in mathematics and logical reasoning.
            I am currently pursuing my Bachelor&apos;s degree in Computer Science and Engineering at Knowledge Institute of Technology,
            where I maintain a strong academic record and a passion for technology.
          </p>

          <p className="text-sm sm:text-lg text-justify leading-relaxed text-gray-300">
            My interest lies at the intersection of Development and AI. I am a tech-savvy individual,
            always eager to learn new technologies and stay updated with industry trends. Beyond technical skills,
            I have enhanced my leadership and teamwork abilities through various extracurricular activities.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 xl:grid-cols-2 gap-6 md:gap-8">
          <section className="relative overflow-hidden rounded-2xl border border-cyan-700/35 bg-gray-900/45 backdrop-blur-sm p-4 sm:p-6 shadow-[0_0_0_1px_rgba(34,211,238,0.08)]">
            <div className="absolute -top-10 -left-10 h-28 w-28 rounded-full bg-cyan-500/10 blur-2xl" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <FaGraduationCap size={20} className="text-cyan-400" />
                <p className="text-2xl sm:text-3xl font-bold uppercase tracking-wider border-b-2 border-cyan-700/50">
                  Education
                </p>
              </div>

              <div className="relative ml-1 sm:ml-3 pl-8 sm:pl-10 before:absolute before:left-[11px] sm:before:left-[13px] before:top-1 before:bottom-1 before:w-[2px] before:bg-gradient-to-b before:from-cyan-400/80 before:via-cyan-500/30 before:to-cyan-900/20">
                <div className="mb-8 sm:mb-10 relative">
                  <span className="absolute -left-[26px] sm:-left-[30px] top-1 bg-cyan-400 w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center ring-4 ring-black">
                    <FaUniversity className="text-black" size={8} />
                  </span>
                  <div className="flex flex-col gap-2">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">Knowledge Institute of Technology</h3>
                      <p className="text-cyan-300 text-sm sm:text-base font-medium mt-1">B.E. Computer Science and Engineering</p>
                      <p className="text-gray-300 mt-1 text-sm italic">CGPA: 8.56 (Up to 4th Semester)</p>
                    </div>
                    <div className="text-xs sm:text-sm font-mono text-cyan-200 bg-black/40 px-3 py-1 rounded-full border border-cyan-900/60 w-fit">
                      2023 - 2027
                    </div>
                  </div>
                  <ul className="text-gray-300 text-sm sm:text-base mt-3 list-disc pl-5 space-y-1">
                    <li>Member and Class Ambassador of Synergy Squad.</li>
                    <li>Led the event called Campus Coder&apos;s League.</li>
                    <li>Led the event called Codeathon and served as Technical Coordinator.</li>
                  </ul>
                </div>

                <div className="mb-8 sm:mb-10 relative">
                  <span className="absolute -left-[26px] sm:-left-[30px] top-1 bg-gray-500 w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center ring-4 ring-black">
                    <FaSchool className="text-black" size={8} />
                  </span>
                  <div className="flex flex-col gap-2">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-200 leading-tight">Mahendra International School (HSC)</h3>
                      <p className="text-gray-300 text-sm sm:text-base mt-1">Served as the <span className="text-white font-semibold">School Discipline Leader</span></p>
                      <ul className="text-gray-300 text-sm sm:text-base mt-2 list-disc pl-5 space-y-1">
                        <li>Selected as School Discipline Leader (Prefect) in Grade 12.</li>
                      </ul>
                      <p className="text-gray-300 text-sm sm:text-base mt-1">Score: <span className="text-white font-semibold">82%</span></p>
                    </div>
                    <div className="text-xs sm:text-sm font-mono text-gray-300 bg-black/40 px-3 py-1 rounded-full border border-gray-700 w-fit">
                      Completed 2023
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <span className="absolute -left-[26px] sm:-left-[30px] top-1 bg-gray-500 w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center ring-4 ring-black">
                    <FaSchool className="text-black" size={8} />
                  </span>
                  <div className="flex flex-col gap-2">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-200 leading-tight">Mahendra International School (SSLC)</h3>
                      <ul className="text-gray-300 text-sm sm:text-base mt-2 list-disc pl-5 space-y-1">
                        <li>Scout member in Class 10.</li>
                        <li>Language default monitor in Class 10.</li>
                      </ul>
                      <p className="text-gray-300 text-sm sm:text-base mt-1">Score: <span className="text-white font-semibold">88%</span></p>
                    </div>
                    <div className="text-xs sm:text-sm font-mono text-gray-300 bg-black/40 px-3 py-1 rounded-full border border-gray-700 w-fit">
                      Completed 2021
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="relative overflow-hidden rounded-2xl border border-blue-700/35 bg-gray-900/45 backdrop-blur-sm p-4 sm:p-6 shadow-[0_0_0_1px_rgba(59,130,246,0.08)]">
            <div className="absolute -bottom-10 -right-10 h-28 w-28 rounded-full bg-blue-500/10 blur-2xl" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <FaGraduationCap size={20} className="text-blue-400" />
                <p className="text-2xl sm:text-3xl font-bold uppercase tracking-wider border-b-2 border-blue-700/50">
                  Experience
                </p>
              </div>

              <div className="grid gap-3 sm:gap-4">
                <div className="bg-black/30 border border-gray-700 rounded-xl p-4 sm:p-4">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                    <div>
                      <h3 className="text-lg font-semibold text-white">Backend Developer - Solve for Sakthi</h3>
                      <p className="text-cyan-300 text-sm">Consultancy Project for Sakthi Auto Components</p>
                    </div>
                    <p className="text-gray-300 text-sm sm:text-right whitespace-nowrap">October 2025 - January 2026</p>
                  </div>
                </div>

                <div className="bg-black/30 border border-gray-700 rounded-xl p-4 sm:p-4">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                    <div>
                      <h3 className="text-lg font-semibold text-white">Data Science Intern</h3>
                      <p className="text-blue-300 text-sm">APT Computer Education</p>
                    </div>
                    <p className="text-gray-300 text-sm sm:text-right whitespace-nowrap">July 2025 - August 2025</p>
                  </div>
                </div>

                <div className="bg-black/30 border border-gray-700 rounded-xl p-4 sm:p-4">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                    <div>
                      <h3 className="text-lg font-semibold text-white">Front End Development Intern</h3>
                      <p className="text-blue-300 text-sm">Imagecon Academy</p>
                    </div>
                    <p className="text-gray-300 text-sm sm:text-right whitespace-nowrap">July 2024 - August 2024</p>
                  </div>
                </div>

                <div className="bg-black/30 border border-gray-700 rounded-xl p-4 sm:p-4">
                  <h3 className="text-lg font-semibold text-white mb-3">Rotaract</h3>
                  <div className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                      <p className="text-gray-200">Member</p>
                      <p className="text-gray-300 text-sm sm:text-right whitespace-nowrap">August 2024 - August 2025</p>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                      <p className="text-gray-200">Community Service Director</p>
                      <p className="text-gray-300 text-sm sm:text-right whitespace-nowrap">August 2025 - August 2026</p>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                      <p className="text-gray-200">Women Empowerment Director Elect</p>
                      <p className="text-gray-300 text-sm sm:text-right whitespace-nowrap">August 2026 - August 2027</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
