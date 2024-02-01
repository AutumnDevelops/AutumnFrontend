import React from 'react'


const Cell = () => {
  return (
    <section className = "flex my-3 w-[350px] rounded-lg mx-2"  style = {{background:"linear-gradient(to left, pink, hotpink)"}}>
        <div className = "bg-black w-full h-[225px] m-2 my-3 p-4 rounded-lg flex flex-col text-white items-center justify-between">
            <h2 className = "text-2xl font-bold">Project Name</h2>
            <p>JavaScript fetches a JSON file listing languages and their country codes, populating a dropdown via innerText. Defaulting to English and Japanese, users translate text via a translation API upon input change, with additional features like language swap, copy to clipboard, and text-to-speech.</p>
            <button className = "mt-2 w-full rounded-lg " style = {{background:"linear-gradient(to left, pink, hotpink)"}} >
            Demo
          </button>
        </div>
    </section>
  )
}

export default Cell