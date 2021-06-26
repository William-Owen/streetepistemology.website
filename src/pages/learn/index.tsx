import { graphql } from 'gatsby'
import React from 'react'
import Page from '../../components/Page'
import PageHeader from '../../components/PageHeader'
import * as style from './learn.module.sass'

const IndexPage = ({data}) => {

	const content = data.page.childMarkdownRemark.html
	const title = data.page.childMarkdownRemark.frontmatter.title

	return (

		<>
			<Page className={style.leanPage}>
				<PageHeader sectionHeading="Learn Street Epistemology" heading={title} />

				<div dangerouslySetInnerHTML={{ __html: content }} />

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
