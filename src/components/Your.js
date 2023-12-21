import React, { useState, useEffect } from 'react';

const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";

const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';

const Your = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    getMovies(API_URL);
  }, []); // Empty dependency array ensures useEffect runs only once (on mount)

  const getMovies = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();

    if (searchTerm && searchTerm !== "") {
      getMovies(SEARCH_API + searchTerm);
      setSearchTerm('');
    } else {
      window.location.reload();
    }
  };

  const getClassByRate = (vote) => {
    if (vote >= 8) {
      return "green";
    } else if (vote >= 5) {
      return "orange";
    } else {
      return "red";
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search movies..."
        />
        <button type="submit">Search</button>
      </form>

      <div id="main">
        {movies.map((movie) => {
          const { title, poster_path, vote_average, overview } = movie;
          return (
            <div key={title} className="movie">
              <img src={`${IMG_PATH}${poster_path}`} alt={title} />
              <div className="movie-info">
                <h3>{title}</h3>
                <span className={getClassByRate(vote_average)}>{vote_average}</span>
              </div>
              <div className="overview">
                <h3>Overview</h3>
                {overview}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Your;