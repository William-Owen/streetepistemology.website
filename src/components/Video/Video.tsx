import React from "react"
import clsx from 'clsx'
import * as style from "./Video.module.sass"

interface VideoProps {
	videoID: string,
}

const Video:React.FC<VideoProps> = ({videoID}) => {

	const classNames = clsx([
		style.Video,
		"Video",
	])

	return (

		<div data-testid="Video" className={classNames}>

			<div className={style.videoWrapper}>

				<iframe width="560" height="315" src={`https://www.youtube-nocookie.com/embed/${videoID}?controls=1`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>

			</div>

		</div>

	)

}

export default Video;
