import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

export default function SoftwareTesting({ data }) {
  const SoftwareTesting = data.allMarkdownRemark.nodes
  console.log(SoftwareTesting)
  return (
    <Layout>
      <header className="contact-img2"></header>
      <div className=" flex  sm:ml-10  xl:ml-32 lg:mt-12 sm:my-2">
        <Link
          to="/"
          className="inline-block  text-black no-underline
                    hover:text-underline "
        >
          Home
        </Link>
        <h1 className=" text-gray-500">/ Software Testing</h1>
      </div>
      <Seo title="Software Testing" />
      <div className="wpb_wrapper p-3">
        <div className="m-3 col-4">
          <p className="text-nowrap text-center sm:text-2xl lg:text-3xl -mt-4">
            Software Testing
          </p>
        </div>
      </div>

      <div className="container">
        {SoftwareTesting.map((Cases, k) => (
          <div className="card my-5" key={k}>
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
      </div>
    </Layout>
  )
}
export const query = graphql`
  query SoftwareTesting {
    allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
      filter: { frontmatter: { key: { eq: "testing-services" } } }
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
