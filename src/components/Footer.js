import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
function Footer() {
  return (
    <>
      {/* <div className="bg-black text-white p-4 ">
        <div className="grid lg:grid-cols-3 xl:grid-cols-5 gap-4">
          <div className="">
            <StaticImage
              src="../images/logo-thrymr.png"
              className="md:ml-6"
              width={250}
              formats={["auto", "webp", "avif"]}
              alt="Shipx"
              style={{ marginBottom: `0.45rem` }}
            />
          </div>

           <div>
            <h1 className="text-2xl">Our Office</h1>
            <h3 className="text-xl mt-3 ">Germany</h3>
            <address className="text-slate-500">
                <span className="text-lg">  Hamburg</span> <br></br>
            NeuhÃ¶fer Damm 110, Hamburg, Germany<br></br>
            +49 4085599663          
            </address>
            <h3 className="text-xl mt-5">Singapore</h3>
            <address className="text-slate-500">
                <span className="text-lg">  Singapore</span> <br></br>
                70 South Bridge Rd, #04-00,Singapore-058700<br></br>
                +65 96267610    
            </address>
          </div> 
          <div>
            <h3 className=" mt-3 text-2xl">India</h3>
            <address className="text-slate-500">
                <span className="text-lg text-slate-200">  Hyderabad</span> <br></br>
                Plot No. 40A, Sy No 103/1, Jayabheri Enclave, Gachibowli Hyderabad - 500032<br></br>
                
                +91 77956 65202       
            </address>
            <address className="text-slate-500">
                <span className="text-lg text-slate-200">  Lucknow</span> <br></br>
                3/27, Sector -G Jankipuram, Lucknow -226021<br></br>
                +91 75052 20984        
            </address>
            <address className="text-slate-500">
                <span className="text-lg text-slate-200">  Nandyal</span> <br></br>
                Padmavathi Nagar, Raghu Enclave - 1st Floor, Nandyal - Kurnool Dist,AP<br></br>
                +91 77956 65202       
            </address>    
          </div>

           <div className="flex">
            <div>
              <h1 className="text-lg">Quick Link</h1>
              <div className="mr-1 ">
                <Link
                  to="/"
                  className="inline-block  text-slate-500 no-underline
                    hover:text-underline py-2 px-4 "
                  activeClassName="greenColorMenu"
                >
                  About
                </Link>
              </div>
              <div className="mr-1">
                <Link
                  to="/"
                  className="inline-block  text-slate-500 no-underline
                    hover:text-underline py-2 px-4 "
                  activeClassName="greenColorMenu"
                >
                  Service
                </Link>
              </div>
              <div className="mr-1">
                <Link
                  to="/"
                  className="inline-block  text-slate-500 no-underline
                    hover:text-underline py-2 px-4 "
                  activeClassName="greenColorMenu"
                >
                  Solution
                </Link>
              </div>
            </div>
            <div>
              <div className=" mt-8">
                <Link
                  to="/"
                  className="inline-block  text-slate-500 no-underline
                    hover:text-underline py-2 px-4 "
                  activeClassName="greenColorMenu"
                >
                  Industries
                </Link>
              </div>
              <div className="">
                <Link
                  to="/"
                  className="inline-block  text-slate-500 no-underline
                    hover:text-underline py-2 px-4 "
                  activeClassName="greenColorMenu"
                >
                  Career
                </Link>
              </div>
              <div className="">
                <Link
                  to="/"
                  className="inline-block  text-slate-500 no-underline
                    hover:text-underline py-2 px-4 "
                  activeClassName="greenColorMenu"
                >
                  Achievements
                </Link>
              </div>
            </div>
          </div> 

          <div>
            <h1 className="text-2xl mb-8 ">Follow Us</h1>
            <StaticImage
                  src="../images/facebook.png"
                  className=" "
                  width={40}
                  formats={["auto", "webp", "avif"]}
                  alt="Thrymr"
                  style={{  }}
                />
                   <StaticImage
                  src="../images/linkdin.png"
                  className="md:ml-6   "
                  width={40}
                  formats={["auto", "webp", "avif"]}
                  alt="Thrymr"
                  style={{  }}
                />
                   <StaticImage
                  src="../images/twitter.png"
                  className="md:ml-6   "
                  width={40}
                  formats={["auto", "webp", "avif"]}
                  alt="Thrymr"
                  style={{  }}
                />
          </div> 
        </div>
      </div> */}

      <div className="footerBackground footerText grid lg:grid-cols-3 p-4 ">
        <div className="mt-5 ml-6">
          <Link to ='/' > 
            <StaticImage
              src="../images/logo-thrymr.png"
              className="md:ml-6"
              width={224}
              formats={["auto", "webp", "avif"]}
              alt="thrymr-Logo"
              style={{ marginBottom: `0.45rem` }}
            />
          </Link>
        </div>
        <div className="flex mx-auto mt-5">
          {/* <div className="mr-1 flex">
            <Link
              to="/about"
              className="inline-block  text-white no-underline
                    hover:text-underline py-2 px-4 "
              activeClassName="greenColorMenu"
            >
              About
            </Link>
          </div> */}
          <div className="mr-1 flex">
            <Link
              to="/Services"
              className="inline-block  text-white no-underline
                    hover:text-underline py-2 px-4 "
              activeClassName="greenColorMenu"
            >
              Services
            </Link>
          </div>

          {/* <div className="mr-1 flex">
            <Link
              to="/SoftwareDevelopment"
              className="inline-block  text-white no-underline
                    hover:text-underline py-2 px-4 "
              activeClassName="greenColorMenu"
            >
              Industries
            </Link>
          </div> */}
         
          <div className="mr-1">
            <Link
              to="/casestudies/"
              className="inline-block  text-white no-underline
                    hover:text-underline py-2 px-4 "
              activeClassName="greenColorMenu"
            >
              Case Studies
            </Link>
          </div>

          {/* <div className="mr-1">
            <Link
              to="/Careers"
              className="inline-block  text-white no-underline
                    hover:text-underline py-2 px-4 "
              activeClassName="greenColorMenu"
            >
              Careers
            </Link>
          </div> */}

          <div className="mr-1">
            <Link
              to="/contact/"
              className="inline-block  text-white no-underline
                    hover:text-underline py-2 px-4 "
              activeClassName="greenColorMenu"
            >
              Contact
            </Link>
          </div>
   
        </div>

        <div className="xl:ml-96 sm:mx-auto mt-5 myicons sm:pl-10 md:pl-0 lg:pl-0">
          <Link
            href="https://www.linkedin.com/company/thrymr-software"
            target="_blank"
          >
            <StaticImage
              src="../images/linkdin.png"
              className="md:ml-6 sm:mr-5 lg:mr-0 img-l"
              width={28}
              formats={["auto", "webp", "avif"]}
              alt="Thrymr"
              style={{}}
            />
          </Link>

          <Link href="https://www.facebook.com/thrymrsoftware" target="_blank">
            <StaticImage
              src="../images/facebook.png"
              className="md:ml-6 sm:mr-5 lg:mr-0 img-fb"
              width={28}
              formats={["auto", "webp", "avif"]}
              alt="Thrymr"
              style={{}}
            />
          </Link>
         
        </div>
      </div>

      <div className="footerBackground2">
        <h1 className="text-center copyRightText p-3 text-xs ">
          Copyright &copy; {new Date().getFullYear()}
          <span className="ml-4">Thrymr Software Pvt Ltd.</span>
        </h1>
      </div>
    </>
  )
}
export default Footer
