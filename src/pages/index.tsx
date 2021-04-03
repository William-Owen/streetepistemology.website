import React from "react"
import Page from "../components/Page"
import clsx from "clsx"
import Logo from "../images/SE-Logo-2021.inline.svg"
import * as style from "./index.module.css"
import whatIsSEHeroImage from "../images/photo-1507494924047-60b8ee826ca9.jpg";

const IndexPage = () => {

	const rootClassName = clsx([

		style.IndexPage,
		"index-page",

	])

	return (

		<article className={rootClassName}>

			<header>

				<div>

					<Logo />
					<h1>Street Epistemology</h1>
					<h2>Great <strong>conversations</strong> lead to better <strong>ideas</strong></h2>

				</div>

			</header>

			<section className={style.whatIsSE}>

				<Page>

					<h3><strong>No one wants to believe bad ideas,</strong><br /><em>...but we probably all do.</em></h3>

					<p>We all want to believe as many true things, and as few false things as possible. However, sometimes we find ourselves believing in things without ever really stopping to think about why.</p>

					<p><strong>Street Epistemology</strong> is in part based on the Socratic method, a dialogue between individuals, based on asking questions and stimulate critical thinking. Through a friendly, non-confrontational conversation, <strong>Street Epistemology</strong> helps people reflect on what they believe and importantly, why they believe it.</p>
					<p><strong>Street Epistemology</strong> is not about promoting any one belief over another, only reflecting on why we believe something. We hope it will help you believe as many true things, and as few false things as possible.</p>

				</Page>

				<div style={{backgroundImage: `url(${whatIsSEHeroImage})`}} className={style.heroImage} />

			</section>

			<section className={style.seeIt}>

				<h2>See Street Epistemology in action</h2>

				<div>

					<div className={style.seeItText}>

						<p>One of the best ways to learn the techniques used in Street Epistemology is to see them in action. The SE Latest Releases playlist is the best place to find new content and see how SE is progressing.</p>

					</div>

					<div className={style.seeItVideo}>

						<div className={style.videoWrapper}>

							<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/IXzCdauGc_8?controls=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>

						</div>

						<p>Video courtesy of Anthony Magnabosco</p>

					</div>

				</div>

			</section>

		</article>

	)

}

export default IndexPage
