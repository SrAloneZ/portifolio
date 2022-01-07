import Head from 'next/head'
import React, { Fragment } from 'react'
import { Container } from 'react-bootstrap'

import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import AboutUS from '../components/AboutUs'
import Footer from '../components/Footer'
import Services from '../components/Services'
import Clients from '../components/Clients'
import ServicesUs from '../components/ServicesUs'
import Depoimentos from '../components/Depoimentos'

export default function Home(props) {
	return (
		<React.Fragment>
			<Head>
				<title>ReactJS with react-bootstrap</title>
				<link rel="icon" href="/favicon-32x32.png" />
			</Head>
			<div id="header">
				<div className="container">
					<Navbar />
				</div>
			</div>
			<Container fluid>
				<Slider />
				<AboutUS />
				<Services />
				<Clients />
				<ServicesUs {...props} />
				<Depoimentos {...props} />
			</Container>
			<Footer />
		</React.Fragment>
	)
}

export async function getStaticProps() {
	const res = await fetch('http://localhost:4000/api/testimonials.json')
	const posts = await res.json()
	/*return {
		props: {
			posts,
		},
	}*/
	const resProjects = await fetch('http://localhost:4000/api/projects.json')
	const projects = await resProjects.json()

	return {
		props: {
			posts,
			projects
		}
	}
}