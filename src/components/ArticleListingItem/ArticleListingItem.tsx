import React from "react"
import clsx from 'clsx'
import * as style from "./ArticleListingItem.module.sass"
import { StaticImage } from "gatsby-plugin-image"

interface ArticleListingItemProps {

	children?: React.ReactNode,

}

const ArticleListingItem: React.FC<ArticleListingItemProps> = ({

	title,
	author,
	publishedDate,
	tags

}) => {

	return (

		<article className={style.blog}>

			<StaticImage aspectRatio={4/3} layout="fullWidth" className={style.mainImage} src="../images/blog/reflection.jpg" alt="A kitten" />

			<header>

				<h1>{title}</h1>
				<div className={style.author}>by {author}</div>
				<div className={style.meta}>
					<p>Published: {publishedDate}</p>
					{tags &&
						<ul className={style.tags}>
							{tags.map((tag)=><li>{tag}</li>)}
						</ul>
					}
				</div>

			</header>

		</article>

	)

}

export default ArticleListingItem;
