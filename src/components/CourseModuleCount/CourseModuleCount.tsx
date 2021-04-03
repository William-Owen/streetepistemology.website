import React from "react"
import clsx from "clsx"
import * as style from "./CourseModuleCount.module.css"
import Plural from "../Plural"

interface PageProps {

	moduleCount: number,
	className?: string

}

const CourseModuleCount: React.FC<PageProps> = ({ moduleCount, className }) => {

	const rootClassName = clsx([

		style.CourseModuleCount,
		"CourseModuleCount",
		className,

	])

	return (

		<div className={rootClassName}>

			<strong>{moduleCount}</strong> <Plural text="Module" pluralSuffix="s" num={moduleCount} />

		</div>

	)

}

export default CourseModuleCount
