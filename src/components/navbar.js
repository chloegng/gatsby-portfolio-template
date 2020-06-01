import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Navbar = ({ siteTitle }) => (
  <ul style={ulStyle}>
    <li style={liStyle}>
      Email
    </li>
    <li style={liStyle}>
    <a href="https://linkedin.com/in/chloegng" 
        style={{
          color: `white`,
          textDecoration: `none`
        }}
      >
        LinkedIn
      </a>
    </li>
    <li style={liStyle}>
    <a href="https://github.com/chloegng" 
        style={{
          color: `white`,
          textDecoration: `none`
        }}
      >
        GitHub
      </a>
    </li>
    <li>
      <Link to="/bucket-list/" 
        style={{
          color: `white`,
          textDecoration: `none`
        }}
      >
        Bucket List
      </Link>
    </li>
  </ul>
)

const ulStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  listStyle: 'none',
  marginLeft: '0',
  marginBottom: '0',
  color: '#fff'
}

const liStyle = {
  marginRight: '1.5em'
}

export default Navbar
