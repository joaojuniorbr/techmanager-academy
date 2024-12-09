import { useCursos } from '../../../@hooks';

import './Cursos.css';

export const Cursos = () => {
	const { data } = useCursos();

	console.log(data);

	return (
		<section className='home-cursos'>
			<div className='container'>
				<div className='home-cursos--titulo'>
					<div className='row align-items-center'>
						<div className='col'>
							<h2 className='title-default'>Nossos Cursos</h2>
						</div>
						<div className='col-auto'>
							<a href='/cursos' className='button-default'>
								Todos os Cursos
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
