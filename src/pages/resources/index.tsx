import React from 'react'
import { Link } from 'gatsby'
import clsx from 'clsx'
import Page from '../../components/Page'
import PageNavigation from '../../components/PageNavigation'
import PageHeader from '../../components/PageHeader'
import * as style from './resources.module.sass'

const IndexPage = () => {
	const rootClassName = clsx([style.resourcesPage, 'resources-page'])

	return (
		<Page className={rootClassName}>
			<PageHeader heading='Resources' />

			<p>
				Weather you have been, affected by Street Epistemology or are
				looking to learn more about its practice and ideas; there are a
				huge number of resources available to you.
			</p>

			<main>
				<PageNavigation>
					<Link to='/resources/glossary'>
						<h5>Glossary</h5>
						<p>
							A collection of words, acronyms and phrases that you
							might encounter while exploring and practising
							Street Epistemology
						</p>
					</Link>
					{/* <Link to='/resources/fallacies'>
						<h5>Common Logical Fallacies</h5>
						<p>
							Logical fallacies are mistakes in reasoning, that
							are sometimes hard to notice. Calling out the use of
							logical fallacies in discussions isn't always a
							helpful way to have a productive conversation, but
							they are very useful to notice none the less.
						</p>
					</Link> */}
					{/* <Link to='/resources/youtube'>
						<h5>YouTube Channels</h5>
						<p>
							YouTube can be a great place to see Street
							Epistemology in action; and watch some fantastic
							people having amazing conversations.
						</p>
					</Link> */}
					{/* <Link to='/resources/books'>
						<h5>Recommended Books</h5>
						<p>
							Street Epistemology touch on a lot of different
							topics and ideas; and there are lot of books there
							that might be useful to read; and here some some
							that we might recommend or that are often refereed
							to within the communities.{' '}
						</p>
					</Link> */}
					{/* <Link to='/resources/support'>
						<h5>Mental health and support</h5>
						<p>
							Having conversations that change your views can
							sometimes leave people feeling a little lost.
							weather this is something that you are feeling or if
							you would just like to know some great resources
							that you can pass on to your conversations partners
							this section may help.
						</p>
					</Link> */}
					{/* <Link to='/resources/websites'>
						<h5>Websites</h5>
						<p>
							There are a lot of amazing websites and resources
							that might be useful to our community and those
							interested in leaning more about the many topics
							encountered in and by Street Epistemology.
						</p>
					</Link> */}
				</PageNavigation>

				{/* <ul>
					<li>
						<a href='https://rationalwiki.org'>
							https://rationalwiki.org
						</a>
					</li>
				</ul> */}
			</main>
		</Page>
	)
}

export default IndexPage
