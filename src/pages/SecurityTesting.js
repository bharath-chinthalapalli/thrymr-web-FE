import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"

function SecurityTesting() {
  return (
    <>
      <Layout>
        <header className="contact-img">
          <div className="grid sm:place-items-center ">
            <div className="text-white text-center xl:mt-32 sm:mt-44">
              <h1 className="mt-4 xxl:text-6xl md:text-5xl sm:text-4xl">
                Performance Testing
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
          <h1 className=" text-gray-500">/ Security Testing</h1>
        </div>

        <div className="sm:mx-10 xl:mx-56">
          <h1 className="my-10 text-2xl font-bold">Security Testing</h1>

          <p>
            Security testing is a process that is performed to reveal flaws in
            security mechanisms and find the vulnerabilities or weaknesses of
            software applications. The prime objective of security testing is to
            find out how vulnerable a system may be and to determine whether its
            data and resources are protected from potential intruders.
          </p>

          <p>
            Online transactions have increased rapidly of late making security
            testing one of the most critical areas of testing for such web
            applications. Security testing is more effective in identifying
            potential vulnerabilities when performed regularly.{" "}
          </p>

          <h3 className="mt-10 mb-5 text-xl font-bold">
            Security Testing has the following attributes:
          </h3>

          <h3 className="mt-10 mb-5 font-semibold">Information Gathering:</h3>

          <p>
            In terms of security compliance, we understand the business
            requirements, security goals, and objectives of the organization,
            and the test planning considers all security factors like the
            organization's plan to achieve PCI compliance.
          </p>

          <h3 className="mt-10 mb-5 font-semibold">Analyse Threats:</h3>

          <p>
            We understand and analyze must-have applications under the test and
            collect all the setup information used for the development of
            software and networks like operating systems, technology, and
            hardware.
          </p>

          <h3 className="mt-10 mb-5 font-semibold">
            Vulnerability Assessment:
          </h3>

          <p>
            We will make out the list of vulnerabilities and security risks and
            prepare the threat profile. After spotting the vulnerabilities and
            security risks, we will make a test plan to address these issues.
          </p>

          <h3 className="mt-10 mb-5 font-semibold">
            Exploitation/In-depth Security Testing:
          </h3>

          <p>
            We identify the tool to execute all test cases faster and more
            reliably. We prepare the security tests case document and perform
            the security test cases execution and retest the defect fixes, and
            execute the regression test cases.{" "}
          </p>

          <h3 className="mt-10 mb-5 font-semibold">
            Reporting/Result Analysis:
          </h3>

          <p>
            We Prepare a detailed report of Security Testing which contains
            Vulnerabilities and Threats contained, detailing risks, still open
            issues, etc.
          </p>

          <ul className="mb-5 mt-5 list-disc ml-5">
            <li>Cost-Saving</li>
            <li className="mt-1">Protection from external attacks</li>
            <li className="mt-1">Saves time</li>
            <li className="mt-1">Reduced intrinsic business risk</li>
            <li className="mt-1">Guaranteed quality product</li>
            <li className="mt-1">Increase the demand for software</li>
            <li className="mt-1">Overall business growth</li>
          </ul>
        </div>
      </Layout>
    </>
  )
}

export default SecurityTesting
