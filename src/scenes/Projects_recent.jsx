import React from 'react'
import Card from "../comps/Card";
const Projects_recent = () => {
  return (
    <section className = "flex flex-col justify-content items-center mx-12" id = "projects_r">
    <div  className = "flex flex-col justify-content items-center mt-5 w-[300px] text-white p-1 bg-black rounded-lg mb-3 text-2xl"  >
        <h2 style={{ background: "-webkit-linear-gradient(hotpink, pink)", WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Best of 2023</h2>
    </div>
    <div className ="flex flex-wrap ">
      <Card />
    </div>

    </section>
  )
}

export default Projects_recent