import { createClient } from 'contentful';

export const api = createClient({
	space: import.meta.env.VITE_APP_CONTENTFUL_SPACE_ID,
	accessToken: import.meta.env.VITE_APP_CONTENTFUL_ACCESS_TOKEN,
});
