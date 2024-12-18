import "./Testemunhos.css";

export const Testemunhos = () => (
	<section className="testemunho">
		<div className="container pt-5">
			<div className="row justify-content-center">
				<div className="col-lg-4 col-4">
					<h3>O que falam sobre nós?</h3>
					<p className="text-secondary">Mais de 20.000 usuários</p>
				</div>
				<div className="col-lg-7">
					<p className="fala-testemunho">
						"Materi yang disampaikan mudah dimengerti, kualitas instruktur sangat baik serta
						responnya yang cepat. So, kursus disini sangat sangat saya rekomendasikan!!"
					</p>

					<div className="row align-items-center mt-3">
						<div className="col-lg-1">
							<div className="rounded-circle foto-testemunho"></div>
						</div>							
						<div className="col-lg-3 align-self-center">
							<span className="fw-bold">Jenny Wilson</span>
							<p className="text-secondary mb-0">Vice President</p>
						</div>
						<div className="col-lg d-flex justify-content-end">
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
