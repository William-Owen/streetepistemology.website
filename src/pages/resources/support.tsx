import React from 'react'
import Page from '../../components/Page'
import PageHeader from '../../components/PageHeader'

const IndexPage = () => {
	return (
		<>
			<Page>
				<PageHeader
					sectionHeading='Street Epistemology Resources'
					heading='Mental health and support'
					subHeading={`Having conversations that change your views can sometimes leave people feeling a little lost. weather this is something that you are feeling or if you would just like to know some great resources that you can pass on to your conversations partners this section may help.`}
				/>

				<ul>
					<li>
						<a href='https://www.recoveringfromreligion.org/'>
							Recovering from Religion
						</a>
					</li>
					<li><a href="https://exmuslims.org/join-us/">https://exmuslims.org</a></li>
					<li>
						<a href='https://www.samaritans.org/'>Samaritans</a>
					</li>
					<li>
						<a href='https://www.healthygamer.gg/'>Healthy Gamer</a>
					</li>
					<li><a href="https://www.seculartherapy.org/">https://www.seculartherapy.org/</a></li>
					<li><a href="http://openmindsfoundation.org/">Open Minds Foundation</a>  (International, based in US and UK)</li>
					<li><a href="http://www.icsahome.com/">International Cultic Studies Association</a>  (International, based in US)</li>
					<li><a href="http://www.infokatot.com/">Infokatot</a>  (Israel)</li>
					<li><a href="http://www.cifs.org.au/">Cult Information and Family Support, Inc.</a>  (Australia)</li>
					<li><a href="http://fecris.org/">European Federation of Centres of Research and Information on Cults and Sects</a>  (Europe, based in France)</li>
					<li><a href="http://infosect.freeshell.org/infocult/ic-home.html">Info-Secte</a>  (Canada)</li>
					<li><a href="http://www.fair-news.org/index.php">Family Action Information Resource</a>  (UK)</li>
					<li><a href="http://www.esama.ca/">Edmonton Society Against Mind Abuse</a>  (Canada)</li>
					<li><a href="http://antisybi.org/">Anti Sybi</a>  (Korea)</li>
					<li><a href="http://www.apologeticsindex.org/">Apologetics Index</a> (Holland, Christian)</li>

				</ul>
			</Page>
		</>
	)
}

export default IndexPage
