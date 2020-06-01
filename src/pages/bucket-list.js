import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BucketList = () => (
  <Layout>
    <SEO title="Bucket List" />
    <h1>Bucket List</h1>
    <ul>
      <li style={incomplete}>Make bread</li>
      <li style={completed}>Hike Mission Peak</li>
      <li style={incomplete}>Visit Joshua Tree</li>
      <li style={incomplete}>Visit Yosemite</li>
      <li style={incomplete}>Visit Yellowstone</li>
      <li style={incomplete}>Go camping with friends</li>
      <li style={incomplete}>Roadtrip to Seattle</li>
      <li style={incomplete}>Run a half marathon</li>
      <li style={incomplete}>Run a marathon</li>
    </ul>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)
const completed = {
  textDecoration: `line-through`,
  listStyle: `none`
}
const incomplete = {
  fontWeight: `bold`,
  listStyle: `none`
}

export default BucketList
