import React from 'react'

const Activities = () => {
const events = [
    {
        id: 1,
        name: "Codewar",
        college: "Park College of Engineering",
        details: "Conducted exclusively for first-year students. This was my first event which I have participated in my college"
    },
    {
        id: 2,
        name: "Paper Presentation",
        college: "Kongu Engineering College",
        details: "Participated on an insightful Paper Presentation. And presented a topic on 'Nanotechnology in Medicine'."
    },
    {
        id: 3,
        name: "Paper Presentation",
        college: "Sona College of Technology",
        details: "Participated on an insightful Paper Presentation. And presented a topic on 'Nanotechnology in Medicine'."
    },
    {
        id: 4,
        name: "Project Presentation",
        college: "Kongu Engineering College",
        details: "Participated on an insightful Project Presentation. And demonstrated our project on the topic 'Clean and Green Technology'."
    },
    {
        id: 5,
        name: "Project Presentation",
        college: "Vinayaka Missions Kirpunandha Variyar Engineering College",
        details: "Participated on an insightful Project Presentation. And demonstrated our project on the topic 'Clean and Green Technology' for MSME and selected for the final round and opted for 8 Lakhs."
    },
    {
        id: 6,
        name: "Project Presentation",
        college: "Amirtha Viswa Vidyapeetham",
        details: "Participated on an insightful Project Presentation. And demonstrated our project on the topic 'Clean and Green Technology'."
    },
    {
        id: 7,
        name: "Flight Facts",
        college: "Amirtha Viswa Vidyapeetham",
        details: "Participated in the Flight Facts event organized by the team and enhanced more knowledge on Aeronautical Facts."
    },
    {
        id: 8,
        name: "Sync and Solve",
        college: "Sona College of Technology",
        details: "Participated in Sync and Solve which tested my skills on DSA,OS and DBMS."
    },
    {
        id: 9,
        name: "Logo Redesign",
        college: "Sona College of Technology",
        details: "Participated in Logo Redesign event and redesigned the logo which was given by the Jury and selected as a top 8 participants."
    },
];

return (
    <div name='activities'className="w-full bg-gradient-to-b from-gray-800 to-black text-white md:h-screen">
        <p className='text-xl font-bold text-white text-center md:text-4xl sm:text-4xl lg:text-4xl '>Events Participated</p>
    <div className="overflow-x-auto">
        <table className="w-[90%] mx-auto border-collapse my-5">
            <thead>
                <tr className="bg-gradient-to-b from-gray-800 to-black text-center">
                    <th className="border border-gray-600 p-2 text-white hidden md:table-cell">S.No</th>
                    <th className="border border-gray-600 p-2">Name of the Event</th>
                    <th className="border border-gray-600 p-2 ">College</th>
                    <th className="border border-gray-600 p-2 hidden md:table-cell">Details</th>
                </tr>
            </thead>

            <tbody>
                {events.map((event) => (
                    <tr key={event.id} className="bg-gray-900 text-center">
                        <td className="border border-gray-600 p-2 text-white hidden md:table-cell">{event.id}</td>
                        <td className="border border-gray-600 p-2 text-white">{event.name}</td>
                        <td className="border border-gray-600 p-2  text-white">{event.college}</td>
                        <td className="border border-gray-600 p-2 hidden md:table-cell text-white">{event.details}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    </div>
);
}

export default Activities;