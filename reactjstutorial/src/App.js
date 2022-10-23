import React, { useState, useEffect } from 'react';

import './App.css';

import SearchIcon from './search.svg';

import MovieCard from './MovieCard';

const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";

const movie1 = {
  "imdbID": "tt0096895",
  "Title": "Batman",
  "Year": "1989",
  "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_.jpg"
}


export default function App() {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    searchMovies("Batman");

  }, []);

  const searchMovies = async (title) => {
    fetch(`${API_URL}&s=${title}`).then((response) => response.json())
      .then((data) => {
       console.log(data.Search);
        setMovies(data.Search);
      })
      .catch((err) => {
        console.log(err.message);
      })
  };

  return (
    <div className='app'>
      <h1>Movieland</h1>
      <div className='search'>
        <input placeholder='Search for movies' value={searchTerm} onChange={(e) => { setSearchTerm(e.target.value)}}></input>
        <img src={SearchIcon} onClick={() => { searchMovies(searchTerm)}}></img>
      </div>

      <div className='container'>
        {movies.length === 0 ?
          (<h3>Cargando...</h3>) :
          (movies.map(el =>
            <MovieCard movie={el} key={el.imdbID}></MovieCard>))
        }
      </div>

    </div>
  )
};

