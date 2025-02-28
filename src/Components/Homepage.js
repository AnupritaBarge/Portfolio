import React from 'react'
import { useNavigate } from 'react-router-dom'
import Lmode from '../Assets/ToggleSwitch/LightMode.jpg' 
import Jlogo from '../Assets/Jewellary/JL.jpg'

export default function Homepage() {
    
    const navigate = useNavigate();

    // function GoToResume(){
    //     navigate('/resume');
    // }
  function Togglebutton() {
    navigate('/toggle');
  }

  function ShimmerJewels(){
    navigate('/shimmer');
  }

  function GoToResume(){
    navigate('/resume')
  }

  return (    
    <div class = "flex flex-col flex-grow min-h-screen w-screen bg-slate-200">
        <div class = "flex flex-row h-28 w-screen ">
          <p class = "text-6xl m-10 font-semibold">A.</p>
          <div class = "flex ml-auto mr-36 items-center space-x-6 text-xl">
            <p>Home</p>
            <p
              onClick={GoToResume}>Resume
            </p>            
            
          </div>
        </div>

        <div class = "flex flex-grow flex-col m-36 mt-24 mb-2">
          <p class = "text-5xl font-semibold mb-10">
            Hi, I'm Anuprita Barge.
          </p>
          <p class = "text-xl mr-52">
            I'm a passionate UI/UX designer dedicated to creating intuitive and user-friendly digital experiences. With a strong foundation in user-centered design principles, I specialize in wireframing, prototyping, and visual design to enhance usability and engagement. My work focuses on crafting seamless interactions that balance aesthetics and functionality. Explore my portfolio to see how I transform ideas into meaningful designs that solve real-world problems.
          </p>
        </div>

        <div class = "flex flex-grow flex-col min-h-[400px] w-[90%] mt-28 ml-[5%] items-center">
          <p class = "text-center text-4xl font-semibold mb-0">
            Projects
          </p>
          {/* ..Toggle button code................................... */}
          <div 
            
            class = "flex flex-row min-h-[800px] w-[1400px]">
            <div 
            onClick={Togglebutton}
              class = "flex flex-col min-h-[500px] w-[500px] bg-[#ececec] m-28 ml-[100px] rounded-xl border-solid border-2 border-black">            
                <img
                class = "object-contain my-14"
                src={Lmode}/>
                <p class="mt-8 ml-10 text-3xl">
                  Toggle Button
                </p>
                <p class = "p-10">
                Seamless Day-Night Mode Toggle Animation – A smooth and interactive transition between light and dark themes, enhancing user experience with fluid motion, smart icon changes, and dynamic background shifts.
                </p>
            </div>

            {/* ..Shimmer jewels code........................................ */}
            <div 
            onClick={ShimmerJewels}
            class = "flex flex-col min-h-[500px] w-[500px] bg-[#ececec] m-28  rounded-xl border-solid border-2 border-black">            
              <img
                class = "object-contain  h-[350px] w-[200px] ml-[140px] mt-0"
                src={Jlogo}/>

              <p class=" ml-10 text-3xl">Shimmer Jewels</p>
              <p class = "p-10">
              Elegant & Intuitive Jewelry Shopping Experience – A user-centered redesign enhancing product discoverability, simplifying decision-making, and improving conversions with a refined UI/UX approach.
              </p>
            </div>            
          </div>          
        </div>

        <div class = "flex flex-col m-24 mt-8">
            <p class = "text-4xl mb-5 font-bold">
              Get in touch at:
            </p>             

            <p class = "text-2xl mb-1"> Email ID: anupritabarge@gmail.com</p>            
            
            <p class = "text-2xl mt-1">
              LinkedIn: <a href='https://www.linkedin.com/in/anupritabarge/' class = "text-blue-800">Anuprita Barge</a>
            </p>       
          </div>
    </div>
  )
}
