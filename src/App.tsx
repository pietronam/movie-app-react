import './App.css'
import { MovieCard } from './components/MovieCard'
import { MovieType } from './types/movieTypes';

function App() {
  const movieMock: MovieType[] = [
    {
      id: 1,
      title: "Il Signore degli Anelli",
    },
    {
      id: 2,
      title: "Harry Potter",
    },
    {
      id: 3,
      title: "Il Padrino",
    },
  ]

  return (
    <div>
      <h1>Questo è il componente React the rappresenta l'intera applicazione</h1>
      <h2>Questo è un H2</h2>
      {
        movieMock.map(
          (movie) => {
            return <MovieCard idMovie={movie.id} titleMovie={movie.title} />
          })
      }

    </div>
  )
}

export default App
