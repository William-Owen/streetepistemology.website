import * as React from "react"
import PropTypes from "prop-types"
import clsx from "clsx"
import { Link } from "gatsby"
import * as style from "./Layout.module.css"
import Logo from "../../images/SE-Logo-one-color-2021.inline.svg"

const Layout = ({ children }) => {

	const rootClassName = clsx([

		style.Layout,
		"Layout",

	])

	return (

		<div className={rootClassName}>

			<header>

				<Logo />

				<h1>
					<Link to="/">Street Epistemology</Link>
				</h1>

				<nav>

					<Link to="/">What is Street Epistemology</Link>
					<Link to="/faqs">FAQs</Link>
					<Link to="/resources">Resources</Link>
					<Link to="/shop">Shop</Link>
					<Link to="/blog">Blog</Link>
					<Link to="/course"><span className={style.CourseLink}>Street Epistemology Courses</span></Link>

				</nav>

			</header>

			<main>{children}</main>

			<footer>

				<nav>

					<Link to="/contact">Contact Us</Link>
					<Link to="/terms">Terms of Service</Link>
					<Link to="/privacy">Privacy Policy</Link>

				</nav>

				<a className={style.credit} href="https://wo.dev">Website by wo.dev</a>

				<div className="copyright">

					© {new Date().getFullYear()} <a href="https://streetepistemologyinternational.org/">Street Epistemology International</a>

				</div>

			</footer>

		</div>

	)

}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
