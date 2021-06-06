import React from "react"
import Page from "../components/Page"
import { Link } from "gatsby"
import PageNavigation from "../components/PageNavigation"
import * as style from "./resources.module.sass"
import clsx from "clsx"

const IndexPage = () => {

	const rootClassName = clsx([

		style.resourcesPage,
		"resources-page",

	])

	return (

		<div className={rootClassName}>

			<h1>Street Epistemology resources</h1>

			<main>

				<PageNavigation className={style.PageNavigation}>

					<Link to="\">The history of Street Epistemology</Link>
					<Link to="\">Glossary</Link>
					<Link to="\">Common Logical Fallacies</Link>
					<Link to="\">Street Epistemology Communities</Link>
					<Link to="\">Recommended Books</Link>
					<Link to="\">Mental health and phycological support</Link>

				</PageNavigation>

				<Page className={style.Page}>

					<p>Weather you have been, affected by Street Epistemology or are looking to learn more about its practice and ideas; there are a huge number of resources available to you.</p>

				</Page>

			</main>

		</div>

	)

}

export default IndexPage
