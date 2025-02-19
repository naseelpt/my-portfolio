import React from 'react'
import img from "../assets/image.png"
import ellip from "../assets/Ellipse 5.png"
import { motion } from 'motion/react'
import { div } from 'motion/react-client'


function Home() {
  return (
    
    <div className='w-full h-fit'>
         <div className='grid md:grid-cols-4 py-36'>
            <div></div>
            <div className='ba w-96 h-96 flex justify-center items-center  ' >
              <motion.img
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: '.5' }} src={img} alt="no image" />
    
            </div>

            <div className='md:py-7'>
          <h1 className='text-white text-2xl -ps-10'>Hello! I Am <span style={{ color: "violet" }}> Muhammed naseel pt</span></h1>
          <h1 className='text-white text-2xl pt-10'>A Designer who</h1>
          <h1 className='text-white text-6xl pt-2'>judges a book</h1>
          <div className='flex items-end  gap-4 '>
            <h1 className='text-white text-6xl pt-5 '>by its</h1>
            <div className='relative'>
              <motion.img
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: '1' }}
                src={ellip} alt="no image" className=' w-44 h-fit pt-5' />
              <h1 className=' text-white text-5xl  absolute left-4 top-5 '><span style={{ color: 'violet' }}>cover</span> ...</h1>

            </div>

          </div>




        </div>
        </div>


        
      <div className='grid grid-cols-1'>
        <div className='pt-10'>
          <h1 className=' text-5xl  text-white text-center '>I'm a Web Designer frontond</h1>
          <h1 className='text-white text-2xl text-center'>currently.i am a web designer</h1>
          <p className='md:px-96 text-white pt-10'>Motivated React Developer Intern with a solid understanding of HTML, CSS, JavaScript, React.js, Bootstrap, Git, Tailwind. Experienced in developing and maintaining frontend web applications. responsive and designs skills and the ability to adapt to new challenges. Committed to continuous learning, improving technical skills, and contributing to team-driven projects in a collaborative environment</p>
        </div>
      </div>
    </div>
    
  )
}

export default Home