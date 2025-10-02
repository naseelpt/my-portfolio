import React from 'react'
import img from "../assets/image.png"
import ellip from "../assets/Ellipse 5.png"
import ep from "../assets/qwer.jpg"
import {motion } from 'motion/react'




function Home() {
  return (

    <div className='w-full'>


      <div className='md:px-30 md:pt-40 py-6 px-6 grid md:grid-cols-2 grid-cols-1 sm:grid-cols-1'>

       <div>
  <h1 className="text-xl text-white">Hey I am Muhammmed Naseel Pt</h1>

  <h1 className="text-white font-bold md:text-6xl text-4xl pt-4">
    Frontend <br /> React Js Developer
  </h1>

  <p className="text-white pt-5">
    Enthusiastic React JS Developer (Fresher) with hands-on experience in
    developing responsive and user-friendly web applications. Skilled in HTML,
    CSS, JavaScript, React.js, Bootstrap, Tailwind CSS, Git, GitHub, and REST
    APIs. Experienced in building and deploying projects on Netlify & GitHub.
    Passionate about frontend design, problem-solving, and continuous learning.
  </p>

  <div className="flex gap-2 py-5">
    <motion.button 
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }} 
     className="px-4 py-2 rounded-2xl font-medium border border-white hover:border-pink-500 text-white">
      Hire Me

      </motion.button>
   

    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="px-4 py-2 rounded-2xl font-medium border border-white hover:border-pink-500 text-white">
      Talk To Me
    </motion.button>
  </div>
</div>




        <div className="py-10 md:py-0 flex justify-end">
  <div className="md:w-[400px] w-80 h-80 md:h-[400px] rounded-full flex items-center justify-center bg-violet-300">
    <div className="md:w-[390px] w-[310px] h-[310px] md:h-[390px] rounded-full flex items-center justify-center bg-white">
      <img src={ep} alt="" className="md:w-[350px] md:h-[350px] w-72 h-72 rounded-full" />
    </div>
  </div>
</div>





      </div>







    </div>

  )
}

export default Home