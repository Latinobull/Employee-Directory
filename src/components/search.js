import React from 'react';

function Search(props) {
  return (
    <div className="container">
      <div className="searchbox">
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">
              Search for a specific Employee
            </span>
          </div>
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="name"
            aria-label="Search"
            onChange={props.onChange}
            value={props.value}
          />
        </div>
      </div>
    </div>
  );
}

export default Search;
