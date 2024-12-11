import { BreadCrumb,SobreNosHero } from '../../@components';

export const SobreNosPage = () => {
	return (
		<>
			<BreadCrumb items={[{ name: 'Sobre Nós', link: '/sobre-nos' }]} />
			<SobreNosHero />
		</>
	);
};
