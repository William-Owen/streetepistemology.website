import React from 'react'
import Page from '../../components/Page'
import { Link, graphql } from 'gatsby'
import * as style from './course.module.css'
import clsx from 'clsx'
import CourseModuleCount from '../../components/CourseModuleCount/CourseModuleCount'

const IndexPage = (props) => {
	const { data } = props
	let courses = {}

	data.courses.edges.forEach(({ node }) => {
		courses = {
			...courses,
			[node.fields.course]: {
				...node.fields,
				...node.frontmatter,
				html: node.html,
			},
		}
	})

	data.coursesModuleCollection.group.forEach((group) => {
		const moduleCollection = group.edges.map(({ node }) => ({
			moduleTitle: node.frontmatter.moduleTitle,
			moduleNumber: node.frontmatter.moduleNumber,
		}))

		courses = {
			...courses,
			[group.fieldValue]: {
				...courses[group.fieldValue],
				moduleCount: group.totalCount,
				moduleCollection,
			},
		}
	})

	const rootClassName = clsx([style.coursesPage, 'courses-page'])

	return (
		<div className={rootClassName}>
			<Page className={style.courseIntroduction}>
				<h1>Street Epistemology courses</h1>

				<p>
					The Street Epistemology courses are designed to help people
					to learn Street Epistemology at their own pace. We have an
					incredibly talented and dedicated project team eager to
					build something profound for others.
				</p>
			</Page>

			<section className={style.courses}>
				<h2>Our courses</h2>

				<div className={style.courseListing}>
					{Object.keys(courses).map((courseKey) => {
						const course = courses[courseKey]
						const {
							html,
							courseTitle,
							slug,
							moduleCount,
							moduleCollection,
						} = course

						return (
							<>
								{moduleCollection ? (
									<Link className={style.course} to={slug}>
										<header>
											<h3>{courseTitle}</h3>
										</header>

										{moduleCollection && (
											<CourseModuleCount
												moduleCount={moduleCount}
											/>
										)}

										<main
											dangerouslySetInnerHTML={{
												__html: html,
											}}
											itemProp='articleBody'
										/>
									</Link>
								) : (
									<div className={style.course}>
										<header>
											<h3>{courseTitle}</h3>
										</header>

										<main
											dangerouslySetInnerHTML={{
												__html: html,
											}}
											itemProp='articleBody'
										/>
									</div>
								)}
							</>
						)
					})}
				</div>
			</section>
		</div>
	)
}

export default IndexPage

export const pageQuery = graphql`
	{
		courses: allMarkdownRemark(
			filter: {
				fields: { source: { eq: "course" }, isCourseRoot: { eq: true } }
			}
			sort: { order: ASC, fields: frontmatter___order }
		) {
			edges {
				node {
					fields {
						course
						slug
					}
					frontmatter {
						courseTitle
						order
					}
					html
				}
			}
		}
		coursesModuleCollection: allMarkdownRemark(
			filter: { fields: { isModuleRoot: { eq: true } } }
		) {
			group(field: fields___course) {
				totalCount
				fieldValue
				edges {
					node {
						fields {
							course
							slug
						}
						frontmatter {
							moduleTitle
							moduleNumber
							order
						}
					}
				}
			}
		}
	}
`
