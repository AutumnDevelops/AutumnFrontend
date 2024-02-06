import React from 'react'
import projects_data from "../utils/data.json";

const Cell = () => {
  return (
    <>
    {projects_data.projects.filter(project => project.class === "JS").map((project, index) => (
          <div className = "bg-black w-full m-1 md:max-w-[300px] p-4 rounded-sm h-[140px] flex flex-col text-white items-center justify-between">
              <h2 className = "text-2xl font-bold">{project.name}</h2>
              <p  className = "py-2 text-sm">{project.desc}</p>
            <button className = "my-2 w-full rounded-sm text-black" style = {{background:"linear-gradient(to left, pink, hotpink)"}} >
              <a href = {project.link}>View Project</a>
            </button>
          </div>
    ))}
    </>
  )
}

export default Cell