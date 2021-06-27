import React from 'react'
import Page from '../../components/Page'
import PageHeader from '../../components/PageHeader'

const IndexPage = () => {
	return (
		<>
			<Page>
				<PageHeader
					sectionHeading='Street Epistemology Resources'
					heading='Tools'
					subHeading={`Here are some useful tools and documents you might find useful.`}
				/>

				<ul>

					<li>
						<a href="https://se-survey.web.app/en">Street Epistemology Survey</a>
						<p>This survey serves as an outline for conversations in which everyone gains deeper insights into the principles underlying our beliefs.</p>
					</li>
					<li>
						<a href="https://drive.google.com/drive/folders/1_nK3-xW5fSVzBkAYEz7gXplVwQwlPfgS?fbclid=IwAR1eX19jb_Ay2-BXISZGZKUTeK8gLrKmWr5hx_kJOLM5XB_TkNSrSgV7258">Public Google Drive</a>
						<p>This read-only public drive contains a growing collection of Street Epistemology-related tools, slides, videos and more.</p>
					</li>
					<li>
						<a href="/downloads/The-Complete-Street-Epistemology-Guide-1st-Ed.pdf">The Complete Street Epistemology Guide 1st Ed.pdf</a>
						<p>Dated but still useful, this volunteer-created guide covers the basics of Street Epistemology.</p>
					</li>

				</ul>

			</Page>
		</>
	)
}

export default IndexPage
