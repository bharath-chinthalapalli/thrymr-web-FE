import * as React from "react"
import { graphql, Link } from "gatsby"
import Seo from "../components/seo"
import Layout from "../components/layout"

export default function SoftwareDevelopment({ data }) {
  const SoftwareDevelopment = data.allMarkdownRemark.nodes
  console.log(SoftwareDevelopment)

  // let Functional = 'Thrymr Functional Testing Services ensure the verification and validation of applications for independent software vendors and enterprises. The functional testing services.';

  // let Automation = 'Thrymr offers Test Automation Consulting, which involves end-end Test Automation services right from conceptualization to deployment & Test Automation.'; 

  // let Performance = 'At Thrymr, we believe that every application is unique and deserves customized performance testing. Thrymr’s team of performance test analysts can help you.'; 

  // let Security = 'Thrymr offers a comprehensive array of security testing services to identify and positively confirm vulnerabilities so that you can spend your time effectively eliminating threats.'


  return (
    <Layout>
      <header className="contact-img">
        <div className="grid sm:place-items-center ">
          <div className="text-white text-center xl:mt-32 sm:mt-44">
            <h1 className="mt-4 xxl:text-6xl md:text-5xl sm:text-4xl">
              Services
            </h1>
          </div>
        </div>
      </header>
      <div className=" flex sm:ml-8 lg:ml-16  xl:ml-28 lg:mt-12 sm:my-5 service-macbook">
        <Link
          to="/"
          className="inline-block  text-black no-underline
                    hover:text-underline "
        >
          Home &nbsp;
        </Link>
        <h1 className=" text-gray-500">/ Services</h1>
      </div>
      <Seo title="Digital Platform Engineering" />
      <div className="wpb_wrapper p-3">
        <div className="m-3 col-4">
          {/* <p className="text-nowrap text-center sm:text-2xl lg:text-3xl -mt-4">
            Digital Platform Engineering
            </p> */}
        </div>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 xl:ml-20 service-card-macbook">
        {SoftwareDevelopment.map((Cases, k) => (
          <div key={k} className="mb-10">
            <div className="sm:max-w-xs  xl:max-w-md bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700  mx-8">
              <span>
                <h5 className="mb-2 lg:text-md xl:text-2xl font-bold tracking-tight text-gray-900 dark:text-white mx-5 py-4">
                  {Cases.frontmatter.title}
                </h5>
              </span>

              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 px-4 pt-4 -mt-5 ">
                {Cases.frontmatter.excerpt}
              </p>

              <Link
                className="p-3 ml-1"
                to={"/markdown-pages/services/" + Cases.frontmatter.slug}
                key={Cases.id}
              >
                <span className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-orange-600 focus:ring-4 focus:outline-none focus:orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800 mt-5 mb-5">
                  Read More
                  <svg
                    className="ml-2 -mr-1 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* {"Testing "} */}

      <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 xl:ml-20 service-card-macbook">
        <div className="mb-10 ">
          <div className="sm:max-w-xs  xl:max-w-md bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700  mx-8">
            <span>
              <h5 className="mb-2 lg:text-xl xl:text-2xl font-bold tracking-tight text-gray-900 dark:text-white mx-5 py-4">
                Functional Testing
              </h5>
            </span>
            {/* line-clamp-2 */}
            <p className="font-normal text-gray-700 dark:text-gray-400 px-4 pt-4 -mt-5 static-box-1">
            Thrymr Functional Testing Services ensure the verification and validation of applications for independent software vendors. 
            </p>

            <Link className="p-3 ml-1" to="/FunctionalTesting">
              <span className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-orange-600 focus:ring-4 focus:outline-none focus:orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800 mb-5 mt-5 mac-button">
                Read More
                <svg
                  className="ml-2 -mr-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </Link>
          </div>
        </div>

        <div className="mb-10">
          <div className="sm:max-w-xs xl:max-w-md bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mx-8">
            <span>
              <h5 className="mb-2 lg:text-xl xl:text-2xl font-bold tracking-tight text-gray-900 dark:text-white mx-5 py-4">
                Automation Testing
              </h5>
            </span>

            <p className="font-normal text-gray-700 dark:text-gray-400 px-4 pt-4 -mt-5 static-box-2" >
              Thrymr offers Test Automation Consulting, which involves end-end Test Automation services right from conceptualization 
            </p>

            <Link className="p-3 ml-1" to="/AutomationTesting">
              <span className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-orange-600 focus:ring-4 focus:outline-none focus:orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800  mb-5 mt-5 mac-button">
                Read More
                <svg
                  className="ml-2 -mr-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </Link>
          </div>
        </div>

        <div className="mb-10">
          <div className="sm:max-w-xs xl:max-w-md bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mx-8">
            <span>
              <h5 className="mb-2 lg:text-xl xl:text-2xl font-bold tracking-tight text-gray-900 dark:text-white mx-5 py-4">
                Security Testing
              </h5>
            </span>

            <p className="font-normal text-gray-700 dark:text-gray-400 px-4 pt-4 -mt-5">
              Thrymr offers a comprehensive array of security testing services to identify and positively confirm vulnerabilities or weaknesses of software application.
            </p>

            <Link className="p-3 ml-1" to="/SecurityTesting">
              <span className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-orange-600 focus:ring-4 focus:outline-none focus:orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800  mb-5 mt-5 tabview-2">
                Read More
                <svg
                  className="ml-2 -mr-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </Link>
          </div>
        </div>

        <div className="mb-10">
          <div className="sm:max-w-xs xl:max-w-md bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mx-8">
            <span>
              <h5 className="mb-2 lg:text-xl xl:text-2xl font-bold tracking-tight text-gray-900 dark:text-white mx-5 py-4" >
                Performance Testing
              </h5>
            </span>

            <p className="font-normal text-gray-700 dark:text-gray-400 px-4 pt-4 -mt-5">
            At Thrymr, we believe that every application is unique and deserves customized performance testing Thrymr’s team testers are ISTQB certified.
            </p>

            <Link className="p-3 ml-1" to="/PerformanceTesting">
              <span className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-orange-600 focus:ring-4 focus:outline-none focus:orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800  mb-5 mt-5 ">
                Read More
                <svg
                  className="ml-2 -mr-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export const query = graphql`
  query SoftwareDevelopment {
    allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
      filter: { frontmatter: { key: { eq: "services" } } }
    ) {
      nodes {
        frontmatter {
          date
          slug
          key
          excerpt
          title
        }
        html
        id
      }
    }
  }
`
