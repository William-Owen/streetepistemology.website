import React from 'react'
import Page from '../../components/Page'
import PageHeader from '../../components/PageHeader'
import * as style from './learn.module.sass'

const IndexPage = () => {
	return (
		<>
			<Page className={style.leanPage}>
				<PageHeader heading='Learn Street Epistemology' />

				<h2>Introduction</h2>

				<p>
					Street Epistemology is about having a conversations that
					help others honestly reflect on the ideas they hold.
					Specifically, it is about encouraging reflection on their
					Epistemology; the reasons and methods they have used to
					arrive at knowledge.
				</p>
				<p>
					There are many ways of having conversations that achieve
					this goal; but we would strongly recommend learning a number
					of core principles, and techniques. Understanding of these
					principles will help you get started.{' '}
				</p>

				<h2>Basic principles</h2>

				<ol>
					<li>
						<strong>Rapport:</strong> Remain friendly, polite and
						respectful. Take the time to make sure you conversation
						partner is comfortable check in regularly.{' '}
					</li>
					<li>
						<strong>Collaborate:</strong> Conversations should not
						have winners and losers; you are working together to
						understand and reflect.
					</li>
					<li>
						<strong>Listen:</strong> Pay close attention to what is
						said and make sure that your conversation partner knows
						they are being heard.
					</li>
					<li>
						<strong>Empathy:</strong> Everyone comes to a
						conversation with different perspectives and
						expediences. Notice that you may not agree but that
						doesn't mean
					</li>
					<li>
						<strong>Question:</strong> Ask don't tell; avoid the
						temptation to correct, explain or injecting your own
						perspective.
					</li>
					<li>
						<strong>Progress:</strong> The goal should be to induce
						reflection, not win or convert. Don't push to 'close the
						deal' or allow the person you are speaking to the time
						to walk away and think about things in their own time.
						Remember that in the moment progress can look like
						failure
					</li>
				</ol>
			</Page>
		</>
	)
}

export default IndexPage
