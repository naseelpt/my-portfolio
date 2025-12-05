import React, { useState } from 'react'
import logo from "../assets/Logo.png"
import {  Menu } from 'lucide-react'
import { Link } from 'react-router-dom'


function Header() {

  const [open , setopen] = useState(false)


  return (
  <>


  <div className="w-full md:fixed h-fit text-white py-6 px-6 md:px-28 ">
  <div className="w-full h-full flex justify-between items-center">
    
    
    <div className="flex items-center">
      <img src={logo} alt="" className="h-10" />
    </div>

    <div className="hidden md:flex gap-10 font-mono">
      <h1 className="text-white text-xl font-medium cursor-pointer">Home</h1>
      <h1 className="text-white text-xl font-medium cursor-pointer">About</h1>
      <h1 className="text-white text-xl font-medium cursor-pointer">Skills</h1>
      <h1 className="text-white text-xl font-medium cursor-pointer">Project</h1>
      <h1 className="text-white text-xl font-medium cursor-pointer">Contact</h1>
    </div>

   
    <div className="flex md:hidden relative">
      <Menu onClick={() => setopen(!open)} className="text-3xl" />

      {open && (
        <div className="absolute top-12 right-0 bg-white shadow-xl rounded-lg text-black text-lg font-semibold p-4 flex flex-col gap-3 min-w-32">
          <h1>Home</h1>
          <h1>About</h1>
          <h1>Skills</h1>
          <h1>Project</h1>
          <h1>Contact</h1>
        </div>
      )}
    </div>

  </div>
</div>




  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  </>
  )
}

export default Header