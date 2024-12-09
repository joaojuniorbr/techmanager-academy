import { useCursos } from '../../../@hooks';

export const Cursos = () => {
	const { data } = useCursos();

	console.log(data);

	return (
		<section>
			<div className='container'>Cursos</div>
		</section>
	);
};
