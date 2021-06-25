import React from 'react'
import Page from '../../components/Page'
import PageHeader from '../../components/PageHeader'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import * as style from './books.modules.sass'

const IndexPage = ({ data }) => {
	const allBooks = data.allMarkdownRemark.edges

	return (
		<>
			<Page>
				<PageHeader
					sectionHeading='Street Epistemology Resources'
					heading='Interesting Books'
					subHeading={`Here is a collection of book that whilst necessary can certainly add some great background ideas often encountered within Street Epistemology`}
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
								<h3 className='h4'>
									{book.node.frontmatter.title}
								</h3>
								<p>
									{book.node.frontmatter.authors.map(
										(author) => (
											<span>{author}</span>
										)
									)}
								</p>
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
