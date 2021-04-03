import React from "react"
import Page from "../components/Page"
import { graphql, Link } from "gatsby"


const IndexPage = (props) => {

	const { markdownRemark: post } = props.data

	const {
		frontmatter,
		timeToRead,
		parent,
		fields,
		html
	} = post

	const {
		title,
		author,
		publicationDate,
		abstract,
	} = frontmatter

	const {
		slug,
	} = fields

	return (

		<Page>

			<Page>

				<article>

					<h1>{title}</h1>

					<div className="article-meta">

						<div className="author">

							<strong>Written by:</strong>{author}

						</div>

						<div className="published">

							<strong>Published:</strong> {publicationDate}

						</div>

						<div className="time-to-read">

							<strong>Reading time:</strong> {timeToRead} min

						</div>

					</div>

					<main dangerouslySetInnerHTML={{ __html: html }} itemProp="articleBody" />

				</article>

			</Page>

		</Page>

	)

}

export default IndexPage

export const pageQuery = graphql`

	query ArticleBySlug($slug: String!) {

		markdownRemark(

			fields: {

				slug: {
					eq: $slug
				},

			}){
				id
				html
				wordCount {
					words
				}
				timeToRead
				fields {
					slug
				}
				parent {
					...on File {
						mtime(formatString: "MMMM Do YYYY")
					}
				}
				frontmatter {
					title
					publicationDate(formatString: "MMMM Do YYYY")
					abstract
				}

			}

		}

`
