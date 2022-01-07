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

export default function Home() {
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
            <Container>
                <h1>SERVIÇOS</h1>
            </Container>
            <Footer />
        </React.Fragment>
    )
}
