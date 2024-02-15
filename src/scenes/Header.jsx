import React from 'react'

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
          </div>
    </header>
  )
}

export default Header