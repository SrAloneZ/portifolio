const Services = () => {
    return (
        <div id="servicos"
            className="block">
            <div className="container">
                <h2 className="title text-center">Nossos serviços</h2>
                <h4 className="subtitle text-center mb-4">Alguns dos nossos serviços</h4>
                <div className="row">
                    <div
                        className="col-lg-3 col-md-6 mb-lg-0 mb-4">
                        <a href="#"
                            className="destaque">
                            <div
                                className="img-container mb-3">
                                <img src="assets/destaque1.svg"
                                    className="img-fluid" />
                            </div>
                            <h5 className="text-uppercase">Otimização do mecanismo de pesquisa (SEO)</h5>
                            <p className="mb-0">
                                A prioridade do meu código é a organização e a semântica. Aliado às tags corretas, deixará seu site claro e acessível às ferramentas de busca
                            </p>
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-lg-0 mb-4">
                        <a href="#" className="destaque">
                            <div className="img-container mb-3">
                                <img src="assets/destaque2.svg" className="img-fluid" />
                            </div>
                            <h5 className="text-uppercase">Redes sociais</h5>
                            <p className="mb-0">
                                A geração de leads é essencial para o crescimento do negócio.
                                <br /><br />
                                A melhor estratégia de marketing para mídia social é definida por meio de seu mercado-alvo, indústria, objetivos e metas de curto prazo
                            </p>
                        </a>
                    </div>
                    <div
                        className="col-lg-3 col-md-6 mb-lg-0 mb-4">
                        <a href="#"
                            className="destaque">
                            <div
                                className="img-container mb-3">
                                <img src="assets/destaque4.svg"
                                    className="img-fluid" />
                            </div>
                            <h5 className="text-uppercase">Simplicidade também é uma boa coisa</h5>
                            <p className="mb-0">
                                Não é porque simplificamos a sua vida que não fazemos bem feito.
                                <br /><br />
                                Trabalhamos sempre com as tecnologias mais atualizadas do para te permitir ter maior desempenho.
                            </p>
                        </a>
                    </div>
                    <div
                        className="col-lg-3 col-md-6 mb-lg-0 mb-4">
                        <a href="#"
                            className="destaque">
                            <div
                                className="img-container mb-3">
                                <img src="https://leonardomagalhaes.com/wp-content/uploads/2020/02/whyus-home4.png"
                                    className="img-fluid" />
                            </div>
                            <h5 className="text-uppercase">Desenvolvimento Completo</h5>
                            <p className="mb-0">
                                Desenvimento completo de soluções web. APIs, REST APIs, web servers, bancos de dados relacionais e não relacionais. Além de uma visão negocial para os projetos efetuados.
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services