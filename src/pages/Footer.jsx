import React from 'react'
import undr from "../assets/undraw.svg"
import { LocateIcon, Mail, Phone } from 'lucide-react'


function Footer() {
  return (
    <div>




      <h1 className='text-white pt-32 text-center text-3xl md:text-5xl font-bold '>Contact</h1>

      <div className="xl:px-32 px-3 py-20">
        <div className="bg-gradient-to-b from-white to-fuchsia-500 w-full rounded-2xl">
          <h1 className="md:text-5xl text-3xl py-6 text-black text-center font-bold">
            Get in touch
          </h1>


          <div className="md:px-28 px-3 lg:flex justify-between gap-10">


            <div className="flex flex-col items-center lg:items-start">
              <img
                src={undr}
                alt="no image"
                className="md:w-[300px] md:h-[300px] w-56 h-56 object-contain"
              />

              <div className="pt-6">
                <div className="flex gap-3 items-center py-4">
                  <Mail size={35} className="text-black" />
                  <h1 className="text-black text-xl font-mono">ptnaseel@gmail.com</h1>
                </div>

                <div className="flex gap-3 items-center py-4">
                  <Phone size={35} className="text-black" />
                  <h1 className="text-black text-xl font-mono">+91 6235639468</h1>
                </div>

               
              </div>
            </div>


            <div className="w-full lg:w-1/2 px-2 py-10">

              <div>
                <label className="text-black font-medium">Your Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="border border-black placeholder:text-black w-full p-3 mt-2 rounded-md"
                />
              </div>

              <div className="pt-4">
                <label className="text-black font-medium">Your Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="border border-black placeholder:text-black w-full p-3 mt-2 rounded-md"
                />
              </div>


              <div className="pt-4">
                <label className="text-black font-medium">Your Message</label>
                <textarea
                  placeholder="Enter your message"
                  className="border border-black placeholder:text-black w-full p-3 h-40 mt-2 rounded-md"
                />
              </div>


              <button className="p-3 rounded-2xl mt-6 hover:bg-black hover:text-white bg-amber-50 font-bold w-40">
                Submit now
              </button>
            </div>
          </div>
        </div>
      </div>










    </div>
  )
}

export default Footer