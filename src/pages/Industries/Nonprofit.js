import { Link } from "gatsby"
import * as React from "react"
import Layout from "../../components/layout"

function Nonprofit() {
  return (
    <div>
      <Layout>
        <header className="non-profit">
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
          <h1 className=" text-gray-500">/ Non-Profit</h1>
        </div>

        <div className="sm:mx-10 xl:mx-56">
          <h1 className="my-10 text-2xl font-bold"> Non-Profit </h1>

          <p className="mb-5">
            Non-profit services must provide either goods or services. Thrymr
            software serves services for the public by developing services.
            Although Thrymr software is a non-profit seeking organization that
            does not trade with the motive to earn a profit, like any other
            organization, they need to keep records of expenses, assets, income,
            liabilities, etc.
          </p>

          <p className="mb-5">
            Thrymr Software maintains ledgers and cash books and also holds a
            Stock Register. Stock registers records of all consumables and fixed
            assets and is maintained carefully.
          </p>

          <p className="mb-5">
            Thrymr Software has its terms and conditions and works accordingly
            to provide better services to the country or world. Thrymr Software
            is not controlled by the government but it follows all the
            democratic laws that are necessary. Thrymr software Keeps proper
            credit documentation is required as these trusts are accountable to
            their members. This record is kept to maintain the transparency
            between the expenditure and income of that particular company and
            then submitted to statutory authority, also known as Registrar of
            Society.
          </p>

          <p className="mb-10">
            Thrymr software provides transparency and provides the proper
            documentation and all the records are submitted by the end of the
            financial year. Non-profit software can be overwhelming. That said,
            there is hope amid the confusion. Non-profit that finds software
            that integrates with their mission and team can reap several
            benefits.
          </p>
        </div>
      </Layout>
    </div>
  )
}

export default Nonprofit
