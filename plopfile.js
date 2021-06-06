module.exports = function (plop) {

	// create your generators here

	const componentRoot = "src/components/"

	plop.setGenerator("Component", {
		description: "New project component",
		prompts: [

			{
				type: "input",
				name: "componentName",
				message: "Component name",
			},

		], // array of inquirer prompts
		actions: [

			{
				type: "add",
				path: `${componentRoot}{{componentName}}/{{componentName}}.tsx`,
				templateFile: "plop-templates/component/componentName.tsx.hbs",
			},

			{
				type: "add",
				path: `${componentRoot}{{componentName}}/{{componentName}}.module.sass`,
				templateFile: "plop-templates/component/componentName.sass.hbs",
			},
			{
				type: "add",
				path: `${componentRoot}{{componentName}}/index.tsx`,
				templateFile: "plop-templates/component/index.tsx.hbs",
			},

		], // array of actions
	})

}
