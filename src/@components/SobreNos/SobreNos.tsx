import "./SobreNos.css";

export const SobreNos = () => (
	<section className="container">
		<p>Conheça um pouco mais sobre a TechAcademy</p>
		<div className="row">
			<div className="Info col-md-3">
				<div className="Conteudo_info">
					<div className="numero_conteudo">
						<img src="./Maskgroup.png" />
						<p>1</p>
					</div>
					<h5>Kursus Gratis</h5>
					<p>Kami menyediakan beberapa kursus gratis untuk menunjang ketersediaan pendidikan untuk masyarakat kurang mampu.</p>
				</div>				
			</div>
			<div className="Info col-md-3">
				<div className="Conteudo_info">
					<div className="numero_conteudo">
						<img src="./Maskgroup.png" />
						<p>2</p>
					</div>
					<h5>Akses Selamanya</h5>
					<p>Semua kursus yang telah kamu daftar bisa diakses selamanya sehingga belajar kamu lebih nyaman dan tidak terburu-buru. </p>
				</div>								
			</div>
			<div className="Info col-md-3">
				<div className="Conteudo_info">
					<div className="numero_conteudo">
						<img src="./Maskgroup.png" />
						<p>3</p>
					</div>
					<h5>Grup Konsultasi</h5>
					<p>Terdapat grup konsultasi yang berguna jika kamu ingin menanyakan suatu pertanyaan  dan kamu juga bisa mebuka diskusi baru.</p>
				</div>
			</div>			
		</div>		
	</section>
);
