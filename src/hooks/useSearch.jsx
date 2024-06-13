import { useState, useEffect, useRef } from 'react'

export const useSearch = () => {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(true)
  const firstInput = useRef(true)

  useEffect(() => {
    if (firstInput.current) {
      firstInput.current = search === ''
      return
    }

    if (search === '') {
      return setError('No se puede buscar una pelicula vacia')
    }

    if (search.length < 3) {
      return setError('Faltan caracteres')
    }

    setError(null)
  }, [search])

  return { search, setSearch, error }
}
