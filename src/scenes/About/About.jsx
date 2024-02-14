import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { BsFiletypeScss } from "react-icons/bs";
import { FaGitAlt } from "react-icons/fa";
import { FaNpm } from "react-icons/fa";
import { TbBrandRedux } from "react-icons/tb";
import "./scroll.scss";
const About = () => {

  return (
<div className = "my-10" id = "about">
<main className={`w-[100vw] mx-2 flex flex-col my-6 bg-black overflow-hidden items-center`}>
    <div className="h-[2px] w-full my-2" style={{ background: "linear-gradient(to left, hotpink, pink)" }} />

    <div className= "mx-0 md:w-[60vw] w-[85vw]">
            <h2 className="m-2 text-2xl font-bold" style={{ background: "-webkit-linear-gradient(hotpink, pink)", WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>About Me</h2>
            <div className="text-white text-lg w-[90%] m-2">
              <p className = "font-bold m-2">Who am I?</p>
              <p className = "m-2">My name is Autumn Rayne. Armed with a Bachelor's in Digital Media & Web Technology, I am a Frontend web developer who has accumulated over two years of experience. From freelancing to personal projects, I enjoy building web applications, both small and large.</p>
              <p className = "m-2">My tools of choice are HTML5, Vanilla JavaScript, SCSS. I've worked with and have experience with ReactJS and TailwindCSS. Currently, I am searching for a entry-level or internship position, which will allow me to expand my skillset and contribute to a team setting. </p>
              <p className = "m-2 mt-5">
              Shoot me an email at <span style={{ background: "-webkit-linear-gradient(hotpink, pink)", WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>AutumnFrontendDev@outlook.com</span>. I am always available. 
              </p>
            </div>
    </div>
    <div className = "bg-white text-black h-[40px] w-full my-6 flex justify-center items-center text-3xl" style={{ background: "linear-gradient(to left, hotpink, pink)" }}>
      <div className = "scrollingIcons flex w-full">
        <i className = "p-5"><FaHtml5 /></i>
        <i className = "p-5"><FaCss3Alt /></i>
        <i className = "p-5"><IoLogoJavascript /></i>
        <i className = "p-5"><SiTailwindcss /></i>
        <i className = "p-5"><BsFiletypeScss /></i>
        <i className = "p-5"><FaReact /></i>
        <i className = "p-5"><TbBrandRedux /></i>
        <i className = "p-5"><FaNpm /></i>
        <i className = "p-5"><FaGitAlt /></i>
      </div>
    </div>
</main>
</div>
  )
}

export default About