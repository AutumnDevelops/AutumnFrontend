import React from 'react'
import Card from "../comps/Card";
import background from "../assets/background.png"; 
import { FaHeart } from "react-icons/fa";
const Projects_recent = () => {
  return (
    <section className = "flex flex-col justify-content items-center mx-12 w-[100vw] md:h-[100vh]" id = "projects_r">
        <h2 className = "flex justify-content items-center mt-5 text-white p-1 mb-3 text-[25px]" style={{fontFamily: "'Croissant One', cursive", color: "#b88b6d", textShadow: "#b88b6d 1px 0 1px", WebkitTextStroke: "0.25px #e0c1af"}}><i className = "px-2"><FaHeart /></i> ~ Demo Sites ~ <i className = "px-2"><FaHeart /></i></h2>
    <div className ="flex flex-wrap ">
      <Card />
    </div>

    </section>
  )
}

export default Projects_recent