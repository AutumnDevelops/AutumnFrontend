import React from 'react'
import projects_data from "../utils/data.json";
const Comission = () => {
  return (
    <>
    {projects_data.projects.filter(project => project.class === "comm").map((project, index) => (
          <div className = "bg-[#DBCCBF] w-full m-1 md:max-w-[500px] w-[300px] p-4 rounded-sm h-[360px] flex flex-col text-[#283630] m-3 items-center justify-between mb-[100px]">

              <h2 className = "text-2xl font-bold">{project.name}</h2>
              <div className="m-2 w-full mx-0 h-[3px] rounded-lg w-[300px] flex items-center justify-center" style={{ background: "#85968A" }} />
              <img src={require(`../assets/videos/${project.video}`)} className="rounded-sm m-2 object-cover" />
              <div className="m-2 w-full mx-0 h-[3px] rounded-lg w-[300px] flex items-center justify-center" style={{ background: "#85968A" }} />
              <p  className = "py-2 text-sm">{project.desc}</p>
            <button className = "my-2 w-full rounded-sm  text-[#F5E4D6] bg-[#85968A] hover:bg-[#283630] duration-1000" >
              <a href = {project.link}>View Project</a>
            </button>
          </div>
    ))}
    </>
  )
}

export default Comission