import { ALL_URL, MOVIE_URL, PEOPLE_URL, TV_URL } from './api/config';
import { ContentHolder } from './components/ContentHolder';

function App() {
  return (
    <div style={{width: "100vw"}}>
      <h1>MOVIEAPP-REACT</h1>
      <h1>Tutto</h1>
      {
        ContentHolder(ALL_URL)
      }
      <h1>Film</h1>
      {
        ContentHolder(MOVIE_URL)
      }
      <h1>Serie TV</h1>
      {
        ContentHolder(TV_URL)
      }
      <h1>Attori</h1>
      {
        ContentHolder(PEOPLE_URL)
      }

    </div>
  )
}

export default App
