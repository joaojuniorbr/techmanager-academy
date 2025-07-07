import { Link } from 'react-router-dom';
import './Header.css';
import { Button, Drawer, Spin } from 'antd';
import { useState } from 'react';
import { FormLogin } from '../FormLogin';
import { useAuth } from '@hooks/useAuth';
import { FormProfile } from '@components/FormProfile';

export const Header = () => {
	const { data: profile, isLoading, logout } = useAuth();

	const [open, setOpen] = useState(false);
	const [openLogin, setOpenLogin] = useState(false);
	const [isLoadingLogout, setIsLoadingLogout] = useState(false);

	const toggleMenu = () => {
		setOpen(!open);
	};

	const toggleLogin = () => {
		setOpenLogin(!openLogin);
	};

	const labelAuth = profile?.data ? 'Perfil' : 'Login';

	const handleLogout = () => {
		setIsLoadingLogout(true);
		logout().finally(() => setIsLoadingLogout(false));
	};

	return (
		<Spin spinning={isLoadingLogout || isLoading}>
			<header className='header'>
				<div className='container'>
					<nav className='row align-items-center'>
						<div className='col'>
							<div className='logo'>
								<Link to='/'>
									<img src='/logo-main-white.svg' alt='TechManager Academy' />
								</Link>
							</div>
						</div>
						<div className='col-auto'>
							<div className='navigation d-none d-md-flex'>
								<Link to='/'>HOME</Link>
								<Link to='/sobre-nos'>SOBRE NÓS</Link>
								<Link to='/cursos'>CURSOS</Link>
								<Link to='/contato'>CONTATO</Link>

								<button className='button-default' onClick={toggleLogin}>
									{labelAuth}
								</button>
							</div>

							<div
								className='button-mobile d-flex d-md-none'
								onClick={toggleMenu}
							>
								<i className='ri-menu-line' />
							</div>
						</div>
					</nav>
				</div>
			</header>
			<Drawer open={open} title='Menu Principal' onClose={toggleMenu}>
				<nav className='nav-mobile'>
					<Link to='/'>HOME</Link>
					<Link to='/sobre-nos'>SOBRE NÓS</Link>
					<Link to='/cursos'>CURSOS</Link>
					<Link to='/contato'>CONTATO</Link>
					<button className='button-default' onClick={toggleLogin}>
						{labelAuth}
					</button>
				</nav>
			</Drawer>

			<Drawer
				open={openLogin}
				title={labelAuth}
				onClose={toggleLogin}
				footer={
					profile?.data && (
						<Button block danger onClick={handleLogout}>
							Sair da Conta
						</Button>
					)
				}
			>
				{profile?.data ? <FormProfile /> : <FormLogin />}
			</Drawer>
		</Spin>
	);
};
