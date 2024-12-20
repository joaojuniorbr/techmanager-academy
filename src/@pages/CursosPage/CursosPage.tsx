import { Pagination, Spin } from 'antd';
import { BreadCrumb, CardCurso } from '../../@components';
import { useCursos } from '../../@hooks';
import { useEffect, useState } from 'react';

import './CursosPage.css';

const PAGE_LIMIT = 6;

export const CursosPage = () => {
	const [page, setPage] = useState(1);
	const { data, refetch, isLoading } = useCursos({
		limit: PAGE_LIMIT,
		page: page - 1,
		imageSize: { width: 600, height: 400 },
	});

	useEffect(() => {
		refetch();
	}, [page, refetch]);

	return (
		<Spin spinning={isLoading}>
			<BreadCrumb items={[{ name: 'Cursos', link: '/cursos' }]} />

			<section className='list-cursos'>
				<div className='container'>
					<div className='row'>
						{data?.items.map((item) => (
							<div className='col-md-6 col-lg-4' key={item.id}>
								<CardCurso item={item} className='mb-5' />
							</div>
						))}
					</div>

					<Pagination
						total={data?.total}
						pageSize={PAGE_LIMIT}
						onChange={setPage}
						current={page}
					/>
				</div>
			</section>
		</Spin>
	);
};
