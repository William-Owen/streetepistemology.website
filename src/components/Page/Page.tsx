import React from 'react'
import clsx from 'clsx'
import * as style from './Page.module.sass'

interface PageProps {
	children?: React.ReactNode
	className?: string
}

const Page: React.FC<PageProps> = ({ children, className }) => {
	const rootClassName = clsx([style.page, 'Page', className])

	return (
		<div data-testid='Page' className={rootClassName}>
			{children}
		</div>
	)
}

export default Page
