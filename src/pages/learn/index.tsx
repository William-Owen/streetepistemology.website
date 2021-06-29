import { graphql } from "gatsby"
import React from "react"
import * as style from "./learn.module.sass"
import LearnPageTemplate from "../../components/LearnPageTemplate"
import Page from "../../components/Page"

const IndexPage = ({ data }) => {

	const content = data.page.childMarkdownRemark.html
	const { title } = data.page.childMarkdownRemark.frontmatter

	return (

		<>
			<Page className={style.leanPage}>
				<LearnPageTemplate title={title} content={content} />
			</Page>
		</>

	)

}

export default IndexPage

export const pageQuery = graphql`
	query {
		page: file(
			name: {
				eq: "start-learning"
			}
		) {
			childMarkdownRemark {
				html
				frontmatter {
					title
					order
				}
			}
		}
	}
`
