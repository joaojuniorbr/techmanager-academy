import { Link } from 'react-router-dom';
import { Fragment } from 'react/jsx-runtime';

import './BreadCrumb.css';

interface BreadCrumbProps extends React.PropsWithChildren {
	items?: { name: string; link: string }[];
}

export const BreadCrumb = ({ items, ...props }: BreadCrumbProps) => (
	<div className='breadcrumb-tm' {...props}>
		<div className='container'>
			<ul>
				<li>
					<Link to='/' aria-label='Página Inicial'>
						Home
					</Link>
				</li>
				{items?.map((item, index) => (
					<Fragment key={index}>
						<li className='separator' aria-label='Separador de Navegação'>
							<i className='ri-arrow-right-s-line'></i>
						</li>
						<li>
							{index === items.length - 1 ? (
								<span aaria-current='page'>{item.name}</span>
							) : (
								<Link to={item.link} aria-label={item.name}>
									{item.name}
								</Link>
							)}
						</li>
					</Fragment>
				))}
			</ul>
		</div>
	</div>
);
