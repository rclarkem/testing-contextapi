import React, { useState, useContext } from 'react'
import { MovieListContext } from './MovieListContext'

export default function Nav() {
	const [movies, setMovies] = useContext(MovieListContext)
	return (
		<div>
			<h3>Dev Ed</h3>
			<p>List of Movies: {movies.length} </p>
		</div>
	)
}
