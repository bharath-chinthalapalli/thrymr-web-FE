import { Link } from "gatsby"
import * as React from "react"
import Layout from "../../components/layout"

function Hr() {
  return (
    <div>
      <Layout>
        <header className="Hr">
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
          <h1 className=" text-gray-500">/ HR</h1>
        </div>

        <div className="sm:mx-10 xl:mx-56">
          <h1 className="my-10 text-2xl font-bold"> HR </h1>

          <p className="mb-5">
            Human resource is the integrated use of training, organization, and
            career development efforts to improve individual, group, and
            organizational effectiveness. by developing skills, competencies,
            knowledge, and attitudes of people in an organization. People become
            human resources only when they are competent to perform
            organizational activities.
          </p>

          <p className="mb-5">
            Nowadays countless companies are handing out technology services or
            tasks, including programming and application development. Frequently
            started outsourcing customer service and call service functions.
            Companies can hand out entire division such as entire IT or a part
            of it.
          </p>

          <p className="mb-5">
            Human resources can hand out the services like payroll systems,
            recruitment processes. Thrymr software provides the human resource
            management application with the details like attendance management,
            payroll, recruiting process, and other services.
          </p>

          <p className="mb-5">
            We have experience in developing human resources applications with
            all the specifications and security. We develop the new application
            or we can enhance the existing applications. Thrymr software
            provides solutions for every kind of human resource application.
          </p>

          <p className="mb-5">
            We developed a web-based application for human resource management
            services as per the client streamline. HR functions that benefit
            administration, payroll processing, and performance management. With
            the rapid growth of the marketplace, we developed the application
            for the client cost-effectively.
          </p>

          <p className="mb-10">
            Let Thrymr help you to manage human resources effectively.
          </p>
        </div>
      </Layout>
    </div>
  )
}

export default Hr
