import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './main.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import { MainLayout } from './@components';

import { HomePage } from './@pages';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<MainLayout />}>
					<Route index element={<HomePage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</StrictMode>
);
