import { Link } from "gatsby";
import * as React from "react";
import Layout from "../../components/layout";

function Finance() {
  return (
    <div>
      <Layout>
        <header className="finance">
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
          <h1 className=" text-gray-500">/ Finance</h1>
        </div>

        <div className="sm:mx-10 xl:mx-56">
          <h1 className="my-10 text-2xl font-bold">Finance</h1>

          <p className="mb-5">
            Fintech just got easier. Is your business ready to embrace the
            advantages of tech? Speed up business processes, prevent fraud,
            lower costs and keep all your financial data safe with your new web,
            mobile, or desktop app. Now that many of us no longer balance a
            check book, tracking expenses and keeping up with the bank balance
            can get a little pushing.
          </p>

          <p className="mb-5">
            Thrymr Software builds iOS and Android along with web applications,
            which means users get a faster and impeccable experience from their
            devices. We put up payment solutions you need. Users can store
            credit card details, 2 phase authentication, mobile fingerprint
            sensors, and contactless payment.
          </p>

          <p className="mb-5">
            We use machine learning and artificial intelligence to deliver a
            smoother experience and optimize the internal inflows also
            applications you need to store detailed user information. We make it
            easy to track user actions, device data, and geolocation.
          </p>

          <p className="mb-5">
            AI can dive into your user data to identify trends you can use to
            generate considerable revenue. Our data visualization tools make it
            easy to see what users are doing. Our development team has
            experience in blockchain implementation to provide security to work
            with other payment and service providers.
          </p>

          <p className="mb-10">
            Our aftercare service ensures that it works continuously. Your users
            don’t want bugs and errors. When OS updates come out, we review the
            code for any potential conflicts. And our intelligent monitoring
            system alerts us to any potential issues before they affect your
            app.
          </p>
        </div>
      </Layout>
    </div>
  )
}

export default Finance
