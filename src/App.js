import './App.css';
import { useState } from 'react';
import { Data } from './components/Movies/Data';
import MoviesList from './components/Movies/MoviesList';
import AddMovie from './components/Movies/AddMovie';
import Filter from './components/Movies/Filter';

function App() {
  const [movies, setMovies] = useState(Data)
  const [name, setName] = useState('')
  const [rate, setRate] = useState(0)


  const handleRate = (x) => {
    setRate(x)
  }

  const handleName = (e) => {
    // e.preventDefault()
    setName(e.target.value)
  }

  const add = (newMovie) => {
    setMovies([...movies, newMovie]) 
  }
  return (
    <div className="App">
      <Filter handleName={handleName} handleRate={handleRate}/>
      <MoviesList movies={movies} name={name} rate={rate} />
      <AddMovie add={add} />
    </div>
  );
}

export default App;

