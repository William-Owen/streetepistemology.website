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
					className={style.booksHeader}
					sectionHeading='Street Epistemology Resources'
					heading='Interesting Books'
					subHeading={`A collection of books often referenced or recommended within the Street Epistemology community. These books are on a wide range of subjects and a presented here as a reference. The views and opinions expressed in these books are not explicitly the views and options of the Street Epistemology community.`}
				/>
				<div className={style.bookListing}>
					{allBooks.map((book) => {
						const image = getImage(book.node.frontmatter.coverImage)
						const {title, subTitle, authors, goodReadLink} = book.node.frontmatter

						return (
							<div className={style.book}>
								<GatsbyImage
									image={image}
									alt={title}
								/>
								<h3 className='h5'>
									{title}
									{subTitle && <em>{subTitle}</em>}
								</h3>
								<div className={style.authors}>by{` `}
									{authors.map(
										(author) => (
											<span>{author}</span>
										)
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
