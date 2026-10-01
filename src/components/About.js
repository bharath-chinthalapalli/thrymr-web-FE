import React from "react";
import HeroSection from "./HeroSection";
function About() {
  return (
    <>
      {/* <p className="text-gray-400 text-lg text-center  lg:my-20">About Us</p> */}
      <HeroSection />
      <div className=" sm:inline md:inline  xl:flex lg:my-28 sm:my-12">
        <section className="about-image w-full  py-2 mt-4 lg:ml-16 mr-16 mb-4 "></section>

        <div className=" mx-1  xxl:mx-28 px-5 aboutbodyText lg:ml-5">
          <p className="text-gray-400 text-lg text-left m-4 my-4">About Us</p>
          <h1 className="aboutText m-4  ">
            Thrymr is a software development company
          </h1>
          <p className="m-4 leading-loose">
            We provide end-to-end software development services. We build Web,
            Mobile, Analytics, Machine Learning, Blockchain, and RPA solutions.
          </p>
          <p className="m-4 leading-loose">
            Singapore is our corporate head office. Hyderabad (India) is our
            main development center. We also have teams in India (Nandyal,
            Jaipur, Lucknow & Bangalore), Germany (Hamburg), Myanmar (Yangon),
            and Singapore.
          </p>
          <p className="m-4 leading-loose">
            Although we are agnostic to business verticals, We have significant
            experience in Logistics, Supply Chain, Fintech, Edutech &
            E-Commerce.
          </p>

          <p className="m-4 leading-loose">
            We work in both fixed price (turn key) and effort-based (T&M)
            engagement models. We also provide contract staffing for technical
            profiles.
          </p>
          <p className="m-4 leading-loose">
            We are AWS Consulting Partners and have deep expertise in building
            cloud-native solutions using AWS. Most of our developers are AWS
            certified.
          </p>
          <p className="m-4 leading-loose">
            Our biggest differentiator is that we bring the product mindset to
            the IT services Industry.
          </p>

          <p className="m-4 leading-loose">
            We build & deliver solutions at a fraction of the market price. We
            also complete projects within committed timelines and good quality.
          </p>
        </div>
      </div>
    </>
  )
}
export default About
