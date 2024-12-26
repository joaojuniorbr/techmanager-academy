import { Link } from 'react-router-dom';
import './Header.css';

export const Header = () => (
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

					<div className='button-mobile d-flex d-md-none'>
						<i className='ri-menu-line'></i>
					</div>
				</div>
			</nav>
		</div>
	</header>
);
