import React from 'react'
import LM from '../../Assets/ToggleSwitch/LightMode.jpg'
import DM from '../../Assets/ToggleSwitch/DarkMode.png'
import DLrec from '../../Assets/ToggleSwitch/DLMode.mp4'

export default function ToggleButton() {
  return (
    <div class= "flex flex-col flex-grow min-h-screen w-screen bg-slate-200">
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
      
      <p class = "p-10 ml-20 mr-32 mb-0 mt-10 font-bold text-4xl">
        Day-Night Mode toggle button
      </p>
      <p class = "p-10 ml-20 mr-32 mt-0 text-xl">
        A Day-Night Mode toggle button in Figma features a smooth transition between light and dark themes, enhancing user experience with engaging motion effects. The toggle consists of a circular handle that moves within a track, changing from a sun (☀️) to a moon (🌙) as the background color shifts. Using Smart Animate in Figma, the toggle smoothly slides left or right with an ease-in-out effect, while icons fade and scale subtly for a natural transition. Additional enhancements, like stars appearing in night mode or soft shadow adjustments, create a visually appealing and intuitive experience. 
      </p>

      <p class = "p-10 pb-0 ml-20 text-xl font-bold">Light Mode </p>
      <img 
      class = "p-10 ml-20 h-[500px] w-[1000px]"
      src={LM}/>

      <p class = "p-10 pb-0 ml-20 text-xl font-bold">Dark Mode </p>
      <img 
      class = "p-10 ml-20 h-[500px] w-[1000px]"
      src={DM}/>

      <p class = "p-10 pb-0 ml-20 text-xl font-bold">Animation</p>
      <video controls
      class = "p-10 ml-20 h-[500px] w-[1000px]">
        <source src={DLrec}/>
      </video>
    </div>
  )
}
