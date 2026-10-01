import React from "react"
import { useState } from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import emailjs from "emailjs-com"

import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function ContactUs() {
  function sendMail(e) {
    e.preventDefault()
    console.log(e)
    emailjs
      .sendForm(
        "service_0g3jpom",
        "template_kc176so",
        e.target,
        "aHNsRp6NX5OcSFed2"
      )
      .then(res => {
        console.log(res)
        notify()
      })
      .catch(err => console.log(err))
    e.target.reset()
  }
  const notify = () =>
    toast.success("Thank you, Contact request submitted successfully.!")

  // function checkMobile() {
  //   const m = document.getElementById("mobile").value
  //   if (isNaN(m)) {
  //   }
  // }
  const [selected, setSelected] = useState(false)
  const highLight = () => {
    setSelected(!selected)
    // const high = console.log(selected)
  }
  return (
    <>
      <Layout>
        <header className="contact-img">
          <div className="grid sm:place-items-center ">
            <div className="text-white text-center xl:mt-32 sm:mt-44">
              <h1 className="mt-4 xxl:text-6xl md:text-5xl sm:text-4xl">
                {" "}
                Contact Us
              </h1>
            </div>
          </div>
        </header>

        <div className=" flex lg:ml-32 lg:m-8 sm:mt-5 sm:ml-6">
          <Link
            to="/"
            className="inline-block  text-black no-underline
                    hover:text-underline py-2 px-1 ml-4"
            activeClassName="greenColorMenu"
          >
            Home
          </Link>
          <h1 className="mt-2 text-gray-500">/ Contact Us</h1>
        </div>
        {/* <p className="text-nowrap text-center sm:text-2xl lg:text-3xl mt-4">
          Contact Us
        </p> */}
        <div className="lg:flex lg:ml-10">
          <div className="lg:w-1/2 lg:m-10">
            {/* <p className="text-gray-500">Contact Us</p> */}
            {/* <h1 className="text-3xl font-semibold mt-2 w-72">
                Let's Craft together!
              </h1> */}
            {/* <p className="text-md mt-3">
                Please fill in your brief details and we will get in touch at
                the earliest.
              </p> */}
            <h1 className="text-3xl  m-12 xl:ml-16">Let's Craft together!</h1>
            <h1 className=" text-3xl  m-12 xl:ml-16">What can we do for you?</h1>
            <div className="grid gap-8 space-x-1 xl:grid-cols-4 m-12 lg:mt-20 xl:ml-16 query-box">
              <button className="contact-box" onClick={highLight}>
                Design
              </button>

              <button className="contact-box" onClick={highLight}>
                Development
              </button>
              <button className="contact-box" onClick={highLight}>
               Testing
              </button>
              <button className="contact-box" onClick={highLight}>
                Support
              </button>
            </div>
          </div>
          <div className="lg:w-1/2">
            <form onSubmit={sendMail}>
              <div className="container mx-auto mt-20 ">
                <div className="lg:px-0 pb-10 lg:w-10/12">
                  {/* <h1 className="text-3xl  mt-2 ">Let's Craft together!</h1> */}
                  <p className="text-md mt-3">
                    Please fill in your brief details and we will get in touch
                    at the earliest.
                  </p>
                  <div className="w-full mb-12 mt-12">
                    <div className="justify-center">
                      <input
                        type="text"
                        placeholder="Enter Your Full Name"
                        className="px-3 w-full border rounded py-2 text-gray-500 focus:outline-none items-center"
                        name="name"
                        required
                      />
                    </div>
                  </div>
                  <div className="w-full mb-12 justify-center">
                    <div className="flex items-center">
                      <input
                        id="mobile"
                        type="tel"
                        placeholder="Enter Your Number"
                        className="px-3 w-full border rounded py-2 text-gray-500 focus:outline-none"
                        name="number"
                        required
                      />
                    </div>
                  </div>
                  <div className="w-full mb-12 justify-center">
                    <div className="flex items-center">
                      <input
                        type="email"
                        placeholder="Enter Your Email"
                        className="px-3 w-full border rounded py-2 text-gray-500 focus:outline-none"
                        name="email"
                        required
                      />
                    </div>
                  </div>
                  <div className="w-full mb-12 justify-center">
                    <div className="flex items-center">
                      <input
                        type="text"
                        placeholder="Purpose Of Contact"
                        className="px-3 w-full border rounded py-2 text-gray-500 focus:outline-none"
                        name="purpose"
                        required
                      />
                    </div>
                  </div>
                  <div className="w-full mb-12 justify-center">
                    <div className="flex items-center">
                      <textarea
                        cols={12}
                        placeholder="Enter Your Query"
                        className="px-3 w-full border rounded py-2 text-gray-500 focus:outline-none"
                        name="msg"
                        required
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="h-10 px-5 text-white transition-colors duration-150 border border-orange-500 rounded focus:shadow-outline bg-orange-500 hover:text-white w-full hover:font-bold hover:shadow-md"
                  >
                    Submit
                  </button>
                  <ToastContainer />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="activeService1">
         
        </div>

        <div className="address-cards">
          <div className="container grid space-x-9 lg:grid-cols-3 m-10 xl:mx-32 mac-address lg:ml-0">
          <div className="address-box xl:border-r-4 mac-address-box ml-9 mb-12">
              <span className="address-text">
                <StaticImage
                  src="../images/singapore.png"
                  className=""
                  width={56}
                  //   quality={95}
                  formats={["auto", "webp", "avif"]}
                  alt="Thrymr"
                  style={{}}
                />

                <h1 className="text-2xl ">Singapore</h1>
                <p>
                  70 South Bridge Rd, <br />
                  #04-00, Singapore-058700 <br />
                  +65 96267610<br />
                  <a href="mailto:contact@thrymr.net" className="text-blue-800">contact@thrymr.net</a>
                </p>
              </span>
             
            </div>

            <div className="address-box sm:border-0 xl:border-r-4">
              <span className="address-text">
                <StaticImage
                  src="../images/germany.png"
                  className=""
                  width={56}
                  //   quality={95}
                  formats={["auto", "webp", "avif"]}
                  alt="Thrymr"
                  style={{}}
                />

                <h1 className="text-2xl">Hamburg</h1>
                <p>
                  Neuhofer Damm 110 <br />
                  Hamburg, Germany <br />
                  +49 4085599663 <br />
                  <a href="mailto:contact@thrymr.net" className="text-blue-800">contact@thrymr.net</a>
                </p>
              </span>
            </div>

            <div className="address-box sm:border-0 sm:mb-16 lg:mb-0 myslide">
              <span className="address-text ">
                <StaticImage
                  src="../images/India.png"
                  className=""
                  width={50}
                  //   quality={95}
                  formats={["auto", "webp", "avif"]}
                  alt="Thrymr"
                  style={{}}
                />
                
                <h1 className="text-2xl">Hyderabad (Corporate Office)</h1>
                <p>
                8th Floor, Sohini Tech Park, Nanakramguda Road,  <br />
                Financial District, Nanakramguda, Telangana 500032 <br />
                +91 77956 65202 <br />
                <a href="mailto:contact@thrymr.net" className="text-blue-800">contact@thrymr.net</a>
                </p>
              </span>
            </div>

            <div className="address-box sm:border-0 xl:border-r-4 sm:mb-16 lg:mb-0 myslide lg:mt-10">
              <span className="address-text">
                <StaticImage
                  src="../images/India.png"
                  className=""
                  width={50}
                  //   quality={95}
                  formats={["auto", "webp", "avif"]}
                  alt="Thrymr"
                  style={{}}
                />
                <h1 className="text-2xl">Hyderabad (Registered Address)</h1>
                <p>
                  Plot No. 40A, Sy No 103/1, 
                  Jayabheri Enclave, Gachibowli <br></br>
                  Hyderabad, Telangana 500032 <br />
                  +91 77956 65202 <br />
                  <a href="mailto:contact@thrymr.net" className="text-blue-800">contact@thrymr.net</a>
                </p>
                
              </span>
            </div>

            <div className="address-box xl:border-r-4 sm:mb-16 lg:mb-0 lg:mt-10">
              <span className="address-text">
                <StaticImage
                  src="../images/India.png"
                  className=""
                  width={50}
                  //   quality={95}
                  formats={["auto", "webp", "avif"]}
                  alt="Thrymr"
                  style={{}}
                />

                <h1 className="text-2xl">Nandyal</h1>
                <p>
                3rd Floor, Cherukuri Venkata Subbayya Naidu plaza,  <br />
                Above Reliance Trendz, Padmavathi Nagar, <br />
                Nandyal (District), Andhra Pradesh. 
                  <br />
                  +91 77956 65202 <br />
                  <a href="mailto:contact@thrymr.net" className="text-blue-800">contact@thrymr.net</a>
                </p>
              </span>
            </div>

            <div className="address-box sm:border-0 lg:mt-10">
              <span className="address-text">
                <StaticImage
                  src="../images/India.png"
                  className=""
                  width={50}
                  //   quality={95}
                  formats={["auto", "webp", "avif"]}
                  alt="Thrymr"
                  style={{}}
                />

                <h1 className="text-2xl">Lucknow</h1>
                <p>
                  3/27, Sector -G, Jankipuram <br />
                  Lucknow 226021 <br />
                  +91 75052 20984 <br />
                  <a href="mailto:contact@thrymr.net" className="text-blue-800">contact@thrymr.net</a>
                </p>
              </span>
            </div>
            
          </div>
        </div>
      </Layout>
    </>
  )
}
export default ContactUs
