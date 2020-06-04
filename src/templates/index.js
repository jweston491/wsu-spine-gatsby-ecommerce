import React, { Component } from 'react'
import Link from 'gatsby-link'

import SEO from '~/components/seo'
import ProductGrid from '~/components/ProductGrid'

const IndexPage = ({ pageContext }) => {
    return(
    <>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <ProductGrid data={pageContext} />
    </>
    )
}

export default IndexPage