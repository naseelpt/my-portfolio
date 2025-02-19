import React, { useEffect, useState } from 'react'
import qwe from "./assets/qwer.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBug, faDiagramProject, faFile, faUserSecret } from '@fortawesome/free-solid-svg-icons'
import resume from "./assets/My Resume.pdf"

function Aboutme() {



  return (


<>
<h1 className='text-white px-32 py-32 text-5xl font-bold p-12 pt-28'>About me</h1>
       <div className='md:p-20' >

    <div className='w-full h-fit bg-gradient-to-b  from-violet-500 to-fuchsia-200 grid grid-cols-1 md:grid-cols-2  rounded-4xl  '>
        <div className='md:px-40 px-10 py-10  hover:transform hover:scale-110 duration-300'>
            <img src={qwe} alt="no image" className='w-72 h-72 rounded-4xl' />
        </div>

        <div className='pt-10'>
        
        <div className='flex gap-5 md:gap-10 '>
            <div className='bg-black  w-28 h-28 rounded-2xl flex flex-col items-center justify-center hover:transform hover:scale-125 duration-300'>
            <FontAwesomeIcon icon={faUserSecret} style={{color: "#f4f5f6",}}  />
            <h1 className=' text-white text-xl'>Experience</h1>
            </div>

            <div className='bg-black  w-28 h-28 rounded-2xl flex flex-col items-center justify-center  hover:transform hover:scale-125 duration-300 '>
            <FontAwesomeIcon icon={faDiagramProject} style={{color: "#fcfcfd",}} />
            <h1 className=' text-white text-xl'>Completed</h1>
            </div>

            <div className='bg-black  w-28 h-28 rounded-2xl flex flex-col items-center justify-center  hover:transform hover:scale-125 duration-300 '>
            <FontAwesomeIcon icon={faBug} style={{color: "#f5f5f5",}} />
            <h1 className=' text-white text-xl'>Report</h1>
            </div>
        </div>

        <div className='mt-10 md:p-0 p-10'>
        <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores blanditiis aperiambr <br /> porro natus alias molestias quos porro natus alias molestias quos </p>

       <div className='bg-black w-48 mt-5 rounded-2xl h-8 flex justify-center items-center '>
       <a href={resume} download="resume" className=' text-white'> Download Cv</a>
            <FontAwesomeIcon icon={faFile} style={{color: "#eeeff2",}} className='ms-2'/>
       </div>
        </div>
        
        </div>

    </div>

    </div>

    </>
  )
}

export default Aboutme