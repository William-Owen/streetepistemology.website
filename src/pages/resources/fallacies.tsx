import React from 'react'
import Page from '../../components/Page'
import PageHeader from '../../components/PageHeader'

const IndexPage = () => {
	return (
		<>
			<Page>
				<PageHeader
					sectionHeading='Street Epistemology Resources'
					heading='Common Logical Fallacies'
					subHeading={`Logical fallacies are mistakes in reasoning, that
					are sometimes hard to notice. Calling out the use of
					logical fallacies in discussions isn't always a
					helpful way to have a productive conversation, but
					they are very useful to notice none the less.`}
				/>
			</Page>
		</>
	)
}

export default IndexPage
