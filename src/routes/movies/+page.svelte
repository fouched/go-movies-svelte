<script lang="ts">
	import type { Movie } from '../../types/Movie';

	export let data: { moviesList: Movie[] };
</script>

<div>
	<h2>Movies</h2>
	<hr />
	<table class="table table-striped table-hover">
		<thead>
		<tr>
			<th>Title</th>
			<th>Release Date</th>
			<th>Rating</th>
		</tr>
		</thead>
		<tbody>
		{#each data.moviesList as movie}
			<tr>
				<td><a href="/movies/{movie.id}">{movie.title}</a></td>
				<td>{movie.release_date}</td>
				<td>{movie.mpaa_rating}</td>
			</tr>
		{/each}
		</tbody>
	</table>
</div>