import React from 'react'
import NavigationLearn from '../../components/navigationLearn'
import Page from '../../components/Page'
import PageHeader from '../../components/PageHeader'
import PageNavigation from '../../components/PageNavigation'
import * as style from './learn.module.sass'
import { graphql } from 'gatsby'

const IndexPage = ({data}) => {

	const content = data.page.childMarkdownRemark.html
	const title = data.page.childMarkdownRemark.frontmatter.title

	return (

		<>
			<Page className={style.leanPage}>
				<PageHeader
					sectionHeading='Learn Street Epistemology'
					heading={title} />

				<article>

					<PageNavigation><NavigationLearn /></PageNavigation>

					<main dangerouslySetInnerHTML={{ __html: content }} />

				</article>
			</Page>
		</>
	)
}

export default IndexPage

export const pageQuery = graphql`
	query {
		page: file(
			name: {
				eq: "further-reading"
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
