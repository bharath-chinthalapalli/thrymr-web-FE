import { Link } from "gatsby"
import React from "react"
// import { StaticImage } from "gatsby-plugin-image"
// import { Link } from "gatsby"
function Career() {
  return (
    <>
      <div>
        <header className="post w-full z-10 top-0 sm:justify-between py-2 mt-4 ">
          <div className="text-white sm:mt-20  xxl:mt-72 xl:mt-20 lg:w-3/12 lg:ml-auto sm:mr-10 xxl:mr-56 md:w-full md:ml-96 ml-4">
            <p className="mb-3 joinUsText mac-header">Why Join Us </p>
            <h1 className="mb-3 CareerHeadtext">Career</h1>
            <p className=" mb-8 careerText">
              Thrymr provides the best quality work, with best in class salaries
              and an amazing opportunity to learn. We also provide accelerated
              growth for you in your career path.
              Click on join us to explore the current job openings with us at
              our Linkedin page.
            </p>
            <Link
              href="https://www.linkedin.com/company/thrymr-software/jobs"
              className="joinUsText semibold border rounded px-10 py-2 my-6 hover:bg-orange-500"
              target="_blank"
            >
              Join Us
            </Link>
          </div>
        </header>
      </div>
    </>
  )
}
export default Career
