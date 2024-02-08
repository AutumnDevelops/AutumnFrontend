import React from 'react'
import Resume_2024 from "./Resume_2024.pdf"
const Header = () => {

  return (
    <header className = "w-4/5 h-[100vh] flex flex-col justify-center items-center" id = "header">
      <div className= "bg-black rounded-sm p-4 flex items-center justify-center">
      <h1 className="text-1xl font-bold sm:text-3xl text-white flex flex-col items-center justify-center" style={{ background: "-webkit-linear-gradient(hotpink, pink)", WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
  Autumn Rayne Fitzpatrick
</h1>

      </div>
          <h2 className = "bg-black p-2 my-3 rounded-sm text-white text-1xl sm:text-2xl">Frontend Web Developer</h2>
          <div className = "flex w-full sm:w-1/5 justify-center my-3">
            <a className = "bg-black p-2 mx-2 rounded-sm text-white text-md sm:text-xl hover:bg-[#FF6FB5]" href = {Resume_2024} download target = "_blank">Resume</a>
            <button className = "bg-black p-2 mx-2 rounded-sm text-white text-md sm:text-xl hover:bg-[#FF6FB5]">
            <a href="#projects_r">Projects</a>
            </button>
          </div>
    </header>
  )
}

export default Header