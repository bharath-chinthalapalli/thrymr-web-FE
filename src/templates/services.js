import { graphql } from "gatsby"
import React from "react"
import Seo from "../components/seo"
// import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default function services({ data }) {
  const { html } = data.markdownRemark
  const { title } = data.markdownRemark.frontmatter
  return (
    <Layout>
      <header className="contact-img">
      <div className="grid sm:place-items-center ">
            <div className="text-white text-center xl:mt-32 sm:mt-44">
              <h1 className="mt-4 xxl:text-6xl md:text-5xl sm:text-4xl">
                Software Development Details
              </h1>
            </div>
          </div>
        </header>

      <div className=" flex sm:ml-4 xl:ml-44  lg:mt-12 sm:mt-8">
        <Link
          to="/Services/"
          className="inline-block  text-black no-underline
                    hover:text-underline py-2 px-1 "
          activeClassName="greenColorMenu"
        >
          Services
        </Link>
        <h1 className="mt-2 text-gray-500">/ Software Development Details</h1>
      </div>

      <Seo title="services" />
      {/* data for development card */}
      <div className=" sm:container-fluid mt-3">
        <div>
          <h2 className="sm:text-xl lg:text-4xl my-12  xl:ml-44 sm:ml-5">
            {title}
          </h2>
        </div>

        <div
          className=" sm:mx-6 xl:mx-44 lg:mt-20 mb-20 prose "
          dangerouslySetInnerHTML={{ __html: html }}
        ></div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ServicesDetails($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date
        slug
        title
      }
    }
  }
`
