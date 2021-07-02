import React from "react"
import Page from "../../components/Page"
import PageHeader from "../../components/PageHeader"
import PageNavigation from "../../components/PageNavigation"
import IconDiscord from "../../images/discord.inline.svg"
import IconFacebook from "../../images/facebook.inline.svg"
import IconReddit from "../../images/reddit.inline.svg"
import IconTwitter from "../../images/twitter.inline.svg"
import IconYouTube from "../../images/youtube.inline.svg"
import * as style from "./communities.module.sass"

const IndexPage: React.FC = () => {

	return (

		<Page className={style.communitiesPage}>

			<PageHeader sectionHeading='Street Epistemology' heading='Communities' />

			<article>

				<main>

					<h3>About our communities</h3>

					<p>One of the fantastic things about the Street Epistemology community is that it attracts a wide range of people from a diverse collection of backgrounds, cultures and philosophical perspectives. By adopting the principles of Street Epistemology, these communities allow for engaging, lively and productive conversations.</p>
					<p>The communities listed here are run independently by members of the global Street Epistemology community and are not affiliated with any organizations or specific individuals.</p>
					<p>The following guidelines are a suggestion for ensuring that everyone has a change to engage with the community in a productive and friendly way.</p>

					<ol>
						<li>Treat everyone and their views charitably and with kindness, especially if you don&apos;t like or agree with them.</li>
						<li>Assume good faith and good intentions, especially when people are perhaps expressing ideas for the first time.</li>
						<li>Remember, any interaction with someone might be seen, read or overheard by someone new to the community.</li>
						<li>If you find yourself getting angry, frustrated or irritated we strongly recommend that you take a break.</li>
						<li>No spam, continuous ranting, excessive self-promotion, provoking conflict, or overuse of mentions.</li>
						<li>No NSFW content, unless there are clearly designated areas for such content.</li>
						<li>Do not share any chat logs or recordings from within the community without explicit consent of everyone involved. Remember some people may be exploring positions that might put them in conflict with other communities.</li>
						<li>Follow the individual platforms terms of service and community guidelines.</li>
					</ol>

				</main>

				<PageNavigation className={style.navigation}>

					<a href="https://discord.gg/sKap3zM">
						<IconDiscord />
						<div>Street Epistemology on Discord</div>
					</a>

					<a href="https://www.facebook.com/StreetEpistemology">
						<IconFacebook />
						<div>
							Facebook: Street Epistemology
						</div>
					</a>

					<a href="https://www.facebook.com/groups/learnstreetepistemology/">
						<IconFacebook />
						<div>Facebook Group: Learn Street Epistemology</div>
					</a>

					<a href="https://www.facebook.com/groups/ChatWithAStreetEpistemologist/">
						<IconFacebook />
						<div>Facebook Group: Chat With A Street Epistemologist</div>
					</a>

					<a href="https://www.facebook.com/groups/CritiqueStreetEpistemology/">
						<IconFacebook />
						<div>Facebook Group: Critique Street Epistemology</div>
					</a>

					<a href="https://www.youtube.com/user/StreetEpistemologist/channels">
						<IconYouTube />
						<div>YouTube: Street Epistemologist</div>
					</a>

					<a href="https://twitter.com/StEpistemology">
						<IconTwitter />
						<div>Twitter: StEpistemology</div>
					</a>

					<a href="https://www.reddit.com/r/StreetEpistemology/">
						<IconReddit />
						<div>Reddit /r/StreetEpistemology</div>
					</a>

				</PageNavigation>

			</article>

		</Page>

	)

}

export default IndexPage
