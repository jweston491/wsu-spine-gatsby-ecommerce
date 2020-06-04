import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import {Helmet} from "react-helmet";

import ContextProvider from '~/provider/ContextProvider'

import { GlobalStyle } from '~/utils/styles'
import Navigation from '~/components/Navigation'
import Spine from '~/components/Spine'

import "../styles/sass/spine-custom.scss";

const Layout = ({ children, location }) => {
  return (
    <ContextProvider>
      <Helmet>
        <meta name="robots" content="noindex, nofollow"></meta>
      </Helmet>
      <GlobalStyle />
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
          <>
            <div id="jacket">
            
              <div id="binder" className="fluid">

                
                <main id="wsu-main-content">

                  <header className="main-header crimson-back">
                    <div className="header-group hgroup guttered padded-bottom short">
                      <sup className="sup-header"><a href="http://site.wsu.edu/">College of Agriculture, Human and Natural Resource Sciences</a></sup>
                      <sub className="sub-header">Test Store</sub>
                    </div>
                  </header>
                  <section className="row single gutter pad-ends">

                    
                    <div className="column">

                      <article>

                        { children }

                      </article>

                    </div>

                  </section>

                </main>

                <Spine
                  location = { location }
                  />

              </div>
            </div>
            
          </>
        )}
      />
    </ContextProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
