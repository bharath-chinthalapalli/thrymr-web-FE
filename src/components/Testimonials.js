import React, { Component } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


function Testimonials (){
    return (
        <>
     <div className="container xl:mt-40 sm:mt-20 mb-20 mx-auto">
         <p className="text-center text-sm text-gray-600">What our customers say </p>
         <h1 className="text-3xl font-semibold text-center mb-12">Testimonials</h1>
        <div className="grid lg:flex bg-gray-50">
        <div className="bg-white rounded-lg xxl:w-3/4 w-full  m-2">
         <StaticImage
                  src="../images/testimonial1.png"
                  className="md:ml-6   "
                  width={500}
                //   quality={95}
                  formats={["auto", "webp", "avif"]}
                  alt="Thrymr"
                  style={{  }}
                />
        </div>
        <div className="my-auto lg:ml-12  p-4 ">
            <div className="xxl:w-3/4 ">
            
            <p className="text-gray-900  xl:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ipsum
                ab
                rem, consequuntur autem totam sit minima porro?
                Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.    </p>
         
          <h2 className="mb-2 xl:text-2xl font-bold text-gray-900 mt-6">Priya Dutta</h2>
           <span className="text-xs text-gray-400">Chief Executive Officer</span>
            </div>
            <div className="flex items-center space-x-1 mt-8">
                <a href="#" className="px-2.5 py-2.5 text-gray-500 bg-white rounded-full hover:bg-gray-400 hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                    </svg>
                </a>
                <a href="#" className="px-2.5 py-2.5 text-gray-500 bg-white rounded-full hover:bg-gray-400 hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                </a> 
        </div>
        
    </div>
   
</div>
{/* <div className="grid lg:flex bg-gray-50 " id="Testimonial2" >
        <div className="bg-white rounded-lg lg:w-3/4 m-2">
         <StaticImage
                  src="../images/testimonial2.jpg"
                  className="md:ml-6   "
                  width={500}
                //   quality={95}
                  formats={["auto", "webp", "avif"]}
                  alt="Thrymr"
                  style={{  }}
                />
        </div>
        <div className="my-auto lg:ml-12  p-4 ">
            <div className="lg:w-3/4">
            
            <p className="text-gray-900  text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ipsum
                ab
                rem, consequuntur autem totam sit minima porro?
                Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.    </p>
         
          <h2 className="mb-2 text-2xl font-bold text-gray-900 mt-6">Prince Kashyap</h2>
           <span className="text-xs text-gray-400">Chief Executive Officer</span>
            </div>
            <div className="flex items-center space-x-1 mt-8">
                <a href="#" className="px-2.5 py-2.5 text-gray-500 bg-white rounded-full hover:bg-gray-400 hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                    </svg>
                </a>
                <a href="#" className="px-2.5 py-2.5 text-gray-500 bg-white rounded-full hover:bg-gray-400 hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                </a> 
        </div>
        
    </div>
   
</div> */}
</div>

        </>
        )
    }
    export default Testimonials;