import React from 'react'
import Cell from "../comps/cell"
const Projects_old = () => {
  return (
    <section className = "flex flex-col justify-content items-center my-8 mx-5" >
    <div  className = "flex flex-col justify-content items-center mt-5 w-[300px] text-white p-1 bg-black rounded-sm mb-3 text-2xl"  >
        <h2 style={{ background: "-webkit-linear-gradient(hotpink, pink)", WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>JS Projects</h2>
    </div>
    <div className ="flex flex-wrap mx-0 sm:max-w-[800vw]">
      <Cell />
    </div>
    </section>
  )
}

export default Projects_old