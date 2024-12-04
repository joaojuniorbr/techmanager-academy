import { Outlet } from 'react-router-dom';
import { Header } from '../Header';
import { Footer } from '../Footer';

import './MainLayout.css';

export const MainLayout = () => (
	<main>
		<Header />
		<Outlet />
		<Footer />
	</main>
);
