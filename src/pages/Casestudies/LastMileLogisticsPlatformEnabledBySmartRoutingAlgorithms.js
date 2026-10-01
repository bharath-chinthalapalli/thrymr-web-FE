import { Link } from 'gatsby';
import * as React from 'react';
import Layout from '../../components/layout';


function LastMileLogisticsPlatformEnabledBySmartRoutingAlgorithms() {
    return ( <div>
        <Layout>
        <header className="contact-img">
          <div className="grid sm:place-items-center ">
            <div className="text-white text-center xl:mt-32 sm:mt-44">
              <h1 className="mt-4 xxl:text-6xl md:text-5xl sm:text-4xl">
                Case Study
              </h1>
            </div>
          </div>
        </header>

        <div className="flex sm:ml-9 sm:mt-5  xl:ml-56 lg:mt-12 sm:my-2 sm:text-xs lg:text-sm">
          <Link
            to="/casestudies"
            className="inline-block  text-black no-underline
            hover:text-underline "
            activeClassName="greenColorMenu"
          >
            Case Study &nbsp;
          </Link>
          <h1 className=" text-gray-500">
            / Last Mile Logistics Platform Enabled By Smart Routing Algorithms
          </h1>
        </div>

        <div className="sm:mx-10 xl:mx-56">
          <h1 className="my-10 text-2xl font-bold">Project Overview</h1>
          <p>
            The leading supply chain management specialist approached Thrymr
            software to provide an end-to-end solution to manage the
            order-to-delivery process to guide the package delivery through a
            quick-witted routing algorithm and to implement in the mobile app.
            To understand the driver for the smooth delivery process to deliver
            the parcel assist the driver with point-to-point instructions. All
            the delivery details of the order and delivery process should be
            stored.
          </p>

          <h3 className="my-10 text-2xl font-bold">Problem Statement</h3>

          <ul className="mb-5 ml-5">
            <li className='dot-color'>
              A leading supply chain logistics consulting firm took a step up to
              the fundamental change in the delivery process to reach the
              customer's expectations as well as providing last-mile
              optimization, aggregation, and differentiation.
            </li>

            <li className="mt-1 dot-color">
              Our client wants to build a superior application that makes the
              delivery process better by utilizing artificial intelligence and
              machine learning. And also, the client wants to provide a better
              experience to the customer and reduce the customer delivery cost.
            </li>

            <li className="mt-1 dot-color">
              The client wants to develop a mobile application that helps the
              driver to deliver the parcel along with the parcel details. The
              client wants to store the details of the order and delivery
              process done by the driver. The mobile application will show its
              OTM cloud pre-configured solution for asset-based 3PLs.
            </li>
          </ul>

          <h3 className="my-10 text-2xl font-bold">Implementation story: </h3>

          <ul className="mb-5 ml-5 list-decimal">
            <li>
              Thrymr developed and designed the customized application that
              enables the end-to-end solution to the user from the order to
              delivery. We implemented features based on end-user requirements
              and preferences, such as digital signature capture, delivery time
              windows, picture confirmation, and delivery status notification.
            </li>

            <li className="mt-1">
              Thrymr implemented smart route maps and smart route optimization
              solutions, Google maps integration, and Google technology stack,
              and also notifications of every step of the process that includes
              confirmation notifications, shipment, track and trace the delivery
              each step of the way.
            </li>
          </ul>

          <h3 className="my-10 text-2xl font-bold">Results:</h3>

          <ul className="mb-5 ml-5 list-decimal">
            <li>
              Thrymr software enabled the solution for the customer to trace and
              track the delivery with updated notifications. We provided the
              required mobile application with new dimensions for logistics as
              per the client's capabilities to offer the customer a
              comprehensive and customizable last-mile delivery platform.
            </li>

            <li className="mt-1">
              Thrymr leveraged solution provides the client to store the
              delivery process and order details. The client can easily manage
              the order status and data related to logistics management.
            </li>
          </ul>

          <h3 className="my-10 text-2xl font-bold">Synopsis</h3>

          <p className="mb-10">
            Thrymr provides a progressive and wide range of quality skills and
            services to facilitate an end-to-end solution for different IT
            needs. We work as a strategic partner for clients, working with them
            in an open and honest manner to shoulder the responsibilities of
            various IT challenges.
          </p>
        </div>
      </Layout>
    </div> );
}

export default LastMileLogisticsPlatformEnabledBySmartRoutingAlgorithms;