import { getMovies } from './api/movies';
import { MovieType } from './types/movieTypes';
import { MovieCard } from './components/MovieCard'

function App() {
  { }

  let movies: MovieType[] = [];
  const movieMock = async () => {
    movies = await getMovies("trending/all/day");
  }

  movieMock();
  return (
    <div>
      <h1>Questo è il componente React the rappresenta l'intera applicazione</h1>
      <h2>Questo è un H2</h2>
      {
        movies.map(
          (movie) => {
            return <MovieCard key={movie.id} movie={movie} />
          })
      }
   </div>
  )
}

export default App
