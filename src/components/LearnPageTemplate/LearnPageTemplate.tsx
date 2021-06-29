import React from "react"
import * as style from "./LearnPageTemplate.module.sass"
import NavigationLearn from "../navigationLearn"
import PageHeader from "../PageHeader"
import PageNavigation from "../PageNavigation"

interface LearnPageTemplateProps {
	title: string;
	content: string;
}

const LearnPageTemplate: React.FC<LearnPageTemplateProps> = ({ title, content }) => {

	return (
		<>

			<PageHeader sectionHeading="Learn Street Epistemology" heading={title} />

			<article>

				<PageNavigation>
					<NavigationLearn />
				</PageNavigation>

				<main dangerouslySetInnerHTML={{ __html: content }} />

			</article>

		</>

	)

}

export default LearnPageTemplate
