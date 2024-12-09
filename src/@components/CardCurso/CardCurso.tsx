import dayjs from 'dayjs';
import { CursoInterface } from '../../@hooks';

import './CardCurso.css';

export const CardCurso = ({ item }: { item: CursoInterface }) => (
	<div className='card-curso'>
		<div className='card-curso--image'>
			<img src={item.image} alt={item.title} />

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
