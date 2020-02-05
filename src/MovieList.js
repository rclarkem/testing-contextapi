import React, { useState, useContext } from 'react'
import MovieDetails from './MovieDetails'
import { MovieListContext } from './MovieListContext'

export default function MovieList() {
	const [movies, setMovies] = useContext(MovieListContext)
	return (
		<div>
			{movies.map(movie => (
				<MovieDetails movie={movie} key={movie.id} />
			))}
		</div>
	)
}
