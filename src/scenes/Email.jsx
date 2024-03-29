import React from 'react'
import Email_Form from "../comps/email_form"
const Email = () => {
  return (
    <div className = "w-[100vw] flex flex-col py-4 bg-[#DBCCBF] overflow-hidden items-center" id = "email">
        <div className="h-[2px] w-full" style={{ background: "#85968A" }} />
        <h1 className="text-1xl font-bold sm:text-4xl font-200 text-[#283630] flex items-center justify-center my-2" style={{fontFamily: "'Croissant One', cursive"}}>Let's Chat! </h1>
        <p className= "text-[12px] flex items-center justify-center text-[#283630]">Get in touch with me directly at AutumnFrontendDev@outlook.com</p>
        <div>
          <Email_Form />
        </div>
    </div>
  )
}

export default Email