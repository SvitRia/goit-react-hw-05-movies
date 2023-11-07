import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const SearchBar =() => {
  const [searchParams, setSearchParams] = useSearchParams({ query: '' });
  const query = searchParams.get('query');
  const [searchQuery, setSearchQuery] = useState(query);

  function handleSubmit(e) {
    e.preventDefault();
    setSearchParams({ query: searchQuery.trim() });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="searchField"
        value={searchQuery}
        onChange={({ target: { value } }) => setSearchQuery(value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}
