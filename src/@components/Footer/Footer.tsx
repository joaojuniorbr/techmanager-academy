import './Footer.css';

export const Footer = () => {
	return <div>
<footer>
      <section style="background-color: #1A1B44;">
        <div class="container text-white">
          <div class="row p-5">
            <div class="col-7">
              <h4 class="mb-3" style="font-weight: 700;">TechAcademy</h4>
              <p>Bangun dan wujudkan cita bersama edufree</p>
            </div>
            <div class="col-3">
              <h5 class="mb-3">Redes Sociais</h5>
              <nav>
                <a href="#"><i class='ri-instagram-line'></i></a>
                <a href="#"><i class='ri-facebook-box-line'></i></a>
                <a href="#"><i class='ri-twitter-x-line'></i></a>
              </nav>
            </div>
            <div class="col">
              <h5 class="mb-3">Acesse</h5>
              <ul class="nav flex-column">
                <li class="nav-item mb-2"><a href="#" class="text-white" style="text-decoration: none;">Home</a></li>
                <li class="nav-item mb-2"><a href="#" class="text-white" style="text-decoration: none;">Sobre Nós</a></li>
                <li class="nav-item mb-2"><a href="#" class="text-white" style="text-decoration: none;">Cursos</a></li>
                <li class="nav-item mb-4"><a href="#" class="text-white" style="text-decoration: none;">Contato</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="container text-black m-auto p-5 pt-3 pb-0 bg-white">
          <div class="row p-3">
            <div class="col">
              <p>TechAcademy© 2024</p>
            </div>
            <div class="col text-end">
              <a href="#" class="text-black" style="text-decoration: none;">Política de Privacidade</a>
            </div>
          </div>
         </div>
      </section>
    </footer>
</div>;
};
