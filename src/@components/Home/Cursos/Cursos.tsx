import { useCursos } from '../../../@hooks';
import { CardCurso } from '../../CardCurso';

import './Cursos.css';

export const Cursos = () => {
	const { data } = useCursos({
		limit: 6
	});

	return (
		<section className='home-cursos'>
			<div className='container'>
				<div className='home-cursos--titulo'>
					<div className='row align-items-center'>
						<div className='col'>
							<h2 className='title-default'>Nossos Cursos</h2>
						</div>
						<div className='col-auto d-none d-md-flex'>
							<a href='/cursos' className='button-default'>
								Todos os Cursos
							</a>
						</div>
					</div>
				</div>

				<div className='home-cursos--lista'>
					<div className='row'>
						{data?.map((item) => (
							<div className='col-md-6 col-lg-4' key={item.id}>
								<CardCurso item={item} />
							</div>
						))}
					</div>
				</div>

				<div className='d-block d-md-none'>
					<a href='/cursos' className='button-default block'>
						Todos os Cursos
					</a>
				</div>
			</div>
		</section>
	);
};
