import './App.css';
import { useState } from 'react';
import { Data } from './components/Movies/Data';
import MoviesList from './components/Movies/MoviesList';
import AddMovie from './components/Movies/AddMovie';

function App() {
  const [movies, setMovies] = useState(Data)

  const add = (newMovie) => {
    setMovies([...movies, newMovie]) 
  }
  return (
    <div className="App">
      <MoviesList movies={movies} />
      <AddMovie add={add} />
    </div>
  );
}

export default App;

