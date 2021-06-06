import * as React from "react"
import PropTypes from "prop-types"
import clsx from "clsx"
import { Link } from "gatsby"
import * as style from "./Layout.module.sass"
import milkyWay from '../../images/src/images/milky-way-2695569_1280.jpg'
import SELogo from "../../images/street-epistemology-logo-simple-color.inline.svg"
import WOLogo from "../../images/wo_dev_transparent.svg"
import IconDiscord from "../../images/discord.inline.svg"
import IconFacebook from "../../images/facebook.inline.svg"
import IconReddit from "../../images/reddit.inline.svg"
import IconTwitter from "../../images/twitter.inline.svg"

const Layout = ({ children }) => {

	const rootClassName = clsx([

		style.Layout,
		"Layout",

	])

	return (

		<div className={rootClassName}>

			<header>

				<SELogo />

				<Link to="/">
					<h1>
						Street Epistemology
						<sub>Great conversations lead to better ideas</sub>
					</h1>
				</Link>

				<nav>

					<Link to="/">What is Street Epistemology</Link>
					<Link to="/learn">Learn</Link>
					<Link to="/faqs">FAQs</Link>
					<Link to="/resources">Resources</Link>
					<Link to="/shop">Shop</Link>
					<Link to="/blog">Blog</Link>
					<Link to="/course">Course</Link>

				</nav>

			</header>

			<main>{children}</main>

			<footer>

				<div className={style.linksAndCredit}>

					<nav>

						<h4>Content</h4>

						<Link to="/">What is Street Epistemology</Link>
						<Link to="/">Learn Street Epistemology</Link>
						<Link to="/faqs">Street Epistemology FAQs</Link>
						<Link to="/resources">Street Epistemology Resources</Link>
						<Link to="/shop">Merchandise Shop</Link>
						<Link to="/blog">News and articles</Link>
						<Link to="/course">Street Epistemology Courses</Link>

					</nav><nav>

						<h4>Social</h4>

						<a href="/">Street Epistemology Discord</a>
						<a href="/">Street Epistemology Facebook</a>
						<a href="/">Street Epistemology Reddit</a>
						<a href="/">Street Epistemology Twitter</a>

					</nav><nav>

						<h4>Website</h4>

						<Link to="/contact">Contact Street Epistemology International</Link>
						<Link to="/terms">Website Terms of Service</Link>
						<Link to="/privacy">Website Privacy Policy</Link>

					</nav>

					<div className={style.meta}>

						<nav>

							<a href="/"><IconDiscord alt="Discord" /></a>
							<a href="/"><IconFacebook alt="Facebook" /></a>
							<a href="/"><IconReddit alt="Reddit" /></a>
							<a href="/"><IconTwitter alt="Twitter" /></a>

						</nav>

						<div className={style.woCredit}>

							<WOLogo alt="wo.dev" />
							<p className={style.websiteCredit}>Website by<br /><a href="https://wo.dev">wo.dev</a></p>

						</div>

						<div className={style.sei}>

							<div>

								<h4>Street Epistemology International</h4>

								<p>A 501(c)(3) non-profit organisation.</p>

								<address>
									17503 La Cantera Parkway,<br />Suite 104-497,<br />San Antonio,<br />Texas 78257<br />EIN 83-4404993
								</address>

							</div>

						</div>

					</div>

				</div>

				<div>

					<SELogo className={style.footerLogo} />
					<p className="copyright">© {new Date().getFullYear()} <a href="https://streetepistemologyinternational.org/">Street Epistemology International</a></p>

				</div>

			</footer>

		</div>

	)

}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
