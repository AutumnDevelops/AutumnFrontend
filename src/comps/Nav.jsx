import React, { useState } from 'react';
import { FiAlignJustify } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import Sidebar from "./Sidebar"
const Nav = () => {
        const [sidebarOpen, setSidebarOpen] = useState(false);
        const toggleSidebar = () => {setSidebarOpen(!sidebarOpen)};

  return (
<section className = "fixed w-full z-50">
    <nav className = "relative w-full text-[#283630] bg-[#DBCCBF99] z-50 h-[40px] px-4 py-2">
    <i className = "text-3xl duration-1000 ease-in-out cursor-pointer hover:text-white"  onClick={toggleSidebar}>
    {sidebarOpen ? (<IoMdClose /> ) : (<FiAlignJustify />)
    }</i>
    </nav>
    
    <div  className={`absolute t-0 h-[100vh] ${sidebarOpen ? 'left-[0rem]' : 'left-[-24rem]'} w-[365px] z-40 bg-[#DBCCBF] flex text-[#283630] text-lg duration-1000 `}>
        <Sidebar />
        <div className = "h-[100vh] w-[24px] px-2 mr-2" style = {{background:"#85968A"}}></div>
    </div>
</section>
  )
}

export default Nav