import { graphql } from 'gatsby'
import React from 'react'
import Page from '../../components/Page'
import PageHeader from '../../components/PageHeader'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import * as style from './youtube.module.sass'

const IndexPage = ({ data }) => {
	const allChannels = data.allMarkdownRemark.edges

	return (
		<>
			<Page>
				<PageHeader
					sectionHeading='Street Epistemology Resources'
					heading='See it on YouTube'
					subHeading='YouTube can be a great place to see Street Epistemology in action; and watch some fantastic people having amazing conversations.'
				/>
				{allChannels.map(
					(channel: {
						node: {
							frontmatter: {
								title: string
								channelImage: any
							}
							html: string
						}
					}) => {
						const image = getImage(
							channel.node.frontmatter.channelImage
						)

						return (
							<div className={style.youtubeChannel}>
								<div className={style.channelImage}>
									<GatsbyImage
										image={image}
										alt={channel.node.frontmatter.title}
									/>
								</div>
								<div className={style.meta}>
									<h3>{channel.node.frontmatter.title}</h3>
									<div
										dangerouslySetInnerHTML={{
											__html: channel.node.html,
										}}
									/>
								</div>
							</div>
						)
					}
				)}
			</Page>
		</>
	)
}

export const pageQuery = graphql`
	{
		allMarkdownRemark(
			filter: { fields: { source: { eq: "youtube-channels" } } }
			sort: { order: ASC, fields: frontmatter___title }
		) {
			edges {
				node {
					id
					html
					frontmatter {
						title
						channelImage {
							childImageSharp {
								gatsbyImageData(
									width: 200
									height: 200
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

export default IndexPage
