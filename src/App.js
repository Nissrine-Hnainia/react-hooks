import './App.css';
import {useState} from "react"
import { Data } from './components/Data';
import MoviesList from './components/moviesList/MoviesList';
import AddMovie from './components/add/AddMovie';
import Header from './components/header/Header';

function App() {
  const [movies, setMovies] = useState(Data)
  const handleMovie = (newMovie) => {
      setMovies([...movies, newMovie])
  }
  //const movies = [{movie}, {movie}, {movie}]
  // [...movies, newMovie]
  return (
    <div className="App">
      <Header />
      <MoviesList movies={movies}/>
      <AddMovie handleMovie={handleMovie}/>
    </div>
  );
}

export default App;

