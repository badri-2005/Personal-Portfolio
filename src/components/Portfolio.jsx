import React, { useState } from 'react';

const certificateData = [
  {
    semester: 'Semester 1',
    items: [
      { title: 'Internship Certificate', file: '/Certificates/Semester 1/BADRI NARAYANAN B R - Internship.pdf' },
      { title: 'Codewar Participation', file: '/Certificates/Semester 1/codewar.jpeg' },
      { title: 'The Joy of Computing Using Python', file: '/Certificates/Semester 1/The Joy of Computing using Python.pdf' },
    ],
  },
  {
    semester: 'Semester 2',
    items: [
      { title: 'InternPe Internship', file: '/Certificates/Semester 2/BADRI NARAYANAN B R - internpe.png' },
      { title: 'Imagecon Academy Frontend', file: '/Certificates/Semester 2/imagecon-academy-2cs badri.jpg' },
      { title: 'KEC Event Certificate (Version 1)', file: '/Certificates/Semester 2/sem 2 - kec.pdf' },
      { title: 'Sona Non-Tech Event', file: '/Certificates/Semester 2/sem 2 - sona non tech.pdf' },
      { title: 'Sona Event Certificate', file: '/Certificates/Semester 2/sem 2 - sona.pdf' },
      { title: 'KEC Event Certificate (Version 2)', file: '/Certificates/Semester 2/sem 2 kec .pdf' },
      { title: 'Web Development Course', file: '/Certificates/Semester 2/web dev - course.jpeg' },
    ],
  },
  {
    semester: 'Semester 3',
    items: [
      { title: 'Amrita Flight Facts', file: '/Certificates/Semester 3/Badri Narayanan B R - amirtha flight facts.jpg' },
      { title: 'Amrita Pitch Perfect', file: '/Certificates/Semester 3/BADRI NARAYANAN B R - amirtha pitch perfect.jpg' },
      { title: 'Ethical Hacking', file: '/Certificates/Semester 3/Ethical Hacking.pdf' },
      { title: 'Kongu Idea Presentation', file: '/Certificates/Semester 3/sem 3 - Kongu idea presentation .pdf' },
    ],
  },
  {
    semester: 'Semester 4',
    items: [
      { title: 'Gen AI Internship', file: '/Certificates/Semester 4/gen ai intern.jpg' },
      { title: 'Hackathon - 4th Semester', file: '/Certificates/Semester 4/hackathon 4 th sem.pdf' },
      { title: 'Industry 4.0 and IIoT', file: '/Certificates/Semester 4/Introduction To Industry 4.0 And Industrial Internet Of Things.pdf' },
      { title: 'MIT Event Certificate 2', file: '/Certificates/Semester 4/mit 2.pdf' },
      { title: 'MIT Event Certificate 3', file: '/Certificates/Semester 4/mit 3.pdf' },
      { title: 'MIT Event Certificate 4', file: '/Certificates/Semester 4/mit 4.pdf' },
      { title: 'Paper Conference', file: '/Certificates/Semester 4/Paper Confernece.jpeg' },
      { title: 'SQL - Basic', file: '/Certificates/Semester 4/SQL-Basic.pdf' },
    ],
  },
  {
    semester: 'Semester 5',
    items: [
      { title: 'Elevate Labs', file: '/Certificates/Semester 5/elevate labs.png' },
      { title: 'Hackathon - 5th Semester', file: '/Certificates/Semester 5/hackathon 5th sem.pdf' },
      { title: 'APT Internship', file: '/Certificates/Semester 5/internship - apt.pdf' },
    ],
  },
  {
    semester: 'Semester 6',
    items: [
      { title: 'EF SET Certificate', file: '/Certificates/Semester 6/EF SET Certificate.pdf' },
      { title: 'Java Basic Certificate', file: '/Certificates/Semester 6/java_basic certificate.pdf' },
    ],
  },
];

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
        {
          id: 4,
          name: "Accenture Innovation Challenge",
          theme:"Climate Prediction and Early Warning System - Ideation Phase"},
          {
        id: 5,
        name: "DevSpark - KPRIET",
        theme:"SDG - 4 Quality Education"},
        {
      id: 6,
      name: "MSME Idea Hackathon 5.0",
      theme:"Low Carbon Footprint Solution"},


  ]

  const certifications = [
    {
      id:1,
      name:"The Joy of Computing Using Python",
      issued:"NPTEL - Elite"
    },
    {
      id:2,
      name:"Ethical Hacking",
      issued:"NPTEL - Elite"
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
      issued:"NPTEL - Elite + Silver"
    },
    {
      id:8,
      name:"Python for Data Science",
      issued:"IBM"
    },
    {
      id:9,
      name:"HTML & CSS",
      issued:"GUVI"
    },
    {
      id:10,
      name:"Python - Basics",
      issued:"GUVI"
    },
    {
      id:11,
      name:"Java - Basics",
      issued:"HackerRank"
    },
    {
      id:12,
      name:"Affective Computing",
      issued:"NPTEL - Elite + Silver"
    },
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
  {
    id: 15,
    name: "Paper Publication",
    college: "AL Ameen Engineering College",
    details: "Participated in Paper Publication and published a paper on the topic 'Cancer Sniffer Patch - A Early Way for Detecting Lung Cancer througn VOC."
},
  ];

  return (
    <div name="portfolio" className="w-full min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-950 text-white pt-28 pb-32">
      <div className="max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-1">
          <p
            className="text-4xl font-bold inline border-b-4 border-cyan-500 uppercase"
            style={{ fontFamily: "'Comic Sans MS', cursive, sans-serif" }}
          >
            Activities
          </p>
          <p className="py-6">Check out my Progress here!</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-0 mb-10">
          <div className="shadow-md shadow-gray-600 rounded-xl border border-gray-700/40 bg-gray-900/40 hover:shadow-cyan-700/30 hover:-translate-y-1 transition duration-300">
            <p className="text-2xl lg:text-4xl sm:text-4xl md:text-4xl font-bold p-5 text-center flex items-center">Certifications Received</p>
            <button className="group text-white w-fit px-6 py-2 my-3 mx-auto flex items-center rounded bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer font-bold" onClick={() => setShowCertifications(true)}>
              View
            </button>
          </div>

          {showCertifications && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
              <div className="bg-gray-900 p-5 rounded-xl border border-cyan-800/60 shadow-2xl shadow-cyan-900/30 max-w-4xl w-[95%]">
                <h2 className="text-2xl font-bold mb-4 text-center text-cyan-300">Certifications Received</h2>
                <div className="max-h-72 overflow-auto rounded-lg border border-gray-700">
                  <table className="w-full text-sm text-left text-gray-200">
                    <thead className="bg-gray-800 text-cyan-200 sticky top-0">
                      <tr>
                        <th className="px-4 py-3">No</th>
                        <th className="px-4 py-3">Certification</th>
                        <th className="px-4 py-3">Issued By</th>
                      </tr>
                    </thead>
                    <tbody>
                      {certifications.map((certificate) => (
                        <tr key={certificate.id} className="odd:bg-gray-900 even:bg-gray-950 border-b border-gray-800">
                          <td className="px-4 py-3 font-semibold text-cyan-100">{certificate.id}</td>
                          <td className="px-4 py-3">{certificate.name}</td>
                          <td className="px-4 py-3 text-gray-300">{certificate.issued}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <button
                  onClick={() => setShowCertifications(false)}
                  className="mt-5 bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md text-center flex-justify-center mx-auto transition"
                >
                  Close
                </button>
              </div>
            </div>
          )}

          <div className="shadow-md shadow-gray-600 rounded-xl border border-gray-700/40 bg-gray-900/40 hover:shadow-cyan-700/30 hover:-translate-y-1 transition duration-300">
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
              <div className="bg-gray-900 p-5 rounded-xl border border-cyan-800/60 shadow-2xl shadow-cyan-900/30 max-w-6xl w-[96%]">
                <h2 className="text-2xl font-bold mb-4 text-center text-cyan-300">Events <br/> Participated</h2>
                <div className="max-h-80 overflow-auto rounded-lg border border-gray-700">
                  <table className="w-full text-sm text-left text-gray-200">
                    <thead className="bg-gray-800 text-cyan-200 sticky top-0">
                      <tr>
                        <th className="px-4 py-3">No</th>
                        <th className="px-4 py-3">Event</th>
                        <th className="px-4 py-3">College</th>
                        <th className="px-4 py-3">Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      {events.map((event) => (
                        <tr key={event.id} className="odd:bg-gray-900 even:bg-gray-950 border-b border-gray-800 align-top">
                          <td className="px-4 py-3 font-semibold text-cyan-100">{event.id}</td>
                          <td className="px-4 py-3 font-medium">{event.name}</td>
                          <td className="px-4 py-3 text-gray-300">{event.college}</td>
                          <td className="px-4 py-3 text-gray-300">{event.details}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <button
                  onClick={() => setShowEvents(false)}
                  className="mt-5 bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md text-center flex-justify-center mx-auto transition"
                >
                  Close
                </button>
              </div>
            </div>
          )}

          <div className="shadow-md shadow-gray-600 rounded-xl border border-gray-700/40 bg-gray-900/40 hover:shadow-cyan-700/30 hover:-translate-y-1 transition duration-300">
            <p className="text-2xl lg:text-4xl sm:text-4xl md:text-4xl font-bold p-5 text-center flex items-center">Hackathons Participated</p>
            <button className="group text-white w-fit px-6 py-2 my-3 mx-auto flex items-center rounded bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer font-bold"
              onClick={() => setShowHackathons(true)}
            >
              View
            </button>
          </div>

          {showHackathons && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
              <div className="bg-gray-900 p-5 rounded-xl border border-cyan-800/60 shadow-2xl shadow-cyan-900/30 max-w-4xl w-[95%]">
                <h2 className="text-2xl font-bold mb-4 text-center text-cyan-300">Hackathons Participated</h2>
                <div className="max-h-72 overflow-auto rounded-lg border border-gray-700">
                  <table className="w-full text-sm text-left text-gray-200">
                    <thead className="bg-gray-800 text-cyan-200 sticky top-0">
                      <tr>
                        <th className="px-4 py-3">No</th>
                        <th className="px-4 py-3">Hackathon</th>
                        <th className="px-4 py-3">Theme</th>
                      </tr>
                    </thead>
                    <tbody>
                      {hackathons.map((hackathon) => (
                        <tr key={hackathon.id} className="odd:bg-gray-900 even:bg-gray-950 border-b border-gray-800">
                          <td className="px-4 py-3 font-semibold text-cyan-100">{hackathon.id}</td>
                          <td className="px-4 py-3">{hackathon.name}</td>
                          <td className="px-4 py-3 text-gray-300">{hackathon.theme}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <button
                  onClick={() => setShowHackathons(false)}
                  className="mt-5 bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md text-center flex-justify-center mx-auto transition"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="mt-8 md:mt-12 bg-gray-900/30 border border-cyan-900/30 rounded-2xl p-4 md:p-6">
          <h2 className="text-3xl font-bold border-l-4 border-cyan-400 pl-4 mb-3">Semester-wise Certificates</h2>
          <p className="text-gray-300 mb-7">All certificates are grouped by semester with preview and description.</p>

          <div className="space-y-8">
            {certificateData.map((semesterGroup) => (
              <section key={semesterGroup.semester} className="bg-gray-900/35 border border-gray-700/50 rounded-2xl p-4 md:p-6">
                <h3 className="text-xl md:text-2xl font-semibold mb-5 text-cyan-300">{semesterGroup.semester}</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {semesterGroup.items.map((item) => {
                    const isPdf = item.file.toLowerCase().endsWith('.pdf');
                    return (
                      <a
                        key={item.file}
                        href={item.file}
                        target="_blank"
                        rel="noreferrer"
                        className="group rounded-xl overflow-hidden border border-gray-700 bg-gray-950/70 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-900/40 transition duration-300"
                      >
                        {isPdf ? (
                          <div className="h-52 bg-black">
                            <iframe
                              src={`${item.file}#toolbar=0&navpanes=0&scrollbar=0`}
                              title={item.title}
                              className="w-full h-full"
                            />
                          </div>
                        ) : (
                          <img src={item.file} alt={item.title} className="h-52 w-full object-cover group-hover:scale-105 transition duration-300" />
                        )}

                        <div className="p-4">
                          <h4 className="font-bold text-lg leading-tight text-center">{item.title}</h4>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
