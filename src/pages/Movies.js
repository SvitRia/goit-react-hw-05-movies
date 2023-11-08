import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchQuery } from 'api';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { MovieList } from 'components/MovieList/MovieList';
import { Loader } from "components/Loader";

export default function MoviesSearch() {
  const [searchParams] = useSearchParams({ query: '' });
  const query = searchParams.get('query');
  const [movies, setMovies] = useState();
   const [loading, setLoading] = useState(false);
  // const [error, setError] = useState()

  useEffect(() => {
    setLoading(true)
    fetchSearchQuery(query).then(result => { setMovies(result) })
      .catch(error => {
        alert(error.message)
      })
   .finally(() => setLoading(false));
  }, [query]);

  return (
    <div>
      <SearchBar />
      {loading && <Loader />}
      {movies.length ? (<MovieList movies={movies} />) : (
        <p>There isn't any movie on this page.</p>)}
    </div>
  );
}