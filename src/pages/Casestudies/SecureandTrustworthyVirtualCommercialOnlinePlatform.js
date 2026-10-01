import * as React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"

function SecureandTrustworthyVirtualCommercialOnlinePlatform() {
  return (
    <div>
      <Layout>
        <header className="contact-img">
          <div className="grid sm:place-items-center ">
            <div className="text-white text-center xl:mt-32 sm:mt-44">
              <h1 className="mt-4 xxl:text-6xl md:text-5xl sm:text-4xl">
                Case Study
              </h1>
            </div>
          </div>
        </header>

        <div className="flex sm:ml-9 sm:mt-5  xl:ml-56 lg:mt-12 sm:my-2 sm:text-xs lg:text-sm">
          <Link
            to="/casestudies"
            className="inline-block  text-black no-underline
            hover:text-underline "
            activeClassName="greenColorMenu"
          >
            Case Study &nbsp;
          </Link>
          <h1 className=" text-gray-500">
            / Secure and Trustworthy Virtual Commercial Online Platform
          </h1>
        </div>

        <div className="sm:mx-10 xl:mx-56">
          <h1 className="my-10 text-2xl font-bold">Project Overview</h1>

          <p>
            A leading digital platform firm that specializes in the trading
            business, to make a commercial online platform. The firm engaged
            with Thrymr Software to uplift the online capabilities, the
            collaboration helped the client sophisticated online platform in
            which consequence in revenue growth, improved brand visibility, cost
            efficiencies, and a greatly enhanced customer functions experience
            for all stakeholders of the platform.
          </p>

          <h3 className="my-10 text-2xl font-bold">Problem Statement</h3>

          <ul className="mb-5 ml-5">
            <li className="dot-color">
              Our client engaged Thrymr to help rethink its digital platform,
              prepare for a mobile world, and take an innovative approach to
              provide an online customer experience to all stakeholders.
            </li>

            <li className="mt-1 dot-color">
              Our client imagined building an online platform with the proper
              thought that provides superior analytics, personalization, and
              customer engagement capabilities with a global reach.
            </li>

            <li className="mt-1 dot-color">
              The engagement objectives included the migration of pre-existing
              static and public web content, data along with the formats of a
              new platform, and enhancement of transaction capabilities for all
              the stakeholders namely buyers, sellers, franchisors, business
              brokers, and business service providers.
            </li>
          </ul>

          <h3 className="my-10 text-2xl font-bold">Implementation story:</h3>

          <ul className="mb-5 ml-5">
            <li className="dot-color">
              Thrymr worked closely with the client's chief information officer
              of the organization to share the infrastructure and strategy with
              the team.
            </li>

            <li className="mt-1 dot-color">
              The Thrymr team used agile methodology for continuous development
              and instant result and collaborated with the client's team to
              implement the process cost-effectively.
            </li>

            <li className="mt-1 dot-color">
              Thrymr supported its content management 'northern lights' to
              synthesize the client's multiple websites into a single platform.
              In addition, that platform is introduced on 'Digital Ocean' in an
              infrastructure-as-a-service capacity.
            </li>
          </ul>

          <h3 className="my-10 text-2xl font-bold">Results</h3>

          <ul className="mb-5 ml-5">
            <li className="dot-color">
              Merging multiple websites into a single online digital platform
              and by the provided cloud-based approach reduced cost and
              maintenance for the client.
            </li>

            <li className="mt-1 dot-color">
              The new platform made our client continuous improvements in the
              business and for the personalized content, the analytics-driven
              ability, and new mobile-based tools provided. Thrymr provided
              easy-to-use journeys has resulted in a better stakeholder
              experience.
            </li>

            <li className="mt-1 dot-color">
              In the company of continuous improvements in the business model
              and fine-tune platform with greater speed-to-market and sustain
              high levels of performance in its online business.
            </li>
          </ul>

          <h3 className="my-10 text-2xl font-bold">Synopsis</h3>

          <p className="mb-10">
            Thrymr provides a progressive and wide range of quality skills and
            services to facilitate an end-to-end solution for different IT
            needs. We work as a strategic partner for clients, working with them
            in an open and honest manner to shoulder the responsibilities of
            various IT challenges.
          </p>
        </div>
      </Layout>
    </div>
  )
}

export default SecureandTrustworthyVirtualCommercialOnlinePlatform
