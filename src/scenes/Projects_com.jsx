import React from 'react'
import Commision from "../comps/Comission";
import { FaHeart } from "react-icons/fa";
import background from "../assets/background.png"; 
const Projects_com = () => {
  return (
    <>
    <section className = "flex flex-col justify-content items-center w-[100vw]" id = "projects_c">
        <div  className = "flex flex-col justify-content items-center mt-5 p-1  mb-3 text-2xl"  >
        <h2 className = "flex justify-content items-center mt-5 text-white p-1 mb-3 text-[25px]" style={{fontFamily: "'Croissant One', cursive", color: "#b88b6d", textShadow: "#b88b6d 1px 0 1px", WebkitTextStroke: "0.25px #e0c1af"}}><i className = "px-2"><FaHeart /></i> ~ Commissions ~ <i className = "px-2"><FaHeart /></i></h2>
        </div>
        <div className ="flex flex-wrap items-center justify-center mx-0 sm:w-[95vw]">
          <Commision />
        </div>
    </section>
    <div className = "h-[50px] bg-[#DBCCBF] w-[100vw]" />
</>
  )
}

export default Projects_com