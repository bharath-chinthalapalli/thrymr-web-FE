import React, { Component } from "react"
// import { StaticImage } from "gatsby-plugin-image"

function Contact() {
  return (
    <>
      <div className="container  mx-auto mt-40 mb-28 lg:flex">
        {/* unused form *******************
         <div className="lg:px-12 pb-10 lg:w-1/2">
          <p className="text-gray-500">Contact Us</p>
          <h1 className="text-3xl font-semibold mt-2">Let's Craft together!</h1>
          <p className="text-md mt-3">
            Please fill in your brief details and we will get in touch at the
            earliest.
          </p>
          <div className="w-full mb-4 mt-4">
            <div className="justify-center">
              <input
                type="text"
                placeholder="Your Name"
                className="px-8  w-full border rounded py-2 text-gray-500 focus:outline-none items-center"
              />
            </div>
          </div>
          <div className="w-full mb-4">
            <div className="flex justify-center">
              <input
                type="number"
                placeholder="Your Contact Number"
                className="px-8 w-full border rounded py-2 text-gray-500 focus:outline-none"
              />
            </div>
          </div>
          <div className="w-full mb-4 justify-center">
            <div className="flex items-center">
              <input
                type="email"
                placeholder="Your Email"
                className="px-8 w-full border rounded py-2 text-gray-500 focus:outline-none"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full mt-6 py-2 border rounded  text-gray-100 focus:outline-none connectbtn"
          >
            Submit
          </button>
        </div> 
        <div className="lg:w-1/2  lg:mt-36 xl:mt-20 xxl:mt-0">
          <StaticImage
            src="../images/unsplash.jpg"
            className="md:ml-20 rounded-lg  "
            width={550}
            height={350}
            //   quality={95}
            formats={["auto", "webp", "avif"]}
            alt="Thrymr"
            style={{}}
          />
        </div>
        */}
      </div>
    </>
  )
}
export default Contact
