import Link from "next/link"

const Navba = () => {
    return (
        <div id="header">
            <nav
                className="navbar navbar-expand-lg navbar-light justify-content-between"
            >
                <a className="navbar-brand" href="#">
                    <img src="assets/logo.svg" className="img-fluid" />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link href="/"><a className="nav-link active" >Página Inicial</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/about"><a className="nav-link" >Sobre</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/services"><a className="nav-link" >Serviços</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/portfolio"><a className="nav-link" >Portfólio</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/contact"><a className="nav-link" >Contato</a></Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navba