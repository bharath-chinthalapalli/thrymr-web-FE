import { Link } from 'gatsby';
import * as React from 'react';
import Layout from "../../components/layout";

function FintechCaseStudy() {
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
            / Fintech (Virtual Accounts & High Value Transactions)
          </h1>
        </div>

        <div className="sm:mx-10 xl:mx-56">
          <h1 className="my-10 text-2xl font-bold">Project Overview</h1>

          <p>
            Thrymr had an opportunity to work with one of the most
            technologically advanced banks in the world. Client work with the
            people across the world and people sending money are a necessity.
            Receiving a large sum of money from accounts 1 to 100 and more is a
            common practice. <br />
            Thrymr Software provided the solution to the client for direct
            payments integration. We designed, developed, tested, and deployed
            the required tech infrastructure to execute the integration.
          </p>

          <h3 className="my-10 text-2xl font-bold">Problem Statement</h3>

          <p>
            Receiving large sums of money overseas from close to 100 or more
            accounts is a common practice
          </p>

          <ul className="mb-5 ml-5">
            <li className="dot-color">
              Using bank services is the first option when it comes to money
              transfer all the banks have their own policies for money transfers
              and one thing remains the same that is charges everyone needs to
              pay. In addition to that bank also charges hidden fees that occur
              in the form of unfavourable currency exchange rates.
            </li>
            <li className="mt-1 dot-color">
              Apart from the charges managing the inward payment from 100 or
              more accounts is seems excluded. Different types of fees are
              included while transferring amounts, that is a transaction fee
              from 2% to 6% and a chargeback fee and hidden currency conversion
              fees are up to $4,500 when transferring $100,000 from one currency
              to other, while the stated fee is just $15.
            </li>
            <li className="mt-1 dot-color">
              When it comes to 100 to more physical accounts it is a challenge
              to keep track of the payments. Client looks to use the encrypted
              data for safe and secure data and to identify the user.
            </li>
          </ul>

          <h3 className="my-10 text-2xl font-bold">Implementation story:</h3>

          <h3 className="my-10 text-xl font-semibold">
            Inward remittance/Virtual accounts
          </h3>

          <ul className="mb-5 ml-5">
            <li className="dot-color"> Inward remittances are handled via Virtual Accounts (VA) </li>
            <li className="mt-1 dot-color">
              These are virtual/logical accounts bearing individual/unique VA
              number, ultimately linked to one real bank account of the client.
            </li>
            <li className="mt-1 dot-color">
              Each customer is allotted his respective VA number for him to make
              payments into.
            </li>
            <li className="mt-1 dot-color">
              All payments made to multiple VAs are ultimately credited into the
              client's one real bank account with which all the VAs are linked.
              The system is similar to credit cards bill payments made by retail
              credit card holders.
            </li>
            <li className="mt-1 dot-color">
              The VA number is a 16-digit numeric value with the first 6 digits
              allotted by the bank (which uniquely identifies the client) and
              the remaining 10 digits assigned by the client at its discretion
              to individual customers or invoices.
            </li>
          </ul>

          <h3 className="my-10 text-2xl font-bold">Tech Integration</h3>

          <p>
            The clients and bank servers are interacting with each other via
            encrypted CSV files sent over the SFTP protocol. When the customer
            transfers the amount to their virtual account the bank notifies the
            client with transferring the transaction details via CSV file. The
            CSV file contains the details like VA number, the amount paid, date,
            etc. thereby notifying the client of the payment made into the
            respective VA. Thus, the client is kept updated about the payment
            status of its customers and invoices.
          </p>

          <p className="my-10 text-2xl font-bold">Security</p>

          <p>
            The transfer of the CSV files happens over SFTP from pre-filtered,
            whitelisted IPs from each end. Moreover, the files themselves are
            encrypted using the OpenPGP encryption standard using secure
            public-private RSA keys.
          </p>

          <h3 className="my-10 text-2xl font-bold">
            OUTWARD REMITTANCE/ ISO 20022
          </h3>

          <p>
            The client exitance in a marketplace of goods and services needs to
            make outward payments to suppliers of goods and services.
          </p>

          <h3 className="my-10 text-2xl font-bold">Tech Integration</h3>

          <p>
            To make payments to external bank accounts, the client’s system
            sends an encrypted XML file to the bank’s system over the SFTP
            protocol and received acknowledgment about the payment status via
            encrypted XMLs sent to the client’s system by the bank. These XML
            files strictly conform to the ISO 20022 standard of payment messages
            with exhaustive checks on both sides ascertaining the validity of
            the data and structure of the files.
          </p>

          <p className="my-10 text-2xl font-bold">Security</p>

          <p>
            The transfer of the XML files happens over SFTP from pre-filtered,
            whitelisted IPs from each end. Moreover, the files themselves are
            encrypted using the OpenPGP encryption standard using secure public
            private RSA keys.
          </p>

          <h3 className="my-10 text-2xl font-bold">Results</h3>

          <p>
            Use of technology tools and defence of confidential information
            against internal and external, malicious and threats.
          </p>

          <h3 className="my-10 text-2xl font-bold">Synopsis</h3>

          <p className="mb-10">
            From Thrymr’s perspective, we believe the concept of virtual
            accounts and payments through virtual account management will grow
            in importance in the immediate future and will be high on the agenda
            with leading transaction banks. This solution effectively reduces
            transaction fees with any other unexpected charges.
          </p>
        </div>

            </Layout>
        </div>
     );
}

export default FintechCaseStudy;