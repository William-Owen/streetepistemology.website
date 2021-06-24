import React from 'react'
import Page from '../../components/Page'
import PageHeader from '../../components/PageHeader'
import * as style from './learn.module.sass'

const IndexPage = () => {
	return (
		<>
			<Page className={style.leanPage}>
				<PageHeader
					sectionHeading='Learn Street Epistemology'
					heading='Listen'
				/>
			</Page>
		</>
	)
}

export default IndexPage
