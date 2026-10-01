import { Link } from "gatsby"
import * as React from "react"
import Layout from "../../components/layout"

function Realestate() {
  return (
    <div>
      <Layout>
        <header className="real-estate">
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
          <h1 className=" text-gray-500">/ Real Estate</h1>
        </div>

        <div className="sm:mx-10 xl:mx-56">
          <h1 className="my-10 text-2xl font-bold"> Real Estate </h1>

          <p className="mb-5">
            It has since then benefited many industries through the
            transformation of their core values. And the real estate industry is
            not an exception. Real estate has started integrating digital
            technology in their day-to-day operations.
          </p>

          <p className="mb-5">
            Most real estate customers will decide whether to buy a property or
            not after seeing it in person. But before visiting the site,
            investors carry out a lot of research. Such calls for a robust
            online presence for real estate dealers.
          </p>

          <p className="mb-5">
            To have the required information on their fingerprints, consumers
            tend to browse over the property they ought to buy, rent or sell
            through google or other convenient apps. So, real estates are
            increasingly aware of digitalization needs.
          </p>

          <p className="mb-5">
            Thrymr software provides the business solution to real estate. Build
            the application based on the problem statement and make it uniquely
            yours.
          </p>

          <p className="mb-5">
            We are professionally engaged in this field and planning to expand
            their business should, in the first place, understand the market and
            look out for the latest real estate mobile app tech trend.
          </p>

          <p className="mb-10">
            We provide blockchain, augmented reality, and business intelligence
            to provide a safe and secure application. The future of real estate
            tech will be driven by the above mobile app trends in the real
            estate industry.
          </p>
        </div>
      </Layout>
    </div>
  )
}

export default Realestate
