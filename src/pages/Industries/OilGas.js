import * as React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"

function OilGas() {
  return (
    <div>
      <Layout>
        <header className="oilgas">
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
          <h1 className=" text-gray-500">/ Oil & Gas</h1>
        </div>

        <div className="sm:mx-10 xl:mx-56">
          <h1 className="my-10 text-2xl font-bold">Oil & Gas</h1>

          <p className="mb-5">
            Streamline operations, improve workplace safety, and increase
            profits with your new web, mobile, or desktop. Oil and gas software
            solutions don’t need to be complicated.{" "}
          </p>

          <p className="mb-5">
            Thrymr Software helps companies accelerate the delivery of business
            value through agile product and service models that streamline
            operations, improve efficiency, and lead to greater productivity and
            reliability. These models spot and enable energy enterprises to stay
            competitive and resilient in a dynamic industry by unifying data
            from disparate systems, unlocking new operational insights, and
            managing a complex technology environment.{" "}
          </p>

          <p className="mb-5">
            Increase the efficiency of your operation with planning and
            forecasting tools. They provide decision support that lets you
            quickly make informed choices. Advanced mapping tools save you loads
            of time. Support for open pit, underground operations, and offshore
            wells put up you’re covered wherever you’re based.{" "}
          </p>

          <p className="mb-5">
            Artificial Intelligence optimizes business operations, productivity,
            and safety. These include production optimization with computer
            vision to analyse seismic and subsurface data faster, reducing
            downtime for predictive maintenance of equipment, reservoir
            understanding, and modelling for predicting oil corrosion risks to
            reduce maintenance costs.{" "}
          </p>

          <p className="mb-10">
            Working with a range of employees, agencies, and specialist
            contractors doesn’t need to be confusing. Trace estimates and their
            status at a glance. Assign upcoming tasks to the appropriate team
            and send job specifics directly to them. You build a compliance
            trail. And everyone’s organized therefore work gets done faster.{" "}
          </p>
        </div>
      </Layout>
    </div>
  )
}

export default OilGas
