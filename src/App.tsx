import { ALL_URL, MOVIE_URL, PEOPLE_URL, TV_URL } from './api/config';
import { ContentHolder } from './components/ContentHolder';


function App() {
  return (
    <div style={{width: "100vw"}}>
      <h1>MOVIEAPP-REACT</h1>
      <ContentHolder url = {ALL_URL} pName = {"Tutto"}/>
      <ContentHolder url = {MOVIE_URL} pName = {"Film"}/>
      <ContentHolder url = {TV_URL} pName = {"Serie TV"}/>
      <ContentHolder url = {PEOPLE_URL} pName = {"Attori"}/>
    </div>
  )
}

export default App
