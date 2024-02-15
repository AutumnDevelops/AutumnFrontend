import React from 'react'
import { FaHeart } from "react-icons/fa";
const Header = () => {

  return (
    <header className = "w-4/5 h-[100vh] flex flex-col justify-center items-center" id = "header">
     <h1 className="text-4xl font-bold sm:text-5xl flex flex-col items-center justify-center" style={{fontFamily: "'Croissant One', cursive", color: "#b88b6d", textShadow: "#b88b6d 1px 0 1px", WebkitTextStroke: "0.25px #e0c1af"}}>Autumn Rayne</h1>
     <h2 className="text-4xl font-bold sm:text-5xl flex flex-col items-center justify-center" style={{fontFamily: "'Croissant One', cursive", color: "#b88b6d", textShadow: "#b88b6d 1px 0 1px", WebkitTextStroke: "0.25px #e0c1af"}}>Fitzpatrick</h2>
          <h2 className = "text-1xl sm:text-2xl mt-6 flex items-center" style={{fontFamily: "'Work Sans', sans-serif", color: "#b88b6d", textShadow: "#b88b6d 1px 0 1px", WebkitTextStroke: "0.25px #e0c1af"}}><i className = "px-2"><FaHeart /></i> ~ Frontend Web Developer ~ <i className = "px-2"><FaHeart /></i></h2>
          <div className = "flex w-full sm:w-1/5 justify-center my-3">
          </div>
    </header>
  )
}

export default Header