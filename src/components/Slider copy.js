import Link from "next/link"
import Image from "next/image"

const Slider = () => {
	return (
		<div id="slider"
			className="block">
			<div className="container pt-5">
				<div className="row">
					<div className="col-lg-4 col-md-6 align-self-center mb-md-0 mb-4">
						<h1>Lorem Ipsun Dolor aondeai</h1>
						<h4 className="mb-4">Et Sumi kapa namur aondeai rocus pocus</h4>
						<Link href='/'><a className="button btn btn-primary button-primary d-md-inline-block d-block mb-md-0 mb-2 mr-md-2">Saiba mais</a></Link>
						<Link href='/contact'><a className="button btn btn-outline-primary button-primary-outline d-md-inline-block d-block">Contato</a></Link>
					</div>
					<div className="col-lg-8 col-md-6 align-self-center text-center">
						<img src="assets/slider.svg" className="img-fluid" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Slider