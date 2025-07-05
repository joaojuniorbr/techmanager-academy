import { CursoInterface } from '../../@hooks';

import './CardCurso.css';
import { message } from 'antd';

interface CardCursoProps extends React.HTMLAttributes<HTMLDivElement> {
	item: CursoInterface;
}

export const CardCurso = ({ item, className, ...props }: CardCursoProps) => {
	const handleClick = (event: React.MouseEvent) => {
		event.preventDefault();
		message.success('Esta página ainda está em desenvolvimento');
	};

	return (
		<div className={`card-curso ${className || ''}`} {...props}>
			<div className='card-curso--image'>
				<a href='#' onClick={handleClick}>
					<span>Saiba Mais sobre o Curso</span>
					<img src={item.image} alt={item.title} />
				</a>

				<div className='cart-curso--rate'>
					<i className='ri-star-fill'></i>
					{item.rating}
				</div>
			</div>

			<div className='card-curso--description'>
				<h3>{item.title}</h3>
				<p>{item.description}</p>
			</div>
		</div>
	);
};
