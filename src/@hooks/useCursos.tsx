import { useQuery } from '@tanstack/react-query';
import { EntriesQueries, EntrySkeletonType } from 'contentful';
import { api } from '../@common';

interface UseCursosProps {
	limit?: number;
	imageSize?: { width: number; height: number };
	page?: number;
	query?: string;
	tag?: string;
}

const useCursosDefaultProps: UseCursosProps = {
	limit: 10,
	imageSize: { width: 600, height: 400 },
	page: 1,
};

interface CursoDescription {
	content: { content: { value: string }[] }[];
}

interface CursoImage {
	fields: {
		file: {
			contentType: string;
			fileName: string;
			url: string;
		};
	};
}

const parseDescription = (description: CursoDescription) => {
	return description.content[0]?.content[0]?.value;
};

const parseImage = (image: CursoImage, width?: number, height?: number) => {
	let params = '';

	if (width && height) {
		params = `?w=${width}&h=${height}&fit=fill`;
	}

	return image.fields.file.url + params;
};

export interface CursoInterface {
	id: string;
	title: string;
	description: string;
	image: string;
	datetime: string;
	videos: number;
	rate: number;
	category: string[];
}

export const useCursos = ({
	limit,
	imageSize,
	page,
	query,
	tag,
}: UseCursosProps = useCursosDefaultProps) =>
	useQuery<{
		items: CursoInterface[];
		total: number;
		skip: number;
	}>({
		queryKey: ['cursos', page, limit, query],
		queryFn: async () => {
			const { items, total, skip } = await api.getEntries<EntrySkeletonType>({
				query,
				content_type: 'title',
				limit,
				order: `-fields.datetime`,
				'fields.category': tag,
				skip: (limit || 0) * (page || 0),
			} as EntriesQueries<EntrySkeletonType, undefined>);

			const data = items.map((item) => {
				return {
					id: item.sys.id,
					title: item.fields.Title,
					description: parseDescription(
						item.fields.description as CursoDescription
					),
					image: parseImage(
						item.fields.image as CursoImage,
						imageSize?.width,
						imageSize?.height
					),
					datetime: item.fields.datetime,
					videos: item.fields.videos,
					rate: item.fields.rate,
					category: item.fields.category,
				} as CursoInterface;
			});

			return {
				items: data,
				total,
				skip,
			};
		},
	});
