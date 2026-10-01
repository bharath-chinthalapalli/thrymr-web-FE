import React from "react"
// import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

function Clients() {
  return (
    <>
      <header className="w-full z-10 top-0 sm:justify-between py-2 clientlogo-img"></header>
      <div className=" flex lg:ml-32 lg:mt-12">
        <Link
          to="/"
          className="inline-block  text-black no-underline
                    hover:text-underline py-2 px-1 "
          activeClassName="greenColorMenu"
        >
          Home
        </Link>
        <h1 className="mt-2 text-gray-500">/ Clients</h1>
      </div>
      <div className=" container sm:mt-12 lg:mt-12 mx-auto mb-28">
        <p className="text-center mt-20 clientText">Our-clients</p>
        <h1 className="text-center mb-20 text-3xl font-bold">
          Who have worked with us
        </h1>
        <div className="grid gap-8 space-x-1 md:grid-cols-4 sm:grid-cols-2">
          <div className=" bg-white ">
            <StaticImage
              src="../images/ClientLogo1.png"
              className=" md:ml-6 "
              width={200}
              //   quality={95}
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
              src="../images/ClientLogo3.png"
              className="md:ml-6 "
              width={250}
              //   quality={95}
              formats={["auto", "webp", "avif"]}
              alt="Thrymr"
              style={{}}
            />
          </div>
          <div className=" bg-white">
            <StaticImage
              src="../images/ClientLogo4.png"
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
              src="../images/ClientLogo9.png"
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
              src="../images/ClientLogo10.png"
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
              className="md:ml-6   "
              width={200}
              //   quality={95}
              formats={["auto", "webp", "avif"]}
              alt="Thrymr"
              style={{}}
            />
          </div>
        </div>
      </div>
    </>
  )
}
export default Clients
