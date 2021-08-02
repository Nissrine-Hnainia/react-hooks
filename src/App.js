import './App.css';
import {useState} from "react"
import {Data} from "./components/Data"

function App() {
  const [movies, setMovies] = useState(Data)
  // const [rate, setRate] = useState(0)
  // const [name, setName] = useState("")
  return (
    <div className="App">
      <h1> React Hooks </h1>
      
    </div>
  );
}

export default App;

