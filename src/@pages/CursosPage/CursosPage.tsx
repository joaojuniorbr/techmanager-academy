import { Pagination, Spin } from 'antd';
import { BreadCrumb, CardCurso } from '../../@components';
import { useCursos, useTags } from '../../@hooks';
import { useEffect, useState } from 'react';

import './CursosPage.css';

const PAGE_LIMIT = 6;

export const CursosPage = () => {
	const [tag, setTag] = useState<string>('');
	const [query, setQuery] = useState<string>('');

	const [page, setPage] = useState(1);

	const { data, refetch, isLoading } = useCursos({
		limit: PAGE_LIMIT,
		page: page - 1,
		imageSize: { width: 600, height: 400 },
		query,
		tag,
	});

	const { data: tags } = useTags();

	const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(e.target.value);
		setPage(1);
	};

	useEffect(() => {
		refetch();
	}, [page, refetch, query, tag]);

	return (
		<Spin spinning={isLoading}>
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

					<nav className='search-cursos-tags'>
						{tags?.map((item) => (
							<button
								key={item}
								onClick={() => setTag(item)}
								className={tag === item ? 'active' : ''}
							>
								{item}
							</button>
						))}
					</nav>
				</div>
			</section>

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
