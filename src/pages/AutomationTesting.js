import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"

function AutomationTesting() {
  return (
    <>
      <Layout>
        <header className="contact-img">
          <div className="grid sm:place-items-center ">
            <div className="text-white text-center xl:mt-32 sm:mt-44">
              <h1 className="mt-4 xxl:text-6xl md:text-5xl sm:text-4xl">
                Automation Testing
              </h1>
            </div>
          </div>
        </header>

        <div className="  flex  sm:ml-2 sm:mt-5  xl:ml-56 lg:mt-12 sm:my-2">
          <Link
            to="/"
            className="inline-block  text-black no-underline
                    hover:text-underline "
            activeClassName="greenColorMenu"
          >
            Services &nbsp;
          </Link>
          <h1 className=" text-gray-500">/ Automation Testing</h1>
        </div>

        <div className="sm:mx-10 xl:mx-56">
          <h1 className="my-10 text-2xl font-bold">Automation Testing</h1>

          <p>
            Thrymr offers Test Automation Consulting, which involves end-end
            Test Automation services right from conceptualization to deployment
            & Test Automation Maintenance, which involves maintenance of
            Automation Tests to achieve consistent results. Test automation
            provides the ideal solution to businesses by enhancing the speed,
            accuracy and cost-effectiveness of the testing process. Many
            businesses are considering it an effective strategy, as it improves
            test coverage, reduces time to market, and increases reliability and
            productivity.
          </p>

          <p className="mt-1">
            Automation, with its affordability and efficiency, has taken center
            stage in the testing process across industries. With the open-source
            industry generously contributing highly intelligent automation
            tools, it is inevitable for organizations to partially or completely
            move on to a sturdy automation testing framework.{" "}
          </p>

          <p className="mt-1">
            Our passionate team always stays on top of the latest automation
            trends and has the expertise in implementing and managing more than
            20 powerful tools such as Cucumber, Selenium, Win Runner, QTP, Test
            Complete, Test Partner, etc. Our Software Test Automation Services
            include:
          </p>

          <ul className="list-disc my-5 ml-5 ">
            <li className="mt-1">Test Automation Consultancy Services </li>
            <li className="mt-1">Framework Design & Development</li>
            <li className="mt-1">Test Automation Execution</li>
            <li className="mt-1">Test Automation Maintenance</li>
          </ul>

          <h3 className="my-10 text-xl font-bold">
            Types of automated testing we perform:
          </h3>

          <h3 className="font-semibold">Automated Functional Testing: </h3>

          <p className="mt-3">
            To ensure each functional requirement of your software is met, our
            engineers can join at any stage of software development or
            evolution. We develop, run, and maintain the functional tests of
            relevant granularity (smoke, component, system tests) and level (API
            and UI automated tests).
          </p>

          <p className="mt-3">
            To validate that newly introduced features don’t disrupt the
            functioning of the rest of the software functionality, we introduce
            and performs automation regression testing.{" "}
          </p>

          <h3 className="font-semibold mt-10">
            Automated Performance Testing:{" "}
          </h3>

          <p className="mt-5">
            To ensure stability and high performance of your software under
            varying loads, we test the automation team performs:{" "}
          </p>

          <ul className="list-disc ml-5 mt-5">
            <li>Load Testing</li>
            <li className="mt-1">Stress Testing</li>
            <li className="mt-1">Stability Testing</li>
            <li className="mt-1">Scalability Testing</li>
          </ul>

          <h3 className="mb-5 mt-10  font-semibold">
            Automated Integration Testing:
          </h3>

          <p>
            To ensure the smooth end-to-end workflows of your integrated
            software and business data consistency, we test automation engineers
            to validate the following software integrations:
          </p>

          <ul className="mb-10 list-disc ml-5 mt-3">
            <li>Internal (between software modules and components). </li>
            <li className="mt-1">
              External (between software and third-party applications it’s
              integrated with).{" "}
            </li>
          </ul>

          <h3 className="mb-5 mt-10  font-semibold">
            Automated Compatibility Testing:
          </h3>

          <p>
            To check whether the software's UI functions render fittingly in
            diverse target environments, our engineers test its compatibility
            with:
          </p>

          <ul className="mb-10 list-disc ml-5 mt-3">
            <li>Required devices and OSs. </li>
            <li className="mt-1">Browsers and their versions.</li>
            <li className="mt-1">Network conditions.</li>
          </ul>

          <h3 className="mb-5 mt-10  font-semibold">
            Automated Software Security Assurance:
          </h3>

          <p>
            To ensure your software is not exposed to common security
            vulnerabilities and obeys relevant regulatory standards, our team
            can automate the following cybersecurity checks:
          </p>

          <ul className="mb-10 list-disc ml-5 mt-3">
            <li>Vulnerability scanning.</li>
            <li className="mt-1">Code analysis.</li>
            <li className="mt-1">Compliance testing.</li>
          </ul>

          <h3 className="mt-10 mb-5 text-xl font-bold">Tools we use: </h3>

          <p className="font-semibold">
            Web application testing tools we use:{" "}
          </p>

          <ul className="mb-10 list-disc ml-5 mt-3">
            <li>Selenium.</li>
            <li className="mt-1">Ranorex.</li>
            <li className="mt-1">Katalon Studio.</li>
            <li className="mt-1">Cucumber.</li>
            <li className="mt-1">Nightwatch.JS</li>
            <li className="mt-1">Web driver io</li>
          </ul>

          <p className="font-semibold">
            Mobile application testing tools we use:
          </p>

          <ul className="mb-10 list-disc ml-5 mt-3">
            <li>Appium.</li>
            <li className="mt-1">Katalon Studio.</li>
            <li className="mt-1">UI Automator.</li>
          </ul>

          <p className="font-semibold">Our Services:</p>

          <ul className="mb-10 list-disc ml-5 mt-3">
            <li>Framework and Test development .</li>
            <li className="mt-1">Mobile Test Automation .</li>
            <li className="mt-1">Automated Test Execution and Maintenance.</li>
            <li className="mt-1">API automation .</li>
          </ul>

          <p className="font-semibold">Our Approach:</p>

          <ul className="mb-10 list-disc ml-5 mt-3">
            <li>Test Automation Assessment</li>
            <li className="mt-1">Feasibility Study and Analysis</li>
            <li className="mt-1">Define Test Automation Plan</li>
            <li className="mt-1">Design/Configure Test Automation Framework</li>
            <li className="mt-1">Develop Automated Test Scripts</li>
            <li className="mt-1">Execute Automation Tests</li>
            <li className="mt-1">Analyse Test Results</li>
            <li className="mt-1">Automated Test Maintenance</li>
          </ul>
        </div>
      </Layout>
    </>
  )
}

export default AutomationTesting
