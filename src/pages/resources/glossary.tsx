import React, { useState } from "react"
import Page from "../../components/Page"
import clsx from "clsx"
import * as style from "./glossary.module.sass"
import PageHeader from "../../components/PageHeader"
import { graphql } from "gatsby"
import { highlightTerm, termInString } from "../../modules/searchTools"

const IndexPage: React.FC = ({ data }) => {

	const [filter, setFilter] = useState("")
	const allTerms = data.allMarkdownRemark.edges
	const handelInputChange = (e) => setFilter(e.target.value)
	const rootClassName: string = clsx([style.glossaryPage, "glossary-page"])
	const glossaryArray = []

	allTerms.forEach((termItem) => {

		const term = termItem.node.frontmatter.title
		const alsoSee = termItem.node.frontmatter.alsoSee
		const aka = termItem.node.frontmatter.aka
		const def = termItem.node.html
		const id = termItem.node.id
		glossaryArray.push({
			alsoSee,
			id,
			term,
			aka,
			def,
		})

	})

	const glossaryData = filter
		? glossaryArray.filter((item) => {

			// Search main term
			if (termInString(filter, item.term)) {

				return true

			}
			// Search AKA terms
			return item?.aka?.some((akaItem) =>
				termInString(filter, akaItem)
			)

		})
		: glossaryArray

	// Alphabetical sort by term

	glossaryData.sort((a, b) => {

		if (a.term > b.term) {

			return 1

		}
		if (a.term < b.term) {

			return -1

		}
		return 0

	})

	return (
		<Page className={rootClassName}>
			<PageHeader
				sectionHeading='Street Epistemology Resources'
				heading='Glossary of terms'
				subHeading='The purpose of this glossary is to provide short practical
				descriptions of names and terms frequently encountered in Street
				Epistemology groups, communities and discourse. It is not
				seeking to provide comprehensive, complete or definitive
				definitions. We hope you find it useful.'/>

			<div className={style.productFilter}>
				<label htmlFor='filter-text'>Find term</label>
				<input
					id='filter-text'
					name='filter-text'
					onChange={handelInputChange}
					placeholder='Enter your search here'
					type='text'/>
			</div>

			<main>
				<dl>
					{glossaryData.map((term) => (

						<div key={term.id} className={style.term}>

							<dt>
								{highlightTerm(filter, term.term, "termToHighlight")}
								{term.aka && (
									<ul>
										{term.aka.map((akaTerm) => (
											<li key={akaTerm}>
												{highlightTerm(filter, akaTerm, "termToHighlight")}
											</li>
										))}
									</ul>
								)}
							</dt>

							<dd>
								<div
									dangerouslySetInnerHTML={{
										__html: term.def,
									}}/>

								{term.alsoSee && (
									<div className={style.alsoSee}>
										<h4 className='h5'>Also see</h4>
										{term.alsoSee.map((reference) => (
											<div key={reference.linkText}>
												{reference.title && (
													<span>
														{reference.title}
													</span>
												)}
												<a href={reference.link}>
													{reference.linkText}
												</a>
											</div>
										))}
									</div>
								)}
							</dd>
						</div>
					))}
				</dl>
			</main>
		</Page>
	)

}

export default IndexPage

export const pageQuery = graphql`
	{
		allMarkdownRemark(
			filter: { fields: { source: { eq: "glossaryTerms" } } }
			sort: { order: ASC, fields: frontmatter___title }
		) {
			edges {
				node {
					id
					html
					frontmatter {
						title
						aka
						alsoSee {
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
