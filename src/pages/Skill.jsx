import React from 'react'

function Skill() {



    const skill =
    [
      { name: "HTML", value: "96" },
      { name: "CSS", value: "96" },
      { name: "Java script", value: "90" },
         { name: "React", value: "96" },
      { name: "Bootstrap", value: "96" },
         { name: "Tailwind", value: "96" },
      { name: "Git", value: "96" },
   
      { name: "Git Hub", value: "96" },
  
    ]


  return (
    <div className=''>
      <h1 className='text-white py-32 text-center text-3xl md:text-5xl font-bold '>skills</h1>

      <div className='flex md:px-40 '>
        <div className='grid md:grid-cols-2 grid-cols-1 gap-10 '>

          {skill.map((item) => (<div className=' flex gap-10 w-full  items-center  p-4 justify-between'>
            <h1 className='text-white md:text-2xl text-xl '>{item.name}</h1>
            <div className='md:w-96 w-52 '>
              <progress id="file" className='w-full h-4 ' value={item.value} max="100"> </progress>
            </div>
          </div>))}




        </div>
      </div>







    </div>
  )
}

export default Skill