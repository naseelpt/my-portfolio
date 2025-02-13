import React from 'react'
import undr from "../assets/undraw.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <div>


<div className='md:p-32   '>
        <div className=' bg-gradient-to-b  from-violet-800 to-fuchsia-500  outline-amber-50 rounded-2xl flex justify-between items-center px-12 flex-col md:flex-row '>

          <div className='flex items-center justify-center md:px-10'>
            <img src={undr} alt="no image" className='pt-16 md:w-[900px] md:h-[600px]' />
          </div>

          <div className='w-fit px-24 ' >
            <h1 className='text-4xl font-medium'>Contact us</h1>

         <div className='flex'>
              <div className='pt-10 '>
  
                <p className='text-xl'>Full Name</p>
                <input type="text" placeholder='name' className='outline w-52 h-0' />
  
                <p className='text-xl pt-10'>Full Name</p>
                <input type="text" placeholder='name' className='outline w-52 h-0' />
  
                <p className='text-xl pt-10'>Full Name</p>
                <input type="text" placeholder='name' className='outline w-52 h-0' />

                <div className='pt-10'>
                <button className='bg-yellow-400 w-34 h-9 rounded-3xl '>Contact us</button>
              </div>
               
              </div>



             
         </div>


          </div>

          <div className='pt-14 md:ps-24'>
                <h1 className='text-2xl font-medium'>contact</h1>
                <p className='font-light text-xl'> ptnaseel@gmail.com</p>

                <h1 className='text-2xl font-medium pt-5'>Based in</h1>
                <p className='font-light text-xl'> Kerala, Malappuram</p>

                <div className='pt-16 flex justify-between'>
                <FontAwesomeIcon icon={faFacebook} style={{color: "#FFD43B",}} className='text-4xl' />
                <FontAwesomeIcon icon={faInstagram} style={{color: "#FFD43B",}} className='text-4xl' />
                <FontAwesomeIcon icon={faTwitter} style={{color: "#FFD43B",}} className='text-4xl' />
                
                </div>
              </div>


        </div>
      </div> 




    </div>
  )
}

export default Footer