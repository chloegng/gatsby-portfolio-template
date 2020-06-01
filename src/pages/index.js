import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>chloe ng</h1>
    <ul style={ulStyle}>
    <li style={liStyle}>
      Email
    </li>
    <li style={liStyle}>
      LinkedIn
    </li>
    <li style={liStyle}>
      GitHub
    </li>
    </ul>
    <h2>Current</h2>
    <ul>
      <li>Hanging out with my dog, Bash.</li>
      <li>Learning to cook and bake.</li>
    </ul>
    <h2>Experience</h2>
    <ul>
      <li>
        Software Engineer / Frontend Design at GIBLIB
      </li>
      <li>
        Software Engineer at AstroReality
      </li>
    </ul>
    <h2>Projects</h2>
    <ul>
      <li>
        motivation
      </li>
      <li>
        shiba inu facts
      </li>
      <li>
        DexMD
      </li>
    </ul>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

const ulStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  listStyle: 'none',
  marginLeft: '0'
}

const liStyle = {
  marginRight: '1.5em'
}
export default IndexPage