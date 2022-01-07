const Footer = () => {
  return (
    <footer id="contato">
      <div className="container">
        <div className="email">
          <img
            src="assets/paperplane.svg" />
          <h2
            className="title text-center">
            Fique por dentro das
            novidades</h2>
          <h4
            className="subtitle text-center mb-4">
            Et sumi kapa namur
            aondeai rocus pocus
            est talaraum
          </h4>
          <form>
            <div
              className="flex-md-grow-1 pr-md-3 pb-md-0 pb-3">
              <label
                htmlFor="email"
                className="sr-only">Password</label>
              <input
                type="email"
                className="form-control w-100"
                id="email_input"
                placeholder="seu email" />
            </div>
            <div
              className="flex-grow-1 flex-md-grow-0">
              <button
                type="submit"
                className="btn btn-light button mb-3 d-md-inline d-block w-100">
                cadastre-se
              </button>
            </div>
          </form>
        </div>
        <div className="logo py-4">
          <div className="row">
            <div
              className="col-md-6 align-self-center text-md-left text-center">

            </div>
            <div
              className="col-md-6 align-self-center text-right">
              <ul>
                <li>
                  <a
                    href="#"><img
                      src="assets/facebook.svg" /></a>
                </li>
                <li>
                  <a
                    href="#"><img
                      src="assets/twitter.svg" /></a>
                </li>
                <li>
                  <a
                    href="#"><img
                      src="assets/instagram.svg" /></a>
                </li>
                <li>
                  <a
                    href="#"><img
                      src="assets/linkedin.svg" /></a>
                </li>
                <li>
                  <a
                    href="#"><img
                      src="assets/youtube.svg" /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
