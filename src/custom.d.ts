declare module '*.css' {
	interface IClassNames {
		[className: string]: string
	}
	const classNames: IClassNames
	export = classNames
}
declare module '*.sass' {
	interface IClassNames {
		[className: string]: string
	}
	const classNames: IClassNames
	export = classNames
}
declare module '*.svg' {
	const content: any
	export default content
}

declare module '*.webp' {
	const content: any
	export default content
}

declare module '*.png' {
	const content: any
	export default content
}
declare module '*.jpg' {
	const content: any
	export default content
}
