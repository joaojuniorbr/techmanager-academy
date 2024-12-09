import { Cursos, Hero, Parceiros } from '../../@components';

export const HomePage = () => {
	return (
		<>
			<Hero />
			<Parceiros />
			<Cursos />
			<div className='container'>Conteúdo da Home</div>
		</>
	);
};
