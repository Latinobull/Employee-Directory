import React from 'react';

function Search(props) {
  return (
    <form className="uk-search uk-align-center">
      <div className="uk-text-center uk-padding-small">
        <span>Search for a specific Employee</span>
      </div>
      <input
        className="uk-search-input uk-text-center"
        type="text"
        placeholder="search"
        onChange={props.onChange}
        value={props.value}
      />
    </form>
  );
}

export default Search;
