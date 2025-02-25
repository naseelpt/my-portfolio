import React from 'react'

function Skill() {



    const skill =
    [
      { name: "HTML", value: "96" },
      { name: "CSS", value: "96" },
      { name: "Java script", value: "90" },
      { name: "Bootstrap", value: "96" },
      { name: "Git", value: "96" },
      { name: "React", value: "96" },
      { name: "Tailwind", value: "96" },
  
    ]


  return (
    <div className=''>
      <h1 className='text-white px-32 py-32 text-5xl font-bold p-12 pt-28'>skills</h1>

      <div className='flex justify-center'>
        <div className='grid md:grid-cols-2 grid-cols-1 gap-4'>

          {skill.map((item) => (<div className=' flex gap-10 w-full  items-center  p-4 justify-between'>
            <h1 className='text-white text-2xl '>{item.name}</h1>
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