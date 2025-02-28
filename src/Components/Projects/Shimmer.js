import React from 'react'
import SHP from '../../Assets/Jewellary/ShimmerHomePage.jpg'
import collection from '../../Assets/Jewellary/Collection.jpg'
import aboutus from '../../Assets/Jewellary/AboutUs.jpg'
import footer from '../../Assets/Jewellary/Footer.jpg'
import reviewspg from '../../Assets/Jewellary/reviews.jpg'
import { useNavigate } from 'react-router-dom'

export default function Shimmer() {
  const navigate = useNavigate();

    function returnHome(){
        navigate('/home');
    }

    function GoToResume(){
        navigate('/resume')
    }

  return (
    <div class= "flex flex-col flex-grow min-h-screen w-screen bg-slate-200">
      <div class = "flex flex-row h-28 w-screen ">
          <p class = "text-6xl m-10 font-semibold">            
            <p onClick={returnHome}>A.</p>
          </p>

          <div class = "flex ml-auto mr-36 items-center space-x-6 text-xl">
          <p onClick={returnHome}>Home</p>
          <p onClick={GoToResume}>Resume</p>           
          </div>
      </div>        

        <p class = "p-10 ml-20 mr-32 mb-0 mt-10 font-bold text-4xl">
          Shimmer Jewels – A Seamless and Elegant Shopping Experience. 
        </p>

        <p class = "p-10 ml-20 mr-32 mt-0 text-xl">
          Designed in Figma, the Shimmer Jewels UI/UX project enhances the online jewelry shopping experience by focusing on aesthetics, usability, and conversion optimization. The interface features a clean and intuitive layout with high-quality visuals, a streamlined navigation system, and a simplified product discovery process. Smart Animate and micro-interactions create a seamless browsing experience, while an elegant color palette and typography enhance the brand’s luxury appeal. The design ensures responsiveness, accessibility, and a frictionless checkout flow, making it easier for users to explore, compare, and purchase exquisite jewelry effortlessly.
        </p>

        <p class = "p-10 pb-0 ml-20 text-xl font-bold">Shimmer Jewels Home Page </p>
        <img
        class = "p-10 ml-20 h-[600px] w-[1000px]"
        src={SHP}/>

        <p class = "p-10 pb-0 ml-20 text-xl font-bold">collection Page </p>
        <img
        class = "p-10 ml-20 h-[600px] w-[1000px]"
        src={collection}/>

        <p class = "p-10 pb-0 ml-20 text-xl font-bold">AboutUs Page </p>
        <img
        class = "p-10 ml-20 h-[600px] w-[1000px]"
        src={aboutus}/>

        <p class = "p-10 pb-0 ml-20 text-xl font-bold">Reviews Page </p>
        <img
        class = "p-10 ml-20 h-[600px] w-[1000px]"
        src={reviewspg}/>
        
        <p class = "p-10 pb-0 ml-20 text-xl font-bold">Footer</p>
        <img
        class = "p-10 ml-20 h-[600px] w-[1000px]"
        src={footer}/>
    </div>
  )
}
// https://github.com/AnupritaBarge/Portfolio.git