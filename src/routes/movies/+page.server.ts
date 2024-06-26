import type { Movie } from '../../types/Movie';

export function load(): { moviesList: Movie[] } {

	const moviesList: Movie[] = [
		{
			id: 1,
			title: 'Highlander',
			release_date: '1986-03-07',
			runtime: 116,
			mpaa_rating: 'R',
			description: 'Some long description'
		},
		{
			id: 2,
			title: 'Raiders of the lost Ark',
			release_date: '1981-06-12',
			runtime: 115,
			mpaa_rating: 'PG-13',
			description: 'Some long description'
		}
	];

	return { moviesList };
}