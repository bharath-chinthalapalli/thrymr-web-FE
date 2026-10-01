import React from "react"
import Layout from "../components/layout"
// import { StaticImage } from "gatsby-plugin-image"
// import { useState } from "react"
import { Link } from "gatsby"
function AboutThrymr() {
//   const [toggleState, SetToggleState] = useState(1)

//   const toggleTab = index => {
//     SetToggleState(index)
//   }
  return (
    <>
      <Layout>
        <header className="about-img">
          <div className="grid sm:place-items-center ">
            <div className="text-white text-center xl:mt-72 sm:mt-44">
              <h1 className="xxl:text-3xl md:text-2xl sm:text-xl">
                {" "}
                Who We Are{" "}
              </h1>
              <h1 className="mt-4 xxl:text-9xl md:text-7xl sm:text-5xl">
                {" "}
                About Us
              </h1>
            </div>
          </div>
        </header>
        <div className=" xl:mx-96">
          <div className=" flex">
            <Link
              to="/"
              className="inline-block  text-black no-underline
                    hover:text-underline py-2 px-4 "
              activeClassName="greenColorMenu"
            >
              Home
            </Link>
            <h1 className="mt-2 text-gray-500">/About us</h1>
          </div>

          <div>
            <div className="container mx-auto  p-4">
              <div className="flex text-2xl mb-10 -ml-12 cursor-pointer">
                {/* <div
                  className={toggleState === 1 ? "activeService" : "service"}
                  onClick={() => toggleTab(1)}
                >
                  Overview
                </div> */}
                {/* <div
                  className={toggleState === 2 ? "activeService" : "service"}
                  onClick={() => toggleTab(2)}
                >
                  Our Team
                </div> */}
              </div>
              {/* <div className={toggleState === 1 ? "show" : "hidden"}>
                <div className="mb-10 ">
                  <p className="text-xl tracking-wide leading-loose">
                    {" "}
                    We provide end-to-end software development services. We
                    build Web, Mobile, Analytics, Machine <br /> Learning,
                    Blockchain, and RPA solutions.
                  </p>
                </div>
                <div className="mb-10 ">
                  <p className="text-xl tracking-wide leading-loose">
                    Singapore is our corporate head office. Hyderabad (India) is
                    our main development center. We also have <br /> teams in
                    India (Nandyal, Jaipur, Lucknow & Bangalore), Germany
                    (Hamburg), Myanmar (Yangon), and <br /> Singapore.
                  </p>
                </div>
                <div className="mb-10">
                  <p className="text-xl tracking-wide leading-loose">
                    Although we are agnostic to business verticals, We have
                    significant experience in Logistics, Supply <br /> Chain,
                    Fintech, Edutech & E-Commerce.
                  </p>
                </div>
                <div className=" mb-10">
                  <p className="text-xl tracking-wide leading-loose">
                    We work in both fixed price (turn key) and effort-based
                    (T&M) engagement models. We also provide <br /> contract
                    staffing for technical profiles.
                  </p>
                </div>
                <div className=" mb-10">
                  <p className="text-xl tracking-wide leading-loose">
                    We are AWS Consulting Partners and have deep expertise in
                    building cloud-native solutions using AWS. <br /> Most of
                    our developers are AWS certified.
                  </p>
                </div>
                <div className="mb-10">
                  <p className="text-xl tracking-wide leading-loose">
                    Our biggest differentiator is that we bring the product
                    mindset to the IT services Industry.
                  </p>
                </div>
                <div className=" mb-10">
                  <p className="text-xl tracking-wide leading-loose">
                    We build & deliver solutions at a fraction of the market
                    price. We also complete projects within <br /> committed
                    timelines and good quality.
                  </p>
                </div>
              </div> */}
              {/* <div className={toggleState === 2 ? "show" : "hidden"}>
                cvbhjk
              </div> */}
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
export default AboutThrymr
