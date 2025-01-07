import './Footer.css';

export const Footer = () => {
	return <div>
  <footer>
    <section className='footer'>
        <div className="container text-white">
          <div className="row p-5">
            <div className="col-lg-7 mb-5">
              <h4 className="mb-3" >TechManager Academy</h4>
              <p>Construa e Realize seus objetivos!</p>
            </div>
            <div className="col-lg-3 mb-5">
              <h5 className="mb-3">Redes Sociais</h5>
              <nav className='social-nav'>
                <a href="#"><i className='ri-instagram-line'></i></a>
                <a href="#"><i className='ri-facebook-box-line'></i></a>
                <a href="#"><i className='ri-twitter-x-line'></i></a>
              </nav>
            </div>
            <div className="col">
              <h5 className="mb-3">Acesse</h5>
              <ul className="nav flex-column sobrenos-ul" >
                <li className="nav-item mb-2"><a href="/">Home</a></li>
                <li className="nav-item mb-2"><a href="/sobre-nos">Sobre Nós</a></li>
                <li className="nav-item mb-2"><a href="/cursos">Cursos</a></li>
                <li className="nav-item mb-4"><a href="/contato">Contato</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container text-black m-auto p-5 pt-3 pb-0 bg-white">
          <div className="row p-3">
            <div className="col">
              <p>TechManager Academy © 2024</p>
            </div>
            <div className="col text-end politica-div">
              <a href="#" className="text-black">Política de Privacidade</a>
            </div>
          </div>
         </div>
      </section>
  </footer>
</div>;
};
