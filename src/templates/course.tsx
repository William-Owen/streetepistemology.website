import React from "react"
import Page from "../components/Page"
import { graphql, Link } from "gatsby"
import * as style from "./course.module.css"
import clsx from "clsx"
import CourseModuleCount from "../components/CourseModuleCount/CourseModuleCount"

const IndexPage = (props) => {

	const { markdownRemark: post } = props.data
	const { relatedModules, slug } = props.pageContext
	const { courseModuleCount, courseModules } = relatedModules

	const {
		frontmatter,
		html
	} = post

	const {
		courseTitle
	} = frontmatter


	const rootClassName = clsx([

		style.courseTemplatePage,
		"course-template-page",

	])

	return (

		<div className={rootClassName}>

			<header>

				<h1>

					<span>Street Epistemology Course</span>
					{courseTitle}

				</h1>

			</header>

			<div className={style.courseFrame}>

				<aside>

					<CourseModuleCount moduleCount={courseModuleCount} />

					<div className={style.description} dangerouslySetInnerHTML={{ __html: html }} itemProp="articleBody" />

					<nav>

						{courseModules && courseModules.map((module)=>{

							return (

								<Link to={module.slug}>{module.moduleTitle}</Link>

							)

						})}

					</nav>

				</aside>

				<main className={style.lessonView}>

					<h1>
						<span>Module 7 Building and Maintaining Rapport</span>
						Lesson 4: Building Rapport
					</h1>

				</main>

			</div>

		</div>

	)

}

export default IndexPage

export const pageQuery = graphql`

	query CourseBySlug($slug: String!) {

		markdownRemark(

			fields: {

				slug: {
					eq: $slug
				},

			}

		){

			id
			html
			fields {
				course
			}
			frontmatter {
				courseTitle
			}

		}

	}

`
