import React from 'react'
import background from "../assets/background.png"; 
import { FaHeart } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className = "w-[100vw] h-[100px] text-lg flex justify-center items-center" style={{ backgroundImage: `url(${background})`, backgroundPosition: "repeat", backgroundSize: "cover", color: "#b88b6d", textShadow: "#b88b6d 1px 0 1px", WebkitTextStroke: "0.25px #e0c1af"}}>
      <i className = "px-2"><FaHeart /></i> ~  Copyright 2024 © Created by Autumn Rayne Fitzpatrick <i className = "px-2"><FaHeart /></i> ~ 
    </footer>
  )
}

export default Footer