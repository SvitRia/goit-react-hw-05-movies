import { fetchTrending } from "api"
import { useState, useEffect } from "react"
import { MovieList } from "components/MovieList/MovieList";

export default function HomePage() {
 const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

useEffect(() => {
    fetchTrending().then(result => {
        setLoading(true)
        setMovies(result);
      })
      .catch(error => {
        setError('Ooops! Something went wrong...');
      });
}, []);
    
    return movies.length ?( 
      <MovieList movies={movies}/>): (
      <p>There isn't any movie on this page.</p>
    );
   
}