import React from "react"
import Page from "../components/Page"
import { graphql, Link } from 'gatsby'

const IndexPage = (props) => {

	const { data } = props
	const posts = data.posts.edges

	return (

		<>

			<Page>

				<h1>Street Epistemology blog</h1>

				{posts.map(post=>{

					const {
						title,
						abstract,
						publicationDate,
					} = post.node.frontmatter

					const {
						slug
					} = post.node.fields

					return (

						<article>

							<Link to={slug}>

								<h2>{title}</h2>
								<time>{publicationDate}</time>
								<p>{abstract}</p>

							</Link>

						</article>

					)

				})}

			</Page>

		</>

	)

}

export const pageQuery = graphql`

	query {
		posts: allMarkdownRemark (
			filter: {
				fields: {
					source: {eq: "blog"}
				}
			}){
			edges {
				node {
					id
					fields {
						slug
					}
					frontmatter {
						title
						abstract
						publicationDate(formatString: "MMMM DD, YYYY")
					}
				}
			}
		}
	}

`

export default IndexPage
