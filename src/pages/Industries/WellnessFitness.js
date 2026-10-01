import { Link } from "gatsby";
import * as React from "react";
import Layout from "../../components/layout";

function WellnessFitness() {
  return (
    <div>
      <Layout>
        <header className="wellness">
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
          <h1 className=" text-gray-500">/ Wellness & Fitness</h1>
        </div>

        <div className="sm:mx-10 xl:mx-56">
          <h1 className="my-10 text-2xl font-bold">Wellness & Fitness</h1>

          <p className="mb-5">
            Fitness technology is always an exciting area, with everyone from
            giants such so innovative start-ups constantly finding new ways to
            collect and interpret data to help us hit goals and improve health.
            The anticipated value propositions these offers may include better
            health outcomes for seniors and reduced health care bills for
            payers.
          </p>

          <p className="mb-5">
            We provide technologies that help users with live online classes or
            pre-recorded sessions broadcast through devices. Different aspects
            made it easier for users to get informed assistance from their
            high-tech tools.
          </p>

          <p className="mb-5">
            We provide features like user personalization, wearable, and
            non-wearable device integration, activity summaries by a specific
            period, goals setting, tracking metrics, push notifications, social
            sharing, community, gamification, video tutorials.
          </p>

          <p className="mb-5">
            Artificial intelligence makes everything better. When it comes to a
            fitness app, it can empower the app, significantly improving
            engagement, which potentially brings sustainable returns. AI
            features can provide users with some specific benefits.
          </p>

          <p className="mb-5">
            AI can analyse the user’s digestive system or metabolism to create
            an ideal meal plan for their needs. In addition, a solution like
            this could potentially save millions of lives by preventing
            diabetes, heart disease, and other conditions caused by
            malnutrition.
          </p>

          <p className="mb-10">
            Our team created a well-informed cloud strategy and managed the
            adoption process. As a side task, we made an admin panel for
            trainers guides their clients through training sessions. With solid
            cloud architecture, it became possible to achieve the prime goal of
            the app, which is delivering besuited and high-quality personal
            fitness training.
          </p>
        </div>
      </Layout>
    </div>
  )
}

export default WellnessFitness
