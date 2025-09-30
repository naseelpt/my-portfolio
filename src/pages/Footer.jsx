import React from 'react'
import undr from "../assets/undraw.svg"
import { LocateIcon, Mail, Phone } from 'lucide-react'


function Footer() {
  return (
    <div>




      <h1 className='text-white pt-32 text-center text-3xl md:text-5xl font-bold '>Contact</h1>

      <div className='md:px-32 px-6 py-20'>
        
        <div className=' bg-gradient-to-b  from-white w-full  to-fuchsia-500 rounded-2xl'>
          <h1 className='md:text-5xl text-3xl py-6 text-black text-center font-bold'>Get in touch</h1>
          <div className=' md:px-28 px-3 py- md:flex '>
  
           
  
              <div className=' '>
  
              <img src={undr} alt="no image" className='md:w-[300px] md:h-[300px]' />
  
              <div className='pt-4'>
  
                  <div className='flex gap-3 items-center py-4'>
                  <Mail md:size={35} className='text-black'/>
                  <h1 className='text-black text-xl font-mono'>ptnaseel@gmail.com</h1>
                </div>
  
                <div className='flex gap-3 items-center py-4'>
                  <Phone md:size={35} className='text-black'/>
                  <h1 className='text-black text-xl font-mono'>+91 6235639468</h1>
                </div>
  
                 <div className='flex gap-3 items-center py-4'>
                  <LocateIcon md:size={35} className='text-black'/>
                  <h1 className='text-black text-xl font-mono'>Malappuram,Kerala</h1>
                </div>
  
  
              </div>
  
  
            </div>
  
            <div className=' md:px-52 md:py-0 mt-10'>
  
              <div>
                <label className='text-black'>Your Name</label>
                <input type="text" placeholder='Enter your name  ' className='border border-black block placeholder:text-black md:w-[550px] w-72 p-3 mt-2' />
              </div>

                <div className='pt-2'>
                <label className='text-black'>Your Email</label>
                <input type="text" placeholder='Enter your name  ' className='border border-black block placeholder:text-black md:w-[550px] w-72 p-3 mt-2' />
              </div>

               <div className='pt-2'>
                <label className='text-black'>Your message</label>
                <textarea type="text" placeholder='Enter your name  ' className='border p-3 border-black placeholder:text-black md:w-[550px] w-72 h-40 mt-2' />
              </div>

              <button className='p-3 rounded-2xl mt-5 hover:bg-black hover:text-white bg-amber-50 font-bold'>Submit now</button>
  
            </div>
  
  
  
            
  
            </div>
        </div>

          </div>









    </div>
  )
}

export default Footer