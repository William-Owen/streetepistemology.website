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

				<ul>
					<li>
						<a href='https://plato.stanford.edu/'>
							Stanford Encyclopedia of Philosophy
						</a>
					</li>
					<li>
						<a href='https://iep.utm.edu/'>
							The Internet Encyclopedia of Philosophy (IEP)
						</a>
					</li>
					<li>
						<a href='https://www.f.com/'>Early Modern Texts</a>
					</li>
					<li>
						<a href='https://rationalwiki.org/'>Rational Wiki</a>
					</li>
					<li>
						<a href='http://www.socraticmethod.net/'>
							Socratic Method Research Portal
						</a>
					</li>
					<li>
						<a href='https://motivationalinterviewing.org/mi-guidance-documents'>
							Motivational Interviewing
						</a>
					</li>
				</ul>
			</Page>
		</>
	)
}

export default IndexPage
