
import React from 'react'
// eslint-disable-next-line no-unused-vars
import style from "./LandingPage.css"
import img1 from "../../assets/landing.png"
import img2 from "../../assets/landing2.png"
import img3 from "../../assets/TrelloUICollage_4x.webp"
import int from "../../assets/Integrations.svg"
import gea from "../../assets/Gears.svg"
import ser from "../../assets/Search_Value.svg"
// import img3 from "../../assets/landing3.png"


export default function LandingPage() {
    
  return (
    <>
      <div className="container text-white ">

    <div className="row text-center align-items-center mx-auto py-5 bg-info bg-gradient  bg-opacity-10 rounded-5">
      <div className="col-md-5">
        <img src={img3} className='w-100' alt="" />
      </div>
      <div className="col-md-7 ">
        <div className="col-md-8 text-color me-auto pb-3">
          <h1 className='h2 fw-medium'>Impossible alone.</h1>
        </div>
        <div className="col-md-8 text-color ms-auto pb-3">
          <h2 className='h1 fw-bold'>Possible together.</h2>
        </div>
        <div className="col-md-10 pt-4  text-color mx-auto pb-3">
          <p className='h4'>See how collaboration makes the impossible, possible.</p>
        </div>
      </div>
    </div>


      <div className="row align-items-center my-5">
        <div className="col-lg-7">
          <img src={img2} alt="" className='w-100 rounded-5 '/>
        </div>
        <div className="col-lg-5 text-center ">
          <h2>Trello brings all your tasks, teammates, and tools together</h2>
        </div>
      </div>

      <div className="row align-items-center mb-5">
        <div className="col-lg-4 text-center ">
          <h3 className='h3'>Keep everything in the same place even if your team isn`t.</h3>
        </div>
        <div className="col-lg-8">
          <img src={img1} alt="" className='w-100 rounded-5 '/>
        </div>
      </div>

      <div className="row py-5 justify-content-evenly ">
          <div className="col-md-3 bg-info bg-opacity-10 rounded-5 p-4">
            <div className='py-2'><img src={int} alt="" /></div>
            <div className='py-1'><h5>Integrations</h5></div>
            <div className='py-3'><p>Connect the apps your team already uses into your Trello workflow or add a Power-Up to fine-tune your specific needs.</p></div>
          </div>
          <div className="col-md-3 bg-info bg-opacity-10 rounded-5 p-4">
            <div className='py-2'><img src={gea} alt="" /></div>
            <div className='py-1'><h5>Butler Automation</h5></div>
            <div className='py-3'><p>No-code automation is built into every Trello board. Focus on the work that matters most and let the robots do the rest.</p></div>
          </div>
          <div className="col-md-3 bg-info bg-opacity-10 rounded-5 p-4">
            <div className='py-2'><img src={ser} alt="" /></div>
            <div className='py-1'><h5>Trello Enterprise</h5></div>
            <div className='py-3'><p>The productivity tool teams love, paired with the features and security needed for scale.</p></div>
          </div>
      </div>



      <div className="row py-5 text-center">
          <h1>Hn3ml footer hena</h1>
      </div>




      </div>
    </>
  )
}
