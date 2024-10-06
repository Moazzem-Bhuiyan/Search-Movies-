import React from 'react';

const SearchBar = ({ query, setQuery }) => {
  return (
    <div className="search-bar">
      <input 
        type="text"
        className='border-2 rounded-md mt-5'
        placeholder="Search movies..." 
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
