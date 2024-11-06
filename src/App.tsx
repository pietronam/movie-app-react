import './App.css'
import { MovieCard } from './components/MovieCard'
import { MovieType } from './types/movieTypes';

function App() {
  const movieMock: MovieType[] = [
    {
      id: 1,
      title: "Il Signore degli Anelli",
      description: "hm"
    },
    {
      id: 2,
      title: "Harry Potter",
      description: "a"
    },
    {
      id: 3,
      title: "Il Padrino",
      description: "il",
    },
  ];

  return (
    <div>
      <h1>Questo è il componente React the rappresenta l'intera applicazione</h1>
      <h2>Questo è un H2</h2>
      {
        movieMock.map(
          (movie) => {
            return <MovieCard movie = {movie} />
          })
      }
    </div>
  )
}

export default App
