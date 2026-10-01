import React from "react"
// import PropTypes from "prop-types"
// import { useState } from "react"
import { Link } from "gatsby"
import Seo from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"

export default function Services() {
  const data = useStaticQuery(graphql`
    query service {
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
  `)
  console.log(data)
  const services = data.allMarkdownRemark.nodes;
  let ss = data.allMarkdownRemark.nodes;
  console.log(services, 'hello');
  let ar=[];
  ss.filter((e) => {
    if(e.frontmatter.title === 'Web Development' || e.frontmatter.title === 'Business Analysis' || e.frontmatter.title === 'AI / ML' || e.frontmatter.title === 'IOT'|| e.frontmatter.title === 'Cloud Computing'|| e.frontmatter.title === 'Data Analysis'|| e.frontmatter.title === 'Mobile (Android & iOS)'){
      ar.push(e);
    }
    return ar
  });
  console.log(ar,'uhsd');
  

  // const [toggler, SetToggler] = useState(1)

  // const toggleTab = index => {
  //   SetToggler(index)
  // }
  return (
    <>
      <div className="serviceBackground rounded-t-full container-fluid pb-20">
        <div className="container mx-auto mt-28  pt-20">
          <Seo title="Software Development" />
          <p className="aboutbodyText  text-center mb-2 xl:pt-10">Services</p>
          <h1 className="mb-8 text-center aboutText">
            We craft Digital Platform Asset to <br /> accelerate your
            transformational journey{" "}
          </h1>
          <div className="flex justify-center items-center font-semibold  mb-10 ">
            {/* <div
              className={toggler === 1 ? "activeService" : "service"}
              onClick={() => toggleTab(1)}
            > */}
              <p className="cursor-pointer activeService">Development & Testing Engineering Services</p>
            {/* </div> */}
            {/* <div
              className={toggler === 2 ? "activeService" : "service"}
              onClick={() => toggleTab(2)}
            >
              <p className="cursor-pointer">Digital Quality Engineering</p>
            </div> */}
          </div>

          {/* <div className={toggler === 1 ? "show" : "hidden"}> */}
          
            <div toggler={1} className="xxl:mx-44 lg:px-10">
              <div className="grid gap-12 lg:grid-cols-3 ">
                {ar.map(Cases => (
                  <Link
                    className="service-box"
                    to={"/markdown-pages/services/" + Cases.frontmatter.slug}
                    key={Cases.id} 
                  >
                    <div>
                      <h3 className="service-text">
                        {Cases.frontmatter.title}
                        {/* {Cases} */}
                      </h3>
                    </div>
                </Link>
                ))}
                <Link to="FunctionalTesting">
                <div className="service-box">
                  <h3 className="service-text">Functional Testing</h3>
                </div>
              </Link>
              <Link to="/AutomationTesting" >
                <div className="service-box">
                  <h3 className="service-text">Automation Testing</h3>
                </div>
              </Link>
              </div>
            </div>
          {/* </div> */}

          {/* <div className={toggler === 2 ? "show" : "hidden"}>
            <div className="grid gap-12 xl:grid-cols-3 xxl:mx-44 md:grid-cols-2 pb-56">
              <Link to="FunctionalTesting">
                <div className="service-box">
                  <h3 className="service-text">Functional Testing</h3>
                </div>
              </Link>
              <Link to="/AutomationTesting" >
                <div className="service-box">
                  <h3 className="service-text">Automation Testing</h3>
                </div>
              </Link>
              <Link to="/PerformanceTesting">
                <div className="service-box">
                  <h3 className="service-text">Performance Testing</h3>
                </div>
              </Link>
              <Link to="/SecurityTesting">
                <div className="service-box">
                  <h3 className="service-text">Security Testing</h3>
                </div>
              </Link>
            </div>
          </div> */}

          
        </div>
      </div>
    </>
  )
}
