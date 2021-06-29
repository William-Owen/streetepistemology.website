import React from 'react'
import Page from '../../components/Page'
import { graphql } from "gatsby"
import LearnPageTemplate from "../../components/LearnPageTemplate"

import * as style from './learn.module.sass'

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
				eq: "collaboration"
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
