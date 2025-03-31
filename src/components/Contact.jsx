import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black p-4 text-white'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg h-full mx-auto'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500 uppercase'>
                    Contact
                </p>
                <p className='py-6'>Submit the form below to get in touch with me!</p>
            </div>

            <div className='flex justify-center items-center'>
                <form action="https://getform.io/f/aolmweeb" method='POST' className='flex flex-col w-full md:w-1/2'>
                    <input type="text" name='name' placeholder='Your Name'  className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                    <input type="email" name='email' placeholder='Your Mail'  className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                    <textarea name="message" rows="10" placeholder='Your Message' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
                    <button className='text-white w-fit px-6 py-2 my-3 mx-auto flex items-center rounded bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer font-bold hover:scale-110 duration-300'>Let's Connect</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact