import { Spin } from 'antd';
import { BreadCrumb, CardCurso } from '../../@components';
import { useCursos, } from '../../@hooks';
import { useEffect, useState } from 'react';

import './CursosPage.css';

export const CursosPage = () => {
	const [query, setQuery] = useState('');

	const { data, refetch, isLoading, isRefetching } = useCursos({query});

	const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(e.target.value);
	};

	useEffect(() => {
		refetch();
	}, [refetch]);

	return (
		<Spin spinning={isLoading || isRefetching}>
			<BreadCrumb items={[{ name: 'Cursos', link: '/cursos' }]} />

			<section className='search-cursos'>
				<div className='container'>
					<div className='row justify-content-center'>
						<div className='col-lg-8 col-md-9'>
							<div className='search-cursos-input'>
								<input
									type='text'
									placeholder='Encontre um curso'
									onChange={(e) => onChangeSearch(e)}
									value={query}
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className='list-cursos'>
				<div className='container'>
					<div className='row'>
						{data && data?.map((item) => (
							<div className='col-md-6 col-lg-4' key={item.id}>
								<CardCurso item={item} className='mb-5' />
							</div>
						))}
					</div>
				</div>
			</section>
		</Spin>
	);
};
