import './Hero.css';

export const Hero = () => (
	<section className='home-hero'>
		<div className='container'>
			<div className='row align-items-center'>
				<div className='col-xxl-5 col-xl-6 col-lg-7'>
					<article>
						<h2>Construa e Realize Seus Objetivos com o TechManager Academy</h2>

						<p>
							O TechManager Academy é uma plataforma de cursos e treinamentos
							online gratuitos, projetada para capacitar líderes e gestores a
							alcançarem o sucesso no setor de tecnologia.
						</p>
					</article>

					<nav className='row'>
						<div className='col-6 col-md-auto col-lg-6'>
							<a href='/cursos' className='button-default'>
								Ver Cursos
							</a>
						</div>
						<div className='col-6 col-md-auto col-lg-6'>
							<a href='/sobre-nos' className='button-default transparent'>
								Saiba Mais
								<i className='ri-arrow-right-line'></i>
							</a>
						</div>
					</nav>
				</div>

				<div className='col-lg'>
					<figure>
						<img src='/hero-image.png' alt='Destaque' />
					</figure>
				</div>
			</div>
		</div>
	</section>
);
