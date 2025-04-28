import React, { useState } from 'react';
import Activities from './Activities';

const Portfolio = () => {
  const [showCertifications, setShowCertifications] = useState(false);
  const [showEvents, setShowEvents] = useState(false);
  const [showHackathons, setShowHackathons] = useState(false);

  const hackathons =[
    {
      id: 1,
      name: "Smart India Hackathon",
      theme:"Clean and Green Technology"},
    {
      id: 2,
      name: "MSME Idea Hackathon 4.0",
      theme:"Clean and Green Technology"},

      {
        id: 3,
        name: "MKCET Hackathon",
        theme:"SDG - 4 Quality Education"},
  ]

  const certifications = [
    {
      id:1,
      name:"The Joy of Computing Using Python",
      issued:"NPTEL"
    },
    {
      id:2,
      name:"Ethical Hacking",
      issued:"NPTEL"
    },
    {
      id:3,
      name:"C Programming",
      issued:"GUVI"
    },
    {
      id:4,
      name:"SQL Basics",
      issued:"HackerRank"
    },
    {
      id:5,
      name:"Front End Development",
      issued:"Imagecon Academy"
    },
    {
      id:6,
      name:"GEN AI",
      issued:"I18n Solutions"
    },
    {
      id:7,
      name:"Introduction to Industry 4.0 and Industrial Internet of Things",
      issued:"NPTEL"
    }
  ];

  const events = [
    {
      id: 1,
      name: "Codewar",
      college: "Park College of Engineering",
      details: "Conducted exclusively for first-year students. This was my first event which I have participated in my college",
    },
    {
      id: 2,
      name: "Paper Presentation",
      college: "Kongu Engineering College",
      details: "Participated on an insightful Paper Presentation. And presented a topic on 'Nanotechnology in Medicine'.",
    },
    {
      id: 3,
      name: "Paper Presentation",
      college: "Sona College of Technology",
      details: "Participated on an insightful Paper Presentation. And presented a topic on 'Nanotechnology in Medicine'.",
    },
    {
      id: 4,
      name: "Project Presentation",
      college: "Kongu Engineering College",
      details: "Participated on an insightful Project Presentation. And demonstrated our project on the topic 'Clean and Green Technology'.",
    },
    {
      id: 5,
      name: "Project Presentation",
      college: "Vinayaka Missions Kirpunandha Variyar Engineering College",
      details: "Participated on an insightful Project Presentation. And demonstrated our project on the topic 'Clean and Green Technology' for MSME and selected for the final round and opted for 8 Lakhs.",
    },
    {
      id: 6,
      name: "Project Presentation",
      college: "Amirtha Viswa Vidyapeetham",
      details: "Participated on an insightful Project Presentation. And demonstrated our project on the topic 'Clean and Green Technology'.",
    },
    {
      id: 7,
      name: "Flight Facts",
      college: "Amirtha Viswa Vidyapeetham",
      details: "Participated in the Flight Facts event organized by the team and enhanced more knowledge on Aeronautical Facts.",
    },
    {
      id: 8,
      name: "Sync and Solve",
      college: "Sona College of Technology",
      details: "Participated in Sync and Solve which tested my skills on DSA, OS, and DBMS.",
    },
    {
      id: 9,
      name: "Logo Redesign",
      college: "Sona College of Technology",
      details: "Participated in Logo Redesign event and redesigned the logo which was given by the Jury and selected as a top 8 participants.",
    },
    {
      id: 10,
      name: "Code Quest",
      college: "Madras Institute of Technology",
      details: "Participated in Code Quest event and solved 3 problems in 1 hour."
  },
  {
      id: 11,
      name: "Ninja Coding",
      college: "Madras Institute of Technology",
      details: "Participated in Ninja Coding and solved MCQ related to Programming and Algorithms and OS."
  },
  {
      id: 12,
      name: "Call of Query",
      college: "Madras Institute of Technology",
      details: "Participated in Call of Query and solved MCQ related to DBMS and SQL Queries."
  },
  {
      id: 13,
      name: "Squid Games",
      college: "Madras Institute of Technology",
      details: "Participated in Squid Games and solved MCQ related to DSA , OS , Algorithms and Logical Reasoning."
  },
  {
      id: 14,
      name: "AI Impromptu",
      college: "Madras Institute of Technology",
      details: "Participated in AI Impromptu where using AI we have to create a image on the topic shown by the Jury."
  },
  ];

  return (
    <div name="portfolio" className="w-full bg-gradient-to-b from-gray-800 to-black text-white md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-1">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 uppercase">Activities</p>
          <p className="py-6">Check out my Progress here!</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:p-0 mb-10">
          <div className="shadow-md shadow-gray-600 rounded-lg">
            <p className="text-2xl lg:text-4xl sm:text-4xl md:text-4xl font-bold p-5 text-center flex items-center">Certifications Received</p>
            <button className="group text-white w-fit px-6 py-2 my-3 mx-auto flex items-center rounded bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer font-bold" onClick={() => setShowCertifications(true)}>
              View
            </button>
          </div>

          {showCertifications && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
              <div className="bg-gray-900 p-5 rounded-lg max-w-md w-full">
                <h2 className="text-2xl font-bold mb-3 text-center">Certifications Recieved</h2>
                <ul className="text-white max-h-60 overflow-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800">
                  {certifications.map((certificate) => (
                    <li key={certificate.id} className="p-2 border-b border-gray-600">
                      {certificate.id} - {certificate.name} - {certificate.issued}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setShowCertifications(false)}
                  className="mt-4 w-70% bg-red-600 text-white px-2 py-2 rounded text-center flex-justify-center mx-auto"
                >
                  Close
                </button>
              </div>
            </div>
          )}

          <div className="shadow-md shadow-gray-600 rounded-lg">
            <p className="text-2xl lg:text-4xl sm:text-4xl md:text-4xl font-bold p-5 text-center items-center">Events Participated</p>
            <button
              onClick={() => setShowEvents(true)}
              className="group text-white w-fit px-6 py-2 my-3 mx-auto flex items-center rounded bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer font-bold"
            >
              View
            </button>
          </div>

          {showEvents && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
              <div className="bg-gray-900 p-5 rounded-lg max-w-md w-full">
                <h2 className="text-2xl font-bold mb-3 text-center">Events Participated</h2>
                <ul className="text-white max-h-60 overflow-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800">
                  {events.map((event) => (
                    <li key={event.id} className="p-2 border-b border-gray-600">
                      
                      <span className='font-bold'>Event No :</span> {event.id} <br /><br />
                      <span className='font-bold'>Event Name :</span> {event.name} <br /><br />
                      <span className='font-bold'>Event College : </span>{event.college} <br /> <br />
                      <span className='font-bold'>Event Details : </span>{event.details}
                      <br />
                      
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setShowEvents(false)}
                  className="mt-4 w-70% bg-red-600 text-white px-2 py-2 rounded text-center flex-justify-center mx-auto"
                >
                  Close
                </button>
              </div>
            </div>
          )}

          <div className="shadow-md shadow-gray-600 rounded-lg">
            <p className="text-2xl lg:text-4xl sm:text-4xl md:text-4xl font-bold p-5 text-center flex items-center">Hackathons Participated</p>
            <button className="group text-white w-fit px-6 py-2 my-3 mx-auto flex items-center rounded bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer font-bold"
              onClick={() => setShowHackathons(true)}
            >
              View
            </button>
          </div>

          {showHackathons && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
              <div className="bg-gray-900 p-5 rounded-lg max-w-md w-full">
                <h2 className="text-2xl font-bold mb-3 text-center">Hackathons Participated</h2>
                <ul className="text-white max-h-60 overflow-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800">
                  {hackathons.map((hackathon) => (
                    <li key={hackathon.id} className="p-2 border-b border-gray-600">
                      {hackathon.id} - {hackathon.name} - {hackathon.theme}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setShowHackathons(false)}
                  className="mt-4 w-70% bg-red-600 text-white px-2 py-2 rounded text-center flex-justify-center mx-auto"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
