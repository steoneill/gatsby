import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled, { injectGlobal, ThemeProvider } from 'styled-components'

import Header from './Header/header'
import About from './about'
import Contact from './contact'

let theme = {
  pink: '#F6207C',
  purple: '#6054FF',
  grey: '#333333',
  sans: `'Montserrat', sans-serif;`,
  serif: `'Playfair Display', serif;`,
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
  maxWidth: '1000px',
  headerPurple: `rgba(#6054FF, 0.5)`,
}

injectGlobal`
  body{
    background: #f8f8f8;
    padding: 0;
    margin: 0;
  }
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={theme}>
        <div>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: 'Sample' },
              { name: 'keywords', content: 'sample, something' },
            ]}
          >
            <html lang="en" />
          </Helmet>

          <Header siteTitle={data.site.siteMetadata.title} />
          <div>
            <About />
            {children}
            <Contact />
          </div>
        </div>
      </ThemeProvider>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
