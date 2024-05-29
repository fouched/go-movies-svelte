<div class="container">
	<div class="row">
		<div class="col">
			<h1 class="mt-3">Go Watch a Movie!</h1>
		</div>
		<div class="col text-end">
			<a href="#!"><span class="badge bg-success">Login</span></a>
		</div>
		<hr class="mb-3">
	</div>

	<div class="row">
		<div class="col-md-2">
			<nav>
				<div class="list-group">
					<a href="#!" class="list-group-item list-group-item-action">Home</a>
					<a href="#!" class="list-group-item list-group-item-action">Movies</a>
					<a href="#!" class="list-group-item list-group-item-action">Genres</a>
					<a href="#!" class="list-group-item list-group-item-action">Add Movie</a>
					<a href="#!" class="list-group-item list-group-item-action">Manage Catalogue</a>
					<a href="#!" class="list-group-item list-group-item-action">GraphQL</a>
				</div>
			</nav>
		</div>
		<div class="col-md-10">
			<slot />
		</div>
	</div>

</div>