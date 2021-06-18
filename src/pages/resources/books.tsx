import React from 'react'
import Page from '../../components/Page'
import PageHeader from '../../components/PageHeader'
import * as style from './resources.module.sass'

const IndexPage = () => {
	return (
		<>
			<Page className={style.communities}>
				<PageHeader heading='Street Epistemology Books' />
				<p>tRUPH BOAMBBBS</p>
			</Page>
		</>
	)
}

export default IndexPage
