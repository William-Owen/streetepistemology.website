import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import { Link } from 'gatsby'
import imageEarth from '../images/earth.webp'
import HelpIcon from '../images/help.svg'
import * as style from './index.module.sass'
import SEO from '../components/seo.js'

const IndexPage = () => {
	const [messagesClassName, setMessagesClassName] = useState(
		style.creativeContainer
	)

	useEffect(() => {
		const timer = setTimeout(() => {
			doMessages()
		}, 500)
		return () => clearTimeout(timer)
	}, [])

	const rootClassName = clsx([style.pageHomepage, 'pageHomepage'])

	const doMessages = () => {
		setMessagesClassName(clsx([style.creativeContainer, style.show]))
	}

	return (
		<article className={rootClassName}>
			<SEO title='Home' />

			<div className={style.homepageBanner}>
				<div className={style.heroMessage}>
					<div>
						<h2 className='displayHeading4'>
							Helping others reflect on their ideas.
						</h2>
						<p>
							Ideas shape our world, but sometimes talking about
							them can be difficult. Street Epistemology is a
							productive non-confrontational way to help others
							explore and reflect on their ideas and beliefs. Free
							and open to everyone, learn the tools and start
							having great conversations.
						</p>
						<div className={style.cta}>
							<Link
								className={style.btnStartLearning}
								to='/learn'
							>
								Start learning
							</Link>
							<Link to='/faqs'>Find out more</Link>
						</div>
					</div>
				</div>
				<div
					style={{ backgroundImage: `url(${imageEarth})` }}
					className={messagesClassName}
				>
					<div>
						<p className={style.chatPersonA}>
							We landed on the moon in 1969
						</p>
						<p className={style.chatPersonB}>
							The moon landings were a NASA hoax
						</p>
					</div>
				</div>
			</div>
			<section className={style.support}>
				<div>
					<HelpIcon />
					<div>
						<h3>Feeling a little lost?</h3>
						<p>
							Having conversations that change your views can
							sometimes leave you feeling a little lost. We have
							collected a number of{' '}
							<Link to='\resources'>resources that may help</Link>
						</p>
					</div>
				</div>
			</section>
		</article>
	)
}

export default IndexPage
