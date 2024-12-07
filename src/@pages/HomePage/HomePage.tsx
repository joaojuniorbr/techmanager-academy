import { Hero, Parceiros } from '../../@components';

export const HomePage = () => {
	return (
		<>
			<Hero />
			<Parceiros />
			<div className='container'>Conteúdo da Home</div>
		</>
	);
};
