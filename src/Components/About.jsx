import { div } from "framer-motion/client"
import React from "react"

export default function About() {
  return (
    <>
    <div className="flex flex-col p-10">
    <div className="font-display text-center text-violet-400 text-3xl "> About Us </div>
    
    <div className="flex flex-row w-full p-50 px-10 py-10 ">
        
    <div className="p-10"> 
      {/*<!-- Component: Basic blog card --> */}
      <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200 hover:bg-violet-200 ">
        {/*  <!-- Image --> */}
        <figure>
        <i className="fa-solid w-full fa-utensils  text-3xl "></i>
        </figure>
        {/*  <!-- Body--> */}
        <div className="p-6">
          <header className="mb-4">
            <h3 className="text-xl  font-medium text-slate-700">
              The easy way to eat
            </h3>
            <p className="text-sm text-slate-400"> By George, jun 3 2023</p>
          </header>
          <p>
          Our mission is to connect you with delicious culinary experiences right at your fingertips. Whether you’re craving a quick snack, exploring new recipes, or searching for the best local eateries, we’ve got you covered
          </p>
        </div>
      </div>
      {/*<!-- End Basic blog card --> */}
    </div>
    <div className="p-10"> 
      {/*<!-- Component: Basic blog card --> */}
      <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200 hover:bg-violet-200">
        {/*  <!-- Image --> */}
        <figure>

        <i class="fa-solid fa-martini-glass-citrus w-full text-3xl"></i>
        </figure>
        {/*  <!-- Body--> */}
        <div className="p-6">
          <header className="mb-4">
            <h3 className="text-xl  font-medium text-slate-700">
              The easy way to eat
            </h3>
            <p className="text-sm text-slate-400"> By George, jun 3 2023</p>
          </header>
          <p>
          Our mission is to connect you with delicious culinary experiences right at your fingertips. Whether you’re craving a quick snack, exploring new recipes, or searching for the best local eateries, we’ve got you covered
          </p>
        </div>
      </div>
      {/*<!-- End Basic blog card --> */}
    </div>
    <div className="p-10"> 
      {/*<!-- Component: Basic blog card --> */}
      <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200 hover:bg-violet-200">
        {/*  <!-- Image --> */}
        <figure>
        
        <i class="fa-solid fa-ice-cream w-full text-3xl"></i>
        </figure>
        {/*  <!-- Body--> */}
        <div className="p-6">
          <header className="mb-4">
            <h3 className="text-xl  font-medium text-slate-700">
              The easy way to eat
            </h3>
            <p className="text-sm text-slate-400"> By George, jun 3 2023</p>
          </header>
          <p>
          Our mission is to connect you with delicious culinary experiences right at your fingertips. Whether you’re craving a quick snack, exploring new recipes, or searching for the best local eateries, we’ve got you covered
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
