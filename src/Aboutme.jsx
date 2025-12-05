import React, { useEffect, useState } from 'react'
import qwe from "./assets/qwer.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faFile  } from '@fortawesome/free-solid-svg-icons'
import resume from "./assets/My Resume.pdf"

function Aboutme() {





  return (


    <>
      <h1 className='text-white text-center py-10 md:py-32 md:text-5xl sm:text-4xl text-3xl font-bold '>About me</h1>




      <div className='w-full lg:px-6 xl:px-28 md:px-6 sm:px-6 px-2'>

        <div className='w-full md:flex gap-22 h-fit bg-gradient-to-b md:p-16 p-5  from-violet-500  to-fuchsia-200  rounded-4xl '>

         <div>
  <img
    src={qwe}
    alt=""
    className="w-full h-80 rounded-3xl object-cover"
  />
</div>


          <div className='md:flex-1 pt-5 md:pt-0'>
            <h1 className='text-xl font-bold'>Frontend React Js Developer</h1>

            <p className='pt-5'>Enthusiastic React JS Developer (Fresher) with hands-on experience in developing responsive and user-friendly web applications. Skilled
            in HTML, CSS, JavaScript, React.js, Bootstrap, Tailwind CSS, Git, GitHub, and REST APIs. Experienced in building and deploying projects
            on Netlify & GitHub. Passionate about frontend design, problem-solving, and continuous learning.</p>


            <div className='pt-6 md:flex gap-10'>

              <div >
                <h1 className='text-xl font-bold'>Education</h1>
                <p>Bachlore Of Computer Application (BCA)</p>
                <p>University of Calicut (2021 - 2024)</p>
              </div>

              <div>
                <h1 className=' text-xl font-bold'>Experience</h1>
                <p>Luminar Technolab - Mearn Stack ( 06/2024 - 12/2024 ) Kochi </p>

                <p>Docto Smart - React Js ( 01/2025 - 03/2025 ) Kozhikode </p>
              </div>


            </div>
              

               <div className='bg-black w-48 mt-10 rounded-2xl h-8 flex justify-center items-center '>
                <a href={resume} download="resume" className=' text-white'> Download Cv</a>
                <FontAwesomeIcon icon={faFile} style={{ color: "#eeeff2", }} className='' />
              </div>
           
          </div>

          




        </div>


      </div>



    </>
  )
}

export default Aboutme