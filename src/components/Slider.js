import Link from "next/link"
import Image from "next/image"

const Slider = () => {
	return (
		<div id="slider" className="block">
			<div className="container-fluid pt-5">
				<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
					<div className="carousel-indicators">
						<li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
						<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
						<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
					</div>

					<div className="row pt-5 pb-5">
						<div className="col-2">
							<a className="carousel-control-prev" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
								<span className="carousel-control-prev-icon" aria-hidden="true"></span>
								<span className="sr-only">Previous</span>
							</a>
						</div>
						<div className="col-8">
							<div className="carousel-inner">
								<div className="carousel-item active">
									<div className="row">
										<div className="col-lg-6 col-md-6 align-self-center mb-md-0 mb-4">
											<h1>PRESENÇA DIGITAL</h1>
											<h4 className="mb-4">Para cada cliente, planejamos e projetamos uma presença mais forte na web, embasada nos conceitos da marca e na percepção de valor.</h4>
											<Link href='/'><a className="button btn btn-primary button-primary d-md-inline-block d-block mb-md-0 mb-2 mr-md-2">Saiba mais</a></Link>
											<Link href='/contact'><a className="button btn btn-outline-primary button-primary-outline d-md-inline-block d-block">Contato</a></Link>
										</div>
										<div className="col-lg-6 col-md-6 align-self-center text-center">
											<img src="https://leonardomagalhaes.com/wp-content/uploads/2021/01/web-design.png" className="img-fluid" />
										</div>
									</div>
								</div>
								<div className="carousel-item">
									<div className="row">
										<div className="col-lg-6 col-md-6 align-self-center text-center">
											<img src="https://leonardomagalhaes.com/wp-content/uploads/2021/01/SEO.png" className="img-fluid" />
										</div>
										<div className="col-lg-6 col-md-6 align-self-center mb-md-0 mb-4">
											<h1>SEO</h1>
											<h4 className="mb-4">Otimização para mecanismos de busca do seu site, deixando em melhores condições nas buscas orgânicas.</h4>
											<Link href='/'><a className="button btn btn-primary button-primary d-md-inline-block d-block mb-md-0 mb-2 mr-md-2">Saiba mais</a></Link>
											<Link href='/contact'><a className="button btn btn-outline-primary button-primary-outline d-md-inline-block d-block">Contato</a></Link>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-2">
							<a className="carousel-control-next" type="button" data-target="#carouselExampleIndicators" data-slide="next">
								<span className="carousel-control-next-icon" aria-hidden="true"></span>
								<span className="sr-only">Next</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div >
	)
}

export default Slider