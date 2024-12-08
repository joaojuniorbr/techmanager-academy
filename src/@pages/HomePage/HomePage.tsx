import { Hero, Parceiros,SobreNos} from '../../@components';

export const HomePage = () => {
	return (
		<>
			<Hero />
			<Parceiros />
			<SobreNos />
			<div className='container'>Conteúdo da Home</div>
		</>
	);
};
