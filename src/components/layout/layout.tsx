import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { Link, useStaticQuery, graphql } from 'gatsby'
import * as style from './Layout.module.sass'
import SELogo from '../../images/street-epistemology-logo-simple-color.inline.svg'
import WOLogo from '../../images/wo_dev_transparent.svg'
import IconDiscord from '../../images/discord.inline.svg'
import IconFacebook from '../../images/facebook.inline.svg'
import IconReddit from '../../images/reddit.inline.svg'
import IconTwitter from '../../images/twitter.inline.svg'
import IconMenu from '../../images/menu.inline.svg'

const Layout = ({ children }) => {
	const rootClassName = clsx([style.Layout, 'Layout'])
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const primaryNavigationRef = useRef()
	let headerClassName = ''

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
		<div className={rootClassName}>
			<header className={headerClassName}>
				<SELogo className={style.logo} />
				<Link className={style.siteTitle} to='/'>
					<h1>
						Street Epistemology
						<sub>Great conversations lead to better ideas</sub>
					</h1>
				</Link>
				<nav ref={primaryNavigationRef}>
					<Link onClick={handelMenuLinkClick} to='/learn'>
						Learn
					</Link>
					<Link onClick={handelMenuLinkClick} to='/resources'>
						Resources
					</Link>
					<Link onClick={handelMenuLinkClick} to='/communities'>
						Communities
					</Link>
					<Link onClick={handelMenuLinkClick} to='/faqs'>
						FAQs
					</Link>
				</nav>
				<IconMenu
					onClick={handelMenuClick}
					className={style.menuIcon}
				/>
			</header>
			{/*
			<nav className={style.primaryNavigation}>
				<nav>
					<h3>Learn</h3>
					<Link to='/learn'>
						Get started
						<div>
							Get an overview of the principles of Street
							Epistemology.
						</div>
					</Link>
					<Link to='/learn/rapport'>
						Learn about Rapport
						<div>
							Understand the importance remaining friendly, polite
							and respectful.
						</div>
					</Link>
					<Link to='/learn/collaborate'>
						Learn about Collaborate
						<div>
							Learn to work together and not be adversaries.
						</div>
					</Link>
					<Link to='/learn/listen'>
						Learn about Listening
						<div>
							Make sure that your conversation partner knows they
							are being heard.
						</div>
					</Link>
					<Link to='/learn/empathy'>
						Learn about Empathy
						<div>
							Consider the unique life experiences that have
							informed your conversation partners perspective.
						</div>
					</Link>
					<Link to='/learn/question'>
						Learn about Questioning
						<div>
							Asking questions is the key to encouraging your
							conversation partner to reflect.
						</div>
					</Link>
					<Link to='/learn/progress'>
						Learn about Progress
						<div>
							learn to understand your goals, and value progress
							even if its hard to see.
						</div>
					</Link>
				</nav>
				<nav>
					<h3>Resources</h3>
					<Link to='/resources/glossary'>Glossary</Link>
					<Link to='/resources/faqs'>Frequently Asked Questions</Link>
					<Link to='/resources/fallacies'>
						Common Logical Fallacies
					</Link>
					<Link to='/resources/youtube'>YouTube Channels</Link>
					<Link to='/resources/books'>Recommended Books</Link>
					<Link to='/resources/support'>
						Mental health and support
					</Link>
					<Link to='/resources/websites'>Useful Websites</Link>
				</nav>
				<nav>
					<h3>Communities</h3>
					<Link to='/resources/discord'>
						General community guidelines
					</Link>
					<Link to='/resources/discord'>
						Find about Discord Communities
					</Link>
					<Link to='/learn/facebook'>
						Find about Facebook Communities
					</Link>
					<Link to='/learn/reddit'>
						Find about Reddit Communities
					</Link>
				</nav>
			</nav>
			*/}

			<main>{children}</main>
			<footer>
				<div className={style.linksAndCredit}>
					<nav>
						<h4>Content</h4>

						<Link to='/learn'>Learn Street Epistemology</Link>
						<Link to='/resources'>
							Street Epistemology Resources
						</Link>
						<Link to='/faqs'>Street Epistemology FAQs</Link>
						<a href='https://www.evolvefish.com/Street-Epistemology_c_143.html'>
							Merchandise Shop
						</a>
					</nav>
					<nav>
						<h4>Social</h4>
						<a href={metaData.discordUrl}>
							Street Epistemology Discord
						</a>
						<a href={metaData.facebookUrl}>
							Street Epistemology Facebook
						</a>
						<a href={metaData.redditUrl}>
							Street Epistemology Reddit
						</a>
						<a href={metaData.twitterUrl}>
							Street Epistemology Twitter
						</a>
					</nav>
					<nav>
						<h4>Website</h4>
						<a href='mailto:contact@streetepistemology.com'>
							Contact Street Epistemology International
						</a>
						<Link to='/terms'>Website Terms of Service</Link>
						<Link to='/privacy'>Website Privacy Policy</Link>
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
							<WOLogo alt='wo.dev' />
							<p className={style.websiteCredit}>
								Website by
								<br />
								<a href='https://wo.dev'>wo.dev</a>
							</p>
						</div>
						<div className={style.sei}>
							<div>
								<h4>Street Epistemology International</h4>
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
					<p className='copyright'>
						© {new Date().getFullYear()}{' '}
						<a href='https://streetepistemologyinternational.org/'>
							Street Epistemology International
						</a>
					</p>
				</div>
			</footer>
		</div>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
