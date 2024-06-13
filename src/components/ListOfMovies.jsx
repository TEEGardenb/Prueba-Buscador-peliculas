import React from 'react'
import { useMovies } from '../hooks/useMovies'

export const ListOfMovies = ({ movies }) => {
  const hasMovies = movies?.length > 0
  return (
    <>
      {hasMovies && (
        <ul>
          {movies.map((movie) => (
            <li key={movie.imdbID} style={{ listStyle: 'none' }}>
              <h2>{movie.Title}</h2>
              <img src={movie.Poster} alt={movie.Title} />
              <h3>{movie.Year}</h3>
            </li>
          ))}
        </ul>
      )}
      {!hasMovies && <p>No hay resultados...</p>}
    </>
  )
}
