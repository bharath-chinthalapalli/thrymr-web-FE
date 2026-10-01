import React from "react"
// import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

function Industries() {

  return (
    <>
      {/* <StaticImage
        src="../images/Ellipse 50.svg"
        className="industriesimg"
        width={60}
        quality={95}
        formats={[ "auto", "webp", "avif" ]}
        alt="Thrymr"
      /> */}
      <div className="  ">
    
        <div className="industries">
          <div className="container mx-auto pt-36 pb-20 xl:flex">
            <div className="xl:w-1/2 mx-auto lg:pl-20 xl:pl-0 mac-industries">
              <p className="industriestext">Industries</p>
              <h1 className="industriesHeadtext">
                For whom we build
              </h1>
              <div className="flex lg:space-x-32 mt-8 industriestext w-full ">
                <div className="w-1/2">

                  <ul>
                    <li className="">
                      <div className=" hover:underline hover:font-semibold">
                        <Link className="arrow"
                          to="/Industries/OilGas"
                        >
                          <span className="ml-5"> Oil & Gas</span>
                        </Link>
                     </div>
                    </li>
                    <li>
                      <div className=" hover:underline hover:font-semibold w-72">
                        <Link className="arrow"
                          to="/Industries/Lsc"
                        >
                          <span className="ml-5">Logistics & Supply Chain</span>
                        </Link>
                      </div>
                    </li>
                    <li>
                      <div className=" hover:underline hover:font-semibold">
                        <Link className="arrow"
                          to="/Industries/Edtech"
                        >
                          <span className="ml-5">EdTech</span>
                        </Link>
                      </div>
                    </li>
                    <li>
                      <div className=" hover:underline hover:font-semibold">
                        <Link className="arrow"
                          to="/Industries/Finance"
                        >
                          <span className="ml-5"> Finance</span>
                        </Link>
                      </div>
                    </li>
                    <li>
                      <div className=" hover:underline hover:font-semibold">
                        <Link className="arrow"
                          to="/Industries/WellnessFitness"
                        >
                          <span className="ml-5">  Wellness/Fitness</span>
                        </Link>
                      </div>
                    </li>
                    <li>
                      <div className=" hover:underline hover:font-semibold">
                        <Link className="arrow"
                          to="/Industries/Pharma"
                        >
                          <span className="ml-5">Pharma</span>
                        </Link>
                      </div>
                    </li>
                  </ul>

                </div>

                <div className="w-1/2 sm:ml-12">
                  <ul>
                    <li>
                      <div className=" hover:underline hover:font-semibold">
                        <Link className="arrow"
                          to="/Industries/Nonprofit"
                        >
                          <span className="ml-5"> Non-profit</span>
                        </Link>
                      </div>
                    </li>
                    <li>
                      <div className=" hover:underline hover:font-semibold">
                        <Link className="arrow"
                          to="/Industries/Healthcare"
                        >
                          <span className="ml-5">Healthcare</span>
                        </Link>
                      </div>
                    </li>
                    <li>
                      <div className=" hover:underline hover:font-semibold sm:w-36 lg:w-0 xl:w-full">
                        <Link className="arrow"
                          to="/Industries/Ecommerce"
                        >
                          <span className="ml-5"> E-Commerce</span>
                        </Link>
                      </div>
                    </li>
                    <li>
                      <div className=" hover:underline hover:font-semibold">
                        <Link className="arrow"
                          to="/Industries/Hr"
                        >
                          <span className="ml-5">HR</span>
                        </Link>
                      </div>
                    </li>
                    <li>
                      <div className=" hover:underline hover:font-semibold">
                        <Link className="arrow"
                          to="/Industries/Realestate"
                        >
                          <span className="ml-5"> Real Estate</span>
                        </Link>
                      </div>
                    </li>
                    <li>
                      <div className=" hover:underline hover:font-semibold">
                        <Link className="arrow"
                          to="/Industries/Travel"
                        >
                          <span className="ml-5">Travel</span>
                        </Link>
                      </div>
                    </li>
                  </ul>
                </div>

              </div>

            </div>

            <div className="xl:w-1/2 xl:mt-16 xxl:mt-0 mt-10">
              <StaticImage
                src="../images/industries.jpeg"
                className="md:ml-6 xl:w-full"
                width={700}
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt="Meeting"
                style={{}}
              />
            </div>
          </div>
        </div>
      </div>
        {/* <StaticImage
          className="industriesimg2"
        src="../images/Ellipse 49.png"
        width={90}
        alt="Thrymr"
        />
   */}
    </>
  )
}

export default Industries
