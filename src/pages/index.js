import * as React from "react"
import Layout from "../components/layout"
import Services from "../components/Services"
import ClientLogo from "../components/ClientLogo"
import Industries from "../components/Industries"
import About from "../components/About"
import Career from "../components/Career"


const IndexPage = () => (
  <Layout>
    <About />
    <Services />
    <Industries />
    {/* <Testimonials /> */}
    <ClientLogo />
    <Career />
    {/* <CaseStudies /> */}
    {/* <Contact /> */}

    {/* <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
      <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
      <Link to="/using-dsg">Go to "Using DSG"</Link> */}
  </Layout>
)

export default IndexPage
