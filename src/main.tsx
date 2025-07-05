import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ConfigProvider, App } from 'antd';

import 'bootstrap/dist/css/bootstrap.min.css';

import './main.css';

import { MainLayout } from './@components';

import { ContatoPage, CursosPage, HomePage, SobreNosPage } from './@pages';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<ConfigProvider
				theme={{
					token: {
						fontFamily: 'Poppins, sans-serif',
						colorPrimary: '#1c1e53',
					},
				}}
			>
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
		</QueryClientProvider>
	</StrictMode>
);
