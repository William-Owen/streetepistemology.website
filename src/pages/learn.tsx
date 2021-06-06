import React from "react"
import Page from "../components/Page"
import * as style from "./learn.module.sass"
import IconCollaboration from "../images/colaboration.inline.svg"
import IconEmpathy from "../images/empathy.inline.svg"
import IconRapport from "../images/handshake.module.svg"

const IndexPage = () => {

	return (

		<>

			<Page className={style.leanPage}>

				<h1>Learn Street Epistemology</h1>

				<p>Street Epistemology is about having a conversations that help others honestly reflect on the ideas they hold. Specifically, to encourage them to reflect on their Epistemology; what they think they know and why they think they know it.</p>
				<p>There are many ways of having conversations that achieve this goal; but we would strongly recommend learning a number of core principles, and techniques. A good understanding of these principles will help you have great conversation that that lead to better ideas. </p>

				<h2>Basic principles</h2>

				<ol>

					<li><strong>Rapport:</strong> Remain friendly, polite and respectful. Take the time to make sure you conversation partner is comfortable check in regularly. </li>
					<li><strong>Collaborate:</strong> Conversations should not have winners and losers; you are working together to understand and reflect.</li>
					<li><strong>Listen:</strong> Pay close attention to what is said and make sure that your conversation partner knows they are being heard.</li>
					<li><strong>Empathy:</strong> Everyone comes to a conversation with different perspectives and expediences. Notice that you may not agree but that doesn't mean</li>
					<li><strong>Question:</strong> Ask don't tell; avoid the temptation to correct, explain or injecting your own perspective.</li>
					<li><strong>Progress:</strong> The goal should be to induce reflection, not win or convert. Don't push to 'close the deal' or allow the person you are speaking to the time to walk away and think about things in their own time. Remember that in the moment progress can look like failure</li>

				</ol>

				<section>

					<div>

						<IconRapport />

						<h2>How to build rapport</h2>

					</div>

				</section>

				<section>

					<IconCollaboration />

					<div>

						<h2>How to collaborate</h2>

					</div>

				</section>

				<h2>How to listen</h2>

				<section>

					<IconEmpathy />

					<div>

						<h2>The importance of Empathy</h2>

					</div>

				</section>

				<h2>How to question</h2>

				<h3>Useful questioning tools</h3>

				<h4>Shared truth, the Tick-Tac question</h4>

				<h4>Confidence checking</h4>

				<h4>Outsider testing</h4>

				<h2>Progress and ending the conversation</h2>

				<h2>Tools</h2>

				<h2>Tools</h2>

			</Page>

		</>

	)

}

export default IndexPage
