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
    <div name='projects' className='w-full h-full bg-gradient-to-b from-black to-gray-800 text-white md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        
        <div className='pb-8 mt-24 lg:mt-56 sm:mt-56'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500 uppercase'>Projects</p>
          <p className='py-6'>Check out some of my work right here</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:p-0 mb-10'>
          {
            projectworks.map(({ id, src, code, description }) => (
              <div key={id} className='shadow-md shadow-gray-600 rounded-lg p-2'>
                
                <img 
                  src={src} 
                  alt="project" 
                  className='rounded-md duration-200 hover:scale-105 w-full'
                />

                <div className='flex items-center justify-center'>
                  <button className='w-1/2 px-4 py-2 m-2 duration-200 hover:scale-105'>
                    <a href={code} target="_blank" rel="noopener noreferrer">
                      Source Code
                    </a>
                  </button>

                  <button 
                    className='w-1/2 px-4 py-2 m-2 duration-200 hover:scale-105'
                    onClick={() => toggleDescription(id)}
                  >
                    Description
                  </button>
                </div>

                {/* Description Panel */}
                {
                  activeId === id && (
                    <div className='bg-gray-900 text-sm text-gray-300 p-3 rounded-md mt-2'>
                      {description}
                    </div>
                  )
                }

              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Projects;
