const Clients = () => {
	return (
		<div id="clientes" className="block">
			<div className="container">
				<div className="row">
					<div className="col-md-7 align-self-center">
						<h2 className="title text-center">Linguagens e tecnologias</h2>
						<h4 className="subtitle text-center mb-4">Sempre em busca de conhecimento, aqui estão as linguagens e tecnologias que eu tenho contato</h4>
						<div className="row">
							<div className="col-sm-4 col-6 mb-4">
								<a href="#" className="link-cliente">
									<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" className="img-fluid" />
								</a>
							</div>
							<div className="col-sm-4 col-6 mb-4">
								<a href="#" className="link-cliente">
									<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" className="img-fluid" />
								</a>
							</div>
							<div className="col-sm-4 col-6 mb-4">
								<a href="#" className="link-cliente">
									<img src="https://camo.githubusercontent.com/26a528f097ecb4f4b3987ad74cd3086870e930d85124c2a352dbde9e3cd14cb7/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6e6578746a732f6e6578746a732d6f726967696e616c2e737667" className="img-fluid" />
								</a>
							</div>
							<div className="col-sm-4 col-6 mb-4">
								<a href="#" className="link-cliente">
									<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" className="img-fluid" />
								</a>
							</div>
							<div className="col-sm-4 col-6 mb-4">
								<a href="#" className="link-cliente">
									<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg" className="img-fluid" />
								</a>
							</div>
							<div className="col-sm-4 col-6 mb-4">
								<a href="#" className="link-cliente">
									<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/lua/lua-original.svg" className="img-fluid" />
								</a>
							</div>
							<div className="col-sm-4 col-6 mb-4">
								<a href="#" className="link-cliente">
									<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" className="img-fluid" />
								</a>
							</div>
							<div className="col-sm-4 col-6 mb-4">
								<a href="#" className="link-cliente">
									<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" className="img-fluid" />
								</a>
							</div>
							<div className="col-sm-4 col-6 mb-4">
								<a href="#" className="link-cliente">
									<img src="https://camo.githubusercontent.com/964a169bbc7417bcf2b1ee0ddd2122d9592a50dee693f9421428bdd11d32c18e/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f626f6f7473747261702f626f6f7473747261702d706c61696e2e737667" className="img-fluid" />
								</a>
							</div>
						</div>
					</div>
					<div className="col-md-5 align-self-center">
						<div className="cliente-texto ml-5">
							<div className="imagem">
								<img src="assets/clientes-img.svg" />
								<div className="d-inline-block pl-md-0 pl-3">
									<span>10</span> Anos de Experiência
								</div>
							</div>
							<div className="telefone">
								<img src="assets/phone.svg" className="img-fluid" />
								<div className="d-inline-block pl-3">
									<span>(21) 97942-6848</span> Atendimento de segunda a sexta, das 7h as 18h
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Clients;
