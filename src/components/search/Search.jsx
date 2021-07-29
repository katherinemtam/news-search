import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ search, onChange, onSubmit }) => (
  <form onSubmit={onSubmit}>
    <label htmlFor="search">Search:</label>
    <input 
      id="search"
      type="search"
      name="search"
      value={search}
      onChange={onChange}
    />
    <button>Submit</button>
  </form>
);

Search.propTypes = {
  search: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default Search;
