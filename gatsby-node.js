/* eslint-disable prefer-destructuring */
const path = require("path")

const { createFilePath } = require(`gatsby-source-filesystem`)

// const show = (label, obj) => console.info(label, JSON.stringify(obj, null, "\t"))

exports.onCreateNode = ({ node, actions, getNode }) => {

	const { createNodeField } = actions
	const parentNode = getNode(node.parent)

	// Set the flags for the course elements

	let isModuleRoot = false
	let isCourseRoot = false
	let isLesson = false
	let course = null
	let module = null
	let lesson = null

	if (parentNode?.relativePath && parentNode.sourceInstanceName === "course") {

		const pathDirArray = path.dirname(parentNode?.relativePath).split("/")

		isCourseRoot = (pathDirArray.length === 1)
		isModuleRoot = (pathDirArray.length === 3 && path.basename(parentNode?.relativePath) === "module.md")
		isLesson = (pathDirArray.length === 5)

		course = pathDirArray[0] // Course position in path
		module = pathDirArray[2] // Module position in path
		lesson = pathDirArray[4] // lesson position in path

	}

	if (node.internal.type === `MarkdownRemark`) {

		let slug = createFilePath({ node, getNode })

		slug = slug.replace("/introduction", "")

		createNodeField({
			name: `slug`,
			node,
			value: `/${parentNode.sourceInstanceName}${slug}`,
		})

		createNodeField({
			name: `source`,
			node,
			value: parentNode.sourceInstanceName,
		})

		createNodeField({
			name: `isCourseRoot`,
			node,
			value: isCourseRoot,
		})

		createNodeField({
			name: `isModuleRoot`,
			node,
			value: isModuleRoot,
		})

		createNodeField({
			name: `isLesson`,
			node,
			value: isLesson,
		})

		createNodeField({
			name: `course`,
			node,
			value: course,
		})

		createNodeField({
			name: `module`,
			node,
			value: module,
		})

		createNodeField({
			name: `lesson`,
			node,
			value: lesson,
		})

	}

}

exports.createPages = ({ actions, graphql }) => {

	const { createPage } = actions
	const articlesTemplate = path.resolve(`src/templates/blog.tsx`)
	const courseTemplate = path.resolve(`src/templates/course.tsx`)
	const lessonTemplate = path.resolve(`src/templates/lesson.tsx`)
	const moduleTemplate = path.resolve(`src/templates/module.tsx`)

	return graphql(`{

		allBlog: allMarkdownRemark(
			filter: {
				fields: {
					source: {eq: "blog"}
				}
			}
			sort: { fields: [frontmatter___publicationDate], order: DESC }
		) {
			edges {
				node {
					fields {
						slug
					}
				}
			}
		}
		allCourse: allMarkdownRemark(
			filter: {fields: {source: {eq: "course"}, isCourseRoot: {eq: true}}}
		) {
			edges {
				node {
					fields {
						slug
						course
					}
				}
			}
		}
		allModuleRoots: allMarkdownRemark(
			filter: {fields: {source: {eq: "course"}, isModuleRoot: {eq: true}}}
		) {
			edges {
				node {
					fields {
						slug
						course
					}
				}
			}
		}
		coursesModuleCollection: allMarkdownRemark(

			filter: {fields: {isModuleRoot: {eq: true}}}

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
		allLesson: allMarkdownRemark(
			filter: {fields: {source: {eq: "course"}, isLesson: {eq: true}}}
		) {
			edges {
				node {
					fields {
						slug
					}
				}
			}
		}
	}`).then((result) => {

		if (result.errors) {

			throw result.errors

		}

		const allBlogResults = result.data.allBlog.edges
		const allCourseResults = result.data.allCourse.edges
		const coursesModuleCollectionResults = result.data.coursesModuleCollection.group
		const allLessonResults = result.data.allLesson.edges
		const allModuleResults = result.data.allModuleRoots.edges

		// Create an object to represent the course with the
		// course name as the key

		let courseData = {}

		allCourseResults.forEach(({ node }) => {

			courseData = {
				...courseData,
				[node.fields.course]: {
					...node.fields,
					...node.frontmatter,
					html: node.html,
				},
			}

		})

		// Loop through the collection of all modules and
		// add the collection to the relevant course object

		coursesModuleCollectionResults.forEach((group) => {

			// Create and array of objects to represent each
			// course.

			const courseModules = group.edges.map(({ node }) => ({
				moduleTitle: node.frontmatter.moduleTitle,
				moduleNumber: node.frontmatter.moduleNumber,
				slug: node.fields.slug,
			}))

			// Find and append the new courseModules object
			// to the appropriate location in teh courseData
			// object.

			courseData = {
				...courseData,
				[group.fieldValue]: {
					...courseData[group.fieldValue],
					courseModuleCount: group.totalCount,
					courseModules,
				},
			}

		})

		// Create pages for each blog file.

		allBlogResults.forEach((post, index) => {

			const nextPost = index === allBlogResults.length - 1 ? null : allBlogResults[index + 1].node
			const previousPost = index === 0 ? null : allBlogResults[index - 1].node

			createPage({
				path: post.node.fields.slug,
				component: articlesTemplate,
				context: {
					slug: post.node.fields.slug,
					previousPost,
					nextPost,
				},
			})

		})

		// Create pages for each course.

		allCourseResults.forEach((post) => {

			const relatedModules = courseData[post.node.fields.course]

			createPage({
				path: post.node.fields.slug,
				component: courseTemplate,
				context: {
					slug: post.node.fields.slug,
					relatedModules,
				},
			})

		})

		// Create pages for each Module.

		allModuleResults.forEach((post, index) => {

			const nextPost = index === allModuleResults.length - 1 ? null : allModuleResults[index + 1].node
			const previousPost = index === 0 ? null : allModuleResults[index - 1].node

			createPage({
				path: post.node.fields.slug,
				component: moduleTemplate,
				context: {
					slug: post.node.fields.slug,
					previousPost,
					nextPost,
				},
			})

		})

		// Create pages for each lesson.

		allLessonResults.forEach((post, index) => {

			const nextPost = index === allLessonResults.length - 1 ? null : allLessonResults[index + 1].node
			const previousPost = index === 0 ? null : allLessonResults[index - 1].node

			createPage({
				path: post.node.fields.slug,
				component: lessonTemplate,
				context: {
					slug: post.node.fields.slug,
					previousPost,
					nextPost,
				},
			})

		})

		return true

	})

}
