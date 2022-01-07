const ServicesUs = (props) => {
	var arrayTags = props.projects[0].tagsListFrontEnd.concat(props.projects[0].tagsListBackEnd);

	console.log(props.projectTagsFrontEnd)
	//console.log(" Result 1 : ", listItems(props.projects, 1, 2))
	//console.log(" Result 2 : ", listItems(props.projects, 2, 2))
	return (
		<div id="servicos" className="block">
			<div className="container">
				<h2 className="title text-center"> Serviços Recentes</h2>
				<h4 className="subtitle text-center mb-4"> Meu portfólio completo não está aqui!<br /> Apesar de eu eventualmente atender clientes finais, a maior parte dos meus trabalhos é realizado para agências que confiam no meu serviço. </h4>
				<div className="button-group d-flex justify-content-center">
					<button type="button" className="active" data-filter="*" id="btn-all"> Todos </button>
					{arrayTags.map((test) => (
						<button key={test} type="button" data-filter={('.' + test).toLowerCase()}>{test}</button>
					))}
				</div>
				<div className="row grid">
					{listItems(props.projects, 1, 24).map((test) => (
						<div key={test._id.toString()} className={'grid-sizer grid-item col-lg-3 mb-3 col-4 element-item ' + (((test.projectTagsBackEnd).toString()).replace(/\,/g, ' ')).toLowerCase() + " " + (((test.projectTagsFrontEnd).toString()).replace(/\,/g, ' ')).toLowerCase()}>
							<img src={test.picture} className="card-image img-fluid mb-2" />
							<div className="card-body">
								<div className="card-content--title mb-1">
									<h6 className="card-title">{test._id.toString()} - {test.projectName}</h6>
									<div className="app-icon">
										{test.isOpenSource === true ?
											<a href={test.githubProject}><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="app-icon--github">
												<path className="path" d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a>
											:
											<a href={test.businessURL}><img className="app-icon--github" width="20.8px" src={test.businessLogo}></img></a>}
									</div>
								</div>
								<p className="card-text mb-1 text-justify">{test.message}</p>
								<p className="card-subtitle mb-1 d-flex justify-content-center">{
									test.projectTagsFrontEnd.map(obj2 => (
										<span key={(test._id + obj2).toString()} className="badge m-1 p-2 badge-primary">{(obj2).toUpperCase()}</span>
									))
								}
									{
										test.projectTagsBackEnd.map(obj3 => (
											<span key={(test._id + obj3).toString()} className="badge m-1 p-2 badge-primary">{(obj3).toUpperCase()}</span>
										))
									}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

function listItems(items, pageActual, limitItems) {
	let result = [];
	let totalPage = Math.ceil(items.length / limitItems);
	let count = (pageActual * limitItems) - limitItems;
	let delimiter = count + limitItems;

	if (pageActual <= totalPage) {
		for (let i = count; i < delimiter; i++) {
			if (items[i] != null) {
				result.push(items[i]);
			}
			count++;
		}
	}

	return result;
};
export default ServicesUs