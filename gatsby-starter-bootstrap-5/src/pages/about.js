import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import {Seo} from "../components/seo"

const About = () => (
  <Layout>
    <div className="container text-center my-5">
      <h1>O mnie</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Powrót do strony głównej</Link>
    </div>
  </Layout>
)

export default About

export const Head = () => (
    <Seo title="O Mnie" />
)