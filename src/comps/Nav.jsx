import React, { useState } from 'react';
import { FiAlignJustify } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import Sidebar from "./Sidebar"
const Nav = () => {
        const [sidebarOpen, setSidebarOpen] = useState(false);
        const toggleSidebar = () => {setSidebarOpen(!sidebarOpen)};

  return (
<section className = "fixed w-full z-50">
    <nav className = "relative w-full text-white bg-black z-50">
    <i className = "text-2xl py-2 duration-1000 ease-in-out cursor-pointer hover:text-[#FF6FB5]"  onClick={toggleSidebar}>
    {sidebarOpen ? (<IoMdClose /> ) : (<FiAlignJustify />)
    }</i>
    <div className = "absolute b-0 w-full h-[14px]" style = {{background:"linear-gradient(to left, pink, hotpink)"}}></div>
    </nav>
    
    <div  className={`absolute t-0 h-[100vh] ${sidebarOpen ? 'left-[0rem]' : 'left-[-24rem]'} w-[365px] z-40 bg-black flex text-white text-lg duration-1000 `}>
        <Sidebar />
        <div className = "h-[100vh] w-[24px]" style = {{background:"linear-gradient(to bottom, hotpink, pink)"}}></div>
    </div>
</section>
  )
}

export default Nav