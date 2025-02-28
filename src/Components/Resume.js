import React from 'react'
import Res from '../Assets/Resume.pdf'

export default function Resume() {
  return (
    <div class = "bg-slate-200 min-h-screen w-screen">
        <div class = "flex flex-row h-28 w-screen ">
          <p class = "text-6xl m-10 font-semibold">
            <a href='/home'>
              A.
            </a>
            
          </p>
          <div class = "flex ml-auto mr-36 items-center space-x-6 text-xl">
            <a href="/home">Home</a>
            <a href="/resume">Resume</a>         
            </div>
        </div>      

      <div class = " m-10">
        <iframe src={Res}
          width='100%' height="1000px"
        />
      </div>      
    </div>
  )
}
