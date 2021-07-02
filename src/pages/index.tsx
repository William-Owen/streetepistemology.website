import React, { useState, useEffect } from "react"
import clsx from "clsx"
import { Link } from "gatsby"
import imageEarth from "../images/earth.webp"
import * as style from "./index.module.sass"
import SEO from "../components/seo"

const IndexPage: React.FC = () => {

	const [messagesClassName, setMessagesClassName] = useState(style.creativeContainer)
	const rootClassName = clsx([style.pageHomepage, "pageHomepage"])
	const doMessages = () => setMessagesClassName(clsx([style.creativeContainer, style.show]))
	const messages = [
		["The earth is flat.", "The earth is a globe."],
		["We landed on the moon in 1969.", "The moon landings are a NASA hoax."],
		// ["Global warming is a real concern.", "Global warming is a capitalist hoax!"],
		// ["The Earth is 6000 years old.", "The Earth is 4.5 billion years old!"],
	]

	useEffect(() => doMessages(), [])

	return (

		<article className={rootClassName}>

			<SEO title="Home" />

			<div className={style.homepageBanner}>
				<div className={style.heroMessage}>
					<div>
						<h2 className="displayHeading4">Helping others reflect on their ideas</h2>
						<p>
							Ideas shape our world, but sometimes talking about them can be difficult. Street Epistemology is a non-confrontational way to help others honestly explore and reflect on their ideas and beliefs.
						</p>
						<p>
							Free and open to everyone, learn the tools and start having great conversations.
						</p>
						<div className={style.cta}>
							<Link className={style.btnStartLearning} to="/learn">Start learning</Link>
							<Link to="/faqs">Find out more</Link>
						</div>
					</div>
				</div>

				<div style={{ backgroundImage: `url(${imageEarth})` }} className={messagesClassName}>
					<div>
						{messages.map((message, x) => (
							<span key={`${x}-1`}>
								<p style={{ transitionDelay: `${x * 1}s` }} className={style.chatPersonA}>
									{message[0]}
								</p>
								<p style={{ transitionDelay: `${x * 1 + 0.5}s` }} className={style.chatPersonB}>
									{message[1]}
								</p>
							</span>
						))}
					</div>
				</div>
			</div>

			<div className={style.minBanners}>
				<Link to="/resources/youtube" className={style.youTubeBanner}>
					<h4 className="displayHeading7">See Street Epistemology in action on YouTube</h4>
				</Link>
				<Link to="/resources/communities" className={style.communitiesBanner}>
					<h4 className="displayHeading7">Join the conversation in our communities</h4>
				</Link>
				<Link to="/resources/support" className={style.communitiesBanner}>
					<h4 className="displayHeading7">Mental health and support</h4>
				</Link>
			</div>

		</article>

	)

}

export default IndexPage
