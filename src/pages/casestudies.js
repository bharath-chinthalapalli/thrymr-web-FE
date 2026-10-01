// import * as React from "react"
// import { graphql, Link } from "gatsby"
// import Layout from "../components/layout"
// import Seo from "../components/seo"
// import { GatsbyImage } from "gatsby-plugin-image"

// function caseStudies({ data }) {
//   // const CaseStudy = data.allMarkdownRemark.nodes
//   // console.log(CaseStudy)
//   return (
//     <Layout>
//       <header className="contact-img2">

//       <div className="grid sm:place-items-center ">
//             <div className="text-white text-center xl:mt-32 sm:mt-44">
//               <h1 className="mt-4 xxl:text-6xl md:text-5xl sm:text-4xl">
//
//                 Case Studies
//               </h1>
//             </div>
//           </div>
//         </header>

//       <div className=" flex  sm:ml-12  xl:ml-56 lg:mt-12 sm:my-2">
//         <Link
//           to="/"
//           className="inline-block  text-black no-underline
//                     hover:text-underline "
//           activeClassName="greenColorMenu"
//         >
//           Home
//         </Link>
//         <h1 className=" text-gray-500"> / Case Studies</h1>
//       </div>

//       <Seo title="case Studies" />
//       <div className="wpb_wrapper p-3">
//         <div className="m-3 col-4">
//           {/* <p className="text-nowrap text-center sm:text-2xl lg:text-3xl -mt-4">
//             Case Studies
//           </p> */}
//         </div>
//       </div>

//       <div className="container">
//         {/* {CaseStudy.map((Cases, j) => ( */}
//           <div className="card my-5" >
//             <div className="row g-0">
//               {/* <div className="col-md-4">
//                 <GatsbyImage
//                   image={getImage(Cases.frontmatter.thumb)}
//                   className="img-fluid rounded-start"
//                 />
//               </div> */}
//               <div className="  sm:ml-12 xl:ml-56">
//                 <div className="card-body">
//                   <h5 className=" text-2xl ">Fintech (Virtual Accounts & High Value Transactions)</h5>
//                   {/* <p>{Cases.frontmatter.date}</p> */}
//                   <p className="card-text">Receiving large sums of money overseas from close to 100 or more accounts is a common practice – people work with clients....</p>
//                   <p className="card-text my-8">

//                     <Link
//                       className="text-white border-solid connectbtn rounded rounded-2  px-10 py-2"
//                       to={"/Cs1"}
//                     >
//                       Read More
//                     </Link>

//                   </p>
//                 </div>

//                 <div className="card-body">
//                   <h5 className=" text-2xl ">Manufacturing Analytics & Dashboard Platform</h5>
//                   {/* <p>{Cases.frontmatter.date}</p> */}
//                   <p className="card-text">Thrymr architected and built an agile, robust and easy-to-use analytics reporting and dashboard platform for a leading manufacturer having...</p>
//                   <p className="card-text my-8">

//                     <Link
//                       className="text-white border-solid connectbtn rounded rounded-2  px-10 py-2"
//                       to={"/Cs2"}
//                     >
//                       Read More
//                     </Link>

//                   </p>
//                 </div>

//                 <div className="card-body">
//                   <h5 className=" text-2xl ">Freight-Forwarding Execution Platform To Maintain 360-Degree Control Across The Supply Chain</h5>
//                   {/* <p>{Cases.frontmatter.date}</p> */}
//                   <p className="card-text">A rapidly growing new-age fulfillment and dropshipping firm for digital commerce engaged Thrymr to design and build an end-to-end freight....</p>
//                   <p className="card-text my-8">

//                     <Link
//                       className="text-white border-solid connectbtn rounded rounded-2  px-10 py-2"
//                       to={"/Cs3"}
//                     >
//                       Read More
//                     </Link>

//                   </p>
//                 </div>

//                 <div className="card-body">
//                   <h5 className=" text-2xl ">Last Mile Logistics Platform Enabled By Smart Routing Algorithms</h5>
//                   {/* <p>{Cases.frontmatter.date}</p> */}
//                   <p className="card-text">Leading integrated supply chain specialist firm engaged Thrymr to design and build an end-to-end solution from order to delivery that guides...</p>
//                   <p className="card-text my-8">

//                     <Link
//                       className="text-white border-solid connectbtn rounded rounded-2  px-10 py-2"
//                       to={"/Cs4"}
//                     >
//                       Read More
//                     </Link>

//                   </p>
//                 </div>

//                 <div className="card-body">
//                   <h5 className=" text-2xl ">Integrated digital platform channels for a leading wellness brand</h5>
//                   {/* <p>{Cases.frontmatter.date}</p> */}
//                   <p className="card-text">Thrymr enabled digital transformation initiatives for a leading wellness firm that gives its clients nutrition counseling and built digitals...</p>
//                   <p className="card-text my-8">

//                     <Link
//                       className="text-white border-solid connectbtn rounded rounded-2  px-10 py-2"
//                       to={"/Cs5"}
//                     >
//                       Read More
//                     </Link>

//                   </p>
//                 </div>

//                 <div className="card-body">
//                   <h5 className=" text-2xl ">Engaging Social Media Platform For a Global Community</h5>
//                   {/* <p>{Cases.frontmatter.date}</p> */}
//                   <p className="card-text">A global religious, cultural organization engaged Thrymr to envisage and build a social media management platform that enables the devotees....</p>
//                   <p className="card-text my-8">

//                     <Link
//                       className="text-white border-solid connectbtn rounded rounded-2  px-10 py-2"
//                       to={"/Cs6"}
//                     >
//                       Read More
//                     </Link>

//                   </p>
//                 </div>

//                 <div className="card-body">
//                   <h5 className=" text-2xl ">Invoice Financing</h5>
//                   {/* <p>{Cases.frontmatter.date}</p> */}
//                   <p className="card-text">Competitive businesses have to grow. Grow or die. And yet because they have their cash invested in the previous deal, awaiting payment, they often lack the cash needed for future sales,..</p>
//                   <p className="card-text my-8">

//                     <Link
//                       className="text-white border-solid connectbtn rounded rounded-2  px-10 py-2"
//                       to={"/Cs7"}
//                     >
//                       Read More
//                     </Link>

//                   </p>
//                 </div>

//                 <div className="card-body">
//                   <h5 className=" text-2xl ">Secure and Trustworthy Virtual Commercial Online Platform</h5>
//                   {/* <p>{Cases.frontmatter.date}</p> */}
//                   <p className="card-text">A Leading innovative digital platform firm specializes in trading businesses and commercial properties online engaged Thrymr to boost their...</p>
//                   <p className="card-text my-8">

//                     <Link
//                       className="text-white border-solid connectbtn rounded rounded-2  px-10 py-2"
//                       to={"/Cs8"}
//                     >
//                       Read More
//                     </Link>

//                   </p>
//                 </div>

//                 <div className="card-body">
//                   <h5 className=" text-2xl ">State-Of-The-Art Digital Commerce Platform Leveraging AI, ML</h5>
//                   {/* <p>{Cases.frontmatter.date}</p> */}
//                   <p className="card-text">Thrymr builds a sophisticated, multi-brand eCommerce platform for a leading Indian brand of Ayurvedic, herbal and wellness product firm..</p>
//                   <p className="card-text my-8">

//                     <Link
//                       className="text-white border-solid connectbtn rounded rounded-2  px-10 py-2"
//                       to={"/Cs9"}
//                     >
//                       Read More
//                     </Link>

//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//       </div>

//     </Layout>
//   )
// }

// export default caseStudies
// // export page query
// // export const query = graphql`
// //   query CaseStudy {
// //     allMarkdownRemark(
// //       sort: { order: DESC, fields: frontmatter___date }
// //       filter: { frontmatter: { key: { eq: "case" } } }
// //     ) {
// //       nodes {
// //         frontmatter {
// //           date
// //           slug
// //           key
// //           excerpt
// //           title
// //         }
// //         html
// //         id
// //       }
// //     }
// //   }
// // `

import * as React from "react"
import { Link } from "gatsby"
// import { getImage, StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
// import { GatsbyImage } from "gatsby-plugin-image"

function caseStudies() {
  // const CaseStudy = data.allMarkdownRemark.nodes
  // console.log(CaseStudy)

  let Fintech =
    "People work with client across the world and sending receiving money is a necessity. Receiving a large sum of money from accounts 1 to 100 and more."
  let ManufacturingAnalytics =
    "Thrymr built an architected agile for a leading manufacturer with a full-bodied besides that easy-to-use analytics report dashboard platform."
  let FreightForwarding =
    "A rapidly growing drop shipping firm wants to develop a platform with a freight-forwarding execution platform that integrates."
  let LastMile =
    "The leading supply chain management specialist approached Thrymr software to provide an end-to-end solution to manage the order to delivery process."
  let IntegratedDigital =
    "Thrymr empowers the digital transformation enterprise for a leading wellness firm. The firm provides services for its clients like nutrition counselling."
  let GlobalCommunity =
    "A cultural organisation approached Thrymr to envisage and build social media management platform that enables the devotees globally to share the content."
  let InvoiceFinancing =
    "Competitive businesses have to grow. Grow or die. And yet because they have their cash invested in the previous deal, awaiting payment."
  let TrustVirtual =
    "A leading digital platform firm that specializes in the trading business, to make a commercial online platform. The firm engaged with Thrymr Software to."
  let DigitalCommerce = "Thrymr software builds a cultured e-commerce platform for one of the Indians leading firm's ayurvedic, herbal, and wellness products."

  return (
    <Layout>
      <header className="contact-img2">
        <div className="grid sm:place-items-center ">
          <div className="text-white text-center xl:mt-32 sm:mt-44">
            <h1 className="mt-4 xxl:text-6xl md:text-5xl sm:text-4xl">
              Case Studies
            </h1>
          </div>
        </div>
      </header>

      <div className=" flex  sm:ml-12  xl:ml-32 lg:mt-12 sm:mt-5 bread-crumb-laptop service-macbook">
        <Link
          to="/"
          className="inline-block  text-black no-underline
                    hover:text-underline xl:ml-2.5"
          activeClassName="greenColorMenu"
        >
          Home &nbsp;
        </Link>
        <h1 className=" text-gray-500"> / Case Studies</h1>
      </div>

      <Seo title="case Studies" />
      <div className="wpb_wrapper p-3">
        <div className="m-3 col-4">
          {/* <p className="text-nowrap text-center sm:text-2xl lg:text-3xl -mt-4">
            Case Studies
          </p> */}
        </div>
      </div>

      {/* <div className="container">
        {CaseStudy.map((Cases, j) => (
          <div className="card my-5" key={j}>
            <div className="row g-0">
              <div className="  sm:ml-12 xl:ml-56">
                <div className="card-body">
                  <h5 className=" text-2xl ">{Cases.frontmatter.title}</h5>
                  <p className="card-text">{Cases.frontmatter.excerpt}</p>
                  <p className="card-text my-8">
                    <Link
                      className="text-white border-solid connectbtn rounded rounded-2  px-10 py-2"
                      to={
                        "/markdown-pages/case-studies/" + Cases.frontmatter.slug
                      }
                      key={Cases.id}
                    >
                      Read More
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div> */}

      {/* <div className="mb-10">
        <div className="sm:ml-12 xl:ml-56">
          <div className="card-body">
            <h2 className=" text-2xl ">
              Fintech (Virtual Accounts & High Value Transactions)
            </h2>
            <p className="card-text">
              Receiving large sums of money overseas from close to 100 or more
              accounts is a common practice – people work with clients...
            </p>
            <Link to="/CaseStudy">
              <button className="text-white border-solid connectbtn rounded rounded-2 px-10 py-2 mt-5">
                Read More
              </button>
            </Link>
          </div>
        </div>
        </div> */}

      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-5 xxl:ml-24">
        {/* <Card 1 */}
        <div className="max-w-md bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <span>
            <StaticImage
              src="../images/card-1.jpg"
              className="m-2"
              width={1000}
              formats={["auto", "webp", "avif"]}
              alt="thrymr-Logo"
              style={{ marginBottom: `0.45rem` }}
            />
          </span>

          <div className="p-5">
            <span >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">
                Fintech (Virtual Accounts & High Value Transactions)
              </h5>
            </span>

            <p
              className="font-normal text-gray-700 dark:text-gray-400  mycard-cs-1"
              
            >
              {Fintech}
            </p>

            <Link to="/Casestudies/FintechCaseStudy">
              <span className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-orange-600 focus:ring-4 focus:outline-none focus:orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-500 sm:mt-5 lg:mt-20 xl:mt-5 card1-btn">
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

        {/* <Card 2 */}
        <div className="max-w-md bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <span >
            <StaticImage
              src="../images/Cs2.jpg"
              className="m-2"
              width={1000}
              formats={["auto", "webp", "avif"]}
              alt="thrymr-Logo"
              style={{ marginBottom: `0.45rem` }}
            />
          </span>

          <div className="p-5">
            <span>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Manufacturing Analytics & Dashboard Platform
              </h5>
            </span>

            <p
              className="font-normal text-gray-700 dark:text-gray-400  mycard-cs-2"
            >
              {ManufacturingAnalytics}
            </p>

            <Link to="/Casestudies/ManufacturingAnalyticsDashboardPlatform">
              <span className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-orange-600 focus:ring-4 focus:outline-none focus:orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800 sm:mt-5 lg:mt-20 xl:mt-5 mycard-cs-button-2">
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

        {/* Card 3 */}
        <div className="max-w-md bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <span>
            <StaticImage
              src="../images/card3.jpg"
              className="m-2"
              width={1000}
              formats={["auto", "webp", "avif"]}
              alt="thrymr-Logo"
              style={{ marginBottom: `0.45rem` }}
            />
          </span>

          <div className="p-5">
            <span>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Execution Platform for freight-forwarding to maintain supply
                chain
              </h5>
            </span>

            <p
              className="font-normal text-gray-700 dark:text-gray-400 mycard-cs-3"
            >
              {FreightForwarding}
            </p>

            <Link to="/Casestudies/FreightForwardingExecutionPlatformToMaintain360DegreeControlAcrossTheSupplyChain">
              <span className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-orange-600 focus:ring-4 focus:outline-none focus:orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800 mt-5 laptop-view">
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

        {/* <Card 4 */}
        <div className="max-w-md bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <span >
            <StaticImage
              src="../images/card4.jpg"
              className="m-2"
              width={1000}
              formats={["auto", "webp", "avif"]}
              alt="thrymr-Logo"
              style={{ marginBottom: `0.45rem` }}
            />
          </span>

          <div className="p-5">
            <span >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">
                Last Mile Logistics Platform Enabled By Smart Routing Algorithms
              </h5>
            </span>

            <p
              className="font-normal text-gray-700 dark:text-gray-400 mycard-cs-4"
            >
              {LastMile}
            </p>

            <Link to="/Casestudies/LastMileLogisticsPlatformEnabledBySmartRoutingAlgorithms">
              <span className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-orange-600 focus:ring-4 focus:outline-none focus:orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800 mt-5 mac-button1 laptop-view2">
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

        {/* <Card 5 */}
        <div className="max-w-md bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <span>
            <StaticImage
              src="../images/card5.jpg"
              className="m-2"
              width={1000}
              formats={["auto", "webp", "avif"]}
              alt="thrymr-Logo"
              style={{ marginBottom: `0.45rem` }}
            />
          </span>

          <div className="p-5">
            <span>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Integrated digital platform channels for a leading wellness
                brand
              </h5>
            </span>

            <p
              className="font-normal text-gray-700 dark:text-gray-400 mycard-cs-5"
            >
              {IntegratedDigital}
            </p>

            <Link to="/Casestudies/Integrateddigitalplatformchannelsforaleadingwellnessbrand">
              <span className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-orange-600 focus:ring-4 focus:outline-none focus:orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800 sm:mt-5 lg:mt-12 xl:mt-5 tab-view">
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

        {/* Card 6 */}
        <div className="max-w-md bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <span >
            <StaticImage
              src="../images/card-6.jpg"
              className="m-2"
              width={1000}
              formats={["auto", "webp", "avif"]}
              alt="thrymr-Logo"
              style={{ marginBottom: `0.45rem` }}
            />
          </span>

          <div className="p-5">
            <span >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Engaging Social Media Platform For a Global Community
              </h5>
            </span>

            <p
              className="font-normal text-gray-700 dark:text-gray-400 mycard-cs-6"
            >
              {GlobalCommunity}
            </p>

            <Link to="/Casestudies/EngagingSocialMedAPlatformForAGlobalCommunity">
              <span className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-orange-600 focus:ring-4 focus:outline-none focus:orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800 sm:mt-5 lg:mt-20 xl:mt-5 mac-button2 laptop-view3">
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

        {/* <Card 7 */}
        <div className="max-w-md bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <span>
            <StaticImage
              src="../images/card7.jpg"
              className="m-2"
              width={1000}
              formats={["auto", "webp", "avif"]}
              alt="thrymr-Logo"
              style={{ marginBottom: `0.45rem` }}
            />
          </span>

          <div className="p-5">
            <span>
              <h5 className="mb-9 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Invoice Financing
              </h5>
            </span>

            <p
              className="font-normal text-gray-700 dark:text-gray-400  mycard-cs-7"
            >
              {InvoiceFinancing}
            </p>

            <Link to="/Casestudies/InvoiceFinancing">
              <span className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-orange-600 focus:ring-4 focus:outline-none focus:orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800 sm:mt-5 lg:mt-36 xl:mt-5 invoice">
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

        {/* <Card 8 */}
        <div className="max-w-md bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <span >
            <StaticImage
              src="../images/card8.jpg"
              className="m-2"
              width={1000}
              formats={["auto", "webp", "avif"]}
              alt="thrymr-Logo"
              style={{ marginBottom: `0.45rem` }}
            />
          </span>

          <div className="p-5">
            <span >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Secure and Trustworthy Virtual Commercial Online Platform
              </h5>
            </span>

            <p
              className="font-normal text-gray-700 dark:text-gray-400  mycard-cs-8"
            >
              {TrustVirtual}
            </p>

            <Link to="/Casestudies/SecureandTrustworthyVirtualCommercialOnlinePlatform">
              <span className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-orange-600 focus:ring-4 focus:outline-none focus:orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800 sm:mt-5 lg:mt-12 xl:mt-5">
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

        {/* Card 9 */}
        <div className="max-w-md bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <span >
            <StaticImage
              src="../images/card9.jpg"
              className="m-2"
              width={1000}
              formats={["auto", "webp", "avif"]}
              alt="thrymr-Logo"
              style={{ marginBottom: `0.45rem` }}
            />
          </span>

          <div className="p-5">
            <span>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">
                State-Of-The-Art Digital Commerce Platform Leveraging AI, ML
              </h5>
            </span>

            <p
              className="font-normal text-gray-700 dark:text-gray-400 mycard-cs-9"
            >
              {DigitalCommerce}
            </p>

            <Link to="/Casestudies/StateOfTheArtDigitalCommercePlatformLeveragingAIML">
              <span className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-orange-600 focus:ring-4 focus:outline-none focus:orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800 mt-5 laptop-view4">
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

export default caseStudies
