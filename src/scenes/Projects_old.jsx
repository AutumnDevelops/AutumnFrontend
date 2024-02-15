import React from 'react'
import Cell from "../comps/cell"
import { FaHeart } from "react-icons/fa";
import background from "../assets/background.png"; 
const Projects_old = () => {
  return (
  <>
      <div className = "h-[70px] bg-[#DBCCBF] w-[100vw]" />
      <section className = "flex flex-col justify-content items-center w-[100vw]" id = "projects_s" style={{ backgroundImage: `url(${background})`, backgroundPosition: "repeat", backgroundSize: "cover"}} >
          <div  className = "flex flex-col justify-content items-center mt-5 p-1  mb-3 text-2xl"  >
          <h2 className = "flex justify-content items-center mt-5 text-white p-1 mb-3 text-3xl" style={{fontFamily: "'Croissant One', cursive", color: "#b88b6d", textShadow: "#b88b6d 1px 0 1px", WebkitTextStroke: "0.25px #e0c1af"}}><i className = "px-2"><FaHeart /></i> ~ JS Apps ~ <i className = "px-2"><FaHeart /></i></h2>
          </div>
          <div className ="flex flex-wrap items-center justify-center mx-0 sm:w-[95vw]">
            <Cell />
          </div>
     </section>
  </>
  )
}

export default Projects_old