import clsx from "clsx"
import { Link, graphql } from "gatsby"
import React from "react"
import PageNavigation from "../../components/PageNavigation"
import PageHeader from "../../components/PageHeader"
import * as style from "./faqs.module.sass"

const DisplayMoreInformationLink = ({ moreInfo }) => {

	const { type, link, linkText, title } = moreInfo

	if (type === "int") {

		return (
			<div>
				<p>{title}</p>
				<Link to={link}>{linkText}</Link>
			</div>
		)

	}
	return <a href={link}>{title}</a>

}

const DisplayFAQLink = ({ faq }) => {

	const { id } = faq.node
	const { title } = faq.node.frontmatter

	return <a href={`#${id}`}>{title}</a>

}

const DisplayFAQ = ({ faq }) => {

	const { id, html } = faq.node
	const { title, moreInformation } = faq.node.frontmatter

	return (

		<section id={id}>

			<h4>{title}</h4>

			<main dangerouslySetInnerHTML={{ __html: html }} />

			{moreInformation && (

				<aside className={style.moreInformation}>

					<h5>Also see</h5>
					{moreInformation.map((mi) => <DisplayMoreInformationLink key={mi.link} moreInfo={mi} />)}

				</aside>

			)}

			<a href='#top'>Back to questions</a>

		</section>

	)

}

const IndexPage: React.FC = ({ data }) => {

	const allFaqs = data.allMarkdownRemark.edges
	const rootClassName = clsx([style.faqsPage, "faqs-page"])

	return (
		<div className={rootClassName}>
			<PageHeader
				heading='Frequently Asked Questions'
				subHeading='These are the questions about Street Epistemology that we hear a the most within the community and our best attempts to answer them.'/>
			<main id="top">
				<PageNavigation className={style.PageNavigation}>
					<h3 className='h4'>Questions</h3>
					{allFaqs.map((faq) => (
						<DisplayFAQLink key={`${faq.id}-link`} faq={faq} />
					))}
				</PageNavigation>
				<div>
					{allFaqs.map((faq) => (
						<DisplayFAQ key={`${faq.id}-entry`} faq={faq} />
					))}
					<section className={style.didWeMissSomething}>
						<h4>Did we miss something?</h4>

						<p>
							If you have a great question you think we should add
							to our FAQ please let us know via{" "}
							<a href='/contact'>our Contact page</a>.
						</p>
					</section>
				</div>
			</main>
		</div>
	)

}

export const pageQuery = graphql`
	{
		allMarkdownRemark(
			filter: { fields: { source: { eq: "faqs" } } }
			sort: { order: ASC, fields: frontmatter___order }
		) {
			edges {
				node {
					id
					html
					frontmatter {
						title
						moreInformation {
							type
							title
							linkText
							link
						}
					}
				}
			}
		}
	}
`

export default IndexPage
