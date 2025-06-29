import { useQuery } from '@tanstack/react-query';
import { api } from '../@common';

const TMA_PROFILE_KEY = 'tma_profile';

export const useAuth = () => {
	const saveProfile = (profile: object) => {
		localStorage.setItem(TMA_PROFILE_KEY, JSON.stringify(profile));
	};

	const logout = () =>
		api
			.get('/api.php', {
				params: {
					action: 'logout',
				},
			})
			.then(() => {
				localStorage.removeItem(TMA_PROFILE_KEY);
				window.location.reload();
			});

	return {
		saveProfile,
		logout,
		...useQuery({
			queryKey: [TMA_PROFILE_KEY, 'profile'],
			queryFn: () =>
				api
					.get('/api.php', {
						params: {
							action: 'profile',
						},
					})
					.then((res) => res.data),
		}),
	};
};
