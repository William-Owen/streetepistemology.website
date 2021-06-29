import React from "react"
import Page from "../../components/Page"
import PageHeader from "../../components/PageHeader"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as style from "./podcasts.module.sass"

interface IndexPageProps {

	data: {
		allMarkdownRemark: any
	}

}

const IndexPage: React.FC<IndexPageProps> = ({data}) => {

	const allPodcasts = data.allMarkdownRemark.edges


	return (
		<>
			<Page className={style.podcastPage}>

				<PageHeader
					className={style.podcastHeader}
					sectionHeading='Street Epistemology Resources'
					heading='Podcasts'
					subHeading={`Podcasts are great ways to here some really interesting conversations while on the go. The following are podcasts that are often referenced within the Street Epistemology community.`}/>

				<div className={style.podcastPageListing}>

					{allPodcasts.map(podcast=>{

						const { id } = podcast.node
						const { title, link } = podcast.node.frontmatter
						const image = getImage(podcast.node.frontmatter.artwork)

						return (
							<a href={link} key={id}>

								<GatsbyImage image={image} alt={title}/>

								<h3 className="h5">{title}</h3>

							</a>
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
			filter: { fields: { source: { eq: "podcasts" } } }
			sort: { order: ASC, fields: frontmatter___title }
		) {
			edges {
				node {
					id
					frontmatter {
						title
						link
						artwork {
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
