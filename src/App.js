import './App.css';
import {useState} from "react"
import { Data } from './components/Data';
import MoviesList from './components/moviesList/MoviesList';
import AddMovie from './components/add/AddMovie';
import Header from './components/header/Header';
import { Route, Switch } from 'react-router-dom';
import MovieInfo from './components/moviesList/MovieInfo';

function App() {
  const [movies, setMovies] = useState(Data)
  const [nameSearch, setNameSearch] = useState("")
  const handleSearch = (e) => {
    setNameSearch(e.target.value)
  }
  const handleMovie = (newMovie) => {
      setMovies([...movies, newMovie])
  }
  return (
    <div className="App">
      
      <Switch>
        <Route exact path="/" render={(props) =>
        <div>
          <Header handleSearch={handleSearch} />
          <MoviesList movies={movies} nameSearch={nameSearch} />
          <AddMovie handleMovie={handleMovie}/>
        </div>
        }/>
        <Route exact path="/movie/:id" render={(props) => <MovieInfo movies={movies} {...props} />} />
      </Switch>
    </div>
  );
}

export default App;

