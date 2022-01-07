function Depoimentos(props) {
	return (
		<div id="depoimentos" className="mb-5">
			<div className="container">
				<h2 className="title text-center"> Depoimentos</h2>
				<h4 className="subtitle text-center mb-4">Já atendemos alguns clientes na nossa história, e eles querem falar com você</h4>
				<div className="owl-carousel owl-theme owl-loaded">
					{props.posts.map((test) => (
						<div key={test._id} className="depoimento">
							<img className="rounded-circle img-depoimento" src={test.image} />
							<div className="depoimento-texto pl-3">
								<p style={{ "white-space": "pre-line" }}> {test.message} </p>
								<p className="name">
									<span>{test.name}</span>
									<br />
									{test.responsabilidade} | {test.company}
								</p>
								<p className="mb-0">
									<img src="assets/quote.svg" className="quote float-right" />
								</p>
							</div>
						</div>

					))}
				</div>
			</div>
		</div>
	);
};
export default Depoimentos;