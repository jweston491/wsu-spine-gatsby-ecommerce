import React from 'react'

import PropTypes from 'prop-types'

import { Link } from 'gatsby'

import CartStatus from '~/components/Cart/CartStatus'


const Spine = ( { location, siteTitle } ) => {

	return(

        <div id="spine" class="spine-column">

            <div id="glue" class="spine-glue">

            <header class="spine-header">
                <a href="https://wsu.edu/" id="wsu-signature">Washington State University.</a>
            </header>

            
            <section id="wsu-actions" class="spine-actions">

            {siteTitle}
                <ul id="wsu-actions-tabs" class="spine-actions-tabs clearfix">
                <li id="wsu-search-tab" class="spine-search-tab closed">
                    <button>Search</button>
                </li>
                <li id="wsu-contact-tab" class="spine-contact-tab closed">
                    <button>Contact</button>
                </li>
                <li id="wsu-share-tab" class="spine-share-tab closed">
                    <button>Share</button>
                </li>
                <li id="wsu-print-tab" class="spine-print-tab closed">
                    <button>Print</button>
                </li>
                </ul>

            </section>

            
            <section id="spine-navigation" class="spine-navigation">

                
                <nav class="spine-sitenav">

                <ul>
                    <li>
                        <Link 
                            to="/"
                            activeClassName="current" 
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/cart"
                            activeClassName="current" 
                        >
                            <CartStatus />
                        </Link>
                    </li>
                </ul>

                </nav>

            </section>

            
            <footer class="spine-footer">
                <nav id="wsu-social-channels" class="spine-social-channels">
                <ul>
                    <li class="facebook-channel"><a href="https://facebook.com/wsupullman">Facebook</a></li>
                    <li class="twitter-channel"><a href="https://twitter.com/wsupullman">Twitter</a></li>
                    <li class="youtube-channel"><a href="https://www.youtube.com/washingtonstateuniv">YouTube</a></li>
                    <li class="directory-channel"><a href="https://socialmedia.wsu.edu/">Social media at WSU</a></li>
                </ul>
                </nav>
                <nav id="wsu-global-links" class="spine-global-links">
                <ul>
                    <li class="mywsu-link"><a href="https://my.wsu.edu/">myWSU</a></li>
                    <li class="access-link"><a href="https://access.wsu.edu/">Access</a></li>
                    <li class="policies-link"><a href="https://policies.wsu.edu/">Policies</a></li>
                    <li class="copyright-link"><a href="https://copyright.wsu.edu">&copy;</a></li>
                </ul>
                </nav>
            </footer>

            </div>

        </div>
	)
}

Spine.propTypes = {
	siteTitle: PropTypes.string,
}

Spine.defaultProps = {
	siteTitle: ``,
}

export default Spine
