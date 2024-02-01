import React from 'react'
import Email_Form from "../comps/email_form"
const Email = () => {
  return (
    <div className = "w-[100vw] mx-2 flex flex-col my-6 bg-black overflow-hidden items-center" id = "email">
        <div className="h-[2px] w-full my-2" style={{ background: "linear-gradient(to left, hotpink, pink)" }} />
        <h1 className="text-1xl font-bold sm:text-4xl font-200 text-white flex items-center justify-center" style={{ background: "-webkit-linear-gradient(hotpink, pink)", WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Let's Chat!</h1>
        <p className= "text-white text-md w-full flex items-center justify-center">Get in touch with me directly at autumnraynedev@zohomail.com</p>
        <div>
          <Email_Form />
        </div>
        <div className="h-[2x] w-full my-1" style={{ background: "linear-gradient(to left, hotpink, pink)" }} />
    </div>
  )
}

export default Email