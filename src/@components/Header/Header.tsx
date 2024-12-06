import './Header.css';

export const Header = () => (<header className="header">
	<div className="container">
		<nav className='row align-items-center'>
			<div className="col">
				<div className='logo'>
					<a href="#">
						<img src='./TechAcademy.png'/>
					</a>
				</div>
			</div>
			<div className="col-auto">
				<div className="navigation d-none d-md-flex">
					<a href='#'>HOME</a>
					<a href='#'>SOBRE NÓS</a>
					<a href='#'>CURSOS</a>
					<a href='#'>CONTATO</a>
				</div>	

				<div className="button-mobile d-flex d-md-none" >
					<i className="ri-menu-line"></i>
				</div>
			</div>
		</nav>	
	</div>
</header>);
