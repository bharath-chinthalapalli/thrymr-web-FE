import React from "react"
// import PropTypes, { func } from "prop-types"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
// import { Component } from "react"

function ClientLogo() {
  return (
    <>
      <div className=" container mt-40 mx-auto mb-28">
        <p className="text-center mt-20 clientText">Our Clients</p>
        <h1 className="text-center mb-20 aboutText">
          Who have worked with us
        </h1>
        <div className="grid gap-8 space-x-1 md:grid-cols-4 sm:grid-cols-2">
          <div className=" bg-white">
            <StaticImage
              src="../images/ClientLogo1.png"
              className=" md:ml-6 md:-mt-2"
              width={200}
              // quality={95}
              formats={["auto", "webp", "avif"]}
              alt="Thrymr"
              style={{}}
            />
          </div>

          <div className=" bg-white ">
            <StaticImage
              src="../images/ClientLogo2.png"
              className="md:ml-6"
              width={200}
              //   quality={95}
              formats={["auto", "webp", "avif"]}
              alt="Thrymr"
              style={{}}
            />
          </div>

          <div className="bg-white ">
            <StaticImage
              src="../images/msig.png"
              className="md:ml-6 "
              width={190}
              //   quality={95}
              formats={["auto", "webp", "avif"]}
              alt="Thrymr"
              style={{}}
            />
          </div>

          <div className=" bg-white">
            <StaticImage
              src="../images/coassets.png"
              className="md:ml-6 "
              width={200}
              //   quality={95}
              formats={["auto", "webp", "avif"]}
              alt="Thrymr"
              style={{}}
            />
          </div>

          <div className=" bg-white ">
            <StaticImage
              src="../images/ClientLogo5.png"
              className="md:ml-6 "
              width={200}
              //   quality={95}
              formats={["auto", "webp", "avif"]}
              alt="Thrymr"
              style={{}}
            />
          </div>

          <div className=" bg-white ">
            <StaticImage
              src="../images/ClientLogo6.png"
              className="md:ml-6   "
              width={200}
              //   quality={95}
              formats={["auto", "webp", "avif"]}
              alt="Thrymr"
              style={{}}
            />
          </div>

          <div className=" bg-white ">
            <StaticImage
              src="../images/ClientLogo7.png"
              className="md:ml-6   "
              width={200}
              //   quality={95}
              formats={["auto", "webp", "avif"]}
              alt="Thrymr"
              style={{}}
            />
          </div>

          <div className=" bg-white ">
            <StaticImage
              src="../images/ClientLogo8.png"
              className="md:ml-6   md:mt-6"
              width={200}
              //   quality={95}
              formats={["auto", "webp", "avif"]}
              alt="Thrymr"
              style={{}}
            />
          </div>

          <div className=" bg-white ">
            <StaticImage
              src="../images/delhivery.png"
              className="md:ml-6   md:mt-4"
              width={200}
              //   quality={95}
              formats={["auto", "webp", "avif"]}
              alt="Thrymr"
              style={{}}
            />
          </div>

          <div className=" bg-white ">
            <StaticImage
              src="../images/truweight.png"
              className="md:ml-6   "
              width={200}
              //   quality={95}
              formats={["auto", "webp", "avif"]}
              alt="Thrymr"
              style={{}}
            />
          </div>

          <div className=" bg-white ">
            <StaticImage
              src="../images/ClientLogo11.png"
              className="md:ml-6   "
              width={200}
              //   quality={95}
              formats={["auto", "webp", "avif"]}
              alt="Thrymr"
              style={{}}
            />
          </div>
          <div className=" bg-white ">
            <StaticImage
              src="../images/ClientLogo12.png"
              className="md:ml-6  md:mt-6 "
              width={200}
              //   quality={95}
              formats={["auto", "webp", "avif"]}
              alt="Thrymr"
              style={{}}
            />
          </div>
        </div>

        <div className="text-center">
          {/* <Link to="/Clients/">
            <button className=" mx-auto border-solid border rounded border-black px-10 py-2 my-8">
              View More
            </button>
          </Link> */}
        </div>
      </div>
    </>
  )
}
export default ClientLogo
