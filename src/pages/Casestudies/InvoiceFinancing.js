import { Link } from "gatsby";
import * as React from "react";
import Layout from "../../components/layout";

function InvoiceFinancing() {
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
          <h1 className=" text-gray-500">/ Invoice Financing</h1>
        </div>

        <div className="sm:mx-10 xl:mx-56">
          <h1 className="my-10 text-2xl font-bold">Project Overview</h1>

          <p>
            Thrymr Software has had the opportunity to work with one of the
            established companies, which provides multiple financing options for
            enterprises to grow their business. The client is engaged in
            providing fast access to more working capital options, competitive
            financing, and bringing buyers, suppliers, and funders together on a
            single platform, enabling fast and secure data exchange.
          </p>

          <h3 className="my-10 text-2xl font-bold">Problem Statement</h3>

          <h3 className="my-10 text-md font-semibold">
            Long waiting time to get paid
          </h3>

          <p>
            Many times, vendors are not in a position to act instantly on large
            orders due to a lack of ledger tender
          </p>

          <h3 className="my-10 text-md font-semibold">
            Lack of confidentiality
          </h3>

          <p className="mb-5">
            The invoice finance provider takes control of all of your customer
            collections.
          </p>

          <h3 className="my-10 text-md font-semibold">Expensive</h3>

          <p>
            Traditional finance has high services fees, high arrangement fees,
            unclear terms, lower availability of finance than advertised due to
            concentration limits and lack of co-operation by debtors.
          </p>

          <p className="my-10 text-md font-semibold">Unfair contracts</p>

          <p>
            Traditional invoice finance contracts usually involve contractual
            lock-ins with long notice periods, which in many cases make it
            exceptionally difficult for the customer to terminate the agreement.
          </p>

          <h3 className="my-10 text-2xl font-bold">Implementation story:</h3>

          <ul className="mb-5 ml-5">
            <li className="dot-color">
              Suppliers have options to view real-time status, such as the
              number of Pending Invoices, Verified Invoices, Pending Payments,
              Paid Invoices, Rejected Invoices & Early Payments Status. Ability
              to invite others vendors.
            </li>

            <li className="mt-1 dot-color">
              Buyers possess the option to view, update, verify or reject
              invoices, view early payment requests, choose financing or direct
              payment, Early Payment offer, etc.
            </li>

            <li className="mt-1 dot-color">
              Funder Dashboard shows the financing requests for approval,
              invoices with their status, approved invoices, disbursed invoices,
              etc.
            </li>
          </ul>

          <h3 className="my-10 text-2xl font-bold">Results</h3>

          <p>
            Competitive businesses have to grow. Grow or die. And yet it is
            because they have their cash invested in the previous deal, awaiting
            payment, they often lack the ledger tender needed for future sales,
            advertising, set-up, production, and delivery. Businesses with
            clotted financial streams can’t grow. Businesses that are getting
            low on cash can take out a working capital loan, but many find it
            hard to go through the procedure of applying and waiting for
            approval. So, our explication of invoice financing allows faster and
            more flexible cash flow between buyers & suppliers by borrowing
            short-term money from a bank or a financial institution.
          </p>

          <h3 className="my-10 text-2xl font-bold">Synopsis</h3>

          <p className="mb-10">
            We believe our platforms with invoice financing option gives a good
            short-term solution when most of the falsifier's short-term assets
            are tied to accounts receivable, which lets them avoid lengthy bank
            loan applications. Which is also much better compared to expensive
            merchant cash advances. It’s also a good solution if businesses
            haven’t built up credit enough to get a credit line from a bank. Our
            solution of invoice financing allows faster and flexible cash flow
            between buyers & suppliers by borrowing it for the short term from a
            bank or a financial institution.
          </p>
        </div>
      </Layout>
    </div> );
}

export default InvoiceFinancing;