import React from 'react';

function Search(props) {
  return (
    <form className="uk-search uk-search-default">
      {/* <div>
        <span>Search for a specific Employee</span>
      </div> */}
      <input
        className="uk-search-input"
        type="search"
        placeholder="search"
        onChange={props.onChange}
        value={props.value}
      />
    </form>
  );
}

export default Search;
