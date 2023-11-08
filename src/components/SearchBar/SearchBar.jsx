import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchForm } from './SearchBar.styled';

export const SearchBar =() => {
  const [searchParams, setSearchParams] = useSearchParams({ query: '' });
  const query = searchParams.get('query');
  const [searchQuery, setSearchQuery] = useState(query);

  function handleSubmit(e) {
    e.preventDefault();
    setSearchParams({ query: searchQuery.trim() });
  }

  return (
    <SearchForm onSubmit={handleSubmit}>
      <input
        name="searchQuery"
        value={searchQuery}
        onChange={({ target: { value } }) => setSearchQuery(value)}
      />
      <button type="submit">Search</button>
    </SearchForm>
  );
}
