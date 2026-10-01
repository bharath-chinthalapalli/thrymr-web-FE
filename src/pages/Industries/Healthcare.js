import { Link } from "gatsby"
import * as React from "react"
import Layout from "../../components/layout"

function Healthcare() {
  return (
    <div>
      <Layout>
        <header className="healthcare">
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
          <h1 className=" text-gray-500">/ Healthcare </h1>
        </div>

        <div className="sm:mx-10 xl:mx-56">
          <h1 className="my-10 text-2xl font-bold">Health Care</h1>

          <p className="mb-5">
            Healthcare refers to any IT tools or software to develop the purpose
            of improving any aspects of the healthcare system. Software designed
            to elevate the hospital and organizational productivity to give
            penetration into the medicine and treatments that better the overall
            care provided.
          </p>

          <p className="mb-5">
            Healthcare industries lookout for many challenges, technologies
            solutions help leaders improve their performance. Demands in
            organizations increase, healthcare technologies can automate the
            tasks and improve the workflows helping healthcare professionals to
            improve patient care, create better experiences and reduce burnout.
          </p>

          <p className="mb-5">
            Thrymr Software provides the emulsion for healthcare where patients
            can find a time to book appointments and patient portals that
            anticipate more ways for an individual to communicate with health
            professionals.
          </p>

          <p className="mb-5">
            Traditionally, organizations have had to maintain different records
            for each group. But with new technology that makes it easier for
            digital patient records to be standardized and stored securely, more
            organizations are integrating their data so that authorized people
            can access the documentation they need at the time they need them.
          </p>

          <p className="mb-5">
            Using the technologies to monitor the reports of the patients and
            automate the results of automating that measurement so organizations
            can continuously review their results, spot issues that need to get
            decided, and uncover ways to enhance care and the patient
            experience.
          </p>

          <p className="mb-10">
            Artificial intelligence is helping administrative teams streamline
            patient flows by doing aggregate from accurately calculating wait
            times to predicting peak busy hours for staff scheduling. Meantime,
            asking patients prefatory questions and prioritizing schedules so
            doctors can use their time more efficiently.
          </p>
        </div>
      </Layout>
    </div>
  )
}

export default Healthcare
