import { div } from "framer-motion/client";
import React from "react";

export default function Contactus() {
  return (
    <>
      <div>
        <div className="flex flex-col p-10">
          <div className="font-display text-center text-violet-400 text-3xl ">
            {" "}
            We’re here for you!{" "}
          </div>

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
                  <p>A108 Adam Street, New York</p>
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
                  <p>+1 5589 55488 55</p>
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
                  <p>info@example.com</p>
                </div>
              </div>
              {/*<!-- End Basic blog card --> */}
            </div>
          </div>
        </div>
        <div className="w-[100%] flex justify-center">
          <div className="w-[80%]">
            <div className="w-[100%] flex justify-between">
              <div className="w-[47%]">
                <div className="relative my-6">
                  <input
                    id="id-b02"
                    type="text"
                    name="id-b02"
                    placeholder="your name"
                    className="peer relative h-10 w-full border-b border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                  />
                  <label
                    htmlFor="id-b02"
                    className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-autofill:-top-2 peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                  >
                    First Name
                  </label>
                </div>
              </div>
              <div className="w-[47%]">
                <div className="relative my-6">
                  <input
                    id="id-b02"
                    type="text"
                    name="id-b02"
                    placeholder="your name"
                    className="peer relative h-10 w-full border-b border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                  />
                  <label
                    htmlFor="id-b02"
                    className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-autofill:-top-2 peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                  >
                    Last Name
                  </label>
                </div>
              </div>
            </div>
            <div className="w-[100%]">
              <div className="relative my-6">
                <input
                  id="id-b02"
                  type="text"
                  name="id-b02"
                  placeholder="your name"
                  className="peer relative h-10 w-full border-b border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                />
                <label
                  htmlFor="id-b02"
                  className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-autofill:-top-2 peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                >
                  email
                </label>
              </div>
            </div>

            <div className="w-[100%] mb-20">
              <div class="relative">
                <textarea
                  id="id-b02"
                  type="text"
                  name="id-b02"
                  rows="3"
                  placeholder="Write your message"
                  class="relative w-full px-4 py-2 text-sm placeholder-transparent transition-all border-b outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                ></textarea>
                <label
                  for="id-b02"
                  class="cursor-text peer-focus:cursor-default absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                >
                  Feedback
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
