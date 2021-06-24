import React from 'react'
import Page from '../../components/Page'
import PageHeader from '../../components/PageHeader'

const IndexPage = () => {
	return (
		<>
			<Page>
				<PageHeader
					sectionHeading='Street Epistemology Resources'
					heading='Interesting Book'
					subHeading={`Here is a collection of book that whilst necessary can certainly add some great background ideas often encountered within Street Epistemology`}
				/>
			</Page>
		</>
	)
}

export default IndexPage
