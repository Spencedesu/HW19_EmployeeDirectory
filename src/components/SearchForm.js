import React from "react";

function SearchForm(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input
          onChange={props.props.handleInputChange}          
          name="search"
          type="text"
          className="form-control"
          placeholder="Search employees"
          id="search"
        />
        <br />
        <button className="btn btn-primary">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
