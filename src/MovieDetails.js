import React, { Fragment } from 'react'

export default function MovieDetails({ movie }) {
	return (
		<Fragment>
			<h1>Title: {movie.name}</h1>
			<h3> Price: {movie.price}</h3>
		</Fragment>
	)
}
