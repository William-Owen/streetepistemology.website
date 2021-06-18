import React from 'react'
import Page from '../../components/Page'
import PageHeader from '../../components/PageHeader'
import * as style from './communities.module.sass'

const IndexPage = () => {
	return (
		<>
			<Page className={style.communities}>
				<PageHeader heading='Street Epistemology Communities' />
				<p>
					Weather you have been, affected by Street Epistemology or
					are looking to learn more about its practice and ideas;
					there are a huge number of resources available to you.
				</p>
				<h2>Online</h2>
				<div>
					<div>
						<h2>Discord</h2>
						<p>
							Discord is a group chat application, and you are
							invited to join in the conversation!
						</p>
					</div>
					<div>
						<h2>Facebook</h2>
						<p></p>
					</div>
					<div>
						<h2>Reddit</h2>
					</div>
				</div>
				<h2>Real world</h2>
				<h2>YouTube</h2>
			</Page>
		</>
	)
}

export default IndexPage
