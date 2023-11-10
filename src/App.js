import React from "react";
import "./App.css";
import SearchBox from "./SearchBox";
import Favourites from "./Favourites";
import { useState, useEffect } from "react";

const App = () => {
  /*http://www.omdbapi.com/?i=tt3896198&apikey=afafbc0e */

  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const movieList = movies.map((movie) => {
    return (
      <div className="movies">
        <img height="200px" width="200px" src={movie.Poster} alt="img" />
        <h1>{movie.Title}</h1>
        <h2>{movie.Year}</h2>
        <Favourites />
      </div>
    );
  });
  const getMovies = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=afafbc0e`;
    const res = await fetch(url);
    const resJson = await res.json();
    if (resJson.Search) {
      setMovies(resJson.Search);
    }
  };

  useEffect(() => {
    getMovies(searchValue);
  }, [searchValue]);

  return (
    <div className="App">
      <h1>Kiram movie app</h1>
      <h1>welcome to the movie life</h1>
      <p>
        u can watch all the movies using our movi app,go to google play store or
        ios store to watch and download
      </p>
      <SearchBox searchValue={searchValue} setSearch={setSearchValue} />
      {movieList}
    </div>
  );
};

export default App;
