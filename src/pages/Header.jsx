import React, { useState } from 'react'
import logo from "../assets/Logo.png"
import {  Menu } from 'lucide-react'
import { Link } from 'react-router-dom'


function Header() {

  const [open , setopen] = useState(false)


  return (
    <div className='w-full h-fit text-white py-6 md:px-58 px-12 '>

        <div className='w-full h-full  flex justify-between '>

          <div>
            <img src={logo} alt=""  />
          </div>

          <div className='hidden md:flex gap-6 font-mono' >
              <h1 className='text-white md:py-3 text-2xl font-medium'>Home</h1>
              <h1 className='text-white md:py-3 text-2xl font-medium'>About</h1>
              <h1 className='text-white md:py-3 text-2xl font-medium'>skills</h1>
              <h1 className='text-white md:py-3 text-2xl font-medium'>Project</h1>
              <h1 className='text-white md:py-3 text-2xl font-medium'>Contact </h1>
  
         </div>

         <div className='flex md:hidden '>
            <Menu onClick={()=>setopen(!open)}/>

            {open && 
                     <div >
                     <h1 className='text-white md:py-3 text-2xl font-medium'>Home</h1>
                     <h1 className='text-white md:py-3 text-2xl font-medium'>About</h1>
                     <h1 className='text-white md:py-3 text-2xl font-medium'>skills</h1>
                     <h1 className='text-white md:py-3 text-2xl font-medium'>Project</h1>
                     <h1 className='text-white md:py-3 text-2xl font-medium'>Contact </h1>
         
                </div>}
         </div>

        </div>

        
    </div>
  )
}

export default Header