import React from 'react'
import Page from '../../components/Page'
import PageHeader from '../../components/PageHeader'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import * as style from './books.module.sass'

const IndexPage = ({ data }) => {
	const allBooks = data.allMarkdownRemark.edges

	return (
		<>
			<Page className={style.booksPage}>
				<PageHeader
					sectionHeading='Street Epistemology Resources'
					heading='Interesting Books'
					subHeading={`A collection of great books that are often referenced or recommended within the Street Epistemology.`}
				/>

				<div className={style.bookListing}>
					{allBooks.map((book) => {
						const image = getImage(book.node.frontmatter.coverImage)

						return (
							<div className={style.books}>
								<GatsbyImage
									image={image}
									alt={book.node.frontmatter.title}
								/>
								<h3 className='h5'>
									{book.node.frontmatter.title}
									{book.node.frontmatter.subTitle && <em>{book.node.frontmatter.subTitle}</em>}
								</h3>
								<div className={style.authors}>by{` `}
									{book.node.frontmatter.authors.map(
										(author) => (
											<span>{author}</span>
										)
									)}
								</div>
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
