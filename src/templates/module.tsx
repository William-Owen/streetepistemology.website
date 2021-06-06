import React from "react"
import Page from "../components/Page"
import { graphql, Link } from "gatsby"


const ModulePage = (props) => {

	const { markdownRemark: post } = props.data

	const {
		frontmatter,
		timeToRead,
		fields,
		html
	} = post

	const {
		lessonTitle
	} = frontmatter

	const {
		slug,
	} = fields

	return (

		<Page>

			<Page>

				<article>

					<h1>MODULE: {lessonTitle}</h1>

					<div className="article-meta">

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

export default ModulePage

export const pageQuery = graphql`

	query ModuleBySlug($slug: String!) {

		markdownRemark(

			fields: {

				slug: {
					eq: $slug
				},

			}){
				id
				html
				timeToRead
				frontmatter {
					moduleTitle
				}

			}

		}

`
