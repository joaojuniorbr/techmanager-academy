import { BreadCrumb,Contato } from '../../@components';

export const ContatoPage = () => {
	return (
		<>
			<BreadCrumb items={[{ name: 'Contato', link: '/contato' }]} />
			<Contato/>
		</>
	);
};
