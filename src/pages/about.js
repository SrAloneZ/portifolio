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
        <h1>SOBRE</h1>
        <p className="text-justify">
          Eu sou uma desenvolvedora front-end (e ocasionalmente back-end) especializada na construção e design de experiências digitais. Atualmente, eu estou em busca de uma oportunidade no mercado de trabalho.
          Olá!
          <br />
          Meu nome é Ricardo, carioca com 21 anos, estudante de Administração Empresarial pela Faculdade Estácio de Sá e sou altamente motivado à me tornar Desenvolvedor Full Stack, apaixonado por tecnologia, desenvolvo pequenos projetos desde os 14 anos de idade.
          <br /><br />
          Estou sempre procurando coisas novas para aprender, tendo o Google como meu professor e o editor de código como meu caderno. Desenvolvimento faz parte da minha vida, explorando tecnologias e novas técnicas, desenvolvendo aplicativos interessantes. Qualquer coisa que possa me ajudar a expandir meus conhecimentos é sempre bem-vinda.
          <br /><br />
          Este portfólio foi desenvolvido por mim do zero com base em tecnologias front-end, incluindo JavaScript, HTML5 e CSS3.
          Espero que você goste :)
          <br /><br />
          Você você logo,
          Ricardo!
        </p>
      </Container>
      <Footer />
    </React.Fragment>
  )
}
