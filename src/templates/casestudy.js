// import { useStaticQuery, graphql } from "gatsby"
// import React from "react"
// import Seo from "../components/seo"
// // import { GatsbyImage, getImage } from "gatsby-plugin-image"
// import { Link } from "gatsby"

// export default function caseStudy({ data }) {
//   const { html } = data.markdownRemark
//   const { title } = data.markdownRemark.frontmatter
//   return (
//     <div>
//       <header className="contact-img2"></header>

//       <div className=" flex sm:ml-10 xl:ml-32  lg:mt-12 ">
//         <Link
//           to="/casestudies/"
//           className="inline-block  text-black no-underline
//                     hover:text-underline py-2 px-1 "
//           activeClassName="greenColorMenu"
//         >
//           Case Studies
//         </Link>
//         <h1 className="mt-2 text-gray-500">/ Case Study Details</h1>
//       </div>

//       <Seo title="case studies" />
//       {/* data for case study card */}
//       <div className=" sm:container-fluid  xl:container mt-3">
//         <div>
//           <h2 className="text-center sm:text-xl lg:text-4xl my-12  xl:ml-40 sm:ml-5">
//             {title}
//           </h2>
//         </div>

//         <div
//           className=" sm:ml-6 xl:ml-44 lg:mt-20 mb-20 prose w-full"
//           dangerouslySetInnerHTML={{ __html: html }}
//         ></div>
//       </div>
      
//     </div>
//   )
// }

// export const query = graphql`
//   query caseStudyDetails($slug: String) {
//     markdownRemark(frontmatter: { slug: { eq: $slug } }) {
//       html
//       frontmatter {
//         date
//         slug
//         title
//       }
//     }
//   }
// `
