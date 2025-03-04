import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'motion/react'
import React from 'react'

function Project() {
  return (
    <div className='w-full'>
      <h1 className='ms-16 py-32 text-5xl text-white font-bold'>My project</h1>




      <div className='grid md:grid-cols-1 md:ms-32 '>

        <div className=' md:px-80 flex'>

          <div className='md:pt-4 relative md:right-80  '>
            <div className='bg-white border rounded md:w-96 w-[360px] h-16 z-[999] absolute flex'>

              <h1 className=' text-3xl pt-2 font-medium ms-5 '>Shopify</h1>


              <a href='http://cloneshopifyfrontend.netlify.app'>
                <div className='bg-black rounded-3xl h-5 w-12 flex justify-center items-center md:ms-44 ms-[180px] mt-5'>
                  <FontAwesomeIcon icon={faArrowRight} style={{ color: "#f3f2f2", }} />
                </div>
              </a>

            </div>

          </div>


          <div className='  '>
            <motion.img
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              src="https://static.toiimg.com/thumb/msid-99993144,width-1280,height-720,resizemode-4/99993144.jpg" alt="no image" className=' md:h-56 md:w-96 h-54 ' />
          </div>





        </div>

      </div>



      <div className='grid md:grid-cols-1 md:ms-96 mt-24 '>

        <div className=' md:px-80 flex'>



          <div className=''>
            <motion.img
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              src="https://img.freepik.com/free-photo/portrait-curly-girl-with-red-lipstick-taking-notes-tablet-pink-background-with-dressees_197531-17620.jpg" alt="no image" className=' md:h-56 md:w-96 h-54 w-[400px] ' />
          </div>


          <div className='md:pt-4 relative right-[360px] md:right-16  '>
            <div className='bg-white border rounded md:w-96 w-[360px] h-16 z-[999] absolute flex'>

              <h1 className=' text-3xl pt-2 font-medium ms-5 whitespace-nowrap '>E-Commerce</h1>


              <a href='http://client-frontond-design.netlify.app'>
                <div className='bg-black rounded-3xl h-5 w-12 flex justify-center items-center md:ms-32 ms-[110px] mt-5'>
                  <FontAwesomeIcon icon={faArrowRight} style={{ color: "#f3f2f2", }} />
                </div>
              </a>

            </div>

          </div>








        </div>

      </div>



      <div className='grid md:grid-cols-1 md:ms-32 mt-24 '>

        <div className=' md:px-80 flex'>

          <div className='md:pt-4 relative md:right-80  '>
            <div className='bg-white border rounded md:w-96 w-[360px] h-16 z-[999] absolute flex'>

              <h1 className=' text-3xl pt-2 font-medium ms-5 '>Cheffy</h1>


              <a href='http://cheffyfront.netlify.app'>
                <div className='bg-black rounded-3xl h-5 w-12 flex justify-center items-center md:ms-52 ms-[195px] mt-5'>
                  <FontAwesomeIcon icon={faArrowRight} style={{ color: "#f3f2f2", }} />
                </div>
              </a>

            </div>

          </div>


          <div className='  '>
            <motion.img
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              src="https://cdn2.vectorstock.com/i/1000x1000/16/86/cartoon-kitchen-sink-with-different-kitchenware-vector-31101686.jpg" alt="no image" className=' md:h-56 md:w-96 h-64 w-[3450px] ' />
          </div>





        </div>

      </div>



      <div className='grid md:grid-cols-1 md:ms-96 mt-24 '>

        <div className=' md:px-80 flex'>



          <div className=''>
            <motion.img
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              src="https://img.freepik.com/free-photo/closeup-woman-vr-glasses-float-neon-space-with-cables-attached-her-metaverse-avatar-concept_1217-3924.jpg?t=st=1740983253~exp=1740986853~hmac=80905324c874896a44b03337190499634f8de5584feee8543e9640186a33b637&w=1800" alt="no image" className=' md:h-56 md:w-96 h-54 w-[400px] ' />
          </div>


          <div className='md:pt-4 relative right-[360px] md:right-16  '>
            <div className='bg-white border rounded md:w-96 w-[360px] h-16 z-[999] absolute flex'>

              <h1 className=' text-3xl pt-2 font-medium ms-5 whitespace-nowrap '>Software</h1>


              <a href='http://technologydesignfrontend.netlify.app'>
                <div className='bg-black rounded-3xl h-5 w-12 flex justify-center items-center md:ms-44 ms-[110px] mt-5'>
                  <FontAwesomeIcon icon={faArrowRight} style={{ color: "#f3f2f2", }} />
                </div>
              </a>

            </div>

          </div>








        </div>

      </div>













    </div>
  )
}

export default Project


