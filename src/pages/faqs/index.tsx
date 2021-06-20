import clsx from 'clsx'
import { Link, graphql } from 'gatsby'
import React from 'react'
import Page from '../../components/Page'
import PageNavigation from '../../components/PageNavigation'
import PageHeader from '../../components/PageHeader'
import * as style from './faqs.module.sass'

const DisplayMoreInformationLink = ({ moreInfo }) => {
	const { type, link, linkText, title } = moreInfo

	if (type === 'int') {
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
			<h3>{title}</h3>

			<main dangerouslySetInnerHTML={{ __html: html }} />

			{moreInformation && (
				<aside className={style.moreInformation}>
					<h4>Also see</h4>

					{moreInformation.map((mi) => (
						<DisplayMoreInformationLink moreInfo={mi} />
					))}
				</aside>
			)}
		</section>
	)
}

const IndexPage = ({ data }) => {
	const allFaqs = data.allMarkdownRemark.edges
	const rootClassName = clsx([style.faqsPage, 'faqs-page'])

	return (
		<div className={rootClassName}>
			<PageHeader
				heading='Frequently Asked Questions'
				subHeading='These are the questions about Street Epistemology that we hear a the most within the community and our best attempts to answer them.'
			/>
			<main>
				<PageNavigation className={style.PageNavigation}>
					{allFaqs.map((faq) => (
						<DisplayFAQLink faq={faq} />
					))}
				</PageNavigation>
				<div>
					{allFaqs.map((faq) => (
						<DisplayFAQ faq={faq} />
					))}
					<section className={style.didWeMissSomething}>
						<h4>Did we miss something?</h4>

						<p>
							If you have a great question you think we should add
							to our FAQ please let us know via{' '}
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
