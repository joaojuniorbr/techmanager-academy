import "./Testemunhos.css";

export const Testemunhos = () => (
		<section className="testemunho">
			<div className="container">
				<div className="row">
					<div className="col-lg-4 chamada-testemunho">
						<h3>O que falam sobre nós?</h3>
						<p className="text-secondary">Mais de 20.000 usuários</p>
					</div>
					<div className="col-lg-8">
						<p className="fala-testemunho">
							"Materi yang disampaikan mudah dimengerti, kualitas instruktur sangat baik serta
							responnya yang cepat. So, kursus disini sangat sangat saya rekomendasikan!!"
						</p>

						<div className="row align-items-center">
							<div className="col-lg-auto">
								<img src="/Imagem_pessoa.png" className="rounded-circle foto-testemunho" alt="Jenny Wilson"/>
							</div>							
							<div className="col-lg align-self-center">
								<span className="fw-bold">Jenny Wilson</span>
								<p className="text-secondary mb-0">Vice President</p>
							</div>
							<div className="col-lg-auto">
								<div className="rounded-circle lista-testemunho mx-1 ativo"></div>
								<div className="rounded-circle lista-testemunho mx-1"></div>
								<div className="rounded-circle lista-testemunho mx-1"></div>
								<div className="rounded-circle lista-testemunho mx-1"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
);
