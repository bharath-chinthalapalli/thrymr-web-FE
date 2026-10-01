import { Link } from "gatsby"
import * as React from "react"
import Layout from "../../components/layout"

function Pharma() {
  return (
    <div>
      <Layout>
        <header className="pharma">
          <div className="grid sm:place-items-center ">
            <div className="text-white text-center xl:mt-32 sm:mt-44">
              <h1 className="mt-4 xxl:text-6xl md:text-5xl sm:text-4xl">
                Industries
              </h1>
            </div>
          </div>
        </header>

        <div className="flex sm:ml-9 sm:mt-5  xl:ml-56 lg:mt-12 sm:my-2 sm:text-xs lg:text-sm">
          <Link
            to="/"
            className="inline-block  text-black no-underline
            hover:text-underline "
            activeClassName="greenColorMenu"
          >
            Industries &nbsp;
          </Link>
          <h1 className=" text-gray-500">/ Pharma</h1>
        </div>

        <div className="sm:mx-10 xl:mx-56">
          <h1 className="my-10 text-2xl font-bold">Pharma</h1>

          <p className="mb-5">
            Innovative and fast-moving, the pharmaceutical industry can keep up
            with that volume of change and innovation to remain among the top
            companies globally. Professionals are well aware of the disruptive
            potential and are experimenting/evaluating with a wide range of
            technical/digital initiatives while determining what creativity will
            help scale up and grow.
          </p>

          <p className="mb-5">
            The wider pharma industry has slowly launched mobile app development
            in the digital marketplace. Requisition has specific, to assist
            patient conformance. The Pharma industry has significant features,
            such as giving patients information about their energy, and the
            opportunity to set up simple reminders and medication schedules.
          </p>

          <p className="mb-5">
            Thrymr software must ensure that an app is developed based on the
            user's perspective, and we build an application where the user can
            easily access the details. It includes secure payment gateways,
            prompting push notifications, invoices, or SMS services.
          </p>

          <p className="mb-5">
            We develop business-to-business, business-to-customer, and
            customer-to-customer applications. We can be a portion of a
            developing technology that creates a difference in people's lives.
          </p>

          <p className="mb-10">
            By covering the mobile application-driven entry to directions, maybe
            built-in with alarm functionality for patients who must take
            medicines at a precise time, a pharmaceutical firm will incur to
            deliver the excellence of care that patients demand in this digital
            age.
          </p>
        </div>
      </Layout>
    </div>
  )
}

export default Pharma
