import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ConfigProvider, App } from 'antd';

import 'bootstrap/dist/css/bootstrap.min.css';

import './main.css';

import { MainLayout } from './@components';

import { ContatoPage, CursosPage, HomePage, SobreNosPage } from './@pages';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ConfigProvider>
			<App>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<MainLayout />}>
							<Route index element={<HomePage />} />
							<Route path='sobre-nos' element={<SobreNosPage />} />
							<Route path='cursos' element={<CursosPage />} />
							<Route path='contato' element={<ContatoPage />} />
						</Route>
					</Routes>
				</BrowserRouter>
			</App>
		</ConfigProvider>
	</StrictMode>
);
