import React from 'react'
import { FaHeart } from "react-icons/fa";
import resume from "./General_Resume2024.pdf"
const Header = () => {

  return (
    <header className = "w-4/5 h-[100vh] flex flex-col justify-center items-center" id = "header">
     <h1 className="text-4xl font-bold sm:text-5xl flex flex-col items-center justify-center" style={{fontFamily: "'Croissant One', cursive", color: "#b88b6d", textShadow: "#b88b6d 1px 0 1px", WebkitTextStroke: "0.25px #e0c1af"}}>Autumn Rayne</h1>
     <h2 className="text-4xl font-bold sm:text-5xl flex flex-col items-center justify-center" style={{fontFamily: "'Croissant One', cursive", color: "#b88b6d", textShadow: "#b88b6d 1px 0 1px", WebkitTextStroke: "0.25px #e0c1af"}}>Fitzpatrick</h2>
          <h2 className = "text-md sm:text-2xl mt-6 flex items-center" style={{fontFamily: "'Work Sans', sans-serif", color: "#b88b6d", textShadow: "#b88b6d 1px 0 1px", WebkitTextStroke: "0.25px #e0c1af"}}><i className = "px-2"><FaHeart /></i> ~ Frontend Web Developer ~ <i className = "px-2"><FaHeart /></i></h2>
          <ul className = "flex w-full sm:w-1/5 justify-center my-3">
                  <a href="#projects_c"><li className = "text-xl sm:text-xl flex items-center cursor-point" style={{color: "#b88b6d", textShadow: "#b88b6d 1px 0 1px", WebkitTextStroke: "0.25px #e0c1af"}}><FaHeart />  <span className = "pl-[5px]">Projects</span></li></a>
                  <a className="icon" href = {resume} download="image"target="_blank"><li className = "cursor-point text-xl sm:text-xl flex items-center pl-[40px]" style={{ color: "#b88b6d", textShadow: "#b88b6d 1px 0 1px", WebkitTextStroke: "0.25px #e0c1af"}}><span className = "pr-[5px]" >Resume </span> <FaHeart /> </li></a>
          </ul>
    </header>
  )
}

export default Header