import { Link } from "gatsby"
import * as React from "react"
import Layout from "../../components/layout"

function Lsc() {
  return (
    <div>
      <Layout>
        <header className="lcs">
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
          <h1 className=" text-gray-500">/ Logistics & Supply Chain</h1>
        </div>

        <div className="sm:mx-10 xl:mx-56">
          <h1 className="my-10 text-2xl font-bold">Logistics & Supply chain </h1>

          <p className="mb-5">
            The demand for sustainable logistic and supply chain processes poses
            enormous challenges in terms of technology integration, the
            development of new business models, cultural change, and job
            qualification, and as of this kind requires an existent paradigm
            shift.
          </p>

          <p className="mb-5">
            Logistics software development just got easier. Increase efficiency,
            cut human error, save money, and keep your clients happy with your
            new web, mobile, or desktop app.
          </p>

          <p className="mb-5">
            Thrymr Software can help you evolve supply chain processes through
            intelligent workflows to reduce operational repository, respond to
            market disruptions, mitigate risk and maintain business continuity.
            Through business, improvements to improve the interactions between
            your people.
          </p>

          <p className="mb-5">
            Thrymr Software ensures your logistics software continues to work
            flawlessly. Your users don’t want bugs and errors. When OS updates
            give out, our team reviews the code for any potential conflicts. And
            our intelligent monitoring system alerts us to any potential issues
            before they affect your app.
          </p>

          <p className="mb-5">
            Our solution accepts an extensive range of inputs and produces
            supply chain metrics aimed at helping business users plan their
            logistics operations more effectively. Our offerings include
            real-time visibility into the pickup and delivery of parcels.{" "}
          </p>

          <p className="mb-10">
            AI-powered intelligent forecasting to optimize routes and
            maintenance schedules – so you save time and money. It also
            generates the documents your team needs to keep everything running
            smoothly.
          </p>
        </div>
      </Layout>
    </div>
  )
}

export default Lsc
