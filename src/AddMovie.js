import React, { useState, useReducer, useContext } from 'react'
import { MovieListContext } from './MovieListContext'

const AddMovie = () => {
	const [movies, setMovies] = useContext(MovieListContext)
	const [userInput, setUserInput] = useReducer(
		(state, newState) => ({ ...state, ...newState }),
		{
			name: '',
			price: '',
			id: 23452,
		},
	)

	const updateName = e => {
		setUserInput({ [e.target.name]: e.target.value })
	}

	const addMovie = e => {
		e.preventDefault()
		setMovies(preM => [...preM, userInput])
	}

	return (
		<form onSubmit={addMovie}>
			<input
				placeholder='Title'
				type='text'
				name='name'
				value={userInput.name}
				onChange={updateName}
			></input>
			<input
				placeholder='Price'
				type='text'
				name='price'
				value={userInput.price}
				onChange={updateName}
			></input>
			<button>Submit</button>
		</form>
	)
}
export default AddMovie
