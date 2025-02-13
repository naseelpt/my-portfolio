import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'motion/react'
import React from 'react'

function Project() {
  return (
    <div className='w-full h-fit'>
      <h1 className='px-32 py-32 text-5xl text-white font-bold'>My project</h1>

      <div className='md:grid grid-cols-1  '>


<div className=' px-16 flex'>
  <div className='pt-4 md:relative'>
    <div className='bg-white border rounded md:w-96 w-72 h-16 absolute z-21'>
      <h1 className=' text-4xl pt-2 font-medium ms-10'>Shopify</h1>
      

    </div>
   <a href='http://cloneshopifyfrontend.netlify.app'>
      <div className='absolute  md:ms-72 bg-black  h-5 md:w-12 flex justify-center items-center rounded-3xl mt-5 z-22'>
      <FontAwesomeIcon icon={faArrowRight} style={{color: "#f5f0f0",}} />
      </div>
   </a>
    
  </div>
  <div className='md:ps-80'>
    <motion.img
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      src="https://media.licdn.com/dms/image/v2/D4D12AQE4tBlgZquLiA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1685371122195?e=2147483647&v=beta&t=0mvfP4G8SIdGsiwR3p8lF6G4t3BCGbXRh5O5E43l7c8" alt="no image" className='h-56 w-96' />
  </div>



</div>

</div>


<div className='grid md:grid-cols-1  pt-24'>


        <div className=' md:px-80 flex'>

          <div className=' md:ps-80 '>
            <motion.img
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              src="https://img.freepik.com/free-photo/portrait-curly-girl-with-red-lipstick-taking-notes-tablet-pink-background-with-dressees_197531-17620.jpg" alt="no image" className=' md:h-56 md:w-96 ' />
          </div>


            <div className='pt-4 md:relative right-16   '>
            <div className='bg-white border rounded md:w-96 h-16 absolute max-md:left-0 flex'>
            
              <h1 className=' text-3xl pt-2 font-medium ms-5 '>E-commerce api</h1>
             
             
            <a href='http://client-frontond-design.netlify.app'>
               <div className='bg-black rounded-3xl h-5 w-12 flex justify-center items-center ms-16 mt-5'>
               <FontAwesomeIcon icon={faArrowRight} style={{color: "#f3f2f2",}} />
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