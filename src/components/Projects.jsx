import React from 'react'
import finquest from '../assets/Projects/finquest.png'
import tglg from '../assets/Projects/tglg.png'
import chatbot from '../assets/Projects/chatbot.jpg'
import carrental from '../assets/Projects/carrental.png'
import ats from '../assets/Projects/ats.png'
import uber from '../assets/Projects/uber.png'

const Projects = () => {

  const projectworks = [
    {
      id: 1,
      src: finquest,
      code:'https://github.com/Clusters-Config/Fin-Quest',
      description : 'Finquest is a comprehensive finance learning platform designed to empower school students and young professionals with essential financial knowledge. It offers a structured learning path, combining interactive lessons, real-life case studies, and personalized quizzes to reinforce understanding. The platform also features gamified learning to boost engagement, practical financial tools for real-world application, personalized progress tracking, and community-driven discussions for collaborative learning. With a user-friendly design and a focus on practical skills, Finquest aims to bridge the gap in financial literacy and prepare users for confident financial decision-making.'
    },
    {
      id: 2,
      src: chatbot,
      code:'https://github.com/badri-2005/Chat-Bot'
    },
    {
      id: 3,
      src: tglg,
      code:'https://github.com/badri-2005/ThinkGreen'

    },
    {
      id: 4,
      src: carrental,
      code:'https://github.com/badri-2005/Car_Rental'

    },
    {
      id: 5,
      src: ats,
      code:'https://github.com/badri-2005/Machine-Learning'

    },
    {
      id: 5,
      src: uber,
      code:'https://github.com/badri-2005/Machine-Learning'

    }
  ]



  return (
    <div name='projects' className='w-full bg-gradient-to-b from-black to-gray-800 text-white md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500 uppercase '>Projects</p>
          <p className='py-6'>Check out some of my work right here</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:p-0 mb-10'>
          {
            projectworks.map(({ id, src ,code}) => (
              <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                <img src={src} alt="" className='rounded-md duration-200 hover:scale-105 w-3xl
                ' />
                <div className='flex items-center justify-center'>
                  {/* <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'><a href="">Demo</a></button> */}
                  <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'><a href={code}>Source Code</a></button>
                  <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105' >Description</button>


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
