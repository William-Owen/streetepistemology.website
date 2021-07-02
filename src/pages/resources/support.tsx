import React from "react"
import Page from "../../components/Page"
import PageHeader from "../../components/PageHeader"

const IndexPage: React.FC = () => {

	return (
		<>

			<Page>

				<PageHeader
					sectionHeading='Street Epistemology Resources'
					heading='Mental health, support and information'
					subHeading={`Having conversations that change your views can sometimes leave people feeling a little lost. weather this is something that you are feeling or if you would just like to know some great resources that you can pass on to your conversations partners this section may help.`}/>

				<ul>

					<li>
						<a href='https://www.recoveringfromreligion.org/'>Recovering from Religion</a> (International)
						<p>An international non-profit organization that helps people who have left, or are in the process of leaving religion, or are dealing with problems arising out of theistic doubt or non-belief.</p>
					</li>
					<li><a href="https://secularstudents.org/">Secular Student Alliance</a> (US)
						<p>An American educational nonprofit organization whose purpose is to educate high school and college students about the value of scientific reason and the intellectual basis of secularism in its atheistic and humanistic manifestations</p>
					</li>
					<li><a href="https://exmuslims.org/">Ex-Muslims of North America</a> (US)
						<p>A Non-profit organization which describes itself as advocating for acceptance of religious dissent, promoting secular values, and aiming to reduce discrimination faced by those who leave Islam.</p>
					</li>
					<li><a href='https://www.samaritans.org/'>The Samaritans</a> (UK)
						<p>Samaritans is a registered charity aimed at providing emotional support to anyone in emotional distress, struggling to cope, or at risk of suicide throughout Great Britain and Ireland, often through their telephone helpline. Its name derives from the biblical Parable of the Good Samaritan although the organisation itself is non-religious.</p></li>
					<li>
						<a href='https://www.healthygamer.gg/'>Healthy Gamer</a> (International)
						<p>Healthy Gamer provides mental health support for the internet generation through coaching, content, and community.</p>
					</li>
					<li><a href="https://www.seculartherapy.org/">The Secular Therapy Project</a>
						<p>A Non-profit organization to help connect non-religious or secular persons who need mental health services with outstanding mental health professionals, such as psychologists, psychiatrists, counselors, clinical social workers and others.</p>
					</li>
					<li><a href="http://openmindsfoundation.org/">Open Minds Foundation</a> (International, based in US and UK)
						<p>a non-profit, charitable organization, established to raise awareness of and educate on the dangers of coercion and coercive control within our societies, reducing its impact, and in the long term, eliminating it altogether.</p></li>
					<li><a href="http://www.icsahome.com/">International Cultic Studies Association</a> (International, based in US)
						<p>A non-profit anti-cult organization focusing on groups it defines as "cultic" and their processes. It publishes the International Journal of Cultic Studies and other materials. </p>
					</li>
					<li><a href="http://www.infokatot.com/">Infokatot</a> (Israel)
						<p>The Israeli Center for Victims of Cults is a public benefit society that assists victims of cults and their families</p></li>
					<li><a href="http://www.cifs.org.au/">Cult Information and Family Support, Inc.</a> (Australia)
						<p>CIFS is an Australian support and information network. CIFS was initially formed by parents and family members of loved ones caught up in abusive groups.</p>
					</li>
					<li><a href="http://fecris.org/">European Federation of Centres of Research and Information on Cults and Sects</a> (Europe, based in France)
						<p>FECRIS – European Federation of Centres of Research and Information on Sectarianism, a French non-profit association and anti-cult organization, serves as an umbrella organization for groups which investigate the activities of groups considered cults in Europe.</p>
					</li>
					<li><a href="http://www.apologeticsindex.org/">Apologetics Index</a> (Holland, Internatinal)
						<p>The Apologetics Index (apologeticsindex.org) ‘family of web sites’ provides 47.912 pages of research resources on religious cults, sects, new religious movements, alternative religions, apologetics-, anticult-, and countercult organizations, doctrines, religious practices and world views.</p>
					</li>

				</ul>

			</Page>
		</>
	)

}

export default IndexPage
