import React from 'react'
import Page from '../../components/Page'
import PageHeader from '../../components/PageHeader'

const IndexPage = () => {
	return (
		<>
			<Page>
				<PageHeader
					sectionHeading='Street Epistemology Resources'
					heading='Mental health and support'
					subHeading={`Having conversations that change your views can sometimes leave people feeling a little lost. weather this is something that you are feeling or if you would just like to know some great resources that you can pass on to your conversations partners this section may help.`}
				/>

				<ul>
					<li>
						<a href='https://www.recoveringfromreligion.org/'>
							Recovering from Religion
						</a>
					</li>
					<li>
						<a href='https://www.samaritans.org/'>Samaritans</a>
					</li>
				</ul>
			</Page>
		</>
	)
}

export default IndexPage
