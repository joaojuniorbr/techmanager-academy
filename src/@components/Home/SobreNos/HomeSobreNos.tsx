import './HomeSobreNos.css';

export const SobreNos = () => (
	<section className='container'>
		<h2>Conheça um pouco mais sobre a TechAcademy</h2>
		<div className='row'>
			<div className='col-md-4'>
				<div className='conteudo-info'>
					<div className='numero-conteudo'>1</div>
					<h5>Cursos Gratuitos</h5>
					<p>
						Disponibilizamos uma variedade de cursos gratuitos, projetados para
						capacitar líderes e profissionais na área de tecnologia, tornando o
						conhecimento acessível a todos.
					</p>
				</div>
			</div>
			<div className='col-md-4'>
				<div className='conteudo-info'>
					<div className='numero-conteudo'>2</div>
					<h5>Acesso Vitalício</h5>
					<p>
						Todos os cursos oferecidos podem ser acessados a qualquer momento,
						garantindo que você aprenda no seu ritmo, sem pressa e com
						tranquilidade.
					</p>
				</div>
			</div>
			<div className='col-md-4'>
				<div className='conteudo-info'>
					<div className='numero-conteudo'>3</div>
					<h5>Comunidade e Consultoria</h5>
					<p>
						Participe de grupos de discussão e mentorias exclusivas, onde você
						pode tirar dúvidas, compartilhar ideias e colaborar com outros
						profissionais da área.
					</p>
				</div>
			</div>
		</div>
	</section>
);
