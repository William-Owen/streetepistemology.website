import React, { useRef, useState } from "react"
import PropTypes from "prop-types"
import clsx from "clsx"
import { Link, useStaticQuery, graphql } from "gatsby"
import NavigationLearn from "../../components/navigationLearn"
import * as style from "./Layout.module.sass"
import SELogo from "../../images/street-epistemology-logo-simple-color.inline.svg"
import WOLogo from "../../images/wo_dev_transparent.svg"
import IconDiscord from "../../images/discord.inline.svg"
import IconFacebook from "../../images/facebook.inline.svg"
import IconReddit from "../../images/reddit.inline.svg"
import IconTwitter from "../../images/twitter.inline.svg"
import IconMenu from "../../images/menu.inline.svg"

interface LayoutProps {
	children: any
}

const Layout: React.FC<LayoutProps> = ({ children }) => {

	const rootClassName = clsx([ style.Layout, "Layout" ])
	const [ isMenuOpen, setIsMenuOpen ] = useState(false)
	const primaryNavigationRef = useRef()
	let headerClassName = ""

	// Get meta data from gatsby-config

	const { site } = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						discordUrl
						redditUrl
						twitterUrl
						facebookUrl
					}
				}
			}
		`
	)

	const metaData = site.siteMetadata

	// Layout event handlers

	const handelMenuClick = () => setIsMenuOpen(!isMenuOpen)
	const handelMenuLinkClick = () => setIsMenuOpen(false)

	// Handle body locking when menu is open. We need to
	// check for the window object to avoid issues during
	// gatsby building

	if (typeof window !== `undefined`) {

		if (isMenuOpen) {

			document.body.classList.add(style.scrollLock)
			headerClassName = style.menuOpen

		} else {

			document.body.classList.remove(style.scrollLock)

		}

	}

	return (

		<div id="page-top" className={rootClassName}>
			<header className={headerClassName}>
				<SELogo className={style.logo} />
				<Link className={style.siteTitle} to="/">
					<h1>
						Street Epistemology
						<sub>Great conversations lead to better ideas</sub>
					</h1>
				</Link>
				<nav ref={primaryNavigationRef}>
					<div>
						<span>Learn</span>
						<nav onClick={handelMenuLinkClick}>
							<NavigationLearn />
						</nav>
					</div>
					<div>
						<span>Resources</span>
						<nav onClick={handelMenuLinkClick}>
							<Link to="/resources/glossary">Glossary</Link>
							<Link to="/resources/youtube">YouTube Channels</Link>
							<Link to="/resources/communities">Communities</Link>
							<Link to="/resources/websites">Websites</Link>
							<Link to="/resources/books">Books</Link>
							<Link to="/resources/podcasts">Podcasts</Link>
							<Link to="/resources/tools">Tools</Link>
							<Link to="/resources/support">Support groups</Link>
						</nav>
					</div>
					<Link onClick={handelMenuLinkClick} to="/faqs">
						FAQs
					</Link>
				</nav>
				<IconMenu onClick={handelMenuClick} className={style.menuIcon} />
			</header>

			<main>{children}</main>

			<footer>
				<div className={style.linksAndCredit}>

					<nav>

						<h4 className="h5">Content</h4>

						<a href="#page-top">Back to top page</a>
						<Link to="/learn">Learn Street Epistemology</Link>
						<Link to="/resources">Street Epistemology Resources</Link>
						<Link to="/faqs">Street Epistemology FAQs</Link>
						<a href="https://www.evolvefish.com/Street-Epistemology_c_143.html">Merchandise Shop</a>

					</nav>
					<nav>

						<h4 className="h5">Social</h4>

						<a href={metaData.discordUrl}>Street Epistemology Discord</a>
						<a href={metaData.facebookUrl}>Street Epistemology Facebook</a>
						<a href={metaData.redditUrl}>Street Epistemology Reddit</a>
						<a href={metaData.twitterUrl}>Street Epistemology Twitter</a>

					</nav>
					<nav>

						<h4 className="h5">Website</h4>

						<a href="mailto:contact@streetepistemology.com">Contact Street Epistemology International</a>
						<Link to="/terms">Website Terms of Service</Link>
						<Link to="/privacy">Website Privacy Policy</Link>

					</nav>
					<div className={style.meta}>

						<nav>
							<a href={metaData.discordUrl}>
								<IconDiscord />
							</a>
							<a href={metaData.facebookUrl}>
								<IconFacebook />
							</a>
							<a href={metaData.redditUrl}>
								<IconReddit />
							</a>
							<a href={metaData.twitterUrl}>
								<IconTwitter />
							</a>
						</nav>

						<div className={style.woCredit}>
							<WOLogo alt="wo.dev" />
							<p>
								Website by
								<br />
								<a href="https://wo.dev">wo.dev</a>
							</p>
						</div>

						<div className={style.sei}>
							<div>
								<h4 className="h5">Street Epistemology International</h4>
								<p>A 501(c)(3) non-profit organisation.</p>
								<address>
									17503 La Cantera Parkway,
									<br />
									Suite 104-497,
									<br />
									San Antonio,
									<br />
									Texas 78257
									<br />
									EIN 83-4404993
								</address>
							</div>
						</div>
					</div>
				</div>

				<div>
					<SELogo className={style.footerLogo} />
					<p className="copyright">
						© {new Date().getFullYear()}{" "}
						<a href="https://streetepistemologyinternational.org/">Street Epistemology International</a>
					</p>
				</div>

			</footer>

		</div>

	)

}

export default Layout
