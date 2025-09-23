import React from 'react'
import img from "../assets/image.png"
import ellip from "../assets/Ellipse 5.png"
import { motion } from 'motion/react'



function Home() {
  return (
    
    <div className=''>
         <div className='grid md:grid-cols-4 sm-grid-cols-2 grid-cols-1 py-36'>
            <div></div>


            <div className='ba md:w-full h-96 flex justify-center items-center  ' >
              <motion.img
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: '.5' }} src={img} alt="no image" />
    
            </div>

            <div className='py-10 p-3 md:p-0'>
          <h1 className='text-white text-2xl -ps-10'>Hello! I Am <span style={{ color: "violet" }}> Muhammed naseel pt</span></h1>
          <h1 className='text-white text-2xl pt-10'>A Designer who</h1>
          <h1 className='text-white md:text-6xl text-4xl pt-2'>judges a book</h1>


          <div className='flex items-end  gap-4 '>
            <h1 className='text-white md:text-6xl text-4xl pt-5 '>by its</h1>
            <div className='relative flex '>
              <motion.img
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: '1' }}
                src={ellip} alt="no image" className=' w-48 h-fit pt-7 ' />
              <h1 className=' text-white text-5xl  absolute md:left-4 left-4 top-8 '><span style={{ color: 'violet' }}>cover</span>  ...</h1>

            </div>

          </div>




        </div>

        <div></div>

        </div>


        
      <div className='grid  grid-cols-1 p-3 md:p-0'>
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