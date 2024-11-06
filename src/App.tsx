import { getMovies } from './api/movies';
import { MovieType } from './types/movieTypes';
import { MovieCard } from './components/MovieCard'
import { useEffect, useState } from 'react';

function App() {
  const [movies, setMovies] = useState<MovieType[]>([]);


  useEffect(() => {
    const fetchMovie = async () => {
      setMovies(await getMovies("trending/all/day"));
    }
    fetchMovie();
  }, []);

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
