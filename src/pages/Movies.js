import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { fetchSearchQuery } from 'api';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { MovieList } from 'components/MovieList/MovieList';

export default function Movies() {
  const [searchParams] = useSearchParams({ query: '' });
  const query = searchParams.get('query');
  const [movies, setMovies] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    if (query) {
      setError(null);

      fetchSearchQuery(query)
        .then(data => {
          setMovies(data);
         
        })
        .catch(error => {
          setError(error.message);
        });
    }
  }, [query]);

  return (
    <>
      <SearchBar />;
      movies.length?(<MovieList movies={movies}/>): (
      <p>There isn't any movie on this page.</p>);
    </>
  );
}