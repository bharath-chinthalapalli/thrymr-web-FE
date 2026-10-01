import { Link } from 'gatsby';
import * as React from 'react';
import Layout from '../../components/layout';

function EngagingSocialMedAPlatformForAGlobalCommunity() {
    return ( 
        <div>
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
            / Engaging Social Media Platform For a Global Community
          </h1>
        </div>

        <div className="sm:mx-10 xl:mx-56">
          <h1 className="my-10 text-2xl font-bold">Project Overview</h1>

          <p>
            A cultural organisation approached Thrymr to envisage and build
            social media management platform that enables the devotees globally
            to share the content quickly and easily. Reaching out to the
            devotees via social media and monitoring their religious identity.
          </p>

          <h3 className="my-10 text-2xl font-bold">Problem Statement</h3>

          <ul className="mb-5 ml-5">
            <li className="dot-color">
              Our client wants us to imagine and build an engaging application
              that includes advanced features and functionalities like messages,
              notifications, campaigns, amplify, tasks, discovery, invite,
              analytics, publishing.
            </li>
            <li className="mt-1 dot-color">
              Our client wants to develop an application for the devotees which
              includes a multilingual dashboard and far-reaching implementation
              with multiple social media networking sites using a significant
              ecosystem of technology and internet tools that will make the
              platform very effective.
            </li>
          </ul>

          <h3 className="my-10 text-2xl font-bold">Implementation story:</h3>

          <ul className="mb-5 ml-5">
            <li className='dot-color'>
              Thrymr envisaged, designed, and put up the web and mobile-based
              solution. Mobile application is available with all advanced
              features and available in both android and iOS devices. Devotees
              can easily access the application and include the functionalities
              and features.
            </li>
            <li className="mt-1 dot-color">
              We used the spring-boot framework and used AngularJS, CSS3, HTML5,
              JavaScript, jQuery, and Bootstrap for application programming and
              NodeJS, Loopback for server-side and middleware and to work with
              MongoDB, PostgreSQL databases.
            </li>
            <li className="mt-1 dot-color">
              We implemented Agile methodology to instant results the immediate
              change and Axure, Marvel to build UX design and iterative and
              rapid delivery by using Git, Dropbox, Jira, and Jenkins for build
              automation, continuous integration, project management, and defect
              tracking.
            </li>
          </ul>

          <h3 className="my-10 text-2xl font-bold">Results</h3>

          <ul className="mb-5 ml-5">
            <li className='dot-color'>
              Our client can build a relationship with the devotees globally. By
              implementation of analytics can help the client to manage and
              organize the events and activities with flexibility. The campaign
              effectiveness is significantly improved.
            </li>
            <li className="mt-1 dot-color">
              The solution enabled our clients to create, elevate and foster and
              group’s culture and bonding within their global devotee community.
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
        </div>
     );
}

export default EngagingSocialMedAPlatformForAGlobalCommunity;