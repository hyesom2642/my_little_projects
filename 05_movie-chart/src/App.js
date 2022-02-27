import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true); // loading state
  const [movies, setMovies] = useState([]); // API movie array
  useEffect( () => {
    fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=8&sort_by=year')
    .then((response) => response.json())
    .then((json) => {
      setMovies(json.data.movies);
      setLoading(false);
    });
  });

  return (
    <div className="main-wrap">
      {
        loading === true ? <h1>Loading...</h1> : null
      }
      <div>
        {
          movies.map( (movie) => 
            <div key={movie.id}>
              <img src={movie.medium_cover_image} /> 
              <h2>{movie.title}</h2>
              <span>{movie.rating}</span>
              <ul>
                {
                  movie.genres.map( (g) => <ul key={g}>{g}</ul> )
                }
              </ul>
              <p>{movie.summary}</p>
            </div> )
        }
      </div>
    </div>
  );
}

export default App;
