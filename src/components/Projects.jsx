import React, { useState } from 'react'
import finquest from '../assets/Projects/finquest.png'
import carrental from '../assets/Projects/carrental.png'
import ats from '../assets/Projects/ats.png'
import devnotex from '../assets/Projects/devnotex.png'
import retail_etl from '../assets/Projects/retail_etl.png'
import ecommerce_etl from '../assets/Projects/ecommerce_etl.png'
const Projects = () => {

  const [activeId, setActiveId] = useState(null);

  const projectworks = [
    {
      id: 1,
      src: finquest,
      name:'FinQuest',
      code:'https://github.com/Clusters-Config/Fin-Quest',
      description: 'FinQuest is a finance learning platform that makes personal finance engaging through gamified lessons, milestone-based progression, and practical simulations. Users can learn concepts such as budgeting, savings, and smart spending by completing structured modules and quizzes. The platform tracks progress in real time, highlights weak areas for revision, and provides an interactive path from basic awareness to confident financial decision-making.',
      tools: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'REST APIs']
    },
    {
      id: 2,
      src: devnotex,
      name : 'DevNotex',
      code:'https://github.com/badri-2005/Blogger',
      description: 'DevNotex is a modern blogging platform where users can write, edit, and publish technical articles with a clean reading experience. It supports content-focused workflows, organized post management, and a responsive UI for both authors and readers. The project is designed to simplify knowledge sharing for developers while maintaining performance, usability, and scalable backend integration.',
      tools: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'Bcrypt']
    },
    {
      id: 3,
      src: carrental,
      name:'Car Rental System',
      code:'https://github.com/badri-2005/Car_Rental',
      description: 'This Car Rental System streamlines rental operations by managing vehicle listings, booking requests, and customer records in one place. It helps users quickly find available vehicles and supports administrators with clear availability tracking and booking control. The overall workflow reduces manual coordination and improves service efficiency through a user-friendly interface and structured data handling.',
      tools: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'CRUD Workflows']
    },
    {
      id: 4,
      src: ats,
      name:'ATS Resume Analyzer',
      code:'https://github.com/badri-2005/Machine-Learning',
      description: 'ATS Resume Analyzer evaluates resumes against job descriptions to estimate relevance and improve interview chances. It extracts key terms, performs similarity analysis, and identifies missing skills or keywords commonly required by recruiters. The tool gives practical feedback so candidates can optimize their resumes for better ATS compatibility and stronger role-specific positioning.',
      tools: ['Python', 'Cosine Similarity', 'scikit-learn' ,'HTML & CSS','REST API','Flask']
    },
    {
      id: 5,
      src: retail_etl,
      name:'Retail ETL',
      code:'https://github.com/badri-2005/Retail_Data_ETL',
      description: 'Retail ETL is a data engineering pipeline built to extract, transform, and load retail data into analysis-ready formats. It handles data cleaning, schema normalization, and structured loading to support reporting and decision-making. By automating repetitive data preparation tasks, the pipeline improves reliability, reduces manual effort, and creates a consistent foundation for business intelligence.',
      tools: ['Python', 'SQL', 'ETL', 'Jupyter Notebook', 'Data Cleaning','Data Analysis']
    },
    {
      id: 6,
      src: ecommerce_etl,
      name:'Ecommerce ETL',
      code:'https://github.com/badri-2005/E-Commerce-ETL',
      description: 'Ecommerce ETL is a real-time data pipeline that processes streaming e-commerce events to support near-live analytics. Using Kafka-based ingestion, the pipeline captures transactional flow, transforms incoming records, and loads refined data into a warehouse-ready destination. The project demonstrates scalable data movement, reliable processing, and production-style orchestration for modern analytics use cases.',
      tools: ['Python', 'SQL', 'Kafka', 'Docker', 'Snowflake', 'Real-time Streaming']
    },
    
  ]

  const toggleDescription = (id) => {
    setActiveId(activeId === id ? null : id);
  }

  return (
    <div name='projects' className='w-full min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-950 text-white pt-28 pb-32'>
      <div className='max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full h-full'>
        
        <div className='pb-8'>
          <p
            className='text-4xl md:text-5xl font-bold inline border-b-4 border-cyan-500 uppercase'
            style={{ fontFamily: "'Comic Sans MS', cursive, sans-serif" }}
          >
            Projects
          </p>
          <p className='py-6 text-gray-300'>Check out some of my work right here</p>
        </div>

        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-2 sm:px-0 mb-10'>
          {
            projectworks.map(({ id, src, name, code, description, tools }) => (
              <div key={id} className='group [perspective:1200px] h-[500px]'>
                <div
                  className={`relative h-full rounded-2xl transition-transform duration-500 [transform-style:preserve-3d] ${activeId === id ? '[transform:rotateY(180deg)]' : ''}`}
                >
                  <div className='absolute inset-0 bg-gray-900/60 border border-gray-700/70 shadow-lg shadow-black/40 rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-cyan-900/30 transition duration-300 [backface-visibility:hidden] flex flex-col'>
                    
                    <img 
                      src={src} 
                      alt="project" 
                      className='h-52 w-full object-cover duration-300 group-hover:scale-105'
                    />

                    <div className='p-4 flex-1 flex flex-col'>
                      <p className='text-2xl text-center font-extrabold tracking-wide text-white mb-3'>{name}</p>

                      <p className='text-xs text-center uppercase tracking-[0.2em] text-cyan-300 font-semibold mb-3'>Tools & Tech Stack</p>
                      <div className='grid grid-cols-2 gap-2 mb-4'>
                        {tools.map((tool) => (
                          <span key={tool} className='px-3 py-2 text-xs font-semibold text-center rounded-lg bg-gradient-to-r from-cyan-500/15 to-blue-500/15 border border-cyan-700/50 text-cyan-100'>
                            {tool}
                          </span>
                        ))}
                      </div>

                      <div className='flex items-center justify-center gap-2'>
                        <button className='w-1/2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 border border-cyan-300/40 text-black font-bold duration-200 hover:brightness-110 hover:shadow-md hover:shadow-cyan-900/30 focus:outline-none focus:ring-2 focus:ring-cyan-300/45'>
                        <a href={code} target="_blank" rel="noopener noreferrer">
                          Source Code
                        </a>
                        </button>

                        <button 
                          className='w-1/2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 border border-cyan-300/40 text-black font-bold duration-200 hover:brightness-110 hover:shadow-md hover:shadow-cyan-900/30 focus:outline-none focus:ring-2 focus:ring-cyan-300/45'
                          onClick={() => toggleDescription(id)}
                        >
                          View Description
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className='absolute inset-0 bg-gray-900/85 border border-cyan-700/50 shadow-lg shadow-black/40 rounded-2xl p-5 [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col overflow-hidden'>
                    <div className='flex-1 min-h-0 overflow-y-auto pr-1'>
                      <p className='text-2xl text-center font-extrabold tracking-wide text-white mb-2'>{name}</p>
                      <p className='text-xs text-center uppercase tracking-[0.2em] text-cyan-300 font-semibold mb-3'>Project Description</p>
                      <div className='bg-black/40 border border-gray-700 text-sm text-gray-300 p-3 rounded-lg leading-relaxed text-justify'>
                        {description}
                      </div>
                    </div>

                    <button
                      className='mt-4 w-full px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 border border-cyan-300/40 text-white font-extrabold duration-200 hover:brightness-110 hover:shadow-md hover:shadow-cyan-900/30 focus:outline-none focus:ring-2 focus:ring-cyan-300/45'
                      onClick={() => toggleDescription(id)}
                    >
                      Back To Project
                    </button>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Projects;
