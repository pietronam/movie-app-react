import './App.css'
import { getMovies } from './api/movies';
import { MovieCard } from './components/MovieCard'

function App() {
  const movieMock = getMovies();
  return (
    <div>
      <h1>Questo è il componente React the rappresenta l'intera applicazione</h1>
      <h2>Questo è un H2</h2>
      {
        movieMock.map(
          (movie) => {
            return <MovieCard key={movie.id} movie={movie} />
          })
      }
    </div>
  )
}

export default App
