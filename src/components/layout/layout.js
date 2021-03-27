import * as React from "react"
import PropTypes from "prop-types"
import clsx from "clsx";
import { useStaticQuery, graphql } from "gatsby"
import * as style from "./Layout.module.css"
import { Link } from "gatsby"

const Layout = ({ children }) => {

	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`)

	const rootClassName = clsx([

		style.Layout,
		"Layout"

	])

	return (

		<div className={rootClassName}>

			<header>

				<h1>
					<Link to="/">Street Epistemology</Link>
				</h1>

				<nav>

					<Link to="/about">What is Street Epistemology</Link>
					<Link to="/videos">See it in action</Link>
					<Link to="/faqs">FAQs</Link>
					<Link to="/communities">Communities</Link>
					<Link to="/resources">Resources</Link>
					<Link to="/shop">Shop</Link>
					<Link to="/blog">Blog</Link>
					<Link to="/course"><span className={style.CourseLink}>Course</span></Link>

				</nav>

			</header>

			<main>{children}</main>

			<footer>

				<nav>

					<Link to="/contact">Contact Us</Link>
					<Link to="/terms">Terms of Service</Link>
					<Link to="/privacy">Privacy Policy</Link>

				</nav>

				<div className="copyright">
					© {new Date().getFullYear()}<br />
					<a href="https://streetepistemologyinternational.org/">Street Epistemology International</a>
				</div>

			</footer>

		</div>

	)

}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
