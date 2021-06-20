// const show = (label, obj) => console.info(label, JSON.stringify(obj, null, "\t"))

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
