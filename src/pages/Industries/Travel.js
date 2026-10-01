import { Link } from "gatsby"
import * as React from "react"
import Layout from "../../components/layout"

function Travel() {
  return (
    <div>
      <Layout>
        <header className="travel">
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
          <h1 className=" text-gray-500">/ Travel</h1>
        </div>

        <div className="sm:mx-10 xl:mx-56">
          <h1 className="my-10 text-2xl font-bold">Travel</h1>

          <p className="mb-5">
            Today mobile apps have become an integral part of every business,
            and tourism is not an exception. Mobile app development plays a
            central role in the travel industry today. Mobile apps make it easy
            and fast to communicate with travel companies, book tickets, book
            rooms, and search for good deals. The use of mobile apps for
            traveling will increase and continue to evolve in the coming days.
          </p>

          <p className="mb-5">
            Travel is essentially about connecting people and places. Leveraging
            technology such as near-universal high-speed internet connectivity,
            search and geolocation technologies, mobile payments, and social
            platforms, these connections have evolved with one industry-changing
            development has been the explosion of the sharing economy.
          </p>

          <p className="mb-5">
            Thrymr software provides the solutions that your business needs.
            Includes you all helps travel needs, such as location details,
            ticket booking cost, restaurant details, ticket booking facility,
            facility to book accommodation, taxi, and explore local experiences.
            Tourists can also decide when to visit this location, with the
            updates provided on the weather.
          </p>

          <p className="mb-5">
            Travelers may forget the ticket. But, when they have a mobile app,
            they don’t need to worry about that. A mobile app can carry all
            tickets in it, including hotel reservation tickets, flight or train
            tickets, and other important documents pertaining to travel. It can
            save their time, and guide them 24/7.
          </p>

          <p className="mb-10">
            If you are in the travel business and want to grow your business,
            first you have to invest in mobile technology. Thrymr software has
            enough experience in building mobile applications and provides
            consistent results.
          </p>
        </div>
      </Layout>
    </div>
  )
}

export default Travel
