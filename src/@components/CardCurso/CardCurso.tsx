import dayjs from 'dayjs';
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
					{item.rate}
				</div>
			</div>

			<div className='card-curso--description'>
				<h3>{item.title}</h3>
				<p>{item.description}</p>

				<div className='row'>
					<div className='col'>
						<div className='card-curso--highlight'>
							<i className='ri-time-line'></i>
							{dayjs(item.datetime).format('DD/MM/YYYY')}
						</div>
					</div>
					<div className='col-auto'>
						<div className='card-curso--highlight'>
							<i className='ri-play-circle-line'></i>
							{item.videos}
							{item.videos > 1 ? ' Aulas' : ' Aula'}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
