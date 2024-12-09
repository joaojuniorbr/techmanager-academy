import { useQuery } from '@tanstack/react-query';
import { createClient } from 'contentful';

const contentfullClient = createClient({
	space: import.meta.env.VITE_APP_CONTENTFUL_SPACE_ID,
	accessToken: import.meta.env.VITE_APP_CONTENTFUL_ACCESS_TOKEN,
});

interface UseCursosProps {
	limit?: number;
}

const useCursosDefaultProps: UseCursosProps = {
	limit: 10,
};

export const useCursos = ({ limit }: UseCursosProps = useCursosDefaultProps) =>
	useQuery({
		queryKey: ['cursos'],
		queryFn: () =>
			contentfullClient.getEntries({
				content_type: 'title',
				limit,
			}),
	});
