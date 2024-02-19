import React from 'react'
import projects_data from "../utils/data.json";
const Card = () => {
  return (
    <>
  {projects_data.projects.filter(project => project.class === "site").map((project, index) => (
    <section className="bg-[#DBCCBF] rounded-sm flex my-5 p-2 flex flex-col justify-content items-center w-full md:w-[333px] md:mx-10 mx-5" key={index}>
      <div>
        <h1 className="w-full flex flex-col items-center text-[#283630] text-xl font-bold">{project.name}</h1>
          <img src={require(`../assets/videos/${project.video}`)} className="h-[300px] w-[300px] md:w-[300px] rounded-sm m-2 object-cover m-[auto]" />
        <div className="m-2 w-full mx-0 h-[3px] rounded-lg w-[300px] flex items-center justify-center" style={{ background: "#85968A" }} />

        <div className="my-2 text-[#283630] max-w-[300px] h-[275px] relative m-[auto]">
        <div className="m-2">
          <h2 className="flex items-center justify-center font-bold text-xl mb-2">About</h2>
          <p className="text-sm mt-2">{project.desc}</p>
        </div>
        <button className="p-2 absolute bottom-2 rounded-sm flex items-center justify-center text-black w-full text-[#C2A791] bg-[#85968A] hover:bg-[#283630] duration-1000">
          <a href = {project.link}>
            View Project
          </a>
        </button>
      </div>
      </div>
  </section>
      ))}
      </>
  )
}

export default Card