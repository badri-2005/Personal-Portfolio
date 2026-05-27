import React, { useState } from 'react'
import finquest from '../assets/Projects/finquest.png'
import tglg from '../assets/Projects/tglg.png'
import carrental from '../assets/Projects/carrental.png'
import ats from '../assets/Projects/ats.png'
import uber from '../assets/Projects/uber.png'
import textsummarizer from '../assets/Projects/textsummarizer.png'

const Projects = () => {

  const [activeId, setActiveId] = useState(null);

  const projectworks = [
    {
      id: 1,
      src: finquest,
      code:'https://github.com/Clusters-Config/Fin-Quest',
      description: 'Finance learning platform with gamified lessons, quizzes, progress tracking, and real-world simulations.'
    },
    {
      id: 2,
      src: textsummarizer,
      code:'https://github.com/badri-2005/Machine-Learning',
      description: 'AI-based text summarizer that extracts key points from large documents using NLP techniques.'
    },
    {
      id: 3,
      src: tglg,
      code:'https://github.com/badri-2005/ThinkGreen',
      description: 'Eco-awareness platform promoting sustainable practices and green initiatives.'
    },
    {
      id: 4,
      src: carrental,
      code:'https://github.com/badri-2005/Car_Rental',
      description: 'Car rental management system with booking, availability tracking, and customer management features.'
    },
    {
      id: 5,
      src: ats,
      code:'https://github.com/badri-2005/Machine-Learning',
      description: 'ATS Resume Checker that analyzes resumes and matches them with job descriptions.'
    },
    {
      id: 6,
      src: uber,
      code:'https://github.com/badri-2005/Machine-Learning',
      description: 'Uber-like ride booking system prototype with trip flow and UI simulation.'
    }
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
            projectworks.map(({ id, src, code, description }) => (
              <div key={id} className='group bg-gray-900/60 border border-gray-700/70 shadow-lg shadow-black/40 rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-cyan-900/30 transition duration-300'>
                
                <img 
                  src={src} 
                  alt="project" 
                  className='h-52 w-full object-cover duration-300 group-hover:scale-105'
                />

                <div className='p-4'>
                  <p className='text-sm text-cyan-300 font-semibold mb-3'>Project {id}</p>

                  <div className='flex items-center justify-center gap-2'>
                    <button className='w-1/2 px-4 py-2 rounded-lg bg-cyan-500/15 border border-cyan-500/40 text-cyan-200 duration-200 hover:bg-cyan-500/30'>
                    <a href={code} target="_blank" rel="noopener noreferrer">
                      Source Code
                    </a>
                    </button>

                    <button 
                      className='w-1/2 px-4 py-2 rounded-lg bg-blue-500/15 border border-blue-500/40 text-blue-200 duration-200 hover:bg-blue-500/30'
                      onClick={() => toggleDescription(id)}
                    >
                      {activeId === id ? 'Hide Details' : 'Description'}
                    </button>
                  </div>

                  {activeId === id && (
                    <div className='bg-black/40 border border-gray-700 text-sm text-gray-300 p-3 rounded-lg mt-3 leading-relaxed'>
                      {description}
                    </div>
                  )}
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
