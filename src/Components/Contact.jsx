import { div } from "framer-motion/client"
import React from "react"

export default function Contact() {
  return (
    <>
    <div className="flex flex-col p-10">
    <div className="font-display text-center text-violet-400 text-3xl "> We’re here for you! </div>
    
    <div className="flex flex-row w-full p-50 px-10 py-10 ">
        
    <div className="p-10 w-full "> 
      {/*<!-- Component: Basic blog card --> */}
      <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200 hover:bg-violet-200 ">
        {/*  <!-- Image --> */}
        <figure>
        <i class="fa-solid fa-location-dot w-full text-5xl text-center"></i>
        </figure>
        {/*  <!-- Body--> */}
        <div className="p-6">
          <header className="mb-4">
            <h2 className="text-xl  font-medium text-slate-700">
              Address
            </h2>
          </header>
          <p>
          A108 Adam Street, New York
          </p>
        </div>
      </div>
      {/*<!-- End Basic blog card --> */}
    </div>
    <div className="p-10 w-full "> 
      {/*<!-- Component: Basic blog card --> */}
      <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200 hover:bg-violet-200 ">
        {/*  <!-- Image --> */}
        <figure>
        <i class="fa-solid fa-phone-volume w-full text-5xl text-center"></i>
        </figure>
        {/*  <!-- Body--> */}
        <div className="p-6">
          <header className="mb-4">
            <h2 className="text-xl  font-medium text-slate-700">
              Call Us
            </h2>
          </header>
          <p>
          +1 5589 55488 55
          </p>
        </div>
      </div>
      {/*<!-- End Basic blog card --> */}
    </div>
   <div className="p-10 w-full "> 
      {/*<!-- Component: Basic blog card --> */}
      <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200 hover:bg-violet-200 ">
        {/*  <!-- Image --> */}
        <figure>
        
        <i class="fa-solid fa-envelope-open w-full text-5xl text-center"></i>
        </figure>
        {/*  <!-- Body--> */}
        <div className="p-6">
          <header className="mb-4">
            <h2 className="text-xl  font-medium text-slate-700">
             Email Us
            </h2>
          </header>
          <p>
          info@example.com
          </p>
        </div>
      </div>
      {/*<!-- End Basic blog card --> */}
    </div>
    </div>
    </div>
    </>
  )
}
