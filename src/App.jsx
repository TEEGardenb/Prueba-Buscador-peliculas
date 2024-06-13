import { useState } from 'react'
import withResults from './mocks/with-results.json'
import './App.css'
import { ListOfMovies } from './components/ListOfMovies'
import { useSearch } from './hooks/useSearch'
import { useMovies } from './hooks/useMovies'
import debounce from 'just-debounce-it'
import { useCallback } from 'react'

function App() {
  const [sort, setSort] = useState(false)
  const { search, setSearch, error } = useSearch()
  const { movies, getMovies, loading } = useMovies({ search, sort })

  const debounceGetMovies = useCallback(
    debounce((search) => {
      console.log('search', search)
      getMovies({ search })
    }, 300),
    []
  )

  const handleSubmit = (e) => {
    e.preventDefault()
    getMovies({ search })
  }

  const handleSearch = (e) => {
    const newSearch = e.target.value
    setSearch(newSearch)
    debounceGetMovies(newSearch)
  }

  const handleSort = () => {
    setSort(!sort)
  }

  return (
    <>
      <header>
        <h1>PelisPlus</h1>
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => handleSearch(e)}
            value={search}
            type='text'
            placeholder='Avengers, Star Wars, Matrix'
          />
          <input type='checkbox' onChange={handleSort} checked={sort} />
          <button>Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>

      <main>
        {loading && <h3>Loading...</h3>}
        {!loading && <ListOfMovies movies={movies} />}
      </main>
    </>
  )
}

export default App
