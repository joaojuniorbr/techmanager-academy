import { useQuery } from '@tanstack/react-query';
import { api } from '@common/api';
interface UseCursosProps {
	query?: string;
	limit?: number;
}
export interface CursoInterface {
	id: string;
	title: string;
	description: string;
	image: string;
	rating: string;
}

export const useCursos = ({
	query,
	limit
}: UseCursosProps) =>
	useQuery<CursoInterface[]>({
		queryKey: ['cursos', query],
		queryFn: async () => api.get(
				'/api.php',
				{
					params:
					{
						action: 'cursos',
						s:query,
						limit
					}
				}
			).then(res => res.data)
	});
