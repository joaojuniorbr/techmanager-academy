import './Header.css';


export const Header = () => {
	return <header className='header'>
		<div className='container'>
			<nav className='navbar navbar-expand-md'>
				<div className='container-fluid d-flex justify-content-between align-itens-center'>
					<a className='navbar-brand mx-auto order-0'href='#'>
						<img src='/TechAcademy.png' alt='Logo' className='d-inline-block align-text-top'style={{height: '20px'}}/>
					</a>
					  <button 
              className="navbar-toggler order-1" 
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#navbarNav" 
              aria-controls="navbarNav" 
              aria-expanded="false" 
              aria-label="Toggle navigation"
			  style={{
				backgroundColor:'transparent',border:'none'
			  }}
            >
             <span></span>
			 <span></span>
			 <span></span> 
            </button>
					<div className='collapse navbar-collapse order-2' id="navbarNav">
						<ul className='navbar-nav ms-auto'>
							<li className='nav-item active' aria-current="page">
								<a className='nav-link' href='#'>HOME</a>
							</li>
							<li className='nav-item'>
								<a className='nav-link' href='#'>SOBRE NÓS</a>
							</li>
							<li className='nav-item'>
								<a className='nav-link' href='#'>CURSOS</a>
							</li>
							<li className='nav-item'>
								<a className='nav-link' href='#'>CONTATO</a>
							</li>
						</ul>
					</div>
				</div>	
			</nav>
		</div>
	</header>;
};
