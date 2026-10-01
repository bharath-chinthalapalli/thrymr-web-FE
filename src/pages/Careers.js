import { Link } from "gatsby"
import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
function Careers() {
  return (
    <div>
      <Layout>
        <header className="contact-img">
          <div className="grid sm:place-items-center ">
            <div className="text-white text-center xl:mt-32 sm:mt-44">
              <h1 className="mt-4 xxl:text-6xl md:text-5xl sm:text-4xl">
                Careers
              </h1>
            </div>
          </div>
        </header>
        <div className=" flex sm:ml-10 lg:ml-16  xl:ml-32 lg:mt-12 sm:my-5 ">
          <Link
            to="/"
            className="inline-block  text-black no-underline
                    hover:text-underline ml-1"
          >
            Home &nbsp;
          </Link>
          <h1 className=" text-gray-500">/ Careers</h1>
        </div>
        <Seo title="Digital Platform Engineering" />

        <div className="lg:flex lg:ml-10">
          <div className="lg:w-1/2 lg:m-10 sm:m-10 xl:ml-24">
            <h1 className="text-lg font-semibold">
              Why Thrymr
            </h1>

            <p className="mt-3">
              Thrymr provides an equal opportunity platform where employees can
              showcase their technical skills and continuous learning
              opportunity to improve their careers. We are not just a team of
              young professionals. We’re young, experienced professionals who
              strive to be the best support each other, and promote teamwork. If
              you are pursuing experience in IT or fresh out of college and
              looking for challenging opportunities to actualize your skills,
              Thrymr provides the best platform.
            </p>

            <h1 className="text-lg font-semibold mt-12">
              About the Team
            </h1>

            <p className="mt-3">
              We are a team who have a passion for continuous upskilling and
              career growth. We support each other and motivate toward teamwork
              to address team strength. We offer team-building activities to
              encourage employees to work towards a common goal.
            </p>

            <h1 className="text-lg font-semibold mt-12">
              Benefits :
            </h1>

            <h3 className="text-md font-semibold mt-5">
              Remunerative:
            </h3>
            <span className="text-md">
              We follow the dynamic appraisal system instead of annual appraisal
              cycle.
            </span>

            <h3 className="text-md font-semibold mt-5">
              Learn and Grow:
            </h3>
            <span className="text-md ">
              Enhance your professional development through learning and
              guidance.
            </span>

            <h3 className="text-md font-semibold mt-5">
              Stay Healthy:
            </h3>
            <span className="text-md mt-5">
              Be well with health plans that help you support your loved ones.{" "}
            </span>

            <h3 className="text-md font-semibold mt-5">
              Freedom at Work:
            </h3>
            <span className="text-md mt-5">
              We provide a platform where an employee can explore ideas.
            </span>

            <h3 className="text-md font-semibold mt-5">
              Best Work Environment:
            </h3>
            <span className="text-md mt-5">
              We offer supportive and transparent work environment.
            </span>

            <h3 className="text-md font-semibold mt-5">
              Team Events:{" "}
            </h3>
            <span className="text-md mt-5">
              We offer to provide team events to encourage teamwork.
            </span>

            <h1 className="text-lg font-semibold mt-12">
              Working at Thrymr
            </h1>
            <p className="mt-3">
              An inspiring platform, continuous learning, work-life balance, and
              sharing of innovative ideas make Thrymr workplace. Thrymr is about
              delivering on our commitments. It is about honesty and fairness in
              action. It is about being ethical beyond any uncertainty in the
              toughest of circumstances. We strongly believe that we can achieve
              business efficiency only through our people and their expertise in
              innovation.{" "}
            </p>

            <h1 className="text-lg font-semibold mt-12">
              What to expect
            </h1>
            <p className="mt-3">
              After submitting your CV, our hiring team will set up a call to
              introduce you to Thrymr then you will go through 2 technical
              assessments. After completing of analysis, you will have another
              round of introduction with the leading team.
            </p>

            <p className="mt-3">
              If schedule time permits, our hiring team will complete this
              process and provide a decision in less than a week.
            </p>

            {/* <div className="grid gap-8 space-x-1 xl:grid-cols-4 m-12 lg:mt-20 xl:ml-16">
            </div> */}
          </div>
          <div className="lg:w-1/2">
            <form className="xl:-mt-9">
              <div className="container mx-auto mt-20 ">
                <div className="lg:px-0 pb-10 lg:w-10/12">
                  {/* <h1 className="text-3xl  mt-2 ">Let's Craft together!</h1> */}
                  <p className="text-lg mt-3 font-semibold">
                    Apply for a position.
                  </p>
                  <div className="w-full mb-8 mt-12">
                    <label htmlFor="fullname" className="px-1">
                      Full Name
                    </label>
                    <div className="justify-center">
                      <input
                        type="text"
                        className="px-3 w-full border rounded py-2 text-gray-500 focus:outline-none items-center"
                        name="fullname"
                        id="fullname"
                        required
                      />
                    </div>
                  </div>
                  <div className="w-full mb-8 justify-center">
                    <label htmlFor="mobile" className="px-1">
                      Phone
                    </label>
                    <div className="flex items-center">
                      <input
                        id="mobile"
                        type="tel"
                        className="px-3 w-full border rounded py-2 text-gray-500 focus:outline-none"
                        name="mobile"
                        required
                      />
                    </div>
                  </div>

                  <div className="w-full mb-8 justify-center">
                    <label htmlFor="fields" className="px-1">
                      Category
                    </label>
                    <div className="flex items-center">
                      <select
                        id="fields"
                        className="px-2 border rounded py-2.5 text-gray-500 focus:outline-none w-full bg-white"
                      >
                        <option value="default">All Categories</option>
                        <option value="">Project Planning & Management</option>
                        <option value="">Sales & Marketing</option>
                        <option value="">Design & UX</option>
                        <option value="">Business Operations</option>
                        <option value="">Development</option>
                        <option value="">Others</option>
                      </select>
                    </div>
                  </div>

                  <div className="w-full mb-8 justify-center">
                    <label htmlFor="email" className="px-1">
                      Email
                    </label>
                    <div className="flex items-center">
                      <input
                        type="email"
                        className="px-3 w-full border rounded py-2 text-gray-500 focus:outline-none"
                        name="email"
                        id="email"
                        required
                      />
                    </div>
                  </div>

                  <div className="w-full mb-12 justify-center">
                    <label htmlFor="address" className="px-1">
                      Address
                    </label>
                    <div className="flex items-center">
                      <input
                        type="text"
                        className="px-3 w-full border rounded py-2 text-gray-500 focus:outline-none"
                        name="address"
                        id="address"
                        required
                      />
                    </div>
                  </div>

                  <div className="w-full mb-12 justify-center">
                    <label htmlFor="city" className="px-1">
                    City
                    </label>
                    <div className="flex items-center">
                      <input
                        type="text"
                        className="px-3 w-full border rounded py-2 text-gray-500 focus:outline-none"
                        name="city"
                        id="city"
                        required
                      />
                    </div>
                  </div>

                  <div className="w-full mb-12 justify-center">
                    <label htmlFor="state" className="px-1">
                      State
                    </label>
                    <div className="flex items-center">
                      <input
                        type="text"
                        className="px-3 w-full border rounded py-2 text-gray-500 focus:outline-none"
                        name="state"
                        id="state"
                        required
                      />
                    </div>
                  </div>

                  <div className="w-full mb-12 justify-center">
                    <label htmlFor="postal" className="px-1">
                      Postal
                    </label>
                    <div className="flex items-center">
                      <input
                        type="text"
                        className="px-3 w-full border rounded py-2 text-gray-500 focus:outline-none"
                        name="postal"
                        id="postal"
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
                </div>
              </div>
            </form>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Careers
