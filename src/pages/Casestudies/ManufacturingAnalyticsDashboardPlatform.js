import { Link } from "gatsby";
import * as React from "react";
import Layout from "../../components/layout";

function ManufacturingAnalyticsDashboardPlatform() {
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
            / Manufacturing Analytics & Dashboard Platform
          </h1>
        </div>

        <div className="sm:mx-10 xl:mx-56">
          <h1 className="my-10 text-2xl font-bold">Project Overview</h1>

          <p>
            Thrymr built an architected agile for a leading manufacturer with a
            full-bodied besides that easy-to-use analytics report dashboard
            platform. The leading manufacturer firm possesses a footprint in
            chemicals, textiles, and consumer products and helped get a single,
            integrated view of their marketing, sales, and production data
            across multiple businesses, geographics, and regions.
          </p>

          <h3 className="my-10 text-2xl font-bold">Problem Statement</h3>

          <ul className="mb-5 ml-5">
            <li className="dot-color">
              The firm management team wanted to get a unique and top-level view
              of business metrics throughout the enterprise across different
              businesses, functions, geographics, and regions to monitor and
              control them in a user-friendly manner.
            </li>

            <li className="mt-1 dot-color">
              One of the considerable challenges of the client was, the client
              desired a different kind of system which is not comparable to
              others which is from SAP to Excel and rapidly growing corporate
              data along with that the benefaction report was NOT timely, and
              actionable.
            </li>
          </ul>

          <h3 className="my-10 text-2xl font-bold">Implementation story:</h3>

          <ul className="mb-5 ml-5">
            <li className="dot-color">
              Thrymr software worked closely with the client stakeholders and
              established an agile engineering team to work with them. We
              designed a sophisticated CI/CD pipeline to integrate software
              development with the client's desired data sources.
            </li>

            <li className="mt-1 dot-color">
              Thrymr Software worked with the client's stakeholders to build a
              robust, easy-to-use agile analytics platform on top of java
              technologies.
            </li>

            <li className="mt-1 dot-color">
              DThrymr led the business analysis effort to capture precisely the
              specifications for operations, optimization dashboards, production
              rate dashboards, sales, marketing analysis, and financial
              reporting.
            </li>
          </ul>

          <h3 className="my-10 text-2xl font-bold">Results</h3>

          <ul className="mb-5 ml-5">
            <li className="dot-color">
              Improved productivity and executives got faster access to visual
              reports containing real-time data from contrasting enterprise
              systems.
            </li>

            <li className="mt-1 dot-color">
              Applied besuited visualization analysis techniques to provide
              maximum self-service and made it effortlessly for executives with
              minimum IT expertise.
            </li>

            <li className="mt-1 dot-color">
              The real-time dashboards were made available on mobile devices
              (smartphones and tablets) using an extremely secure and
              high-performing back-end systems integration.
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
    );
}

export default ManufacturingAnalyticsDashboardPlatform;