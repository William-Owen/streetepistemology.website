module.exports = {

	siteMetadata: {
		title: `Street Epistemology`,
		description: `A Street Epistemology website to support the Street Epistemology community and related training courses and content.`,
		author: `William Owen (wo.dev)`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-image`,
		`gatsby-plugin-sass`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `course`,
				path: `${__dirname}/content/course`,
			},
		},
		`gatsby-transformer-yaml`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `faqs`,
				path: `${__dirname}/content/faqs`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `blog`,
				path: `${__dirname}/content/blog`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `authors`,
				path: `${__dirname}/content/authors`,
			},
		},
		{
			resolve: `gatsby-plugin-layout`,
			options: {
				component: require.resolve(`./src/components/layout/layout.tsx`),
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-react-svg`,
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				commonmark: true,
				footnotes: true,
				pedantic: true,
				gfm: true,
				plugins: [
					{

						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 950,
							linkImagesToOriginal: false,
							backgroundColor: "transparent",
						},

					},
				],

			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `street-epistemology`,
				short_name: `se`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/street-epistemology-logo-simple-color.inline.svg`, // This path is relative to the root of the site.
			},
		},
		`gatsby-plugin-gatsby-cloud`,
		`gatsby-plugin-graphql-config`,
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
}
