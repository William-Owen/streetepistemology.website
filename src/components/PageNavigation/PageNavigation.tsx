import React from 'react'
import clsx from 'clsx'
import * as style from './PageNavigation.module.sass'

interface PageNavigationProps {
	className?: string
	children?: React.ReactNode
}

const PageNavigation: React.FC<PageNavigationProps> = ({
	children,
	className = '',
}) => {
	const classNames = clsx([className, style.PageNavigation, 'PageNavigation'])

	return (
		<nav data-testid='PageNavigation' className={classNames}>
			{children}
		</nav>
	)
}

export default PageNavigation
