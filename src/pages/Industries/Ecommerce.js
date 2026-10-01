import { Link } from "gatsby"
import * as React from "react"
import Layout from "../../components/layout"

function Ecommerce() {
  return (
    <div>
      <Layout>
        <header className="ecommerce">
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
          <h1 className=" text-gray-500">/ Ecommerce</h1>
        </div>

        <div className="sm:mx-10 xl:mx-56">
          <h1 className="my-10 text-2xl font-bold">Ecommerce</h1>

          <p className="mb-5">
            E-commerce is buying and selling economic consumption online. These
            days e-commerce app in-app acquirement enlarge double-quick.
            Building your app with us is simple, great value, and fast.
            E-commerce has created a marketplace with significant advantages.
          </p>

          <p className="mb-5">
            Thrymr software provides designers and developers to customize your
            features to make them uniquely yours. We are AWS consulting partners
            also most of our developers are AWS certified. Our developers are
            experts in all updated technologies.
          </p>

          <p className="mb-5">
            Thrymr Software develops types of e-commerce like business to
            business, business to customer, and customer to customer. We build
            iOS and Android along with web applications, which means users get a
            faster and impeccable experience from their devices.
          </p>

          <p className="mb-5">
            Artificial intelligence makes everything better. When it comes to a
            fitness app, it can empower the app, significantly improving
            engagement, which potentially brings sustainable returns. AI
            features can provide users with some specific benefits.
          </p>

          <p className="mb-5">
            We take care of everything – from building yours to maintaining it.
            That’s upgrades, updates, bug fixes, and any third-party changes.
            And we even include cloud capacity to help you scale it too.
          </p>

          <p className="mb-10">
            Thrymr Software has experience in all types of industries. We
            provide secure payment options to users like credit cards, debit
            cards unified payment interface, Net banking, and a payment gateway
            and invoice generator make running the whole process effortless.
            Choose any delivery provider we’ll link your apps up to their
            tracking system. You’ve total flexibility on how you want your
            delivery service to work. SMS or push notifications to update the
            customer.
          </p>
        </div>
      </Layout>
    </div>
  )
}

export default Ecommerce
