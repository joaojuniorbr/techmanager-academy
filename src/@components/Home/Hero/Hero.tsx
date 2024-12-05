import './Hero.css';

export const Hero = () => (
	<section className='home-hero'>
		<div className='container'>
			<div className='row align-items-center'>
				<div className='col-xxl-5 col-xl-6 col-lg-7'>
					<article>
						<h2>Bangun dan Wujudkan Cita Bersama EDUFREE</h2>

						<p>
							EDUFREE adalah sebuah layanan kursus dan pelatihan gratis secara
							online yang bertujuan untuk membantu kamu meraih cita di bidang
							teknologi.
						</p>
					</article>

					<nav className='row'>
						<div className='col-6 col-md-auto col-lg-6'>
							<button className='button-default'>Lihat Kursus</button>
						</div>
						<div className='col-6 col-md-auto col-lg-6'>
							<button className='button-default transparent'>
								Lihat Alur Belajar
								<i className='ri-arrow-right-line'></i>
							</button>
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
