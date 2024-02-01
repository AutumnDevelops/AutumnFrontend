import React from 'react'
import projects_data from "../utils/data.json";
const Card = () => {
  return (
    <>
    {projects_data.projects.map((project, index) => (
    <section className="bg-black rounded-lg flex my-5 p-2 flex flex-col justify-content items-center max-w-[350px] md:mx-12 mx-0" key={index}>
      <div>
        <h1 className="w-full flex flex-col items-center text-white text-xl font-bold">{project.name}</h1>
        <img src={require(`../assets/videos/${project.video}`)} alt="" className="h-[300px]  w-[280px] md:w-[300px] rounded-lg m-2 object-cover" />

        <div className="m-2 w-full mx-0 h-[1px] rounded-lg w-[300px] flex items-center justify-center" style={{ background: "linear-gradient(to left, pink, hotpink)" }}></div>

        <div className="my-2 text-white max-w-[320px] h-[300px] relative">
        <div className="m-2">
          <h2 className="flex items-center justify-center font-bold text-xl mb-2">Use Case</h2>
          <p className="text-sm mt-2">{project.desc}</p>
        </div>
        <button className="p-2 absolute bottom-2 rounded-lg flex items-center justify-center text-black w-full" style={{ background: "linear-gradient(to left, pink, hotpink)" }}>
          View Project
        </button>
      </div>

      </div>
  </section>
      ))}
      </>
  )
}

export default Card