import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"

function FunctionalTesting() {
  return (
    <div>
      <Layout>
        <header className="contact-img">
          <div className="grid sm:place-items-center ">
            <div className="text-white text-center xl:mt-32 sm:mt-44">
              <h1 className="mt-4 xxl:text-6xl md:text-5xl sm:text-4xl">
                Functional Testing
              </h1>
            </div>
          </div>
        </header>

        <div className=" flex  sm:ml-2 sm:mt-5  xl:ml-56 lg:mt-12 sm:my-2">
          <Link
            to="/"
            className="inline-block  text-black no-underline
                    hover:text-underline "
            activeClassName="greenColorMenu"
          >
            Services &nbsp;
          </Link>
          <h1 className=" text-gray-500">/ Functional Testing</h1>
        </div>

        <div className=" sm:mx-10 xl:mx-56">
          <h1 className="my-10 text-2xl font-bold">Functional Testing</h1>
          <p>
            Thrymr Functional Testing Services ensure the verification and
            validation of applications for independent software vendors and
            enterprises. The functional testing services focus on testing the
            applications against defined specifications and meeting the end user
            expectations for functionality. Thrymr engages with clients in the
            different stages of the lifecycle to align the testing objectives
            against the overall business goals.
          </p>
          <ul className="mb-5 list-disc ml-5">
            <li>
              Step 1: Understand the process, flow of product to be tested
            </li>
            <li className="mt-1">
              Step 2: Identify and understand the business rules
            </li>
            <li className="mt-1">Step 3: Test screens with business rules </li>
            <li className="mt-1">Step 4: Test module (group of screens) </li>
            <li className="mt-1">Step 5: Test cycle (group of modules) </li>
            <li className="mt-1">Step 6: Test according to scenarios </li>
          </ul>
          <p className="mt-10 font-bold">
            Some specific services that Thrymr offers for functional testing
            are:
          </p>
          <ul className="list-disc mb-10 ml-5">
            <li className="font-semibold">Unit Testing</li>
            <p className="my-2">
              Unit testing should start at the extremely beginning to assure
              that each block of code/component performs its intended
              manipulation of inputs into desired outputs for the next module.
              Tests an individual unit/component of the software to validate
              that each component of the software performs as designed.
            </p>

            <li className="mt-1 font-semibold">Integration Testing </li>
            <p className="my-2">
              Takes multiple individual units/components of the software and
              tests them as a group to ensure that the unit modules connect as
              expected and convey data and commands throughout the system per
              the specifications built.
            </p>

            <li className="mt-1 font-semibold ">Sanity Testing </li>
            <p className="my-2">
              After receiving a software build, we verify the minor changes and
              fixes applied to the code body do not have unexpected side
              effects. We separate parts of the system and confirm that the bugs
              have been fixed. If the sanity test fails, the build will be
              rejected which saves time and cost.
            </p>

            <li className="mt-1 font-semibold">Regression Testing </li>
            <p className="my-2">
              Verify that the later feature additions and bug fixes do not
              adversely affect existing features. Regression testing is nothing
              but the in-depth or partial selection of already executed test
              cases that are re-executed to ensure existing functionalities work
              fine.
            </p>

            <li className="mt-1 font-semibold">User Acceptance Testing</li>
            <p className="my-2">
              User acceptance testing is the last pace before software goes
              live. It tests to make sure it can handle required tasks in Real-
              World scenarios, according to specifications. End users typically
              perform these tests during the Beta testing period.
            </p>

            <li className="mt-1 font-semibold">Data Verification Testing:</li>
            <p className="my-2">
              Data verification testing is used for verifying the data and
              databases successfully through any needed transformations without
              loss. It is used to test whether the entered data is valid or not
              according to the provided business conditions.
            </p>
          </ul>

          <h3 className="my-10 text-lg font-bold">
            Some effective procedures we use:
          </h3>

          <h3 className="font-semibold">Reusable test cases: </h3>
          <p className="mt-2">
            Developing test cases may take time, but we prepare reusable test
            cases. We write the test cases in simple language that is easy to
            understand, and the test steps are easy and manageable to execute.
            We ensure to stay organized by managing those test cases in a single
            source of truth like a test case management tool.
          </p>

          <h3 className="mt-3 font-semibold">
            Test data and configurations drive design tests:
          </h3>
          <p className="mt-2">
            Depending on test data and configurations to develop the steps, we
            will make sure to have everything that needs to complete the tests
            and fully understand the results. We pay close attention to testing
            the data and configurations at each step of the way, and these
            details are much important when informing developers, and product
            owners about issues and understanding the causes of those issues.
          </p>

          <h3 className="mt-3 font-semibold">
            Prioritize high risk and complex test cases:
          </h3>
          <p className="mt-2">
            When it comes to manual testing, we prioritize the complex risk and
            high-test cases, these are the ones that most need a human at the
            steering wheel.
          </p>

          <h3 className="mt-3 font-semibold">
            Considering opportunities for automation:
          </h3>
          <p className="mt-2">
            We look for opportunities to embrace automation to save time and
            make it easier to run specific tests more often. When considering
            which tests are the best to execute manually and which tests are
            more suitable for automation, we take an automated first approach.
          </p>

          <h3 className="mt-3 font-semibold">Documentation:</h3>
          <p className="mt-2">
            Documentation is a critical piece of manual testing. A good report
            is essential to help others, and a list of steps is much easy to
            understand and follow, details on the basis severity and priority of
            the issue, and insight on what should happen if the concern is
            resolved.
          </p>

          <h3 className="mt-3 font-semibold">
            Benefits of functional testing:
          </h3>

          <ul className="mb-10 list-disc ml-5">
            <li className="mt-5">
              We ensure that the customer or end-user is satisfied.
            </li>
            <li className="mt-1">We produce defect-free products/software. </li>
            <li className="mt-1">
              We make sure that all functionalities of an
              application/software/product are working or not.
            </li>
            <li className="mt-1">
              We make sure that the software/product works as expected.
            </li>
            <li className="mt-1">We check security and safety. </li>
            <li className="mt-1">We improve the quality of the product. </li>
          </ul>
        </div>
      </Layout>
    </div>
  )
}

export default FunctionalTesting
