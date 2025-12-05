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
    <div className="">
  <h1 className="text-white py-20 text-center text-3xl md:text-5xl font-bold">
    Skills
  </h1>

  <div className="flex px-5 md:px-10 lg:px-16 xl:px-40 w-full">
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 w-full">

      {skill.map((item) => (
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-10 w-full bg-white/5 p-4 rounded-xl">
          
          
          <h1 className="text-white text-xl md:text-2xl w-full md:w-40">
            {item.name}
          </h1>

        
          <div className="w-full">
            <progress
              className="w-full h-4 rounded-lg overflow-hidden"
              value={item.value}
              max="100"
            ></progress>
          </div>

        </div>
      ))}

    </div>
  </div>
</div>

  )
}

export default Skill