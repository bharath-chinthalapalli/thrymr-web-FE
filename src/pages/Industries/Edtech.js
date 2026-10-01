import { Link } from "gatsby";
import * as React from "react";
import Layout from "../../components/layout";

function Edtech() {
  return (
    <div>
      <Layout>
        <header className="edtech">
          <div className="grid sm:place-items-center ">
            <div className="text-white text-center xl:mt-32 sm:mt-44">
              <h1 className="mt-4 xxl:text-6xl md:text-5xl sm:text-4xl">
                Industries
              </h1>
            </div>
          </div>
        </header>

        <div className="flex sm:ml-9 sm:mt-5  xl:ml-56 lg:mt-12 sm:my-2 sm:text-xs lg:text-sm">
          <Link
            to="/"
            className="inline-block  text-black no-underline
            hover:text-underline "
            activeClassName="greenColorMenu"
          >
            Industries &nbsp;
          </Link>
          <h1 className=" text-gray-500">/ EdTech</h1>
        </div>

        <div className="sm:mx-10 xl:mx-56">
          <h1 className="my-10 text-2xl font-bold">EdTech</h1>

          <p className="mb-5">
            The educational sector is changing significantly with technology.
            From preschool to high school, universities, and educational
            institutions, were digitalized. Technology can help to create a
            future where institutions deliver a valuable education.
          </p>

          <p className="mb-5">
            EdTech is still in the stage of development. It helps to customize
            the curriculum for a student's ability level. Automating the
            assessments and adjusting the difficulty of a student can
            potentially lead to better outcomes.{" "}
          </p>

          <p>
            Thrymr software helped educational institutions to start their
            digital journey by providing solutions. We come together with the
            client as a team with common goals. We have an expert team to guide
            us through the process.
          </p>

          <ul className="mb-5 list-disc ml-5">
            <li>
              In EdTech, we provided the solutions like creating assessments and
              live sessions, easy to access. We have experience in multiple
              tools and technologies like AWS Code Commit, Spring Boot, Redis,
              Angular 8, HTML5, AWS-S3, ECR, ECS.SES. Docker, MongoDB, Postgres,
              and Twilio.
            </li>
            <li className="mt-1">
              Improve productivity by highly developed changes.
            </li>
            <li className="mt-1">
              Innovation of new ideas to improve the best quality output.
            </li>
            <li className="mt-1">
              Impending out technologies such as analytics, AI, and machine
              learning for personalizing the experience.
            </li>
            <li className="mt-1">
              Emerging technologies such as analytics, AI, and machine learning
              meet users' unique and individual requirements.{" "}
            </li>
          </ul>

          <h3 className="my-10 text-2xl font-bold">Targeted solutions: </h3>

          <ul className="mb-5 list-disc ml-5">
            <li>
              We develop the student-centric solution for delivering effectively
              across multiple devices through development.
            </li>
            <li className="mt-1">
              Our team can provide a clear vision for a new educational
              experience.{" "}
            </li>
            <li className="mt-1">
              We provide envisioned, design, and deliver transformative results.{" "}
            </li>
          </ul>

          <p className="mb-10">
            Let Thrymr help you succeed in your digital transformation journey.{" "}
          </p>
          
        </div>
      </Layout>
    </div>
  )
}

export default Edtech
