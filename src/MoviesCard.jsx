import { useState, useEffect } from "react";
import Search from "./Search";

const MoviesCard = () => {

  const [movies, setMovies] = useState([]);
  const [searchMovies, setSearchMovies] = useState('')

  const MoviesApi = async () => {
 
    const url = 'https://api.themoviedb.org/3/discover/movie?api_key=ef6c97b1e970d7e7cc8bfa3d35c69f26'
  
		const res = await fetch(url);
		const data = await res.json();
    setMovies(data.results);
  }
   
  useEffect(() => {
    MoviesApi()
   }, [])

  return (
    <div>
      <div className= "movie-container">
        <div className="header">
          <h1>Movies App</h1>
          <Search movies = {movies} 
          setMovies = {setMovies} 
          searchMovies={searchMovies} 
          setSearchMovies = {setSearchMovies} />      
        </div>

        <div className="movie-cards">
            {movies.map((movie) => (
              <div  key={movie.id} className="movie-card">
                <img className="movie-img" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}alt="title" />
                <h1 className="movie-title">{movie.title}</h1>
                <div className="movie-overview">
                  <h2>overview:</h2>
                  <p>{movie.overview}</p>
                </div>               
              </div>      
            ))}
        </div>
      </div>  
    </div>
    
  )
}

export default MoviesCard