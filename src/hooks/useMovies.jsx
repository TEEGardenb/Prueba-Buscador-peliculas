import { useState, useRef, useMemo, useCallback } from 'react'
import withResults from '../mocks/with-results.json'
import noResults from '../mocks/without-results.json'
import { searchMovies } from '../services/searchMovies'

export const useMovies = ({ search, sort }) => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const previusSearch = useRef(search)

  //const movies = responseMovies.Search

  const getMovies = useCallback(async ({ search }) => {
    if (search === previusSearch.current) {
      return
    }
    try {
      setLoading(true)
      previusSearch.current = search
      const newMovies = await searchMovies({ search })
      setMovies(newMovies)
    } catch (err) {
    } finally {
      setLoading(false)
    }
  }, [])
  const sortedMovies = useMemo(() => {
    console.log('render')
    return sort
      ? [...movies].sort((a, b) => a.Title.localeCompare(b.Title))
      : movies
  }, [sort, movies])

  return { movies: sortedMovies, getMovies, loading }
}
