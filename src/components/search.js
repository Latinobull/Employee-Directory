import React from 'react';

function Search(props) {
  return (
    <div className="uk-search-input uk-text-center">
      <div>
        <span>Search for a specific Employee</span>
      </div>
      <input
        className="uk-search-input uk-text-center"
        type="search"
        placeholder="name"
        aria-label="Search"
        onChange={props.onChange}
        value={props.value}
      />
    </div>
  );
}

export default Search;
