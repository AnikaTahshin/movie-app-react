import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import searchIcon from "./assests/icon.svg"
import Card from "./component/card/Card";



function App() {



  let [movies, setMovies] = useState([]);
  let [searchtxt, setSearchTxt] = useState("Pokemon");
  useEffect(() => {
  getMovies(searchtxt);

  },[]);

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
        <input type="search" placeholder="Search For Movies" value={searchtxt} onChange={(e) => {
          console.log(e);
          setSearchTxt(e.target.value) }} />&ensp;
        {/* <button onClick={() => { getMovies(searchtxt) }}>Search</button> */}
        <img src={searchIcon} alt={searchIcon} onClick={() => { getMovies(searchtxt) }} />
      </div>

      <div className="container">

        {movies.map((el) => {
          return (
            < Card element={el}/>
          );
        })




        }

      </div>
    </div>
  );
}

export default App;
