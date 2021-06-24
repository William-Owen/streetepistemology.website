import React from 'react'
import Page from '../../components/Page'
import PageHeader from '../../components/PageHeader'

const IndexPage = () => {
	return (
		<>
			<Page>
				<PageHeader
					sectionHeading='Street Epistemology Resources'
					heading='Useful Websites'
					subHeading={`There are a lot of amazing websites and resources
					that might be useful to our community and those
					interested in leaning more about the many topics
					encountered in and by Street Epistemology.`}
				/>
			</Page>
		</>
	)
}

export default IndexPage
