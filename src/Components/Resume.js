import React from 'react'
import Res from '../Assets/Resume.pdf'
import { useNavigate } from 'react-router-dom';

export default function Resume() {

  const navigate = useNavigate();

    function returnHome(){
        navigate('/home');
    }

    function GoToResume(){
        navigate('/resume')
    }
  return (
    <div class = "bg-slate-200 min-h-screen w-screen">
        <div class = "flex flex-row h-28 w-screen ">
          <p 
          onClick={returnHome}
          class = "text-6xl m-10 font-semibold">            
            A.           
          </p>

          <div class = "flex ml-auto mr-36 items-center space-x-6 text-xl">
            <p onClick={returnHome}>Home</p>
            <p onClick={GoToResume}>Resume</p>        
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
