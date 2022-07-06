import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import searchIcon from "./assests/icon.svg"



function App() {
  let [movies, setMovies] = useState([]);
  let [searchtxt, setSearchTxt] = useState("Pokemon");
  useEffect(() => {

  });

  async function getMovies(title) {
    let response = await axios.get("https://www.omdbapi.com/?apikey=c5db1501&s=" + title);
    //console.log(response.data.Search);
    let data = response.data.Search;
    setMovies(data);
    console.log(movies);
  }
  return (
    <div className="app">
      <h1>Movie Land {searchtxt}</h1>
      <div className="search">
        <input type="search" placeholder="Search For Movies" value={searchtxt} onChange={(e) => { setSearchTxt(e.target.value) }} />&ensp;
        {/* <button onClick={() => { getMovies(searchtxt) }}>Search</button> */}
        <img src={searchIcon} alt={searchIcon} onClick={() => { getMovies(searchtxt) }} />
      </div>

      <div className="container">

        {movies.map((element) => {
          return (
            <div className='movie'>
              <div>
                <p>{element.Year}</p>
              </div>
              <div>
                <img src={element.Poster} />
              </div>
              <div>
                <span>{element.Type}</span>
                <h3>{element.Title}</h3>
              </div>
            </div>
          );
        })




        }

      </div>
    </div>
  );
}

export default App;
