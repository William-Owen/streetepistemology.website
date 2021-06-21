// const show = (label, obj) => console.info(label, JSON.stringify(obj, null, "\t"))

const path = require("path")

exports.onCreateNode = ({ node, actions, getNode }) => {

	const { createNodeField } = actions
	const parentNode = getNode(node.parent)

	if (node.internal.type === `MarkdownRemark`) {

		createNodeField({
			name: `source`,
			node,
			value: parentNode.sourceInstanceName,
		})

	}

}

exports.onCreatePage = async ({ actions }) => {

	const { createPage } = actions

	createPage({
		path: "/resources/glossary/:search",
		matchPath: "/resources/glossary/:search",
		component: path.resolve("./src/pages/resources/glossary.tsx"),
	})

}
