export const searchMovies = async ({ search }) => {
  const ApiKey = '593a1526'

  try {
    const res = await fetch(
      `https://www.omdbapi.com/?apikey=${ApiKey}&s=${search}`
    )
    const data = await res.json()
    return data.Search // Retornar los resultados de la búsqueda directamente.
  } catch (err) {
    console.error('error al hacer el fething de datos', err)
    return [] // Retornar un array vacío en caso de error.
  }
}
