import React, {useState} from 'react'
import { IoIosArrowDown } from "react-icons/io";
const Sidebar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {setIsVisible(!isVisible)};
  const [isVisible24, setIsVisible24] = useState(false);
  const toggleVisibility24 = () => {setIsVisible24(!isVisible24)};
  const [isVisible23, setIsVisible23] = useState(false);
  const toggleVisibility23 = () => {setIsVisible23(!isVisible23)};



  return (
    <ul className = "flex flex-col w-full my-5 mx-10">
        <li className = "text-xl w-full flex flex-col justify-between  my-3 duration-1000 ease-in-out hover:text-[#FF6FB5] cursor-pointer" > <a href="#header">Home</a></li>
        <li className = "text-xl w-full flex flex-col justify-between  my-3 duration-1000 ease-in-out hover:text-[#FF6FB5] cursor-pointer" > <a href="#about">About</a></li>
        <li className = "text-xl w-full flex flex-col justify-between" >
            <span className = "flex items-center my-3 duration-1000 ease-in-out hover:text-[#FF6FB5] cursor-pointer"  onClick={toggleVisibility}>Projects  <i className = {`px-2 ${(!isVisible ? "" : "rotate-180")} duration-1000`}><IoIosArrowDown /></i></span>
            {isVisible && (
            <>
            <h4 className = "flex justify-between items-center text-lg indent-12 my-1 duration-1000 ease-in-out hover:text-[#FF6FB5] cursor-pointer" onClick={toggleVisibility24}>Site Examples <i className = {`px-2 ${(!isVisible24 ? "" : "rotate-180")} duration-1000`}><IoIosArrowDown /></i></h4>
            {isVisible24 && (
              <ul  className = "indent-20 text-base my-1 duration-1000">
                  <li className = "duration-1000 ease-in-out hover:text-[#FF6FB5] cursor-pointer"> <a href="#projects_r">The Balloon Gallery</a></li>
                  <li className = "duration-1000 ease-in-out hover:text-[#FF6FB5] cursor-pointer"> <a href="#projects_r">The Unique Bean</a></li>
                  <li className = "duration-1000 ease-in-out hover:text-[#FF6FB5] cursor-pointer"> <a href="#projects_r">Headphones Site</a></li>
              </ul>
            )}
            <h4 className = "flex justify-between items-center text-lg indent-12 my-1 duration-1000 ease-in-out hover:text-[#FF6FB5] cursor-pointer" onClick={toggleVisibility23}>JS App Examples <i className = {`px-2 ${(!isVisible23 ? "" : "rotate-180")} duration-1000`}><IoIosArrowDown /></i></h4>
            {isVisible23 && (
              <ul  className = "indent-20 text-base my-1 duration-1000">
                  <li className = "duration-1000 ease-in-out hover:text-[#FF6FB5] cursor-pointer"> <a href="#projects_s">Pocket Translator</a></li>
                  <li className = "duration-1000 ease-in-out hover:text-[#FF6FB5] cursor-pointer"> <a href="#projects_s">Password Generator</a></li>
                  <li className = "duration-1000 ease-in-out hover:text-[#FF6FB5] cursor-pointer"> <a href="#projects_s">Voice Recorder</a></li>
                  <li className = "duration-1000 ease-in-out hover:text-[#FF6FB5] cursor-pointer"> <a href="#projects_s">Image Editor</a></li>
              </ul>
            )}
              </>
            )}
        </li>
        <li className = "text-xl w-full flex flex-col justify-between  my-3 duration-1000 ease-in-out hover:text-[#FF6FB5] cursor-pointer"><a href="#email">Contact</a></li>
    </ul>
  )
}

export default Sidebar