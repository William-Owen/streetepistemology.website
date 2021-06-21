import React, { useState } from 'react'
import clsx from 'clsx'
import * as style from './PageHeader.module.sass'
import SEO from '../seo.js'

interface PageHeaderProps {
	heading: string
	sectionHeading?: string
	subHeading?: string
}

const PageHeader: React.FC<PageHeaderProps> = ({
	heading,
	subHeading,
	sectionHeading,
}) => {
	const classNames = clsx([style.PageHeader, 'PageHeader'])

	return (
		<>
			<SEO title={`${heading}`} />

			<header data-testid='PageHeader' className={classNames}>
				<h1 className='displayHeading5'>
					{sectionHeading && <span>{sectionHeading}: </span>}
					{heading}
				</h1>
				{subHeading && <p>{subHeading}</p>}
			</header>
		</>
	)
}

export default PageHeader
