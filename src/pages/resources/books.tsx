import React, { useState } from 'react'
import Page from '../../components/Page'
import PageHeader from '../../components/PageHeader'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import * as style from './books.module.sass'
import { highlightTerm, termInString } from "../../modules/searchTools"

const IndexPage = ({ data }) => {

	const [filter, setFilter] = useState('')
	const allBooks = data.allMarkdownRemark.edges
	const handelInputChange = (e) => setFilter(e.target.value)

	const booksFiltered = filter ? allBooks.filter((book) => {
		if (termInString(filter, book.node.frontmatter.title)) { return true }
		if (book.node.frontmatter.subTitle && termInString(filter, book.node.frontmatter.subTitle)) { return true }
		if (book?.node.frontmatter?.keywords.some( ( author ) => termInString(filter, author) )) { return true }
		return book?.node.frontmatter?.authors.some( ( author ) => termInString(filter, author) )

	})
	: allBooks

	return (
		<>
			<Page className={style.booksPage}>

				<PageHeader
					className={style.booksHeader}
					sectionHeading='Street Epistemology Resources'
					heading='Interesting Books'
					subHeading={`A collection of books often referenced or recommended within the Street Epistemology community. These books are on a wide range of subjects and a presented here as a reference. The views and opinions expressed in these books are not explicitly the views and options of the Street Epistemology community.`}
				/>

				<div className={style.bookSearch}>

					<label htmlFor='filter-text'>Find book</label>

					<input
						id='filter-text'
						name='filter-text'
						onChange={handelInputChange}
						placeholder='Titles and authors here'
						type='text'
					/>

				</div>

				<div className={style.bookListing}>

					{booksFiltered.map((book) => {

						const image = getImage(book.node.frontmatter.coverImage)
						const {title, subTitle, authors, goodReadLink, keywords} = book.node.frontmatter

						return (

							<div className={style.book}>

								<GatsbyImage
									image={image}
									alt={title}
								/>

								<h3 className='h5'>

									{title && highlightTerm(filter, title, 'termToHighlight')}
									{subTitle && <em>{highlightTerm(filter, subTitle, 'termToHighlight')}</em>}

								</h3>

								<div className={style.author}>by{` `}
									{authors.map(
										(author) => {
											return filter ?
												<span>{highlightTerm(filter, author, 'termToHighlight')}</span>
											:
											<span>{author}</span>
										}
									)}
								</div>

								<div className={style.keywords}>Keywords{` `}
									{keywords.map(
										(keyword) => {
											return filter ?
												<span>{highlightTerm(filter, keyword, 'termToHighlight')}</span>
											:
											<span>{keyword}</span>
										}
									)}
								</div>

								{goodReadLink && <a href={goodReadLink}>Find on GoodReads</a>}

							</div>

						)
					})}
				</div>
			</Page>
		</>
	)
}

export default IndexPage

export const pageQuery = graphql`
	{
		allMarkdownRemark(
			filter: { fields: { source: { eq: "books" } } }
			sort: { order: ASC, fields: frontmatter___title }
		) {
			edges {
				node {
					id
					html
					frontmatter {
						title
						subTitle
						authors
						goodReadLink
						keywords
						coverImage {
							childImageSharp {
								gatsbyImageData(
									width: 250
									placeholder: BLURRED
									formats: [AUTO, WEBP, AVIF]
								)
							}
						}
					}
				}
			}
		}
	}
`
