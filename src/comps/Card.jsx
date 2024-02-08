import React from 'react'
import projects_data from "../utils/data.json";
const Card = () => {
  return (
    <>
  {projects_data.projects.filter(project => project.class === "site").map((project, index) => (
    <section className="bg-black rounded-sm flex my-5 p-2 flex flex-col justify-content items-center w-full md:w-[350px] md:mx-10 mx-0" key={index}>
      <div>
        <h1 className="w-full flex flex-col items-center text-white text-xl font-bold">{project.name}</h1>
          <img src={require(`../assets/videos/${project.video}`)} alt="" className="h-[300px] w-[280px] md:w-[300px] rounded-sm m-2 object-cover" />
        <div className="m-2 w-full mx-0 h-[1px] rounded-lg w-[300px] flex items-center justify-center" style={{ background: "linear-gradient(to left, pink, hotpink)" }} />

        <div className="my-2 text-white max-w-[320px] h-[300px] relative">
        <div className="m-2">
          <h2 className="flex items-center justify-center font-bold text-xl mb-2">About</h2>
          <p className="text-sm mt-2">{project.desc}</p>
        </div>
        <button className="p-2 absolute bottom-2 rounded-sm flex items-center justify-center text-black w-full hover:bg-[#FF6FB5] duration-1000" style={{ background: "linear-gradient(to left, pink, hotpink)" }}>
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