import { Link } from 'react-router-dom';
import './Header.css';
import { Drawer } from 'antd';
import { useState } from 'react';

export const Header = () => {
	const [open, setOpen] = useState(false);

	const toggleMenu = () => {
		setOpen(!open);
	};

	return (
		<>
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
				</nav>
			</Drawer>
		</>
	);
};
