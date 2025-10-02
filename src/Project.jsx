import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'motion/react'
import tr from '../src/assets/travel.jpg'
import bo from '../src/assets/boo.jpg'
import React from 'react'
import { ArrowRight } from 'lucide-react'


function Project() {


  return (
    <div className='w-full'>
      <h1 className='text-center py-32 md:text-5xl text-3xl text-white font-bold'>My project</h1>



      <div className=' grid-cols-4 md:grid hidden gap-8 px-32 '>

        <div className=' bg-amber-50 w-full h-full'>
          <div className='relative group'>
            <img src="https://static.toiimg.com/thumb/msid-99993144,width-1280,height-720,resizemode-4/99993144.jpg" alt="" className='w-full h-48' />

            <a href='http://cloneshopifyfrontend.netlify.app'>
              <div className=' absolute hidden group-hover:flex top-1/2 w-full -translate-y-1/2 left-1/2 justify-center items-center duration-200 -translate-x-1/2  h-full group-hover:backdrop-blur-sm'>
                <button className='bg-red-500 p-2 w-64  text-white rounded-3xl'>View Project</button>
              </div>
            </a>
          </div>

          <h1 className='font-bold px-3'>Shopify Design</h1>


          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotateY: 45 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="py-3 px-3 flex flex-wrap gap-2"
          >
            <button className="bg-black text-white font-mono px-3 py-1 rounded-4xl">Html</button>
            <button className="bg-black text-white font-mono px-3 py-1 rounded-4xl">Css</button>
            <button className="bg-black text-white font-mono px-3 py-1 rounded-4xl">Java Script</button>
            <button className="bg-black text-white font-mono px-3 py-1 rounded-4xl">React</button>
            <button className="bg-black text-white font-mono px-3 py-1 rounded-4xl">Tailwind</button>
            <button className="bg-black text-white font-mono px-3 py-1 rounded-4xl">Git</button>
          </motion.div>


        </div>

        <div className=' bg-amber-50 w-full h-full'>
          <div className='relative group'>
            <img src="https://img.freepik.com/free-photo/portrait-curly-girl-with-red-lipstick-taking-notes-tablet-pink-background-with-dressees_197531-17620.jpg" alt="" className='w-full h-48' />

            <a href='http://client-frontond-design.netlify.app'>
              <div className=' absolute hidden group-hover:flex top-1/2 w-full -translate-y-1/2 left-1/2 justify-center items-center duration-200 -translate-x-1/2  h-full group-hover:backdrop-blur-sm'>
                <button className='bg-red-500 p-2 w-64  text-white rounded-3xl'>View Project</button>
              </div>
            </a>
          </div>

          <h1 className='font-bold px-3'>E commerce Fetch api</h1>


          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotateY: 45 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="py-3 px-3 flex flex-wrap gap-2"
          >
            <button className="bg-black text-white font-mono px-3 py-1 rounded-4xl">Html</button>
            <button className="bg-black text-white font-mono px-3 py-1 rounded-4xl">Css</button>
            <button className="bg-black text-white font-mono px-3 py-1 rounded-4xl">Java Script</button>
            <button className="bg-black text-white font-mono px-3 py-1 rounded-4xl">React</button>
            <button className="bg-black text-white font-mono px-3 py-1 rounded-4xl">Tailwind</button>
            <button className="bg-black text-white font-mono px-3 py-1 rounded-4xl">Git</button>
          </motion.div>


        </div>

        <div className=' bg-amber-50 w-full h-full'>
          <div className='relative group'>
            <img src="https://cdn2.vectorstock.com/i/1000x1000/16/86/cartoon-kitchen-sink-with-different-kitchenware-vector-31101686.jpg" alt="" className='w-full h-48' />

            <a href='http://cheffyfront.netlify.app'>
              <div className=' absolute hidden group-hover:flex top-1/2 w-full -translate-y-1/2 left-1/2 justify-center items-center duration-200 -translate-x-1/2  h-full group-hover:backdrop-blur-sm'>
                <button className='bg-red-500 p-2 w-64  text-white rounded-3xl'>View Project</button>
              </div>
            </a>
          </div>

          <h1 className='font-bold px-3'>Chuffy Design</h1>


          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotateY: 45 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="py-3 px-3 flex flex-wrap gap-2"
          >
            <button className="bg-black text-white font-mono px-3 py-1 rounded-4xl">Html</button>
            <button className="bg-black text-white font-mono px-3 py-1 rounded-4xl">Css</button>
            <button className="bg-black text-white font-mono px-3 py-1 rounded-4xl">Java Script</button>
            <button className="bg-black text-white font-mono px-3 py-1 rounded-4xl">React</button>
            <button className="bg-black text-white font-mono px-3 py-1 rounded-4xl">Tailwind</button>
            <button className="bg-black text-white font-mono px-3 py-1 rounded-4xl">Git</button>
          </motion.div>


        </div>

        <div className=' bg-amber-50 w-full h-full'>
          <div className='relative group'>
            <img src="https://img.freepik.com/free-photo/closeup-woman-vr-glasses-float-neon-space-with-cables-attached-her-metaverse-avatar-concept_1217-3924.jpg?t=st=1740983253~exp=1740986853~hmac=80905324c874896a44b03337190499634f8de5584feee8543e9640186a33b637&w=1800" alt="" className='w-full h-48' />

            <a href='http://technologydesignfrontend.netlify.app'>
              <div className=' absolute hidden group-hover:flex top-1/2 w-full -translate-y-1/2 left-1/2 justify-center items-center duration-200 -translate-x-1/2  h-full group-hover:backdrop-blur-sm'>
                <button className='bg-red-500 p-2 w-64  text-white rounded-3xl'>View Project</button>
              </div>
            </a>
          </div>

          <h1 className='font-bold px-3'>Technology Design</h1>


          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotateY: 45 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="py-3 px-3 flex flex-wrap gap-2"
          >
            <button className="bg-black text-white font-mono px-3 py-1 rounded-4xl">Html</button>
            <button className="bg-black text-white font-mono px-3 py-1 rounded-4xl">Css</button>
            <button className="bg-black text-white font-mono px-3 py-1 rounded-4xl">Java Script</button>
            <button className="bg-black text-white font-mono px-3 py-1 rounded-4xl">React</button>
            <button className="bg-black text-white font-mono px-3 py-1 rounded-4xl">Tailwind</button>
            <button className="bg-black text-white font-mono px-3 py-1 rounded-4xl">Git</button>
          </motion.div>


        </div>

        <div className=' bg-amber-50 w-full h-full'>
          <div className='relative group'>
            <img src={tr} alt="" className='w-full h-48' />

            <a href='https://travelingdesign.netlify.app/'>
              <div className=' absolute hidden group-hover:flex top-1/2 w-full -translate-y-1/2 left-1/2 justify-center items-center duration-200 -translate-x-1/2  h-full group-hover:backdrop-blur-sm'>
                <button className='bg-red-500 p-2 w-64  text-white rounded-3xl'>View Project</button>
              </div>
            </a>
          </div>

          <h1 className='font-bold px-3'>Traveling Design</h1>


          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotateY: 45 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="py-3 px-3 flex flex-wrap gap-2"
          >
            <button className="bg-black text-white font-mono px-3 py-1 rounded-4xl">Html</button>
            <button className="bg-black text-white font-mono px-3 py-1 rounded-4xl">Css</button>
            <button className="bg-black text-white font-mono px-3 py-1 rounded-4xl">Java Script</button>
            <button className="bg-black text-white font-mono px-3 py-1 rounded-4xl">React</button>
            <button className="bg-black text-white font-mono px-3 py-1 rounded-4xl">Tailwind</button>
            <button className="bg-black text-white font-mono px-3 py-1 rounded-4xl">Git</button>
          </motion.div>


        </div>

        <div className=' bg-amber-50 w-full h-full'>
          <div className='relative group'>
            <img src="https://img.freepik.com/free-photo/empty-online-radio-studio-broadcasting-room-with-professional-microphone-video-light-used-podcast-transmission-video-podcasting-setup-with-digital-mixer-console-laptop-computer_482257-33423.jpg?t=st=1742283680~exp=1742287280~hmac=d34ccc1d99f6d3297c984af8a671f5a3364124644e86c77f38c2d854cfa86e2b&w=1380" alt="" className='w-full h-48' />

            <a href='http://studiodesignfront.netlify.app'>
              <div className=' absolute hidden group-hover:flex top-1/2 w-full -translate-y-1/2 left-1/2 justify-center items-center duration-200 -translate-x-1/2  h-full group-hover:backdrop-blur-sm'>
                <button className='bg-red-500 p-2 w-64  text-white rounded-3xl'>View Project</button>
              </div>
            </a>
          </div>

          <h1 className='font-bold px-3'>Studio Design</h1>


          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotateY: 45 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="py-3 px-3 flex flex-wrap gap-2"
          >
            <button className="bg-black text-white font-mono px-3 py-1 rounded-4xl">Html</button>
            <button className="bg-black text-white font-mono px-3 py-1 rounded-4xl">Css</button>
            <button className="bg-black text-white font-mono px-3 py-1 rounded-4xl">Java Script</button>
            <button className="bg-black text-white font-mono px-3 py-1 rounded-4xl">React</button>
            <button className="bg-black text-white font-mono px-3 py-1 rounded-4xl">Tailwind</button>
            <button className="bg-black text-white font-mono px-3 py-1 rounded-4xl">Git</button>
          </motion.div>


        </div>

        <div className=' bg-amber-50 w-full h-full'>
          <div className='relative group'>
            <img src="https://www.cosmeticsdesign-asia.com/resizer/bZMyviBPg8d1S34IklV83MKQBdE=/arc-photo-williamreed/eu-central-1-prod/public/OGCEL3H6JBPH5CZ3AK5IVVF2ZM.jpg" alt="" className='w-full h-48' />

            <a href='https://perfumedesign.netlify.app/'>
              <div className=' absolute hidden group-hover:flex top-1/2 w-full -translate-y-1/2 left-1/2 justify-center items-center duration-200 -translate-x-1/2  h-full group-hover:backdrop-blur-sm'>
                <button className='bg-red-500 p-2 w-64  text-white rounded-3xl'>View Project</button>
              </div>
            </a>
          </div>

          <h1 className='font-bold px-3'>Studio Design</h1>


          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotateY: 45 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="py-3 px-3 flex flex-wrap gap-2"
          >
            <button className="bg-black text-white font-mono px-3 py-1 rounded-4xl">Html</button>
            <button className="bg-black text-white font-mono px-3 py-1 rounded-4xl">Css</button>
            <button className="bg-black text-white font-mono px-3 py-1 rounded-4xl">Java Script</button>
            <button className="bg-black text-white font-mono px-3 py-1 rounded-4xl">React</button>
            <button className="bg-black text-white font-mono px-3 py-1 rounded-4xl">Tailwind</button>
            <button className="bg-black text-white font-mono px-3 py-1 rounded-4xl">Git</button>
          </motion.div>


        </div>




      </div>





      <div className=' md:hidden flex-col gap-4 flex px-5  '>

        <div className=' bg-amber-50 w-full h-full'>
          <div className=' '>
            <img src="https://static.toiimg.com/thumb/msid-99993144,width-1280,height-720,resizemode-4/99993144.jpg" alt="" className='w-full h-48' />
          </div>

          <h1 className='font-bold px-3'>Shopify Design</h1>


          <div className='py-3 px-3 flex flex-wrap gap-2'>

            <button className='bg-black text-white font-mono px-3 py-1 rounded-4xl'>Html</button>
            <button className='bg-black text-white font-mono px-3 py-1 rounded-4xl'>Css</button>
            <button className='bg-black text-white font-mono px-3 py-1 rounded-4xl'>Java Script</button>
            <button className='bg-black text-white font-mono px-3 py-1 rounded-4xl'>React</button>
            <button className='bg-black text-white font-mono px-3 py-1 rounded-4xl'>Tailwind</button>
            <button className='bg-black text-white font-mono px-3 py-1 rounded-4xl'>Git</button>
          </div>

           <a href='http://cloneshopifyfrontend.netlify.app'>
               <div className='py-2 px-3 '>
  
          <button className='bg-pink-600 text-white flex items-center gap-2 py-1 rounded-2xl px-4'>view details <ArrowRight size={15}/> </button>
               </div>
              </a>

        </div>

         <div className=' bg-amber-50 w-full h-full'>
          <div className=' '>
            <img src="https://img.freepik.com/free-photo/portrait-curly-girl-with-red-lipstick-taking-notes-tablet-pink-background-with-dressees_197531-17620.jpg" alt="" className='w-full h-48' />
          </div>

          <h1 className='font-bold px-3'>E commerce Fetch api</h1>


          <div className='py-3 px-3 flex flex-wrap gap-2'>

            <button className='bg-black text-white font-mono px-3 py-1 rounded-4xl'>Html</button>
            <button className='bg-black text-white font-mono px-3 py-1 rounded-4xl'>Css</button>
            <button className='bg-black text-white font-mono px-3 py-1 rounded-4xl'>Java Script</button>
            <button className='bg-black text-white font-mono px-3 py-1 rounded-4xl'>React</button>
            <button className='bg-black text-white font-mono px-3 py-1 rounded-4xl'>Tailwind</button>
            <button className='bg-black text-white font-mono px-3 py-1 rounded-4xl'>Git</button>
          </div>

           <a href='http://client-frontond-design.netlify.app'>
               <div className='py-2 px-3 '>
  
          <button className='bg-pink-600 text-white flex items-center gap-2 py-1 rounded-2xl px-4'>view details <ArrowRight size={15}/> </button>
               </div>
              </a>

        </div>

         <div className=' bg-amber-50 w-full h-full'>
          <div className='relative '>
            <img src="https://cdn2.vectorstock.com/i/1000x1000/16/86/cartoon-kitchen-sink-with-different-kitchenware-vector-31101686.jpg" alt="" className='w-full h-48' />
          </div>

          <h1 className='font-bold px-3'>Chuffy Design</h1>


          <div className='py-3 px-3 flex flex-wrap gap-2'>

            <button className='bg-black text-white font-mono px-3 py-1 rounded-4xl'>Html</button>
            <button className='bg-black text-white font-mono px-3 py-1 rounded-4xl'>Css</button>
            <button className='bg-black text-white font-mono px-3 py-1 rounded-4xl'>Java Script</button>
            <button className='bg-black text-white font-mono px-3 py-1 rounded-4xl'>React</button>
            <button className='bg-black text-white font-mono px-3 py-1 rounded-4xl'>Tailwind</button>
            <button className='bg-black text-white font-mono px-3 py-1 rounded-4xl'>Git</button>
          </div>

           <a href='http://cheffyfront.netlify.app'>
               <div className='py-2 px-3 '>
  
          <button className='bg-pink-600 text-white flex items-center gap-2 py-1 rounded-2xl px-4'>view details <ArrowRight size={15}/> </button>
               </div>
              </a>

        </div>

         <div className=' bg-amber-50 w-full h-full'>
          <div className='relative '>
            <img src="https://img.freepik.com/free-photo/closeup-woman-vr-glasses-float-neon-space-with-cables-attached-her-metaverse-avatar-concept_1217-3924.jpg?t=st=1740983253~exp=1740986853~hmac=80905324c874896a44b03337190499634f8de5584feee8543e9640186a33b637&w=1800" alt="" className='w-full h-48' />
          </div>

          <h1 className='font-bold px-3'>Technology Design</h1>


          <div className='py-3 px-3 flex flex-wrap gap-2'>

            <button className='bg-black text-white font-mono px-3 py-1 rounded-4xl'>Html</button>
            <button className='bg-black text-white font-mono px-3 py-1 rounded-4xl'>Css</button>
            <button className='bg-black text-white font-mono px-3 py-1 rounded-4xl'>Java Script</button>
            <button className='bg-black text-white font-mono px-3 py-1 rounded-4xl'>React</button>
            <button className='bg-black text-white font-mono px-3 py-1 rounded-4xl'>Tailwind</button>
            <button className='bg-black text-white font-mono px-3 py-1 rounded-4xl'>Git</button>
          </div>

           <a href='http://technologydesignfrontend.netlify.app'>
               <div className='py-2 px-3 '>
  
          <button className='bg-pink-600 text-white flex items-center gap-2 py-1 rounded-2xl px-4'>view details <ArrowRight size={15}/> </button>
               </div>
              </a>

        </div>

         <div className=' bg-amber-50 w-full h-full'>
          <div className='relative '>
            <img src={tr} alt="" className='w-full' />
          </div>

          <h1 className='font-bold px-3'>Traveling Design</h1>


          <div className='py-3 px-3 flex flex-wrap gap-2'>

            <button className='bg-black text-white font-mono px-3 py-1 rounded-4xl'>Html</button>
            <button className='bg-black text-white font-mono px-3 py-1 rounded-4xl'>Css</button>
            <button className='bg-black text-white font-mono px-3 py-1 rounded-4xl'>Java Script</button>
            <button className='bg-black text-white font-mono px-3 py-1 rounded-4xl'>React</button>
            <button className='bg-black text-white font-mono px-3 py-1 rounded-4xl'>Tailwind</button>
            <button className='bg-black text-white font-mono px-3 py-1 rounded-4xl'>Git</button>
          </div>

           <a href='https://travelingdesign.netlify.app/'>
               <div className='py-2 px-3 '>
  
          <button className='bg-pink-600 text-white flex items-center gap-2 py-1 rounded-2xl px-4'>view details <ArrowRight size={15}/> </button>
               </div>
              </a>

        </div>

         <div className=' bg-amber-50 w-full h-full'>
          <div className='relative '>
            <img src="https://img.freepik.com/free-photo/empty-online-radio-studio-broadcasting-room-with-professional-microphone-video-light-used-podcast-transmission-video-podcasting-setup-with-digital-mixer-console-laptop-computer_482257-33423.jpg?t=st=1742283680~exp=1742287280~hmac=d34ccc1d99f6d3297c984af8a671f5a3364124644e86c77f38c2d854cfa86e2b&w=1380" alt="" className='w-full' />
          </div>

          <h1 className='font-bold px-3'>Studio Design</h1>


          <div className='py-3 px-3 flex flex-wrap gap-2'>

            <button className='bg-black text-white font-mono px-3 py-1 rounded-4xl'>Html</button>
            <button className='bg-black text-white font-mono px-3 py-1 rounded-4xl'>Css</button>
            <button className='bg-black text-white font-mono px-3 py-1 rounded-4xl'>Java Script</button>
            <button className='bg-black text-white font-mono px-3 py-1 rounded-4xl'>React</button>
            <button className='bg-black text-white font-mono px-3 py-1 rounded-4xl'>Tailwind</button>
            <button className='bg-black text-white font-mono px-3 py-1 rounded-4xl'>Git</button>
          </div>

           <a href='http://studiodesignfront.netlify.app'>
               <div className='py-2 px-3 '>
  
          <button className='bg-pink-600 text-white flex items-center gap-2 py-1 rounded-2xl px-4'>view details <ArrowRight size={15}/> </button>
               </div>
              </a>

        </div>

        <div className=' bg-amber-50 w-full h-full'>
          <div className='relative '>
            <img src="https://www.cosmeticsdesign-asia.com/resizer/bZMyviBPg8d1S34IklV83MKQBdE=/arc-photo-williamreed/eu-central-1-prod/public/OGCEL3H6JBPH5CZ3AK5IVVF2ZM.jpg" alt="" className='w-full' />
          </div>

          <h1 className='font-bold px-3'>e commerce perfume Design</h1>


          <div className='py-3 px-3 flex flex-wrap gap-2'>

            <button className='bg-black text-white font-mono px-3 py-1 rounded-4xl'>Html</button>
            <button className='bg-black text-white font-mono px-3 py-1 rounded-4xl'>Css</button>
            <button className='bg-black text-white font-mono px-3 py-1 rounded-4xl'>Java Script</button>
            <button className='bg-black text-white font-mono px-3 py-1 rounded-4xl'>React</button>
            <button className='bg-black text-white font-mono px-3 py-1 rounded-4xl'>Tailwind</button>
            <button className='bg-black text-white font-mono px-3 py-1 rounded-4xl'>Git</button>
          </div>

           <a href='https://perfumedesign.netlify.app/'>
               <div className='py-2 px-3 '>
  
          <button className='bg-pink-600 text-white flex items-center gap-2 py-1 rounded-2xl px-4'>view details <ArrowRight size={15}/> </button>
               </div>
              </a>

        </div>




      </div>



    </div>
  )
}

export default Project


