import { useQuery } from '@tanstack/react-query';
import { apiContentful } from '../@common';

export const useTags = () =>
	useQuery<string[]>({
		queryKey: ['tags'],
		queryFn: async () => {
			const { items } = await apiContentful.getEntries({
				content_type: 'title',
			});

			return Array.from(
				new Set(items.flatMap((item) => item.fields.category as string[]))
			);
		},
	});
