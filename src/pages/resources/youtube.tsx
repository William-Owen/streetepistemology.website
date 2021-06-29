/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react"
import { graphql } from "gatsby"
import Page from "../../components/Page"
import PageHeader from "../../components/PageHeader"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import YouTubeIcon from "../../images/youtube.inline.svg"
import * as style from "./youtube.module.sass"

const IndexPage: React.FC = ({ data }) => {

	const allChannels = data.allMarkdownRemark.edges

	return (
		<>
			<Page className={style.youTubePage}>
				<PageHeader
					className={style.YouTubeHeader}
					sectionHeading='Street Epistemology Resources'
					heading='See it on YouTube'
					subHeading='YouTube can be a great place to see Street Epistemology in action; and watch some fantastic people having amazing conversations.'/>

				<div className={style.channelListing}>
					{allChannels.map(
						(channel: {
							node: {
								frontmatter: {
									title: string
									channelUrl: string
									channelImage: any
									shortDescription: string
								}
								id: string
								html: string
							}
						}) => {

							const image = getImage(
								channel.node.frontmatter.channelImage
							)

							return (
								<div key={channel.node.id} className={style.youtubeChannel}>

									<header>
										<div className={style.channelImage}>
											<GatsbyImage image={image} alt={channel.node.frontmatter.title} />
										</div>
										<h3 className='h5'>{channel.node.frontmatter.title}</h3>
									</header>

									<div className={style.meta}>
										<p>{channel.node.frontmatter.shortDescription}</p>
										<a className={style.channelLink} href={ channel.node.frontmatter.channelUrl}>
											<YouTubeIcon />
											Visit the channel
										</a>
									</div>

								</div>
							)

						}
					)}
				</div>
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
						channelUrl
						shortDescription
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
