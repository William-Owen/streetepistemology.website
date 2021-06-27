import React from 'react'
import Page from '../../components/Page'
import PageHeader from '../../components/PageHeader'

const IndexPage = () => {
	return (
		<>
			<Page>
				<PageHeader
					sectionHeading='Street Epistemology Resources'
					heading='Podcasts'
					subHeading={`Podcasts are great ways to here some really interesting conversations while on the go. The following are podcasts that are often referenced within the Street Epistemology community.`}
				/>

				<ul>
					<li><a href="https://pod.link/1117153385">The Street Epistemology Podcast</a></li>
					<li><a href="https://youarenotsosmart.com/podcast/">You are not so smart</a></li>
					<li><a href="https://samharris.org/podcast/">Making Sense</a></li>
					<li><a href="https://www.theskepticsguide.org/podcasts">The Skeptics guide to the universe</a></li>
					<li><a href="https://colemanhughes.org/">Conversations with Coleman</a></li>

				</ul>

			</Page>
		</>
	)
}

export default IndexPage
