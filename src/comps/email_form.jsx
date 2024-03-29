import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Email_Form = () => {
  const form = useRef();
  const [message, setMessage] = useState(null);
  const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm("service_hdu0dlg" , "template_7q33haa", form.current, "fOSgHP1K-_QbGULLg").then(
          (result) => {
            setMessage("Message Sent");
            form.current.reset();
            setTimeout(() => setMessage(null), 5000);
          },
          (error) => {
            console.log(error.text);
          }
        )
    };


  return (
    <div className = "flex flex-col justify-center items-center w-full">
    <form className = "md:w-[50vw] w-[75vw] my-4 flex flex-col relative" ref={form} onSubmit={sendEmail}>
        <input type = "text" placeholder = "Your name" className = "my-2 bg-transparent text-[#283630] p-3 border-[#85968A] border-2 w-full rounded-sm outline-none" required  name="user_name" />
        <input type = "email" placeholder = "Your Email"  className = "my-2 bg-transparent text-[#283630] p-3 border-[#85968A] border-2 w-full  rounded-sm outline-none"  required   name="user_email" />
        <input type = "text" placeholder = "Your Subject"   className = "my-2 bg-transparent text-[#283630] p-3 border-[#85968A] border-2 w-full  rounded-sm outline-none"  required   name="subject" />
        <textarea type = "your message" placeholder = "Your Message"   className = "my-2 h-[175px] bg-transparent text-[#283630] p-3 border-[#85968A] border-2 w-full  rounded-sm outline-none" required   name="message" />
        <button className = "w-full text-lg flex justify-center p-2 my-3 rounded-sm text-[#C2A791] bg-[#85968A] hover:bg-[#283630] duration-1000" type = "submit">Submit</button>
    </form>
        <div className="bg-[#85968A] text-[#DBCCBF] h-[40px] w-[100vw] font-bold mt-6 flex justify-center items-center text-3xl ">
        {message && <h2 className = "scrollingIcons" style={{fontFamily: "'Croissant One'"}} >Message Sent</h2>}
        </div>
  
      
    </div>
  )
}

export default Email_Form